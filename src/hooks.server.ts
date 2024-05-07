import {
  PUBLIC_SUPABASE_URL,
  PUBLIC_SUPABASE_ANON_KEY,
} from "$env/static/public";
import { createServerClient } from "@supabase/ssr";
import { redirect } from "@sveltejs/kit";
import type { Handle } from "@sveltejs/kit";

export const handle: Handle = async ({ event, resolve }) => {
  event.locals.supabase = createServerClient(
    PUBLIC_SUPABASE_URL,
    PUBLIC_SUPABASE_ANON_KEY,
    {
      cookies: {
        get: (key) => event.cookies.get(key),

        set: (key, value, options) => {
          event.cookies.set(key, value, { ...options, path: "/" });
        },
        remove: (key, options) => {
          event.cookies.delete(key, { ...options, path: "/" });
        },
      },
    }
  );

  const {
    data: { user },
  } = await event.locals.supabase.auth.getUser();

  if (event.url.pathname.startsWith("/auth") && user) {
    throw redirect(307, "/");
  }

  return resolve(event, {
    filterSerializedResponseHeaders(name) {
      return name === "content-range";
    },
  });
};
