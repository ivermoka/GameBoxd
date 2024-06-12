import type { Actions } from "./$types";
import { fail } from "@sveltejs/kit";

export const actions = {
  default: async (event) => {
    const {
      request,
      locals: { supabase },
    } = event;

    const { data, error } = await supabase
      .from("games")
      .select()
      .order("RANDOM()")
      .limit(1);

    if (error) {
      return fail(400, { error: error.message });
    } else {
      return {
        status: 200,
        body: { game: data[0] },
      };
    }
  },
} satisfies Actions;
