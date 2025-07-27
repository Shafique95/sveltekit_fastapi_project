<script lang="ts">
	import LoginForm from '../../components/auth/LoginForm.svelte';
	import SignupForm from '../../components/auth/SignupForm.svelte';
	import Button from '../../components/ui/Button.svelte';

	let isLogin = true;
	let loading = false;
	let error = '';

	function toggleMode() {
		isLogin = !isLogin;
		error = '';
	}

	async function handleLogin(email: string, password: string) {
		loading = true;
		error = '';

		try {
			console.log('Logging in with:', { email, password });
			// TODO: Implement actual login logic
			await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
			
			// Redirect to dashboard after successful login
			window.location.href = '/dashboard';
		} catch (err) {
			error = 'An error occurred. Please try again.';
		} finally {
			loading = false;
		}
	}

	async function handleSignup(data: { firstName: string; lastName: string; email: string; password: string }) {
		loading = true;
		error = '';

		try {
			console.log('Signing up with:', data);
			// TODO: Implement actual signup logic
			await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
			
			// Redirect to dashboard after successful signup
			window.location.href = '/dashboard';
		} catch (err) {
			error = 'An error occurred. Please try again.';
		} finally {
			loading = false;
		}
	}
</script>

<svelte:head>
	<title>IlamicBook - Connect with Books and Readers</title>
	<meta name="description" content="Connect with books and readers on IlamicBook. Join our community today!" />
</svelte:head>

<main class="min-h-screen bg-gray-50">
	<!-- Header -->
	<header class="bg-white shadow-sm border-b">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<div class="flex justify-between items-center h-16">
				<div class="flex items-center">
					<h1 class="text-2xl font-bold text-blue-600">IlamicBook</h1>
				</div>
				<div class="flex items-center space-x-4">
					<button class="text-gray-600 hover:text-gray-900">About</button>
					<button class="text-gray-600 hover:text-gray-900">Help</button>
				</div>
			</div>
		</div>
	</header>

	<!-- Main Content -->
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
			<!-- Left Side - Welcome Message -->
			<div class="text-center lg:text-left">
				<h2 class="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
					Connect with
					<span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
						Books
					</span>
					and
					<span class="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">
						Readers
					</span>
				</h2>
				<p class="text-xl text-gray-600 mb-8">
					IlamicBook helps you discover amazing books, connect with fellow readers, and build your personal digital library.
				</p>
				
				<!-- Features -->
				<div class="space-y-4">
					<div class="flex items-center justify-center lg:justify-start">
						<div class="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
							<svg class="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
								<path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
							</svg>
						</div>
						<span class="text-gray-700">Discover thousands of books</span>
					</div>
					<div class="flex items-center justify-center lg:justify-start">
						<div class="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
							<svg class="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
								<path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
							</svg>
						</div>
						<span class="text-gray-700">Connect with fellow readers</span>
					</div>
					<div class="flex items-center justify-center lg:justify-start">
						<div class="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-3">
							<svg class="w-5 h-5 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
								<path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
							</svg>
						</div>
						<span class="text-gray-700">Build your personal library</span>
					</div>
				</div>
			</div>

			<!-- Right Side - Auth Form -->
			<div class="max-w-md mx-auto w-full">
				{#if isLogin}
					<LoginForm onLogin={handleLogin} {loading} {error} />
				{:else}
					<SignupForm onSignup={handleSignup} {loading} {error} />
				{/if}

				<hr class="my-6" />

				<div class="text-center">
					<Button
						variant="secondary"
						on:click={toggleMode}
					>
						{isLogin ? 'Create New Account' : 'Already have an account?'}
					</Button>
				</div>
			</div>
		</div>
	</div>

	<!-- Footer -->
	<footer class="bg-white border-t mt-16">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
			<div class="text-center text-gray-500 text-sm">
				<p>&copy; 2024 IlamicBook. All rights reserved.</p>
			</div>
		</div>
	</footer>
</main>

<style>
	/* Global styles */
	:global(body) {
		margin: 0;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
	}
</style> 