const CounterReducer = (state = 0, action) => {
    switch (action.type) {
        case 'increment':
            return state + 1
     
        default:return 1
    }

};
export default CounterReducer;