<script lang="ts">
	import { onMount } from 'svelte';
	import type { ChartConfiguration } from 'chart.js';
	import { useChart } from '$lib/charts/useChart';

	export let data: number[];

	let config: ChartConfiguration<'line'> | null = null;

	onMount(() => {
		const color = getComputedStyle(document.documentElement)
			.getPropertyValue('--chart-2')
			.trim();

		config = {
			type: 'line',
			data: {
				labels: data.map((_, i) => i + 1),
				datasets: [
					{
						data,
						borderColor: color,
						backgroundColor: color,
						tension: 0.4,
						pointRadius: 0
					}
				]
			},
			options: {
				responsive: true,
				maintainAspectRatio: false,
				plugins: { legend: { display: false } },
				scales: { x: { display: false }, y: { display: false } }
			}
		};
	});
</script>

<div class="h-16 w-full">
	{#if config}
		<canvas use:useChart={config}></canvas>
	{/if}
</div>
