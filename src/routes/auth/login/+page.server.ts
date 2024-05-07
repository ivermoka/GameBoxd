import type { Actions } from "./$types";
import { fail, redirect } from "@sveltejs/kit";

export const actions = {
  default: async (event) => {
    const {
      request,
      locals: { supabase },
    } = event;
    const formData = await request.formData();
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    if (!email || !password) {
      return fail(400, {
        error: "Email, password, and confirm password are required",
      });
    }

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      return fail(400, { error: error.message });
    } else {
      throw redirect(303, "/");
    }
  },
} satisfies Actions;
