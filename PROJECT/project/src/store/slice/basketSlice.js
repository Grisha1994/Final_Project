import { createSlice } from "@reduxjs/toolkit";

const read = () => {
    return JSON.parse(localStorage.getItem('basket')) ?? []
 };
 
 const write = (data) => {
     localStorage.setItem('basket', JSON.stringify(data))
 };

 export const basketSlice = createSlice({
    name: 'products',
    initialState: {list: read()},
    reducers: {

        basket(state, {payload}){
           const target = state.list.find(({id}) => id === payload);
            if(!target) {
                state.list.push({id: payload,  count: 1})
            }else{
                target.count++
            }
            write(state.list)
        },

        plus(state, {payload}){
            state.list.find(({id}) => id === payload).count++
            write(state.list)
        },     

        minus(state, {payload}){
            const target = state.list.find(({id}) => id === payload);
                target.count--;

                state.list = target.count === 0
                ? state.list.filter(({id}) => id !== payload)
                : state.list
                write(state.list)
        }, 
        remove(state, {payload}){
            state.list = state.list.filter(({id}) => id !== payload);
            write(state.list)
        },
    },
})

export const { 
    basket,
    plus,
    minus,
    remove
} = basketSlice.actions;

export default basketSlice.reducer;