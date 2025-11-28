import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import BestSeller from '../components/BestSeller'
import Carousiel from "../components/Carousiel";
import { Link } from "react-router-dom";

export default function Contact() {
    return (
        <>
            <Navbar></Navbar>
            <Carousiel></Carousiel>
            <br /><hr /><br />
            <div className="flex flex-col justify-center items-center w-full">
                <h1 className="text-white text-xl font-semibold">Contattaci su Telegram</h1>
                <Link to={'https://t.me/Xenos'} target="_blank">
                <button className="text-white p-3 px-6 m-3 bg-blue-600 rounded-2xl cursor-pointer"><i class="fa-brands fa-telegram"></i> Contattaci!</button>
                </Link>
            </div>
            <br /><hr /><br />
            <BestSeller></BestSeller>
            <Footer></Footer>
        </>
    )
}