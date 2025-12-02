import { useEffect, useState } from "react";
import Card from "./Card";
import CardContainer from "./subComponents/CardContainer";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/cartSlice";

export default function BestSeller() {

    // const [accounts, setAccounts] = useState([])

    // useEffect(() => {
    //     fetch('/fa-account.json')
    //         .then((response) => response.json())
    //         .then((data) => setAccounts(data))
    // }, [])

    const accounts = useSelector((state) => state.faAccountReducer)

    const dispatch = useDispatch()
    
    const filterAccount = (accountID) => {
        return accounts.filter((acc) => (acc.id == accountID))
    }

    const handlePurchase = (filteredAccount) =>{
        dispatch(addToCart(filteredAccount[0]))
    }

    return (
        <>
            <section className="p-3">
                <h1 className="text-white text-2xl font-semibold flex justify-center mb-6">Best Seller</h1>
                <CardContainer>
                    {accounts[0] && <Card title={accounts[0].title} img={accounts[0].img} desc={accounts[0].desc} price={accounts[0].price} value={'€'} handlePurchase={() => handlePurchase(filterAccount(0))}/>}
                    {accounts[7] && <Card title={accounts[7].title} img={accounts[7].img} desc={accounts[7].desc} price={accounts[7].price} value={'€'} handlePurchase={() => handlePurchase(filterAccount(7))}/>}
                    {accounts[13] && <Card title={accounts[13].title} img={accounts[13].img} desc={accounts[13].desc} price={accounts[13].price} value={'€'} handlePurchase={() => handlePurchase(filterAccount(13))}/>}
                    {accounts[12] && <Card title={accounts[12].title} img={accounts[12].img} desc={accounts[12].desc} price={accounts[12].price}  handlePurchase={() => handlePurchase(filterAccount(12))}/>}
                </CardContainer>
            </section>
        </>
    )
}
