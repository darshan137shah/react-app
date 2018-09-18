const initState = [];

export default function reducer(state = initState, action) {
    switch(action.type) {
        case "DELETE_USER":
            return state = state.filter((item) => {
                return item.name!==action.user;
            });

        case "CREATE_USER":
            return state = [...state, action.users];

        case "GET_DATA":
            return state = action.data;
    }
    return state;
}