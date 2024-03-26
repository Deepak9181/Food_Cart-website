import { Link } from "react-router-dom";
import useOnlineStatus from "../utilis/useOnlinestatus";
import headerLogo from '../Images/header_logo.png';
import { useSelector } from "react-redux";

const Header = () => {

    const online =useOnlineStatus();

    // const {loginUser}=useContext(Userdata);

    // console.log(loginUser);
    const cart= useSelector((store)=>store.cart.items);
    console.log(cart)
    
    return (
      <div className="header  flex  justify-between items-center border bg-gray-900">
        <div className="container-logo">
          <img
            className="logo w-32 ml-10"
            src={headerLogo}
          />
        </div>
        <div className="nav-items">
          <ul className="flex  p-8 text-2xl text-white">
            <li className="mx-4">
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/cart">Cart ({cart.length})</Link>
            </li>
            <li className="mx-4">
              <Link to="/Contact">Contact Us</Link>
            </li>
            <li className="mx-4">
              <Link to="/About">About Us</Link>
            </li>
            <li className="mx-4">
              Online Status :{online?"✅": "🔴"} 
            </li>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;