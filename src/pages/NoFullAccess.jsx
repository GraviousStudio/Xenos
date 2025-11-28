import { useEffect, useState } from "react";
import Card from "../components/Card";
import Navbar from "../components/Navbar";
import CardContainer from "../components/subComponents/CardContainer";
import Footer from '../components/Footer'
import { Link } from "react-router-dom";
// import { useSelector } from "react-redux";

export default function NoFullAccess() {

    const [accounts, setAccounts] = useState([])

    useEffect(() => {
        fetch('https://mocki.io/v1/d948eb17-b5d6-4984-97b4-d80126c22312')
            .then((response) => response.json())
            .then((data) => setAccounts(data))
    }, [])

    // const accounts = useSelector((state) => state.value)

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
                            price={account.price}>
                        </Card>
                    ))}
                </CardContainer>
            </div>

            <Footer></Footer>

        </>
    )
}