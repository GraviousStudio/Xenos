import { useEffect, useState } from "react";
import Card from "../components/Card";
import Navbar from "../components/Navbar";
import CardContainer from "../components/subComponents/CardContainer";
import Footer from '../components/Footer'
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/cartSlice";
// import { useSelector } from "react-redux";

export default function NoFullAccess() {

    // const [accounts, setAccounts] = useState([])

    // useEffect(() => {
    //     fetch('/nfa-account.json')
    //         .then((response) => response.json())
    //         .then((data) => setAccounts(data))
    // }, [])

    const dispatch = useDispatch()

    const accounts = useSelector((state => state.nfaAccountReducer))

    const filterAccount = (accountID) => {
        return accounts.filter((acc) => (acc.id == accountID))
    }

    const handlePurchase = (filteredAccount) => {
        dispatch(addToCart(filteredAccount[0]))
    }

    return (
        <>
            <Navbar></Navbar>

            <div>
                <h1 className="text-white text-2xl font-semibold flex justify-center mb-6 mt-3">No Full Access</h1>
                <CardContainer>
                    {accounts.map(account => (
                        <Card
                            key={account.id}
                            img={account.img}
                            title={account.title}
                            desc={account.desc}
                            value={account.value}
                            price={account.price}
                            handlePurchase={() => handlePurchase(filterAccount(account.id))}
                        >
                        </Card>
                    ))}
                </CardContainer>
            </div>

            <Footer></Footer>

        </>
    )
}