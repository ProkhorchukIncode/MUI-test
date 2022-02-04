export const setGoods = (payload) => ({
    type: 'ADD_GOODS',
    payload: payload
})

export const deleteGoods = (payload) => ({
    type: 'DELETE_GOODS',
    payload: payload
})

export const clearGoods = (payload) => ({
    type: 'CLEAR_GOODS',
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
        case 'CLEAR_GOODS':
            return {
                ...state,
                goods: []
            }
        default:
            return state
    }
}

export default goodsReducer