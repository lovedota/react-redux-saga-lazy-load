import * as moment from "moment";
import AboutServices from "./contact-services";

const sendMessage: any = self.postMessage;

let items = [];

self.addEventListener("message", async (e) => {
    switch (e.data.type) {
        case "contact/init":
            sendMessage({isLoading: true, items});

            const models = await AboutServices.getItems();

            items = models.map((i) => convertToViewModel(i));

            sendMessage({isLoading: false, items});

            break;

        case "contact/update":
            const currentItem = e.data.item;

            items = items.map((item) => {
                if (item.id !== currentItem.id) {
                    return item;
                }

                return {
                    ...item,
                    ...currentItem
                };
            });

            sendMessage({isLoading: false, items});
            break;

        default:
            break;
    }
}, false);

function convertToViewModel(model) {
    return {
        id: model.id,
        fullName: `${model.firstName} ${model.lastName}`,
        dateOfBirth: moment(model.dateOfBirth).format("YYYY-MM-DD")
    };
}
