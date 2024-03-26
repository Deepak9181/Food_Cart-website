import { useDispatch, useSelector } from "react-redux";
import AccordianDetails from "./AccordianDetails";
import { clearCart, removeItem } from "../utilis/cartSlice";

const Cart =()=>{

    const cart = useSelector((store)=>store.cart.items);
    console.log(cart)

    let total=0;

    cart.forEach((ele)=>{
        total=total+ele?.card?.info?.price;
    })

    // console.log(total/100);

    const dispatch=useDispatch();
    
    const handleClick=()=>{
        dispatch(clearCart());
    }

    const handlecart=()=>{
        dispatch(removeItem())
    }
    return(
        <div className="text-center m-8">
        <h1 className="font-bold text-2xl ">Cart</h1>
        <div className="cart-container w-6/12 m-auto">
            <button  className="m-2 p-2 bg-black text-white rounded-md"onClick={handleClick}>Clear Cart</button>
            <div>
                <button onClick={handlecart}>
                    <AccordianDetails items={cart} showbutton={false}/>
                </button>
            </div>
            <div className="total-container font-bold text-xl">
                <h1>Total Price :{total/100}</h1>
            </div>
        </div>
        </div>
    )
}

export default Cart