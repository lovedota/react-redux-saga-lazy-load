const initState = {
    isLoading: false,
    items: []
};

export default (state = initState, action) => {
    switch (action.type) {
        case "home/init":
            return {
                isLoading: true,
                items: []
            };

        case "home/init/success":
            return {
                isLoading: false,
                items: action.items
            };
        case "home/init/error":
            return {
                isLoading: false,
                items: []
            };
        default:
            return state;
    }
};
