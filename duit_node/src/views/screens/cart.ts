import { Column, Component, DuitView, SingleChildScrollView, SizedBox, Text, Wrap } from "duit_js";
import { componentsData } from "../data/mock";
import { ItemDescription } from "../components/item";
import { TextBold } from "../components/text_bold";

export function CartScreen() {
    const builder = DuitView.builder();

    const root = SingleChildScrollView({
        attributes: {},
    });

    const widgets = componentsData.filter((data) => data.isSelected).map((data, index) => {

        const widget = Component({
            id: `item${index}`,
            data: data,
            tag: ItemDescription.tag,
        });

        return widget;

    })

    root.addChild(Wrap({
        attributes: {
            spacing: 8
        }
    }).addChildren([
        TextBold("Выбранные товары"),
        SizedBox({ attributes: { height: 16 } }),
        ...widgets
    ]))

    builder.rootFrom(root);

    return builder.build();
}