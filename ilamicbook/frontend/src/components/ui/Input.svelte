<script lang="ts">
	export let type: 'text' | 'email' | 'password' = 'text';
	export let id = '';
	export let placeholder = '';
	export let value = '';
	export let required = false;
	export let disabled = false;
	export let error = false;
	export let className = '';

	const baseClasses = 'w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent';
	const errorClasses = error ? 'border-red-300 focus:ring-red-500' : 'border-gray-300';
	const disabledClasses = disabled ? 'bg-gray-100 cursor-not-allowed' : '';
</script>

<input
	{type}
	{id}
	{placeholder}
	{value}
	{required}
	{disabled}
	class="{baseClasses} {errorClasses} {disabledClasses} {className}"
	on:input
	on:change
	on:blur
	on:focus
/> 