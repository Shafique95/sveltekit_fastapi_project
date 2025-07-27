<script lang="ts">
	import Button from '../ui/Button.svelte';
	import Input from '../ui/Input.svelte';
	import Card from '../ui/Card.svelte';

	export let onSignup: (data: { firstName: string; lastName: string; email: string; password: string }) => Promise<void>;
	export let loading = false;
	export let error = '';

	let firstName = '';
	let lastName = '';
	let email = '';
	let password = '';
	let confirmPassword = '';

	async function handleSubmit() {
		if (password !== confirmPassword) {
			error = 'Passwords do not match';
			return;
		}
		await onSignup({ firstName, lastName, email, password });
	}
</script>

<Card>
	<h3 class="text-2xl font-bold text-gray-900 mb-6 text-center">
		Create New Account
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
		<div class="grid grid-cols-2 gap-4">
			<div>
				<label for="firstName" class="block text-sm font-medium text-gray-700 mb-1">
					First Name
				</label>
				<Input
					type="text"
					id="firstName"
					bind:value={firstName}
					required
					placeholder="First name"
				/>
			</div>
			<div>
				<label for="lastName" class="block text-sm font-medium text-gray-700 mb-1">
					Last Name
				</label>
				<Input
					type="text"
					id="lastName"
					bind:value={lastName}
					required
					placeholder="Last name"
				/>
			</div>
		</div>

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

		<div>
			<label for="confirmPassword" class="block text-sm font-medium text-gray-700 mb-1">
				Confirm Password
			</label>
			<Input
				type="password"
				id="confirmPassword"
				bind:value={confirmPassword}
				required
				placeholder="Confirm your password"
			/>
		</div>

		<Button type="submit" loading={loading} className="w-full">
			{loading ? 'Processing...' : 'Create Account'}
		</Button>
	</form>

	<p class="text-xs text-gray-500 mt-4 text-center">
		By creating an account, you agree to our Terms of Service and Privacy Policy.
	</p>
</Card> 