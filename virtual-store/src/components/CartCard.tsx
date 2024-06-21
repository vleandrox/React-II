import { useRef } from "react"
import Product from "../interfaces/Product";
import ProductProp from "../interfaces/ProductProp";
import { useDispatch} from "react-redux";
import { calcularTotal } from "../store/actions/products";

export default function CartCard(props:ProductProp) {
    const { product } = props;
    const { id, title, images, price, colors,units } = product;
    const unitsToBuy = useRef();
    const dispatch = useDispatch();
    const manageUnits = () => {
        const productsOnCart = JSON.parse(localStorage.getItem("cart") ?? "[]"); 
        console.log(productsOnCart);
        const one = productsOnCart?.find((each: Product) => each.id === product.id);
        console.log(one);
        if (one) {
            one.units = Number(unitsToBuy.current.value);
            console.log(one.units);
            localStorage.setItem("cart", JSON.stringify(productsOnCart));
            dispatch(calcularTotal({products: productsOnCart}));
        }
    };

    return (
        <>

            <article className="flex flex-row items-center bg-slate-100 px-[20px] rounded justify-around flex-wrap ">
                <img className="w-[100px] h-[100px] object-cover rounded mr-[20px]" src={images[0]} alt="ipad" />
                <div className="flex flex-1 flex-col gap-[10px] p-4">
                    <strong className="font-bold text-lg">{title}{id}</strong><span className="text-gray-600 text-[15px] font-bold">- {colors[0]}</span>
                    <p className="text-gray-600 text-[15px] font-bold"> Celular de alta gamma de 12.9 pulgadas.</p>
                    <div className="text-gray-600 text-[15px] font-bold">
                        <input className="padding-[5px] text-center w-[50px]"                            
                            type="number"
                            name="quantity"
                            defaultValue={units}
                            ref={unitsToBuy}
                            onChange={manageUnits}
                            min="1"
                            id={id}
                        />
                    </div>
                </div>
                <strong className="font-bold p-2 text-[18px] text-black sm:text-red-400 md:text-blue-500 lg:text-green-700 ">S/.{price}</strong>
            </article>

        </>
    )
}
