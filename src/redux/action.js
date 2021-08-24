export const incrementCreater = (value) =>{   //hum ek function bnate hai jo action object return krta hai
    return {
        type:"increment",  //action ka type
        payload: value,
    }
}
export const decrementCreater = () =>{
    return {
        type:"decrement",
    }
}

export const loginCreater = () =>{
    return {
        type:"Login",
    }
}

export const logoutCreater = () =>{
    return {
        type:"LogOut",
    }
}