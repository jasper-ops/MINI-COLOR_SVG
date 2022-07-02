import { Base64 } from "./Base64";

export const getColorSVG = (svgBase64, color) => {
    try {
        svgBase64 = svgBase64.substring(svgBase64.indexOf(',') + 1, svgBase64.length);
        const svg = Base64.decode(svgBase64);

        if (/<svg /.test(svg)) {
            let newSvg;
            if (/fill=".*?"/.test(svg)) {
                newSvg = svg.replace(/fill=".*?"/, `fill="${color}" `);  // SVG有默认色，注意结尾跟一个空格
            } else {
                newSvg = svg.replace(/<svg /, `<svg fill="${color}" `); // 无默认色，注意结尾跟一个空格
            }
            return 'data:image/svg+xml;base64,' + Base64.encode(newSvg); // 替换完之后再组合回去
        }
    } catch { }
    return '';
};
