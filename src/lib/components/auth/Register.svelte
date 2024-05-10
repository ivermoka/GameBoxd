<script lang="ts">
	export let error: string | undefined;
</script>

<div class="flex min-h-[100dvh] w-full items-center justify-center px-4 py-12 bg-gray-100  dark:bg-gray-950">
    {#if error}
		<p class="text-center text-sm text-red-500">{error}</p>
	{/if}
    <div class="w-full max-w-md space-y-8">
      <div>
        <h2 class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-50">
          Create an Account
        </h2>
        <p class="mt-2 text-center text-sm text-gray-600 dark:text-gray-400">Sign up to get started</p>
      </div>
      <form class="space-y-6" action="#" method="POST">
        <div>
          <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Email address
          </label>
          <div class="mt-1">
            <input
              id="email"
              autocomplete="email"
              required={true}
              class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-50 dark:placeholder-gray-400 dark:focus:border-indigo-500"
              type="email"
              name="email"
            />
          </div>
        </div>
        <div>
          <label for="password" class="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Password
          </label>
          <div class="mt-1">
            <input
              id="password"
              autocomplete="new-password"
              required={true}
              class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-50 dark:placeholder-gray-400 dark:focus:border-indigo-500"
              type="password"
              name="password"
            />
          </div>
        </div>
        <div>
          <label for="confirmPassword" class="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Confirm Password
          </label>
          <div class="mt-1">
            <input
              id="confirmPassword"
              autocomplete="new-password"
              required={true}
              class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-50 dark:placeholder-gray-400 dark:focus:border-indigo-500"
              type="password"
              name="confirmPassword"
            />
          </div>
        </div>
        <div class="flex items-center">
          <input
            id="agree-terms"
            class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-800 dark:ring-offset-gray-950 dark:focus:ring-indigo-600"
            type="checkbox"
            required={true}
            name="agree-terms"
          />
          <label for="agree-terms" class="ml-2 block text-sm text-gray-900 dark:text-gray-300">
            I agree to the <a href="#" class="text-indigo-600 hover:text-indigo-500">Terms of Service</a>
          </label>
        </div>
        <div>
          <button
            type="submit"
            class="flex w-full justify-center py-2 px-4 text-sm font-medium rounded-md border border-transparent bg-indigo-600  text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:bg-indigo-500 dark:hover:bg-indigo-600 dark:focus:ring-indigo-600 dark:focus:ring-offset-gray-950"
          >
            Sign up
          </button>
        </div>
      </form>
      <div class="text-center text-sm text-gray-600 dark:text-gray-400">
        Already have an account?{" "}
        <a
          href="#"
          class="font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
        >
          Sign in
        </a>
      </div>
    </div>
  </div>
