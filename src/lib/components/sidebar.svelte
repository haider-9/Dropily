<script lang="ts">
	import {
		House,
		Computer,
		Cable,
		Volleyball,
		Mail,
		Settings,
		type Icon as IconType,
		ChevronRight
	} from '@lucide/svelte';
	import * as Avatar from './ui/avatar';
	import * as DropdownMenu from './ui/dropdown-menu';
	import * as Sidebar from './ui/sidebar';

	type MenuItem = {
		name: string;
		icon: typeof IconType;
		href: string;
	};

	const menuitems: MenuItem[] = [
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

	let enabled = true;

	function handleToggle() {
		document.documentElement.classList.toggle('dark');
	}
</script>

<Sidebar.Root class="bg-sidebar-accent border-1 border-sidebar-border" variant="inset">
	<Sidebar.Header class="gap-4">
		<div class="flex items-center gap-2 px-1">
			<div class="flex size-7 items-center justify-center overflow-hidden rounded-full border">
				<img src="/logi.png" alt="logo" class="object-contain" />
			</div>
			<h1 class="text-sm font-semibold">Dropily</h1>
		</div>
	</Sidebar.Header>
	<Sidebar.Content>
		<Sidebar.Menu>
			{#each menuitems as item}
				<Sidebar.MenuItem>
					<Sidebar.MenuButton tooltipContent={item.name}>
						{#snippet child({ props })}
							<a {...props} href={item.href}>
								<item.icon />
								<span class="flex-1">{item.name}</span>
								<ChevronRight class="opacity-60" />
							</a>
						{/snippet}
					</Sidebar.MenuButton>
				</Sidebar.MenuItem>
			{/each}
		</Sidebar.Menu>
	</Sidebar.Content>
	<Sidebar.Footer>
		<div class="flex items-center gap-2">
			<DropdownMenu.Root>
				<DropdownMenu.Trigger class="cursor-pointer">
					<Avatar.Root>
						<Avatar.Image
							src="https://static.wikitide.net/deathbattlewiki/9/95/Portrait.kazumasato.png"
							class="object-cover"
							alt="avatar"
						/>
						<Avatar.Fallback>KS</Avatar.Fallback>
					</Avatar.Root>
				</DropdownMenu.Trigger>
				<DropdownMenu.Content class="bg-sidebar-accent border-1 border-sidebar-border rounded-md p-2">
					<DropdownMenu.Item class="cursor-pointer rounded-sm px-2 py-1 text-sm hover:bg-primary/50">
						Profile
					</DropdownMenu.Item>
					<DropdownMenu.Item class="cursor-pointer rounded-sm px-2 py-1 text-sm hover:bg-primary/50">
						Settings
					</DropdownMenu.Item>
					<DropdownMenu.Item
						class="cursor-pointer rounded-sm px-2 py-1 text-sm text-destructive hover:bg-primary/50"
					>
						Logout
					</DropdownMenu.Item>
				</DropdownMenu.Content>
			</DropdownMenu.Root>
			<div class="flex flex-col">
				<h2 class="font-semibold text-sidebar-foreground">Kazuma Satou</h2>
				<p class="text-sm text-muted-foreground">Konosuba Main Character</p>
			</div>
		</div>
		<div class="flex items-center gap-2">
			<label class="switch">
				<input type="checkbox" bind:checked={enabled} onchange={handleToggle} />
				<span class="slider"></span>
			</label>
			<h2>{enabled ? 'Dark' : 'Light'}</h2>
		</div>
	</Sidebar.Footer>
	<Sidebar.Rail />
</Sidebar.Root>
