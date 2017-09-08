const initState = {
    isLoading: false,
    items: []
};

export default (state = initState, action) => {
    switch (action.type) {
        case "about/init":
            return {
                isLoading: true,
                items: []
            };

        case "about/init/success":
            return {
                isLoading: false,
                items: action.items
            };
        case "about/init/error":
            return {
                isLoading: false,
                items: []
            };
        default:
            return state;
    }
};
