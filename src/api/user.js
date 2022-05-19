import serve from "./request"

export  const getUser = (params) => {
    return serve({
        url:'/users',
        params,
    })
}

export const changeUserState = (uid,type) => {
    return serve({
        url:`/users/${uid}/state/${type}`,
        method:'put'
    })
}

export const addUser = (data) => {
    return serve({
        url:'users',
        method:'post',
        data,
    })
}

export const deleteUser = (id) => {
    return serve({
        url:`users/${id}`,
        method:'delete',
    })
}

export const editUser = (data) => {
    return serve({
        url:`users/${data.id}`,
        method:'put',
        data,
    })
}