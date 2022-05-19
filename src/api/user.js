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