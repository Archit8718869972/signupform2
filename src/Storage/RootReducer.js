const initialState = {
    user_first: {},
    user_second: {}   //it is a reducer(json) 
};

export default function RootReducer(state = initialState, action) //action Contain type and payload 
{
    switch (action.type) {
        case 'ADD_USER1':

            state.user_first[action.payload[0]] = action.payload[1]
            console.log("Redux User1:", state.user_first)
            return { user_first: state.user_first, user_second: state.user_second }
        case 'ADD_USER2':

            state.user_second[action.payload[0]] = action.payload[1]
            console.log("Redux User2:", state.user_second)
            return { user_first: state.user_first, user_second: state.user_second }
    
        default:
            return state;
    }

}
