export const initialState={
    basket:[],
    user:null
}
//Selector
export const getBasketTotal=(basket)=>
 basket?.reduce((amount, item)=>item.price + amount,0 )

 const reducer=(state, action)=>{
     console.log(action);
    switch (action.type) {
        case 'ADD_TO_BASKET': 
        return{
            ...state,
            basket:[...state.basket, action.item],
        }
        case 'REMOVE_FROM_CART':
           const index= state.basket.findIndex(
               (basketItem)=>basketItem.id===action.id
           )    
           const newBasket= [...state.basket]
           if(index>=0){
               newBasket.splice(index, 1)
               //removing product by splice method
           }
           else{
               console.warn(`this item of (id:${action.id})is not in my list`)
           }
           return{
               ...state,
               basket: newBasket
           }
           case 'SET_USER':
               return{
                   ...state,
                   user: action.user
               }

        default:
            return state
    }
}
export default reducer;