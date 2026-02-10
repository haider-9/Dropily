<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import Sidebar from '$lib/components/sidebar.svelte';
	import * as SidebarUI from '$lib/components/ui/sidebar';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>
<SidebarUI.SidebarProvider>
	<Sidebar />
	<SidebarUI.SidebarInset>
		<header class="flex items-center gap-2 p-3">
			<SidebarUI.SidebarTrigger />
		</header>
		<main class="flex-1 px-4 pb-6">
			{@render children()}
		</main>
	</SidebarUI.SidebarInset>
</SidebarUI.SidebarProvider>
