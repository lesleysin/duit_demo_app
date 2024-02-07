import { Text } from "duit_js"

export const TextBold = (text: string, refs?: any[]) => {
    return Text({
        attributes: {
            data: text,
            style: {
                fontWeight: 700,
                fontSize: 24,
                color: "#000000"
            },
            refs: refs
        }
    })
}