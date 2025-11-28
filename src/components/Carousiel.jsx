import { useState } from "react"

export default function Carousiel() {

    const [count, setCount] = useState(0)

    const addCount = () => {
        setCount(count + 1)
        if (count > 2) setCount(0);
        console.log(count)
    }

    const subCount = () => {
        setCount(count - 1)
        if (count < 0) setCount(2);
    }

    return (

        <>
            <div className="flex h-72 w-full items-center justify-between" 
                style={{
                    backgroundImage:
                        `url(${
            (count == 0)
                ? 'https://cms-assets.unrealengine.com/cm6l5gfpm05kr07my04cqgy2x/cmhc4tb6o12x707n4v9vuvn9q'
                : (count == 1)
                ? 'https://cms-assets.unrealengine.com/cm6l5gfpm05kr07my04cqgy2x/output=format:webp/cmi95sjnv1g8z07oinjdrgqrj'
                : (count == 2)
                ? 'https://www.thegamesmachine.it/wp-content/uploads/2022/12/Fortnite-apertura.jpg'
                : 'https://media.gqitalia.it/photos/5fa93de4cfd72e47c24a0cd1/16:9/w_2560%2Cc_limit/fortnite-battle-royale-1920x1080-864336699.jpg' 
        })`, 
        backgroundSize: '100% auto',
        backgroundRepeat: 'no-repeat',
                }}>
                <div className="flex justify-between w-full h-max-72 items-center">
                    <div className="flex text-zinc-900 cursor-pointer rounded-4xl bg-zinc-400/60 p-1 m-3 items-center justify-center">
                        <button className="cursor-pointer" onClick={addCount}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="size-12">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                            </svg>
                        </button>

                    </div>

                    <div className="flex text-zinc-900 cursor-pointer rounded-4xl bg-zinc-400/60 p-1 m-3 items-center justify-center">
                        <button className="cursor-pointer" onClick={subCount}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="size-12">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                            </svg>
                        </button>

                    </div>
                </div>
            </div>
        </>
    )
}