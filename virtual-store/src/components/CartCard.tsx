export default function CartCard({title,color,price,image}) {
    return (
        <>
            <div className="flex flex-grow basis-[60%] flex-col gap-[20px]">
                <article className="flex flex-row items-center bg-slate-100 px-[20px] rounded justify-around flex-wrap "> 
                    <img className="w-[100px] h-[100px] object-cover rounded mr-[20px]" src={image} alt="ipad" />
                    <div className="flex flex-1 flex-col gap-[10px] p-4">
                        <strong className="font-bold text-lg">{title}</strong><span className="text-gray-600 text-[15px] font-bold">- {color}</span>
                        <p className="text-gray-600 text-[15px] font-bold"> Celular de alta gamma de 12.9 pulgadas.</p>
                        <div className="text-gray-600 text-[15px] font-bold">
                            <input className="padding-[5px] text-center w-[50px]"  type="number" name="quantity" value="1" min="1" id="P7Q8R90" />
                        </div>
                    </div>
                    <strong className="font-bold p-2 text-[18px] text-black sm:text-red-400 md:text-blue-500 lg:text-green-700 ">S/.{price}</strong>
                </article>                                               
            </div>
        </>
    )
}
