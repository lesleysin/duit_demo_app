import { Column, Component, CreateNavigationEvent, DuitElement, DuitView, ElevatedButton, GestureDetector, HttpAction, LocalExecutedAction, NavigationEvent, SingleChildScrollView, SizedBox, Text, Wrap } from "duit_js";
import { ItemDescription } from "../components/item";
import { componentsData } from "../data/mock";


export function MainScreen() {
    const builder = DuitView.builder();

    const col = Column({
        attributes: {
        },
    });

    const widgets: DuitElement[] = [];

    componentsData.forEach((data, index) => {
        const widget = GestureDetector({
            attributes: {
                behavior: "opaque",
                onTap: new HttpAction(`/add/${index}`, { method: "POST" }),
            }
        }).addChild(Component({
            id: `item${index}`,
            data: data,
            tag: ItemDescription.tag,
        }));

        widgets.push(widget);
        widgets.push(SizedBox({ attributes: { height: 16 } }))
    })

    col.addChildren([
        //@ts-ignore
        ...widgets,
        //@ts-ignore
        ElevatedButton({
            attributes: {}, action: new LocalExecutedAction(
                CreateNavigationEvent("/duit",
                    {
                        path: "/cart"
                    }
                )
            )
        }).addChild(Text({ attributes: { data: "Нажмите, чтобы перейти в корзину" } })),
    ])

    const res = SingleChildScrollView({
        attributes: {
            padding: 16,
        },
    }).addChild(col);

    builder.rootFrom(res);

    return builder.build();
}