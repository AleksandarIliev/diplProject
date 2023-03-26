export const productReducer = (state, action) => {
    switch (action.type) {
        case "PRODUCT_FETCH":
            return action.product
            break;
        case "ADD_COMMENT":
            return {
                ...state,
                comment: [
                    ...state.comments,
                    {
                        ...action.payload, 
                        author: {
                            email: action.email,
                        }
                    }
                ]
            }
        default:
            return state;
            break;
    }
}
