const initState = {
    isLoading: false,
    items: [],
    displayItems: []
};

export default (state = initState, action) => {
    let newState = {...state};

    switch (action.type) {
        case "contact/init":
            newState.isLoading = true;

            return newState;

        case "contact/init/success":
            newState.isLoading = false;
            newState.items = action.items;
            newState.displayItems = action.items.slice(0, 10);

            return newState;

        case "contact/init/error":
            return {
                isLoading: false,
                items: []
            };

        case "contact/update":
            newState.items = state.items.map((item) => {
                if (item.id !== action.item.id) {
                    return item;
                }

                return {
                    ...item,
                    ...action.item
                };
            });
            newState.displayItems = newState.items.slice(0, 10);

            return newState;

        case "contact/update-worker/success":
            return {
                isLoading: false,
                items: action.items,
                displayItems: action.items.slice(0, 10)
            };

        default:
            return state;
    }
};
