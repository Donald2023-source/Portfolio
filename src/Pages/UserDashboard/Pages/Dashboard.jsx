import BalanceCard from "../../../Components/BalanceCard"
import TopBar from "../../../Components/TopBar"

const Dashboard = () => {
    return (
        <div className="py-2 w-full bg-silver">
            <TopBar name={'Sonia'} />

            <div>
                <span className="lg:block hidden md:block"><BalanceCard /></span>
            </div>
        </div>
    )
}
export default Dashboard