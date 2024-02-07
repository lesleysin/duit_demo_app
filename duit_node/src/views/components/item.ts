import { Column, ComponentDescription, Container, DecoratedBox, Image, Padding, Row, SizedBox, Text, } from "duit_js";
import Svg from "./custom_svg";
import { TextBold } from "./text_bold";

export const ItemDescription = ComponentDescription(
    "item",
    Container({
        attributes: {
            decoration: {
                color: "#ffffff",
                borderRadius: 12,
            },
            refs: [{
                attributeKey: 'decoration',
                objectKey: "selectionColor"
            }]
        }
    }).addChild(
        Padding({
            attributes: {
                padding: 16,
            }
        }).addChild(DecoratedBox({
            attributes: {
                decoration: {
                    borderRadius: 12,
                }
            }
        })).addChild(
            Row({
                attributes: {
                    mainAxisAlignment: "spaceBetween",
                }
            }).addChildren([
                DecoratedBox({
                    attributes: {
                        decoration: {
                            borderRadius: 16,
                            border: {
                                color: "#f5c5c1",
                                width: 1.5,
                            }
                        }
                    }
                }).addChild(
                    Image({
                        attributes: {
                            type: "network",
                            src: "",
                            width: 64,
                            height: 64,
                            fit: 'fill',
                            refs: [
                                {
                                    attributeKey: 'src',
                                    objectKey: "image"
                                }
                            ]
                        }
                    })
                ),
                SizedBox({ attributes: { width: 24 } }),
                Column({
                    attributes: {
                        mainAxisAlignment: "spaceEvenly"
                    }
                }).addChildren([
                    Row({
                        attributes: {
                            mainAxisSize: 'max',
                        }
                    }).addChildren([
                        TextBold("", [
                            {
                                attributeKey: 'data',
                                objectKey: "price"
                            }
                        ]),
                        SizedBox({ attributes: { width: 24 } }),
                        Text({
                            attributes: {
                                data: "",
                                refs: [
                                    {
                                        attributeKey: 'data',
                                        objectKey: "discount"
                                    }
                                ]
                            }
                        }),
                    ]),
                    TextBold("", [
                        {
                            attributeKey: 'data',
                            objectKey: "name"
                        }
                    ]),
                    Text({
                        attributes: {
                            data: "",
                            maxLines: 3,
                            overflow: "ellipsis",
                            refs: [
                                {
                                    attributeKey: 'data',
                                    objectKey: "description"
                                }
                            ]
                        }
                    })
                ]),
                SizedBox({ attributes: { width: 24 } }),
                Column({ attributes: {} }).addChildren([
                    //@ts-ignore
                    Svg({
                        height: 24,
                        width: 24,
                        content: `<svg width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M8.29289 8.29289C8.68342 7.90237 9.31658 7.90237 9.70711 8.29289L16 14.585L22.2929 8.29289C22.6534 7.93241 23.2206 7.90468 23.6129 8.2097L23.7071 8.29289C24.0976 8.68342 24.0976 9.31658 23.7071 9.70711L17.415 16L23.7071 22.2929C24.0676 22.6534 24.0953 23.2206 23.7903 23.6129L23.7071 23.7071C23.3166 24.0976 22.6834 24.0976 22.2929 23.7071L16 17.415L9.70711 23.7071C9.34662 24.0676 8.77939 24.0953 8.3871 23.7903L8.29289 23.7071C7.90237 23.3166 7.90237 22.6834 8.29289 22.2929L14.585 16L8.29289 9.70711C7.93241 9.34662 7.90468 8.77939 8.2097 8.3871L8.29289 8.29289Z\" fill=\"black\"/></svg>`
                    }),
                ])

            ])
        )
    ),
)

export interface ItemData {
    name: string
    description: string
    price: string
    discount: string
    image: string
    selectionColor: any;
    isSelected: boolean,
}