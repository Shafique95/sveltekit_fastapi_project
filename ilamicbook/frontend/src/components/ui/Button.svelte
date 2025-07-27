<script lang="ts">
	export let variant: 'primary' | 'secondary' | 'danger' = 'primary';
	export let size: 'sm' | 'md' | 'lg' = 'md';
	export let disabled = false;
	export let loading = false;
	export let type: 'button' | 'submit' = 'button';
	export let className = '';

	const baseClasses = 'font-semibold rounded-md transition-colors duration-200 flex items-center justify-center';
	
	const variants = {
		primary: 'bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white',
		secondary: 'border border-blue-600 text-blue-600 hover:bg-blue-50',
		danger: 'bg-red-600 hover:bg-red-700 disabled:bg-red-400 text-white'
	};
	
	const sizes = {
		sm: 'px-3 py-1.5 text-sm',
		md: 'px-4 py-2',
		lg: 'px-6 py-3 text-lg'
	};
</script>

<button
	{type}
	{disabled}
	class="{baseClasses} {variants[variant]} {sizes[size]} {className}"
	on:click
>
	{#if loading}
		<svg class="animate-spin -ml-1 mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
			<circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
			<path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
		</svg>
	{/if}
	<slot />
</button> 