import BalanceCard from "../../../Components/BalanceCard"
import TopBar from "../../../Components/TopBar"

const Dashboard = () => {
    return (
        <div className="py-2 w-full bg-silver">
            <TopBar name={'Sonia'} />

            <div>
                <BalanceCard />
            </div>
        </div>
    )
}
export default Dashboard