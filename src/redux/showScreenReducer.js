const initialState = {
    intro: 'flex',
    about : 'none',
    work: 'none',
    contact: 'none'
};

const showScreenReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'DISPLAY_ABOUT':
           return ({
               ...state,
               intro: 'none',
               about:'flex',
               work: 'none',
               contact:'none'
           });

        case 'DISPLAY_WORK':
            return ({
                ...state,
                about:'none',
                work: 'flex',
                contact:'none',
                intro: 'none',

            });

        case 'DISPLAY_CONTACT':
            return ({
                ...state,
                about:'none',
                work: 'none',
                contact:'flex',
                intro: 'none',

            });

        default:
            return state;
    }
}

export default showScreenReducer;