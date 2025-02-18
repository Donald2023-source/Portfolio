import BalanceCard from "../../../Components/BalanceCard"
import TopBar from "../../../Components/TopBar"

const Dashboard = () => {
    return (
        <div className="py-2 w-full bg-silver">
            <TopBar name={'Sonia'} />

            <div className="flex w-full">
                <div className="w-full flex flex-col gap-2 py-3">
                    <span className="lg:block hidden md:block"><BalanceCard /></span>
                </div>
            </div>
        </div>
    )
}
export default Dashboard