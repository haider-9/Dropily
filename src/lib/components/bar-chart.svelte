<script lang="ts">
	import { onMount } from 'svelte';
	import type { ChartConfiguration } from 'chart.js';
	import { useChart } from '$lib/charts/useChart';

	// Accept data data as a prop
	let { data = [] }: { data: number[] } = $props();

	let chartCanvas: HTMLCanvasElement;
	let chartInstance: any;

	$effect(() => {
		if (chartCanvas && data.length > 0) {
			const labels = Array.from({ length: data.length }, (_, i) => `${i + 1}`);
			
			const config: ChartConfiguration<'bar'> = {
				type: 'bar',
				data: {
					labels,
					datasets: [
						{
							data: data,
							backgroundColor: getComputedStyle(document.documentElement)
								.getPropertyValue('--chart-1')
								.trim(),
							borderRadius: 6,
							barThickness: 18
						}
					]
				},
				options: {
					responsive: true,
					maintainAspectRatio: true,
					plugins: {
						legend: { display: false }
					},
					scales: {
						x: { grid: { display: false }, ticks: { display: true } },
						y: { grid: { display: false }, ticks: { display: false } }
					}
				}
			};

			if (chartInstance) {
				chartInstance.data.labels = labels;
				chartInstance.data.datasets[0].data = data;
				chartInstance.update();
			} else {
				chartInstance = useChart(chartCanvas, config);
			}
		}
	});
</script>

<div class="h-24 w-full">
	<canvas bind:this={chartCanvas}></canvas>
</div>