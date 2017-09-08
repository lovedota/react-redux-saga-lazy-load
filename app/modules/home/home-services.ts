export default {
    getItems() {
        return new Promise<any[]>((resolve) => {
            setTimeout(() => {
                resolve([
                    {
                        id: "1",
                        name: "Items 1",
                        quantity: 100
                    },
                    {
                        id: "2",
                        name: "Items 2",
                        quantity: 99
                    }
                ]);
            }, 1000);
        });
    }
};
