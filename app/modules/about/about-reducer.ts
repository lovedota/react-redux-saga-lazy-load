import * as moment from 'moment';

const initState = {
    isLoading: false,
    items: [],
    color: 'blue'
};

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';

    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

export default (state = initState, action) => {
    switch (action.type) {
        case 'about/init':
            return {
                ...state,
                isLoading: true
            };

        case 'about/init/success':
            return {
                ...state,
                isLoading: false,
                items: action.items.map((i) => convertToViewModel(i))
            };

        case 'about/init/error':
            return {
                ...state,
                isLoading: false,
                items: []
            };

        case 'about/color':
            return {
                ...state,
                color: getRandomColor()
            };

        case 'about/update':
            return {
                isLoading: false,
                items: state.items.map((item) => {
                    if (item.id !== action.item.id) {
                        return item;
                    }

                    return {
                        ...item,
                        ...action.item
                    };
                })
            };

        default:
            return state;
    }
};

function convertToViewModel(model) {
    return {
        id: model.id,
        fullName: `${model.firstName} ${model.lastName}`,
        dateOfBirth: moment(model.dateOfBirth).format('YYYY-MM-DD')
    };
}
