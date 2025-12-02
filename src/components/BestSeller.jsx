import { useEffect, useState } from "react";
import Card from "./Card";
import CardContainer from "./subComponents/CardContainer";
import { useSelector } from "react-redux";

export default function BestSeller() {

    // const [accounts, setAccounts] = useState([])

    // useEffect(() => {
    //     fetch('/fa-account.json')
    //         .then((response) => response.json())
    //         .then((data) => setAccounts(data))
    // }, [])

    const accounts = useSelector((state) => state.faAccountReducer)

    return (
        <>
            <section className="p-3">
                <h1 className="text-white text-2xl font-semibold flex justify-center mb-6">Best Seller</h1>
                <CardContainer>
                    {accounts[0] && <Card title={accounts[0].title} img={accounts[0].img} desc={accounts[0].desc} price={accounts[0].price} value={'€'}/>}
                    {accounts[7] && <Card title={accounts[7].title} img={accounts[7].img} desc={accounts[7].desc} price={accounts[7].price} value={'€'}/>}
                    {accounts[13] && <Card title={accounts[13].title} img={accounts[13].img} desc={accounts[13].desc} price={accounts[13].price} value={'€'}/>}
                    {accounts[12] && <Card title={accounts[12].title} img={accounts[12].img} desc={accounts[12].desc} price={accounts[12].price} />}
                </CardContainer>
            </section>
        </>
    )
}
