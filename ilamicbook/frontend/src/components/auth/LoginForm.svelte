<script lang="ts">
	import Button from '../ui/Button.svelte';
	import Input from '../ui/Input.svelte';
	import Card from '../ui/Card.svelte';

	export let onLogin: (email: string, password: string) => Promise<void>;
	export let loading = false;
	export let error = '';

	let email = '';
	let password = '';

	async function handleSubmit() {
		await onLogin(email, password);
	}
</script>

<Card>
	<h3 class="text-2xl font-bold text-gray-900 mb-6 text-center">
		Log In to IlamicBook
	</h3>

	{#if error}
		<div class="bg-red-50 border border-red-200 rounded-md p-4 mb-6">
			<div class="flex">
				<svg class="w-5 h-5 text-red-400" fill="currentColor" viewBox="0 0 20 20">
					<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"></path>
				</svg>
				<p class="ml-3 text-sm text-red-600">{error}</p>
			</div>
		</div>
	{/if}

	<form on:submit|preventDefault={handleSubmit} class="space-y-4">
		<div>
			<label for="email" class="block text-sm font-medium text-gray-700 mb-1">
				Email Address
			</label>
			<Input
				type="email"
				id="email"
				bind:value={email}
				required
				placeholder="Enter your email"
			/>
		</div>

		<div>
			<label for="password" class="block text-sm font-medium text-gray-700 mb-1">
				Password
			</label>
			<Input
				type="password"
				id="password"
				bind:value={password}
				required
				placeholder="Enter your password"
			/>
		</div>

		<Button type="submit" loading={loading} className="w-full">
			{loading ? 'Processing...' : 'Log In'}
		</Button>
	</form>

	<div class="mt-4 text-center">
		<a href="#" class="text-blue-600 hover:text-blue-800 text-sm">
			Forgot your password?
		</a>
	</div>
</Card> 