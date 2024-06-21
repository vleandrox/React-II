import { createAction } from "@reduxjs/toolkit";

const captureText = createAction(
    "CAPTURE_TEXT", 
    (obj) => {
        return {
            payload:{ text : obj.text }
        }
    }
)

const productsActions = { captureText };

const calcularTotal = createAction(
    "CALCULAR_TOTAL", 
    (obj) => {
        return {
            payload:{ products : obj.products }
        }
    }
)
export default productsActions
export { captureText,calcularTotal }


