const initialState = {
    collapsed: false
};

export default (state = initialState, action) => {
    console.log(action);
    if (action.type === 'change_collapsed') {
        let newState = JSON.parse(JSON.stringify(state));
        newState.collapsed = action.collapsed;
        return newState;
    }
    return state;
}