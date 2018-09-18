export function deleteUser(args) {
    return {
        type: 'DELETE_USER',
        user: args
    }
}

export function createUser(args) {
    return (dispatch) => {
        fetch('http://localhost:3001/addUser', {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },
            body: JSON.stringify(args)
        })
            .then(resp => resp.json())
            .then((resp) => {
                console.log(resp)
            dispatch({
                    type: 'CREATE_USER',
                    users: resp
                });
        })
    }
}

export function getData() {
    return (dispatch) => {
        fetch('http://localhost:3001/getUsers')
            .then(resp => resp.json())
            .then((resp) => {
                dispatch({
                    type: "GET_DATA",
                    data: resp
                })
            });
    }
}