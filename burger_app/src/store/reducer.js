import * as actionType from "./actions"
const INGREDIENT_PRICES = {
    salad: 0.5,
    bacon: 0.3,
    cheese: 0.8,
    meat: 1,
}

const initialState = {
    ingredients: {
        salad: 0,
        bacon: 0,
        cheese: 0,
        meat: 0,

    },
    totalPrice: 4,
    orderSent: false,

}

export default (state = initialState, { type, payload }) => {
    switch (type) {

        case actionType.ADD_INGREDIENT:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [payload.ingredientName]: state.ingredients[payload.ingredientName] + 1
                },
                totalPrice: state.totalPrice + INGREDIENT_PRICES[payload.ingredientName]
            }

        case actionType.REMOVE_INGREDIENT:
            console.log(state.totalPrice);
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [payload.ingredientName]: state.ingredients[payload.ingredientName] - 1
                },
                totalPrice: state.totalPrice - INGREDIENT_PRICES[payload.ingredientName]

            }

        case actionType.ORDER_SENT:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                },
                orderSent: true,
            }
        case actionType.CLOSE_MODAL:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                },
                orderSent: false,
            }

    default:
        return state
    }
}
