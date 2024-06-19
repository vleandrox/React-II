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
export default productsActions
