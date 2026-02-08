<script lang="ts">
	import { onMount } from 'svelte';
	import type { ChartConfiguration } from 'chart.js';
	import { useChart } from '$lib/charts/useChart';

	export let data: number[] = [];
	export let labels: string[] = [];

	let config: ChartConfiguration<'bar'> | null = null;

	onMount(() => {
		const primary = getComputedStyle(document.documentElement)
			.getPropertyValue('--chart-1')
			.trim();

		config = {
			type: 'bar',
			data: {
				labels,
				datasets: [
					{
						data,
						backgroundColor: primary,
						borderRadius: 6,
						barThickness: 18
					}
				]
			},
			options: {
				responsive: true,
				maintainAspectRatio: false,
				plugins: {
					legend: { display: false }
				},
				scales: {
					x: { grid: { display: false }, ticks: { display: false } },
					y: { grid: { display: false }, ticks: { display: false } }
				}
			}
		};
	});
</script>

<div class="h-24 w-full">
	{#if config}
		<canvas use:useChart={config}></canvas>
	{/if}
</div>
