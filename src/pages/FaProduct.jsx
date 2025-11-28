import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";

function FaProduct() {

    const [accounts, setAccounts] = useState([])

    const {cardID} = useParams();

    useEffect(() => {
            fetch('/fa-account.json')
                .then((response) => response.json())
                .then((data) => setAccounts(data))
        }, [])

        const account = accounts.filter(acc => acc.id == cardID)

    return (
        <>
            <Navbar></Navbar>
            <div className="flex flex-col lg:flex-row p-3 m-3 gap-10 lg:items-center">
                <div>
                    <h1 className="text-white text-3xl font-semibold">{account[0].title}</h1>
                    <h2 className="text-zinc-700 text-xl font-semibold capitalize">{account[0].desc}</h2>
                    <h2 className="text-white text-xl font-semibold capitalize">Prezzo: {account[0].price}</h2>
                    <button className="text-white p-3 px-6 mt-6 bg-blue-600 rounded-2xl cursor-pointer">AQUISTA</button>
                </div>
                <div className="bg-zinc-900 w-full rounded-3xl transition-all ease-in-out duration-300 hover:shadow-2xl hover:shadow-violet-800">
                    <img src={account[0].img} alt="" className="w-full h-full rounded-3xl"/>
                </div>
            </div>
            <Footer></Footer>
        </>
    )
}

export default FaProduct