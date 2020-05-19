import cliSpinners, { SpinnerName } from "./mod.ts";
const SpinnerType: SpinnerName = (Deno.args[0] as SpinnerName) || "dots";
const spinner = cliSpinners[SpinnerType];
let i = 0;

while (true) {
	await new Promise(r => setTimeout(r, spinner.interval));
	const { frames } = spinner;
	console.log(`${frames[(i = ++i % frames.length)]} Unicorns`);
	console.clear();
}
