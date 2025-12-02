import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import BestSeller from '../components/BestSeller'
import Carousiel from "../components/Carousiel";
import Product from "../components/Product";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../redux/cartSlice";

export default function Cart() {

    const products = useSelector((state) => state.cartReducer)

    const dispatch = useDispatch()

    const handleRemove = (id) =>{
        dispatch(removeFromCart(id))
    }
    
    return (
        <>
            <Navbar></Navbar>
            <Carousiel></Carousiel>
            <br /><hr /><br />
            <div className="flex flex-col justify-center items-center w-full gap-10">
                <h1 className="text-white text-xl font-semibold capitalize">il tuo carrello</h1>
                <div>
                    {products.map(product => (
                        <Product
                            key={product.id}
                            img={product.img}
                            title={product.title}
                            value={product.value}
                            price={product.price}
                            quantity={product.quantity}
                            handleRemove={() => handleRemove(product.id)}>
                        </Product>
                    ))}
                </div>
            </div>
            <br /><hr /><br />
            <BestSeller></BestSeller>
            <Footer></Footer>
        </>
    )
}