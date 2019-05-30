import chroma from "chroma-js";
const levels = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

// Give any color and return 10 step scale color (black - color - white)
const getRange = hexColor => {
    // set complete white rgb as white
    const white = '#ffffff'
    // custom dark color as black by chroma
    const black = chroma(hexColor).darken(1.4).hex();
    return [
        black,
        hexColor,
        white
    ]
}

const getScale = (hexColor, numberOfColors) => {
    return chroma
        .scale(getRange(hexColor))
        .mode('lab')
        .colors(numberOfColors); // split out to 10 color
}

// Generate level scale to each color
const generatePalette = starterPalette => {
    let newPalette = {
        paletteName: starterPalette.paletteName,
        id: starterPalette.id,
        emoji: starterPalette.emoji,
        colors: {},
    };

    // loop 每個 levels 內的 深淺值，把
    for(let level of levels) {
        // 要產生得 newPalette 在 colors object 內新增屬性 10 個 level 空陣列 (key對應50, 100, 200...)，
        newPalette.colors[level] = [];
    };

    // loop Palette
    for(let color of starterPalette.colors) {
        let scale = getScale(color.color, 10).reverse(); // 每個單一 color 再切成10份，去做(灰階) scale 化
        // i 是 50, 100, 200, ..., 900
        for(let i in scale) {
            newPalette.colors[levels[i]].push({
                name: `${color.name} ${levels[i]}`,
                id: color.name.toLowerCase().replace(/ /g, "-"), // 取代所有 "" 成 "-"
                hex: scale[i],
                rgb: chroma(scale[i]).css(),
                rgba: chroma(scale[i]).css().replace("rgb","rgba").replace(")",",1.0)")
            })
        }
    };
    return newPalette;
}

export default generatePalette
