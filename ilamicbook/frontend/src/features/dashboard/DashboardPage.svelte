<script lang="ts">
	import { onMount } from 'svelte';
	import Button from '../../components/ui/Button.svelte';
	import Card from '../../components/ui/Card.svelte';

	let books: any[] = [];
	let loading = true;
	let user = {
		name: 'John Doe',
		email: 'john@example.com',
		avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
	};

	let activeTab = 'feed';

	onMount(async () => {
		try {
			const response = await fetch('http://localhost:8000/api/books');
			if (response.ok) {
				books = await response.json();
			}
		} catch (err) {
			console.error('Failed to fetch books:', err);
		} finally {
			loading = false;
		}
	});

	function handleLogout() {
		console.log('Logging out...');
		window.location.href = '/';
	}
</script>

<svelte:head>
	<title>IlamicBook - Dashboard</title>
	<meta name="description" content="Your personal IlamicBook dashboard" />
</svelte:head>

<div class="min-h-screen bg-gray-50">
	<!-- Header -->
	<header class="bg-white shadow-sm border-b sticky top-0 z-50">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<div class="flex justify-between items-center h-16">
				<div class="flex items-center">
					<h1 class="text-2xl font-bold text-blue-600">IlamicBook</h1>
				</div>
				<div class="flex items-center space-x-4">
					<button class="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded-full">
						<img src={user.avatar} alt={user.name} class="w-8 h-8 rounded-full" />
						<span class="text-sm font-medium text-gray-700">{user.name}</span>
					</button>
					<Button variant="danger" size="sm" on:click={handleLogout}>
						Logout
					</Button>
				</div>
			</div>
		</div>
	</header>

	<!-- Main Content -->
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
		<div class="grid grid-cols-1 lg:grid-cols-4 gap-6">
			<!-- Left Sidebar -->
			<div class="lg:col-span-1">
				<Card className="sticky top-24">
					<nav class="space-y-2">
						<button 
							class="w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-100 {activeTab === 'feed' ? 'bg-blue-50 text-blue-600' : 'text-gray-700'}"
							on:click={() => activeTab = 'feed'}
						>
							<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
							</svg>
							<span>Home</span>
						</button>
						
						<button 
							class="w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-100 {activeTab === 'library' ? 'bg-blue-50 text-blue-600' : 'text-gray-700'}"
							on:click={() => activeTab = 'library'}
						>
							<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
							</svg>
							<span>My Library</span>
						</button>
					</nav>
				</Card>
			</div>

			<!-- Main Feed -->
			<div class="lg:col-span-2">
				{#if activeTab === 'feed'}
					<div class="space-y-6">
						<!-- Create Post -->
						<Card>
							<div class="flex space-x-4">
								<img src={user.avatar} alt={user.name} class="w-10 h-10 rounded-full" />
								<div class="flex-1">
									<textarea 
										placeholder="What are you reading today?"
										class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
										rows="3"
									></textarea>
									<div class="flex justify-end mt-3">
										<Button>Post</Button>
									</div>
								</div>
							</div>
						</Card>

						<!-- Feed Posts -->
						{#if loading}
							<Card>
								<div class="animate-pulse">
									<div class="flex space-x-4">
										<div class="w-10 h-10 bg-gray-300 rounded-full"></div>
										<div class="flex-1">
											<div class="h-4 bg-gray-300 rounded w-1/4 mb-2"></div>
											<div class="h-4 bg-gray-300 rounded w-3/4"></div>
										</div>
									</div>
								</div>
							</Card>
						{:else}
							{#each books as book}
								<Card>
									<div class="flex space-x-4">
										<div class="w-10 h-10 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full flex items-center justify-center">
											<svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
												<path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
											</svg>
										</div>
										<div class="flex-1">
											<div class="flex items-center space-x-2 mb-2">
												<span class="font-medium text-gray-900">Book Recommendation</span>
												<span class="text-gray-500">•</span>
												<span class="text-gray-500 text-sm">2 hours ago</span>
											</div>
											<div class="bg-gray-50 rounded-lg p-4 mb-3">
												<h3 class="font-semibold text-gray-900 mb-1">{book.title}</h3>
												<p class="text-gray-600 text-sm mb-2">by {book.author}</p>
												<p class="text-gray-700">{book.description}</p>
											</div>
											<div class="flex items-center space-x-4 text-sm text-gray-500">
												<button class="flex items-center space-x-1 hover:text-blue-600">
													<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
														<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
													</svg>
													<span>Like</span>
												</button>
												<button class="flex items-center space-x-1 hover:text-blue-600">
													<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
														<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
													</svg>
													<span>Comment</span>
												</button>
											</div>
										</div>
									</div>
								</Card>
							{/each}
						{/if}
					</div>
				{:else if activeTab === 'library'}
					<Card>
						<h2 class="text-2xl font-bold text-gray-900 mb-6">My Library</h2>
						<p class="text-gray-600">Your personal book collection will appear here.</p>
					</Card>
				{/if}
			</div>

			<!-- Right Sidebar -->
			<div class="lg:col-span-1">
				<div class="space-y-6">
					<!-- Trending Books -->
					<Card>
						<h3 class="text-lg font-semibold text-gray-900 mb-4">Trending Books</h3>
						<div class="space-y-3">
							{#each books.slice(0, 3) as book}
								<div class="flex items-center space-x-3">
									<div class="w-12 h-16 bg-gradient-to-br from-blue-400 to-indigo-500 rounded flex items-center justify-center">
										<svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
											<path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
										</svg>
									</div>
									<div class="flex-1">
										<h4 class="font-medium text-gray-900 text-sm">{book.title}</h4>
										<p class="text-gray-500 text-xs">{book.author}</p>
									</div>
								</div>
							{/each}
						</div>
					</Card>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	/* Global styles */
	:global(body) {
		margin: 0;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
	}
</style> 