import { createReducer } from "@reduxjs/toolkit";
import productsActions from "../actions/products";
import { calcularTotal } from "../actions/products";
import { limpiarCarrito } from "../actions/products";

const { captureText } = productsActions;

const initialState = { text: "", total:0 };

const productsReducer = createReducer(initialState, (builder) => {
  builder.addCase(captureText, (state, action) => {
    const newState = {
      ...state,
      text: action.payload.text,
    };
    return newState;
  }).addCase(calcularTotal, (state, action) => {
    const products = action.payload.products
    const subtotals = products.map((product) => product.price * product.units);
    const total = subtotals.reduce((acc:number,val:number)=> acc + val);
    const newState = {
      ...state,
      total,
    };
    return newState;    
  }).addCase(limpiarCarrito, (state) => {
    const newState = {
      ...state,
      total:0
    };
    return newState;
  })
  ;
});

export default productsReducer;

