import { Link } from "react-router-dom";

export default function Card({ title, desc, img, price }) {
    return (
        <>
            <Link to={`https://t.me/Xenos`} target="_blank">

                <div className="bg-zinc-900 w-72 rounded-2xl cursor-pointer transition-all ease-in-out duration-300 hover:shadow-2xl hover:shadow-violet-800 my-3">
                    <img src={img} alt="" width={300} height={200} className="rounded-t-2xl" />
                    <div className="p-3">
                        <h1 className="text-white text-2xl font-semibold mb-3">{title}</h1>
                        <p className="text-left text-white mb-3 truncate">{desc}</p>
                        <span className="flex flex-row justify-between">
                            <h2 className="text-white text-xl">PREZZO:</h2>
                            <h2 className="text-white text-xl">{price}</h2>
                        </span>
                    </div>
                    <div className="flex justify-center m-3">
                        <img src={'https://www.pngitem.com/pimgs/m/47-479964_accepted-payment-types-payment-types-hd-png-download.png'} className="rounded-4xl border-2 border-violet-900" alt="" width={200} />
                    </div>
                </div>
            </Link>
        </>
    )
}