import { FaHome, FaMailBulk } from "react-icons/fa";
import { RiWallet3Line } from "react-icons/ri";
import { AiOutlineAppstore } from "react-icons/ai";
const options = [
    {
        title: 'Home',
        icon: <FaHome />,
        id: 1
    },
    {
        title: 'Payments',
        icon: <RiWallet3Line />,
        id: 2
    },
    {
        title: 'Portfolio',
        icon: <FaMailBulk />,
        id: 3
    },
    {
        title: 'More',
        icon: <AiOutlineAppstore />,
        id: 4
    },
]
const Sidebar = () => {
    return (
        <div>
            <div>
                <img src="/assets/MPM logo.png" />
            </div>
            <div>
                {
                    options.map((option) => (
                        <div key={option.id}>
                            <div>{option.icon}</div>
                            <p>{option.title}</p>
                        </div>
                    )
                    )}
            </div>
        </div>
    )
}
export default Sidebar;