<script lang="ts">
	import BarChart from './bar-chart.svelte';
	import DotChart from './dot-chart.svelte';
	import LineChart from './lineChart.svelte';
	import * as Card from './ui/card';
	import { Gift, Box, ChevronsRight, type Icon as Icontype } from '@lucide/svelte';
	type cardProps = {
		title: string;
		icon: typeof Icontype;
		charts: any;
		value: number;
		unit: string;
	};
	const cardData: cardProps[] = [
		{
			title: "This Month's orders",
			icon: Gift,
			charts: [10, 14, 12, 18, 22, 20, 28], // line data
			value: 132,
			unit: ''
		},
		{
			title: "This Month's weight",
			icon: Box,
			charts: [5, 1, 1, 1, 1, 1, 1, 1], // dot count
			value: 32,
			unit: 'lbs'
		},
		{
			title: "This Month's distance",
			icon: ChevronsRight,
			charts: [4, 7, 3, 6, 9], // bar data
			value: 832,
			unit: 'mi'
		}
	];
</script>

<div class="">
	<div class="flex items-center justify-between gap-6 p-6">
		{#each cardData as card}
			<Card.Root class="w-1/3  p-6 shadow-none border-none bg-muted">
				<div class="flex items-center justify-between gap-4">
					<div>
						<p class="text-md font-medium text-foreground">{card.title}</p>
						<p class="flex items-center gap-4 text-lg text-muted-foreground">
							<card.icon
								class="size-9 rounded-full bg-muted-foreground p-1 text-center text-background"
							/>{card.value}
							{card.unit}
						</p>
					</div>
					<div class="mt-3 w-2/4">
						{#if card.icon === Gift}
							<LineChart data={card.charts} />
						{:else if card.icon === Box}
							<DotChart count={card.charts.length} />
						{:else}
							<BarChart data={card.charts} />
						{/if}
					</div>
				</div>
			</Card.Root>
		{/each}
	</div>
	<div class="grid grid-rows-3 gap-4 h-96 *:rounded-xl *:bg-muted">
		<div class=""></div>
		<div class="col-span-2 row-span-2"></div>
		<div class="row-span-3 col-span-2"></div>
		<div class="row-span-2"></div>
		<div class="col-span-2"></div>
	</div>
</div>
