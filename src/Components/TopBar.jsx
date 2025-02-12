const TopBar = ({name}) => {
    return (
        <>
            <div className="flex justify-between lg:bg-transparent lg:text-black text-white lg:py-2 lg:mt-0 mt-3 p-10 rounded-3xl bg-myGreen px-7 lg:shadow lg:rounded-full items-center">
                <div>
                    <h4 className="text-silver">Hello there, </h4>
                    <h4 className="font-semibold">Welcome {name}</h4>
                </div>

                <div className="flex items-center">
                    <h4>Auto pay</h4>
                    <h4>OO</h4> 
                </div>
            </div>
        </>
    )
}
export default TopBar