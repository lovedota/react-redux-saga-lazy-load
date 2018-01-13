import * as moment from 'moment';

export function randomString() {
    let text = '';

    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < 5; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return text;
};

export function getRandomColor() {
    const letters = '0123456789ABCDEF';

    let color = '#';

    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }

    return color;
};

export function randomDate(start, end) {
    return moment(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}
