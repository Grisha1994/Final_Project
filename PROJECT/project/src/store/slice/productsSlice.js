import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async (id) => {
        const url = id ? `http://127.0.0.1:3333/products/${id}` : 'http://127.0.0.1:3333/products/all'
        const res = await fetch(url)
        const data = await res.json()
        return data
    }
)

export const fetchProductsCategoryID = createAsyncThunk(
    'products/fetchProductsCategoryID',
    async (id) => {
        const res = await fetch(`http://127.0.0.1:3333/categories/${id}`)
        const data = await res.json()
        return data
    }
)

const initialState = {
    category: {},
    list: [],
    status: "",
};

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        priceAction(state, {payload}){
            const {min, max} = payload;

            state.list.forEach(el => {
                const fixedPrice = el.discont_price ?? el.price;
                el.show.price = fixedPrice >= min && fixedPrice <= max;
           })
        },
        sortAction(state, {payload}){
            const {value} = payload;
            if(value === 'default'){
                state.list.sort((a,b) => a.id - b.id)
            }else if(value === 'increasing'){
                state.list.sort((a,b) => (a.discont_price ?? a.price) - (b.discont_price ?? b.price))
            }else  if(value === 'descending'){
                    state.list.sort((a,b) => (b.discont_price ?? b.price) - (a.discont_price ?? a.price))
            }else  if(value === 'title'){
                state.list.sort((a,b) => a.title.localeCompare(b.title))
            }
        },

        filterAction(state, {payload}){
            state.list.forEach(item => {
                item.show.search = item.title.toLowerCase().includes(payload.toLowerCase())
            })
        },

        discont_item(state, {payload}){
            state.list.forEach(item => {item.show.discont = !payload || item.discont_price !== null})
        },
    
        
    },

    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.status = 'loding'
            })
            .addCase(fetchProducts.fulfilled, (state, {payload}) => {
                state.status = 'ready';
                state.list = payload.map((item) => ({
                    ...item,
                    show: { search: true, price: true, discont: true },
                }));
            })
            .addCase(fetchProducts.rejected, (state) => {
                state.status = 'rejected'
            })

            .addCase(fetchProductsCategoryID.pending, (state) => {
                state.status = 'loding'
            })
            .addCase(fetchProductsCategoryID.fulfilled, (state, {payload}) => {
                state.status = 'ready';
                state.category = payload.category;
                state.list = payload.data.map((item) => ({
                    ...item,
                    show: { search: true, price: true, discont: true },
                }));
            })
            .addCase(fetchProductsCategoryID.rejected, (state) => {
                state.status = 'rejected'
            })
    }
})

export const { priceAction, sortAction, filterAction, discont_item } = productsSlice.actions;

export default productsSlice.reducer;