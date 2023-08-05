import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// const myConsole = (data) => {
//     const stateStringify = JSON.stringify(data);
//     console.log(JSON.parse(stateStringify));
// };

export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async () => {
        // const url = id ? `http://127.0.0.1:3333/products/${id}` : 'http://127.0.0.1:3333/products/all'
        const res = await fetch('http://127.0.0.1:3333/products/all')
        const data = await res.json()
        return data
    }
)

export const fetchProductsID = createAsyncThunk(
    'products/fetchProductsID',
    async (id) => {
        const res = await fetch(`http://127.0.0.1:3333/products/${id}`)
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
// export const fetchProductID = createAsyncThunk(
//     'products/fetchProductID',
//     async (id) => {
//         const url = `http://127.0.0.1:3333/products/${id}`
//         const res = await fetch(url)
//         const data = await res.json()
//         return data
//     }
// )


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
            // console.log(payload);
            const {min, max} = payload;

            state.list.forEach(el => {
                const fixedPrice = el.discont_price ?? el.price;
                el.show.price = fixedPrice >= min && fixedPrice <= max;
           })
        //    myConsole(state);
        },
        sortAction(state, {payload}){
            // console.log(payload);
            const {value} = payload;
            if(value === 'default'){
                state.list.sort((a,b) => a.id - b.id)
            }else if(value === 'increasing'){
                state.list.sort((a,b) => a.price - b.price)
            }else  if(value === 'descending'){
                    state.list.sort((a,b) => b.price - a.price)
            }else  if(value === 'title'){
                state.list.sort((a,b) => a.title.localeCompare(b.title))
            }
            // myConsole(state);
        },
        discont_item(state, {payload}){
            // console.log(payload);
            state.list.forEach(item => {item.show.discont = !payload || item.discont_price !== null})
            
            // myConsole(state);
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


            .addCase(fetchProductsID.pending, (state) => {
                state.status = 'loding'
            })
            .addCase(fetchProductsID.fulfilled, (state, {payload}) => {
                state.status = 'ready';
                state.list = payload.map((item) => ({
                    ...item,
                    show: { search: true, price: true, discont: true },
                }));
            })
            .addCase(fetchProductsID.rejected, (state) => {
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

export const { priceAction, sortAction, discont_item } = productsSlice.actions;

export default productsSlice.reducer;