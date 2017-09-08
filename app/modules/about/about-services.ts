export default {
    getItems() {
        return new Promise<any[]>((resolve) => {
            const items = [];

            for (let i = 0; i < 5000; i++) {
              // each child must have a consistent height
              items.push({
                    id: i,
                    name: `Items ${i}`,
                    quantity: i + 1
                });
            }

            setTimeout(() => {
                resolve(items);
            }, 1000);
        });
    }
};
