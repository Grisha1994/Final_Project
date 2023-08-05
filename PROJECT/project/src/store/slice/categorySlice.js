import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchCategories = createAsyncThunk(
    'categories/fetchCategories',
    async () => {
        // const url = id ? `http://127.0.0.1:3333/categories/${id}` : 'http://127.0.0.1:3333/categories/all'
        const res = await fetch('http://127.0.0.1:3333/categories/all')
        const data = await res.json()
        return data
    }
)

export const categoriesSlice = createSlice({
    name: 'categories',
    initialState: {list: []},
    reducers: {},

    extraReducers: (builder) => {
        builder
            .addCase(fetchCategories.pending, (state) => {
                state.status = 'loding'
            })
            .addCase(fetchCategories.fulfilled, (state, {payload}) => {
                state.status = 'ready';
                state.list = payload;
            })
            .addCase(fetchCategories.rejected, (state) => {
                state.status = 'rejected'
            })
    }
})

export default categoriesSlice.reducer;