export default function Product({img, title, value, price, quantity, handleRemove}) {
    return (
        <>
            <div className="flex flex-row gap-10 m-3 lg:m-0 lg:mb-3">
                <div className="w-1/2">
                    <img src={img} alt="" width={250} className="rounded-2xl" />
                </div>
                <div className="flex flex-col w-1/2 gap-2">
                    <h2 className="text-white text-2xl font-semibold">{title}</h2>
                    <div className="flex text-white font-semibold justify-between">
                        <p>PREZZO:</p> <p>{value}{price * quantity}</p>
                    </div>
                    <span className="flex justify-between gap-10 items-center text-white">
                        <span className="flex flex-col">
                            <label htmlFor="quantity">Quantità:</label>
                            <input type="number" name="quantity" id="quantity" className="border border-solid border-white bg-zinc-600 w-10 text-center" value={quantity} />
                        </span>
                        <button onClick={handleRemove} className="bg-zinc-400 rounded-full p-2 flex items-center justify-center cursor-pointer hover:bg-red-800 text-red-800 hover:text-white"><i className="fa-solid fa-trash"></i></button>
                    </span>
                </div>
            </div>
        </>
    )
}