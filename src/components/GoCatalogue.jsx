import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function GoCatalogue() {

    return (
        <>
            <div className="flex flex-col lg:flex-row p-3 m-3 gap-10 lg:items-center">
                <div className="w-1/2">
                    <h1 className="text-white text-3xl font-semibold">Sei in cerca di un account!?</h1>
                    <h2 className="text-zinc-400 text-xl font-semibold capitalize">Esplora il catalogo di Xenos</h2>
                    <h2 className="text-white text-xl font-semibold capitalize">Clicca qui sotto</h2>
                    <Link to={'/full-access'}><button className="text-white p-3 px-6 mt-6 bg-blue-600 rounded-2xl cursor-pointer"><i className="fa-solid fa-angle-right bg-zinc-400/80 rounded-2xl px-1 py-0.5"></i> CATALOGO</button></Link>
                </div>
                <div className="bg-zinc-900 w-full rounded-3xl transition-all ease-in-out duration-300 hover:shadow-2xl hover:shadow-violet-800">
                    <img src={'https://ichef.bbci.co.uk/ace/standard/976/cpsprodpb/8BB6/production/_103466753_fort.jpg'} alt="" className="w-full h-full rounded-3xl"/>
                </div>
            </div>
        <br /><hr /><br />
        </>
    )
}
