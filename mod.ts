export interface Spinner {
	readonly interval: number;
	readonly frames: string[];
}

export type SpinnerName =
	| "dots"
	| "dots2"
	| "dots3"
	| "dots4"
	| "dots5"
	| "dots6"
	| "dots7"
	| "dots8"
	| "dots9"
	| "dots10"
	| "dots11"
	| "dots12"
	| "dots8Bit"
	| "line"
	| "line2"
	| "pipe"
	| "simpleDots"
	| "simpleDotsScrolling"
	| "star"
	| "star2"
	| "flip"
	| "hamburger"
	| "growVertical"
	| "growHorizontal"
	| "balloon"
	| "balloon2"
	| "noise"
	| "bounce"
	| "boxBounce"
	| "boxBounce2"
	| "triangle"
	| "arc"
	| "circle"
	| "squareCorners"
	| "circleQuarters"
	| "circleHalves"
	| "squish"
	| "toggle"
	| "toggle2"
	| "toggle3"
	| "toggle4"
	| "toggle5"
	| "toggle6"
	| "toggle7"
	| "toggle8"
	| "toggle9"
	| "toggle10"
	| "toggle11"
	| "toggle12"
	| "toggle13"
	| "arrow"
	| "arrow2"
	| "arrow3"
	| "bouncingBar"
	| "bouncingBall"
	| "smiley"
	| "monkey"
	| "hearts"
	| "clock"
	| "earth"
	| "moon"
	| "runner"
	| "pong"
	| "shark"
	| "dqpb"
	| "weather"
	| "christmas"
	| "grenade"
	| "point"
	| "layer"
	| "betaWave";

export type SpinnersJson = Record<SpinnerName, Spinner>;

const spinnersJson: SpinnersJson = {
	dots: {
		interval: 80,
		frames: ["⠋", "⠙", "⠹", "⠸", "⠼", "⠴", "⠦", "⠧", "⠇", "⠏"]
	},
	dots2: {
		interval: 80,
		frames: ["⣾", "⣽", "⣻", "⢿", "⡿", "⣟", "⣯", "⣷"]
	},
	dots3: {
		interval: 80,
		frames: ["⠋", "⠙", "⠚", "⠞", "⠖", "⠦", "⠴", "⠲", "⠳", "⠓"]
	},
	dots4: {
		interval: 80,
		frames: [
			"⠄",
			"⠆",
			"⠇",
			"⠋",
			"⠙",
			"⠸",
			"⠰",
			"⠠",
			"⠰",
			"⠸",
			"⠙",
			"⠋",
			"⠇",
			"⠆"
		]
	},
	dots5: {
		interval: 80,
		frames: [
			"⠋",
			"⠙",
			"⠚",
			"⠒",
			"⠂",
			"⠂",
			"⠒",
			"⠲",
			"⠴",
			"⠦",
			"⠖",
			"⠒",
			"⠐",
			"⠐",
			"⠒",
			"⠓",
			"⠋"
		]
	},
	dots6: {
		interval: 80,
		frames: [
			"⠁",
			"⠉",
			"⠙",
			"⠚",
			"⠒",
			"⠂",
			"⠂",
			"⠒",
			"⠲",
			"⠴",
			"⠤",
			"⠄",
			"⠄",
			"⠤",
			"⠴",
			"⠲",
			"⠒",
			"⠂",
			"⠂",
			"⠒",
			"⠚",
			"⠙",
			"⠉",
			"⠁"
		]
	},
	dots7: {
		interval: 80,
		frames: [
			"⠈",
			"⠉",
			"⠋",
			"⠓",
			"⠒",
			"⠐",
			"⠐",
			"⠒",
			"⠖",
			"⠦",
			"⠤",
			"⠠",
			"⠠",
			"⠤",
			"⠦",
			"⠖",
			"⠒",
			"⠐",
			"⠐",
			"⠒",
			"⠓",
			"⠋",
			"⠉",
			"⠈"
		]
	},
	dots8: {
		interval: 80,
		frames: [
			"⠁",
			"⠁",
			"⠉",
			"⠙",
			"⠚",
			"⠒",
			"⠂",
			"⠂",
			"⠒",
			"⠲",
			"⠴",
			"⠤",
			"⠄",
			"⠄",
			"⠤",
			"⠠",
			"⠠",
			"⠤",
			"⠦",
			"⠖",
			"⠒",
			"⠐",
			"⠐",
			"⠒",
			"⠓",
			"⠋",
			"⠉",
			"⠈",
			"⠈"
		]
	},
	dots9: {
		interval: 80,
		frames: ["⢹", "⢺", "⢼", "⣸", "⣇", "⡧", "⡗", "⡏"]
	},
	dots10: {
		interval: 80,
		frames: ["⢄", "⢂", "⢁", "⡁", "⡈", "⡐", "⡠"]
	},
	dots11: {
		interval: 100,
		frames: ["⠁", "⠂", "⠄", "⡀", "⢀", "⠠", "⠐", "⠈"]
	},
	dots12: {
		interval: 80,
		frames: [
			"⢀⠀",
			"⡀⠀",
			"⠄⠀",
			"⢂⠀",
			"⡂⠀",
			"⠅⠀",
			"⢃⠀",
			"⡃⠀",
			"⠍⠀",
			"⢋⠀",
			"⡋⠀",
			"⠍⠁",
			"⢋⠁",
			"⡋⠁",
			"⠍⠉",
			"⠋⠉",
			"⠋⠉",
			"⠉⠙",
			"⠉⠙",
			"⠉⠩",
			"⠈⢙",
			"⠈⡙",
			"⢈⠩",
			"⡀⢙",
			"⠄⡙",
			"⢂⠩",
			"⡂⢘",
			"⠅⡘",
			"⢃⠨",
			"⡃⢐",
			"⠍⡐",
			"⢋⠠",
			"⡋⢀",
			"⠍⡁",
			"⢋⠁",
			"⡋⠁",
			"⠍⠉",
			"⠋⠉",
			"⠋⠉",
			"⠉⠙",
			"⠉⠙",
			"⠉⠩",
			"⠈⢙",
			"⠈⡙",
			"⠈⠩",
			"⠀⢙",
			"⠀⡙",
			"⠀⠩",
			"⠀⢘",
			"⠀⡘",
			"⠀⠨",
			"⠀⢐",
			"⠀⡐",
			"⠀⠠",
			"⠀⢀",
			"⠀⡀"
		]
	},
	dots8Bit: {
		interval: 80,
		frames: [
			"⠀",
			"⠁",
			"⠂",
			"⠃",
			"⠄",
			"⠅",
			"⠆",
			"⠇",
			"⡀",
			"⡁",
			"⡂",
			"⡃",
			"⡄",
			"⡅",
			"⡆",
			"⡇",
			"⠈",
			"⠉",
			"⠊",
			"⠋",
			"⠌",
			"⠍",
			"⠎",
			"⠏",
			"⡈",
			"⡉",
			"⡊",
			"⡋",
			"⡌",
			"⡍",
			"⡎",
			"⡏",
			"⠐",
			"⠑",
			"⠒",
			"⠓",
			"⠔",
			"⠕",
			"⠖",
			"⠗",
			"⡐",
			"⡑",
			"⡒",
			"⡓",
			"⡔",
			"⡕",
			"⡖",
			"⡗",
			"⠘",
			"⠙",
			"⠚",
			"⠛",
			"⠜",
			"⠝",
			"⠞",
			"⠟",
			"⡘",
			"⡙",
			"⡚",
			"⡛",
			"⡜",
			"⡝",
			"⡞",
			"⡟",
			"⠠",
			"⠡",
			"⠢",
			"⠣",
			"⠤",
			"⠥",
			"⠦",
			"⠧",
			"⡠",
			"⡡",
			"⡢",
			"⡣",
			"⡤",
			"⡥",
			"⡦",
			"⡧",
			"⠨",
			"⠩",
			"⠪",
			"⠫",
			"⠬",
			"⠭",
			"⠮",
			"⠯",
			"⡨",
			"⡩",
			"⡪",
			"⡫",
			"⡬",
			"⡭",
			"⡮",
			"⡯",
			"⠰",
			"⠱",
			"⠲",
			"⠳",
			"⠴",
			"⠵",
			"⠶",
			"⠷",
			"⡰",
			"⡱",
			"⡲",
			"⡳",
			"⡴",
			"⡵",
			"⡶",
			"⡷",
			"⠸",
			"⠹",
			"⠺",
			"⠻",
			"⠼",
			"⠽",
			"⠾",
			"⠿",
			"⡸",
			"⡹",
			"⡺",
			"⡻",
			"⡼",
			"⡽",
			"⡾",
			"⡿",
			"⢀",
			"⢁",
			"⢂",
			"⢃",
			"⢄",
			"⢅",
			"⢆",
			"⢇",
			"⣀",
			"⣁",
			"⣂",
			"⣃",
			"⣄",
			"⣅",
			"⣆",
			"⣇",
			"⢈",
			"⢉",
			"⢊",
			"⢋",
			"⢌",
			"⢍",
			"⢎",
			"⢏",
			"⣈",
			"⣉",
			"⣊",
			"⣋",
			"⣌",
			"⣍",
			"⣎",
			"⣏",
			"⢐",
			"⢑",
			"⢒",
			"⢓",
			"⢔",
			"⢕",
			"⢖",
			"⢗",
			"⣐",
			"⣑",
			"⣒",
			"⣓",
			"⣔",
			"⣕",
			"⣖",
			"⣗",
			"⢘",
			"⢙",
			"⢚",
			"⢛",
			"⢜",
			"⢝",
			"⢞",
			"⢟",
			"⣘",
			"⣙",
			"⣚",
			"⣛",
			"⣜",
			"⣝",
			"⣞",
			"⣟",
			"⢠",
			"⢡",
			"⢢",
			"⢣",
			"⢤",
			"⢥",
			"⢦",
			"⢧",
			"⣠",
			"⣡",
			"⣢",
			"⣣",
			"⣤",
			"⣥",
			"⣦",
			"⣧",
			"⢨",
			"⢩",
			"⢪",
			"⢫",
			"⢬",
			"⢭",
			"⢮",
			"⢯",
			"⣨",
			"⣩",
			"⣪",
			"⣫",
			"⣬",
			"⣭",
			"⣮",
			"⣯",
			"⢰",
			"⢱",
			"⢲",
			"⢳",
			"⢴",
			"⢵",
			"⢶",
			"⢷",
			"⣰",
			"⣱",
			"⣲",
			"⣳",
			"⣴",
			"⣵",
			"⣶",
			"⣷",
			"⢸",
			"⢹",
			"⢺",
			"⢻",
			"⢼",
			"⢽",
			"⢾",
			"⢿",
			"⣸",
			"⣹",
			"⣺",
			"⣻",
			"⣼",
			"⣽",
			"⣾",
			"⣿"
		]
	},
	line: {
		interval: 130,
		frames: ["-", "\\", "|", "/"]
	},
	line2: {
		interval: 100,
		frames: ["⠂", "-", "–", "—", "–", "-"]
	},
	pipe: {
		interval: 100,
		frames: ["┤", "┘", "┴", "└", "├", "┌", "┬", "┐"]
	},
	simpleDots: {
		interval: 400,
		frames: [".  ", ".. ", "...", "   "]
	},
	simpleDotsScrolling: {
		interval: 200,
		frames: [".  ", ".. ", "...", " ..", "  .", "   "]
	},
	star: {
		interval: 70,
		frames: ["✶", "✸", "✹", "✺", "✹", "✷"]
	},
	star2: {
		interval: 80,
		frames: ["+", "x", "*"]
	},
	flip: {
		interval: 70,
		frames: ["_", "_", "_", "-", "`", "`", "'", "´", "-", "_", "_", "_"]
	},
	hamburger: {
		interval: 100,
		frames: ["☱", "☲", "☴"]
	},
	growVertical: {
		interval: 120,
		frames: ["▁", "▃", "▄", "▅", "▆", "▇", "▆", "▅", "▄", "▃"]
	},
	growHorizontal: {
		interval: 120,
		frames: ["▏", "▎", "▍", "▌", "▋", "▊", "▉", "▊", "▋", "▌", "▍", "▎"]
	},
	balloon: {
		interval: 140,
		frames: [" ", ".", "o", "O", "@", "*", " "]
	},
	balloon2: {
		interval: 120,
		frames: [".", "o", "O", "°", "O", "o", "."]
	},
	noise: {
		interval: 100,
		frames: ["▓", "▒", "░"]
	},
	bounce: {
		interval: 120,
		frames: ["⠁", "⠂", "⠄", "⠂"]
	},
	boxBounce: {
		interval: 120,
		frames: ["▖", "▘", "▝", "▗"]
	},
	boxBounce2: {
		interval: 100,
		frames: ["▌", "▀", "▐", "▄"]
	},
	triangle: {
		interval: 50,
		frames: ["◢", "◣", "◤", "◥"]
	},
	arc: {
		interval: 100,
		frames: ["◜", "◠", "◝", "◞", "◡", "◟"]
	},
	circle: {
		interval: 120,
		frames: ["◡", "⊙", "◠"]
	},
	squareCorners: {
		interval: 180,
		frames: ["◰", "◳", "◲", "◱"]
	},
	circleQuarters: {
		interval: 120,
		frames: ["◴", "◷", "◶", "◵"]
	},
	circleHalves: {
		interval: 50,
		frames: ["◐", "◓", "◑", "◒"]
	},
	squish: {
		interval: 100,
		frames: ["╫", "╪"]
	},
	toggle: {
		interval: 250,
		frames: ["⊶", "⊷"]
	},
	toggle2: {
		interval: 80,
		frames: ["▫", "▪"]
	},
	toggle3: {
		interval: 120,
		frames: ["□", "■"]
	},
	toggle4: {
		interval: 100,
		frames: ["■", "□", "▪", "▫"]
	},
	toggle5: {
		interval: 100,
		frames: ["▮", "▯"]
	},
	toggle6: {
		interval: 300,
		frames: ["ဝ", "၀"]
	},
	toggle7: {
		interval: 80,
		frames: ["⦾", "⦿"]
	},
	toggle8: {
		interval: 100,
		frames: ["◍", "◌"]
	},
	toggle9: {
		interval: 100,
		frames: ["◉", "◎"]
	},
	toggle10: {
		interval: 100,
		frames: ["㊂", "㊀", "㊁"]
	},
	toggle11: {
		interval: 50,
		frames: ["⧇", "⧆"]
	},
	toggle12: {
		interval: 120,
		frames: ["☗", "☖"]
	},
	toggle13: {
		interval: 80,
		frames: ["=", "*", "-"]
	},
	arrow: {
		interval: 100,
		frames: ["←", "↖", "↑", "↗", "→", "↘", "↓", "↙"]
	},
	arrow2: {
		interval: 80,
		frames: ["⬆️ ", "↗️ ", "➡️ ", "↘️ ", "⬇️ ", "↙️ ", "⬅️ ", "↖️ "]
	},
	arrow3: {
		interval: 120,
		frames: ["▹▹▹▹▹", "▸▹▹▹▹", "▹▸▹▹▹", "▹▹▸▹▹", "▹▹▹▸▹", "▹▹▹▹▸"]
	},
	bouncingBar: {
		interval: 80,
		frames: [
			"[    ]",
			"[=   ]",
			"[==  ]",
			"[=== ]",
			"[ ===]",
			"[  ==]",
			"[   =]",
			"[    ]",
			"[   =]",
			"[  ==]",
			"[ ===]",
			"[====]",
			"[=== ]",
			"[==  ]",
			"[=   ]"
		]
	},
	bouncingBall: {
		interval: 80,
		frames: [
			"( ●    )",
			"(  ●   )",
			"(   ●  )",
			"(    ● )",
			"(     ●)",
			"(    ● )",
			"(   ●  )",
			"(  ●   )",
			"( ●    )",
			"(●     )"
		]
	},
	smiley: {
		interval: 200,
		frames: ["😄 ", "😝 "]
	},
	monkey: {
		interval: 300,
		frames: ["🙈 ", "🙈 ", "🙉 ", "🙊 "]
	},
	hearts: {
		interval: 100,
		frames: ["💛 ", "💙 ", "💜 ", "💚 ", "❤️ "]
	},
	clock: {
		interval: 100,
		frames: [
			"🕛 ",
			"🕐 ",
			"🕑 ",
			"🕒 ",
			"🕓 ",
			"🕔 ",
			"🕕 ",
			"🕖 ",
			"🕗 ",
			"🕘 ",
			"🕙 ",
			"🕚 "
		]
	},
	earth: {
		interval: 180,
		frames: ["🌍 ", "🌎 ", "🌏 "]
	},
	moon: {
		interval: 80,
		frames: ["🌑 ", "🌒 ", "🌓 ", "🌔 ", "🌕 ", "🌖 ", "🌗 ", "🌘 "]
	},
	runner: {
		interval: 140,
		frames: ["🚶 ", "🏃 "]
	},
	pong: {
		interval: 80,
		frames: [
			"▐⠂       ▌",
			"▐⠈       ▌",
			"▐ ⠂      ▌",
			"▐ ⠠      ▌",
			"▐  ⡀     ▌",
			"▐  ⠠     ▌",
			"▐   ⠂    ▌",
			"▐   ⠈    ▌",
			"▐    ⠂   ▌",
			"▐    ⠠   ▌",
			"▐     ⡀  ▌",
			"▐     ⠠  ▌",
			"▐      ⠂ ▌",
			"▐      ⠈ ▌",
			"▐       ⠂▌",
			"▐       ⠠▌",
			"▐       ⡀▌",
			"▐      ⠠ ▌",
			"▐      ⠂ ▌",
			"▐     ⠈  ▌",
			"▐     ⠂  ▌",
			"▐    ⠠   ▌",
			"▐    ⡀   ▌",
			"▐   ⠠    ▌",
			"▐   ⠂    ▌",
			"▐  ⠈     ▌",
			"▐  ⠂     ▌",
			"▐ ⠠      ▌",
			"▐ ⡀      ▌",
			"▐⠠       ▌"
		]
	},
	shark: {
		interval: 120,
		frames: [
			"▐|\\____________▌",
			"▐_|\\___________▌",
			"▐__|\\__________▌",
			"▐___|\\_________▌",
			"▐____|\\________▌",
			"▐_____|\\_______▌",
			"▐______|\\______▌",
			"▐_______|\\_____▌",
			"▐________|\\____▌",
			"▐_________|\\___▌",
			"▐__________|\\__▌",
			"▐___________|\\_▌",
			"▐____________|\\▌",
			"▐____________/|▌",
			"▐___________/|_▌",
			"▐__________/|__▌",
			"▐_________/|___▌",
			"▐________/|____▌",
			"▐_______/|_____▌",
			"▐______/|______▌",
			"▐_____/|_______▌",
			"▐____/|________▌",
			"▐___/|_________▌",
			"▐__/|__________▌",
			"▐_/|___________▌",
			"▐/|____________▌"
		]
	},
	dqpb: {
		interval: 100,
		frames: ["d", "q", "p", "b"]
	},
	weather: {
		interval: 100,
		frames: [
			"☀️ ",
			"☀️ ",
			"☀️ ",
			"🌤 ",
			"⛅️ ",
			"🌥 ",
			"☁️ ",
			"🌧 ",
			"🌨 ",
			"🌧 ",
			"🌨 ",
			"🌧 ",
			"🌨 ",
			"⛈ ",
			"🌨 ",
			"🌧 ",
			"🌨 ",
			"☁️ ",
			"🌥 ",
			"⛅️ ",
			"🌤 ",
			"☀️ ",
			"☀️ "
		]
	},
	christmas: {
		interval: 400,
		frames: ["🌲", "🎄"]
	},
	grenade: {
		interval: 80,
		frames: [
			"،   ",
			"′   ",
			" ´ ",
			" ‾ ",
			"  ⸌",
			"  ⸊",
			"  |",
			"  ⁎",
			"  ⁕",
			" ෴ ",
			"  ⁓",
			"   ",
			"   ",
			"   "
		]
	},
	point: {
		interval: 125,
		frames: ["∙∙∙", "●∙∙", "∙●∙", "∙∙●", "∙∙∙"]
	},
	layer: {
		interval: 150,
		frames: ["-", "=", "≡"]
	},
	betaWave: {
		interval: 80,
		frames: [
			"ρββββββ",
			"βρβββββ",
			"ββρββββ",
			"βββρβββ",
			"ββββρββ",
			"βββββρβ",
			"ββββββρ"
		]
	}
};

export default spinnersJson;
