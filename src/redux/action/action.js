import { ADD_TO_CART, EMPTY_CART, REMOVE_FROM_CART } from "./constant"

export const  title= (data) => {
    console.warn("action is called", data)
    return {
        type: "ADD_TO_Title",
        data
    }
}

export const addDescription = (data) => {
    console.warn("Description", data)
    return {
        type: "ADD_To_Description",
        data
    }
}

export const addImage = () => {
    console.warn("image",)
    return {
        type: "addImage",
    }
}
export const  Date = () => {
    console.warn("date",)
    return {
        type: "date",
    }
}