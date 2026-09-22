import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

function response(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });
}

Deno.serve(async (request) => {
  if (request.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });
  if (request.method !== "POST") return response({ error: "Method not allowed" }, 405);

  const supabaseUrl = Deno.env.get("SUPABASE_URL");
  const serviceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
  const authorization = request.headers.get("Authorization");
  if (!supabaseUrl || !serviceRoleKey || !authorization) {
    return response({ error: "Function is not configured" }, 500);
  }

  const admin = createClient(supabaseUrl, serviceRoleKey);
  const token = authorization.replace(/^Bearer\s+/i, "");
  const { data: { user }, error: userError } = await admin.auth.getUser(token);
  if (userError || !user) return response({ error: "Unauthorized" }, 401);

  const { data: caller, error: callerError } = await admin
    .from("profiles").select("role").eq("id", user.id).single();

  const body = await request.json().catch(() => ({}));
  const action = body.action;
  if (action !== "reset-user" && action !== "change-self") {
    return response({ error: "Unknown account action" }, 400);
  }
  const targetUserId = typeof body.targetUserId === "string" ? body.targetUserId : "";
  const temporaryPassword = typeof body.temporaryPassword === "string" ? body.temporaryPassword : "";
  if (!targetUserId || temporaryPassword.length < 8) {
    if (action !== "change-self" || temporaryPassword.length < 8) {
      return response({ error: "A password of at least 8 characters is required" }, 400);
    }
  }
  if (callerError || (action !== "change-self" && caller?.role !== "superuser")) {
    return response({ error: "Superuser access required" }, 403);
  }
  if (action === "change-self") {
    if (targetUserId && targetUserId !== user.id) return response({ error: "Invalid target user" }, 403);
    const { error: selfError } = await admin.auth.admin.updateUserById(user.id, {
      password: temporaryPassword,
    });
    if (selfError) return response({ error: selfError.message }, 400);
    const { error: profileError } = await admin.from("profiles")
      .update({ password_changed_at: new Date().toISOString() }).eq("id", user.id);
    if (profileError) return response({ error: profileError.message }, 500);
    return response({ ok: true });
  }

  const { error: updateError } = await admin.auth.admin.updateUserById(targetUserId, {
    password: temporaryPassword,
  });
  if (updateError) return response({ error: updateError.message }, 400);

  const { error: profileError } = await admin.from("profiles").update({
    password_changed_at: new Date().toISOString(),
    status: "approved",
    approved_at: new Date().toISOString(),
    approved_by: user.id,
  }).eq("id", targetUserId);
  if (profileError) return response({ error: profileError.message }, 500);
  return response({ ok: true });
});
