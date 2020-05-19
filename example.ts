import cliSpinners from "./mod.ts";

const spinner = cliSpinners["dots"];
let i = 0;

while (true) {
	await new Promise(r => setTimeout(r, spinner.interval));
	const { frames } = spinner;
	console.log(frames[(i = ++i % frames.length)] + " Unicorns");
	console.clear();
}
