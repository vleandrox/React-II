import { useRef } from "react"

export default function CartCard(product) {
    const { id, title, image, price, color, quantity } = product;
    const units = useRef();
    const manageUnits = () => {
        const productsOnCart = JSON.parse(localStorage.getItem("cart") ?? "[]");
        console.log(productsOnCart)
        const one = productsOnCart.find((each) => each.id === id);
        console.log(one)
        if (one) {
            one.units = Number(units.current.value);
            localStorage.setItem("cart", JSON.stringify(productsOnCart));
        }
    };

    return (
        <>

            <article className="flex flex-row items-center bg-slate-100 px-[20px] rounded justify-around flex-wrap ">
                <img className="w-[100px] h-[100px] object-cover rounded mr-[20px]" src={image} alt="ipad" />
                <div className="flex flex-1 flex-col gap-[10px] p-4">
                    <strong className="font-bold text-lg">{title}{id}</strong><span className="text-gray-600 text-[15px] font-bold">- {color}</span>
                    <p className="text-gray-600 text-[15px] font-bold"> Celular de alta gamma de 12.9 pulgadas.</p>
                    <div className="text-gray-600 text-[15px] font-bold">
                        <input className="padding-[5px] text-center w-[50px]"
                            id={id}
                            type="number"
                            name="quantity"
                            defaultValue={quantity}
                            ref={units}
                            onChange={manageUnits}
                            min="1"
                        />
                    </div>
                </div>
                <strong className="font-bold p-2 text-[18px] text-black sm:text-red-400 md:text-blue-500 lg:text-green-700 ">S/.{price}</strong>
            </article>

        </>
    )
}
