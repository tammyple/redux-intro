import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "product",
  initialState: [
    { id: "p1", title: "Product 1", price: 1000 },
    { id: "p2", title: "Product 2", price: 500 },
  ],
  reducers: {},
});
