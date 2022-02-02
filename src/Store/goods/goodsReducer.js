export const setGoods = (payload) => ({
    type: 'ADD_GOODS',
    payload: payload
})

export const deleteGoods = (payload) => ({
    type: 'DELETE_GOODS',
    payload: payload
})

const initialState = {
    goods: [],
}

const goodsReducer = (state=initialState, action) => {
    switch(action.type){
        case 'ADD_GOODS':
            return {
                ...state,
                goods: [...state.goods,action.payload]
            }
        case 'DELETE_GOODS':
            return {
                ...state,
                goods: state.goods.filter(el=> el.id!==action.payload)
            }
        default:
            return state
    }
}

export default goodsReducer