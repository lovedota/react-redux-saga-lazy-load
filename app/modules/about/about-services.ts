export default {
    getItems() {
        return new Promise<any[]>((resolve) => {
            const items = [];

            for (let i = 0; i < 5; i++) {
              // each child must have a consistent height
                items.push({
                    id: i,
                    firstName: `First Name ${i}`,
                    lastName: `Last Name ${i}`,
                    dateOfBirth: Date.now()
                });
            }

            setTimeout(() => {
                resolve(items);
            }, 500);
        });
    }
};
