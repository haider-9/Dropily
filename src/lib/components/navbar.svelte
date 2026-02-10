<script lang="ts">
	import { Bell, MessageCircle, Search, type Icon as typeoficon } from '@lucide/svelte';
	import { Button } from './ui/button';
	import * as DropdownMenu from './ui/dropdown-menu';
	import * as Empty from './ui/empty';

	type NavLinks = {
		name: string;
		icon: typeof typeoficon;
	};

	const navlinks: NavLinks[] = [
		{
			name: 'Notifications',
			icon: Bell
		},
		{
			name: 'Messages',
			icon: MessageCircle
		},
		{
			name: 'Search',
			icon: Search
		}
	];
</script>

<div class="mx-auto flex w-[100rem] items-center justify-between gap-4 p-6">
	<div>
		<h1
			class=" text-xl font-bold "
		>
			Welcome Back
			{#each "HAIDER!".split("") as letter}
				<span class=" text-pink-600 even:text-amber-400 odd:-translate-y-1 inline-block">{letter}</span>
			{/each}
		</h1>
		<p class="text-sm text-muted-foreground">welcome back, we missed you</p>
	</div>
	<div class="flex gap-2">
		{#each navlinks as link}
			<DropdownMenu.Root>
				<p class="flex size-9 items-center justify-center rounded-full border bg-muted-foreground">
					<DropdownMenu.Trigger>
						<link.icon class="text-background " size="20" />
					</DropdownMenu.Trigger>
				</p>
				<DropdownMenu.Content class="min-h-50 min-w-70 bg-background ">
					<DropdownMenu.Label>
						{link.name}
					</DropdownMenu.Label>
					<DropdownMenu.Separator />
					<DropdownMenu.Item>
						<Empty.Root>
							<Empty.Media variant="icon">
								<link.icon size="20" />
							</Empty.Media>
							<Empty.Title>
								No {link.name}
							</Empty.Title>
							<Empty.Description>
								You have no {link.name.toLocaleLowerCase()} at the moment
							</Empty.Description>
						</Empty.Root>
					</DropdownMenu.Item>
				</DropdownMenu.Content>
			</DropdownMenu.Root>
		{/each}
		<Button variant="default">Create new Order</Button>
	</div>
</div>
