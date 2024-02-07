import { CustomTreeElement } from "duit_js";

interface SvgAttributes {
    width?: number;
    height?: number;
    content: string;
}

class SvgWidget extends CustomTreeElement<SvgAttributes> {

    constructor(attrs: SvgAttributes, tag: string, id?: string) {
       super(attrs, tag, id, undefined, false);
    }
}

const Svg = (attributes: SvgAttributes, id?: string) => {
    return new SvgWidget(attributes, "svg", id);
}

export default Svg;
