import {
	Chart,
	LineController,
	BarController,
	ScatterController,
	LineElement,
	BarElement,
	PointElement,
	LinearScale,
	CategoryScale,
	Tooltip
} from 'chart.js';

Chart.register(
	LineController,
	BarController,
	ScatterController,
	LineElement,
	BarElement,
	PointElement,
	LinearScale,
	CategoryScale,
	Tooltip
);

export function useChart(
	node: HTMLCanvasElement,
	config: any
) {
	const chart = new Chart(node, config);

	return {
		destroy() {
			chart.destroy();
		}
	};
}
