<script lang="ts">
	import { onMount } from 'svelte';
	import type { ChartConfiguration } from 'chart.js';
	import { useChart } from '$lib/charts/useChart';

	// number of dots (ex: orders count, weight units, etc.)
	export let count = 10;

	let config: ChartConfiguration<'scatter'> | null = null;

	onMount(() => {
		const points = Array.from({ length: count }, (_, i) => ({
			x: i,
			y: Math.random() * 10
		}));

		config = {
			type: 'scatter',
			data: {
				datasets: [
					{
						data: points,
						pointBackgroundColor: getComputedStyle(document.documentElement)
							.getPropertyValue('--chart-3')
							.trim(),
						pointRadius: 4,
						showLine: false
					}
				]
			},
			options: {
				responsive: true,
				maintainAspectRatio: false,
				plugins: {
					legend: { display: false },
					tooltip: { enabled: false }
				},
				scales: {
					x: { display: false },
					y: { display: false }
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
