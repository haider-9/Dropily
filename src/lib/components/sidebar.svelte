<script lang="ts">
	import {
		House,
		Computer,
		Cable,
		Volleyball,
		Mail,
		Settings,
		type Icon as IconType,
		ChevronRight,
		PanelRightOpen
	} from '@lucide/svelte';
	import * as Avatar from './ui/avatar';
	type menuitemas = {
		name: string;
		icon: typeof IconType;
		href: string;
	};

	const menuitems: menuitemas[] = [
		{
			name: 'Home',
			icon: House,
			href: '/'
		},
		{
			name: 'Projects',
			icon: Computer,
			href: '/projects'
		},
		{
			name: 'Network',
			icon: Cable,
			href: '/network'
		},
		{
			name: 'Sports',
			icon: Volleyball,
			href: '/sports'
		},
		{
			name: 'Messages',
			icon: Mail,
			href: '/messages'
		},
		{
			name: 'Settings',
			icon: Settings,
			href: '/settings'
		}
	];
	const handleSidebarToggle = () => {
		const sidebar = document.querySelector('.sidebar') as HTMLElement;
		const hider = document.querySelectorAll('.hider') as NodeListOf<HTMLElement>;
		const toggle = document.querySelector('.toggle') as HTMLElement;
		const icons = document.querySelectorAll('.icon') as NodeListOf<HTMLElement>;
		if (sidebar) {
			sidebar.classList.toggle('closed');
		}
		if (hider) {
			hider.forEach((el) => el.classList.toggle('hidden'));
		}
		if (icons) {
			icons.forEach((el) => el.classList.toggle('size-5'));
			icons.forEach((el) => el.classList.toggle('gap-5'));
		}
		if (toggle) {
			toggle.classList.toggle('left-0');
			toggle.classList.toggle('rotate-180');
		}
	};

	let enabled = true;

	function handleToggle() {
		document.documentElement.classList.toggle('dark');
	}
</script>

<div
	class="sidebar flex h-screen max-w-[15rem] relative flex-col justify-between rounded-2xl border-1 border-sidebar-border bg-sidebar-accent px-3 py-4"
>
	<div class="mb-10 flex flex-col gap-10">
		<div class="flex items-center justify-center gap-2">
			<div class="flex size-7 items-center justify-center overflow-hidden rounded-full border">
				<img src="/logi.png" alt="logo" class="object-contain" />
			</div>
			<h1 class="hider font-semibold">Dropily</h1>
		</div>
		<div class="mt-3">
			<ul>
				{#each menuitems as item}
					<li
						class="flex cursor-pointer items-center justify-between gap-3 rounded-lg p-2 text-sm transition-colors duration-200 hover:bg-primary/50 hover:text-[#f5f5f5]"
					>
						<div class="flex gap-2">
							<item.icon class="icon" size={18} />
							<span class="hider">{item.name}</span>
						</div>
						<span class="hider">
							<ChevronRight size="14" />
						</span>
					</li>
				{/each}
			</ul>
		</div>
	</div>
	<div>
		<div class="flex items-center gap-2">
			<Avatar.Root>
				<Avatar.Image
					src="https://static.wikitide.net/deathbattlewiki/9/95/Portrait.kazumasato.png"
					class="object-cover"
					alt="avatar"
				/>
				<Avatar.Fallback>KS</Avatar.Fallback>
			</Avatar.Root>
			<div class="hider">
				<h2 class="font-semibold text-sidebar-foreground">Kazuma Satou</h2>
				<p class="text-sm text-muted-foreground">Konosuba Main Character</p>
			</div>
		</div>
		<div class="flex hider items-center gap-2">
			<label class="switch ">
				<input type="checkbox" bind:checked={enabled} onchange={handleToggle} />
				<span class="slider"></span>
			</label>
            <h2>{enabled ? 'Dark' : 'Light'}</h2>

		</div>
	</div>
	<PanelRightOpen
		size={24}
		class="toggle absolute left-58 cursor-pointer hover:text-primary"
		onclick={handleSidebarToggle}
	/>
</div>
