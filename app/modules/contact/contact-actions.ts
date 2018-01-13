import { dispatch } from "../../root/root-store";
//import AboutServices from "./contact-services";

export default {
    async init() {
        dispatch({
            type: "contact/init"
        });
    },

    update(item) {
        dispatch({
            type: "contact/update",
            item
        });
    }
};
