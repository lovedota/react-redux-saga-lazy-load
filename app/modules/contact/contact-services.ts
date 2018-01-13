import { randomString, randomDate } from "../../common/utils";

export default {
    getItems() {
        return new Promise<any[]>((resolve) => {
            const items = [];

            for (let i = 0; i < 1000000; i++) {
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
            }, 1000);
        });
    },

    generateReport() {
        const size = 10000;

        const array = Array.from(Array(size).keys()).map((num) => {
            return {
                id: num,
                name: randomString(),
                dateOfBirth: randomDate(new Date(2012, 0, 1), new Date())
            };
        });

        let str = "";

        array.forEach((item) => {
            let line = "";

            Object.keys(item).forEach((prop) => {
                if (line) {
                    line += ",";
                }

                line += item[prop];
            });

            str += line + "\r\n";
        });

        return str;
    }
};
