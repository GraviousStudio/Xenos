export default function CardContainer({children}) {
    return (
        <>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 items-center justify-items-center">
                {children}
            </div>
        </>
    )
}