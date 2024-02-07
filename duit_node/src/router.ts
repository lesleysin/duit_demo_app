import { Router } from "express";
import { MainScreen } from "./views/screens/main";
import { CartScreen } from "./views/screens/cart";
import { ItemDescription } from "./views/components/item";
import { UpdateEvent } from "duit_js";
import { componentsData } from "./views/data/mock";

export const router = Router();

router.get("/main", (_, res) => {
    console.log("main requested")
    const data = MainScreen()
    res.status(200).send(data)
})

router.get("/cart", (_, res) => {
    res.status(200).send(CartScreen())
})

router.get("/components", (_, res) => {
    res.status(200).send([ItemDescription])
})

router.post("/add/:id", (req, res) => {
    const numid = Number(req.params.id);
    const isSelected = componentsData[numid].isSelected;
    componentsData[numid].isSelected = !isSelected;
    const itemData = { ...componentsData[numid] };
    itemData.selectionColor = {
        borderRadius: 12,
        color: !isSelected ? "#88f564" : "#DCDCDC"
    }
    const keyId = "item" + req.params.id;
    let payload = {};
    //@ts-ignore
    payload[keyId] = itemData;
    const update = new UpdateEvent(payload);
    res.status(200).send(JSON.stringify(update))
})