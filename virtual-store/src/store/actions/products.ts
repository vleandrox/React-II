import { createAction } from "@reduxjs/toolkit";

const captureText = createAction(
    "CAPTURE_TEXT", 
    (obj) => {
        return {
            payload:{ text : obj.text }
        }
    }
)
const calcularTotal = createAction(
    "CALCULAR_TOTAL", 
    (obj) => {
        return {
            payload:{ products : obj.products }
        }
    }
)
const limpiarCarrito = createAction("LIMPIAR_CARRITO")

const productsActions = { captureText };
export default productsActions;
export { captureText,calcularTotal,limpiarCarrito }


