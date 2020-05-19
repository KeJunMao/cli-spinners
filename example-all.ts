import cliSpinners, { SpinnerName } from "./mod.ts";

const spinnersInfo = `${Object.keys(cliSpinners).length} spinners\n`;

for (const spinnerType in cliSpinners) {
	const spinner = cliSpinners[spinnerType as SpinnerName];
	let i = 0;
	while (true) {
		console.log(spinnersInfo);
		const { frames } = spinner;
		console.log(`${frames[(i = ++i % frames.length)]} ${spinnerType}`);
		console.clear();
		await new Promise(r => setTimeout(r, spinner.interval));
		if (i % frames.length === 0) break;
	}
}
