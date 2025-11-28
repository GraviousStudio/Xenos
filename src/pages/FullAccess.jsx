import { useEffect, useState } from "react";
import Card from "../components/Card";
import Navbar from "../components/Navbar";
import CardContainer from "../components/subComponents/CardContainer";
import Footer from '../components/Footer'
import { Link } from "react-router-dom";
// import { useSelector } from "react-redux";

export default function FullAccess() {

    const [accounts, setAccounts] = useState([])

    useEffect(() => {
        fetch('/public/fa-account.json')
            .then((response) => response.json())
            .then((data) => setAccounts(data))
    }, [])

    // const account = useSelector((faAccount) => state.faAccount.value)

    return (
        <>
            <Navbar></Navbar>

            <div>
                <h1 className="text-white text-2xl font-semibold flex justify-center mb-6 mt-3">Full Access</h1>
                <CardContainer>
                    {accounts.map(account => (
                        <Link to={`https://t.me/Xenos`} >
                            <Card
                                key={account.id}
                                img={account.img}
                                title={account.title}
                                desc={account.desc}
                                price={account.price}>
                            </Card>
                        </Link>
                    ))}
                </CardContainer>
            </div>

            <Footer></Footer>

        </>
    )
}