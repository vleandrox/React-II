import { useDispatch,useSelector } from "react-redux";
import { limpiarCarrito } from "../store/actions/products";

// interface Props{
//     total: number
// }
interface Props {
    onFinalizarCompra: () => void;
  }
function CartResume({ onFinalizarCompra }: Props) {
 
    const total = useSelector(store=>store.products.total);
    console.log(total);
    // const {totales} = props;
 
    return (        
        <div className="flex flex-col flex-grow basis-[30%] p-[15px] gap-[20px] rounded border bg-slate-100 h-max ">
            <div className="pb-1">
                <h2 className="font-bold text-[20px] mb-[15px] text-center"><span>Resumen </span><span>del </span><span>pedido</span></h2>
                <div className="flex justify-between text-[18px] mb-[20px]  ">
                    <h3 className="font-bold">Total</h3>
                    <strong className="font-bold text-red-500 ">${total}</strong>
                </div>
                <small className="font-bold text-[14px] text-gray-700">Incluye impuesto PAIS y percepción AFIP.</small>
            </div>
            <button 
                className="w-[100%] p-[10px] text-[16px] font-bold bg-red-500 text-white rounded border cursor-pointer" 
                id="buy" 
                type="button"
                onClick={onFinalizarCompra}>
                COMPRAR
            </button>
        </div>
    )
}

export default CartResume