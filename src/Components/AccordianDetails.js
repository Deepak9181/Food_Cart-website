import { MENU_IMG } from "../utilis/contsant";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../utilis/cartSlice";

const AccordianDetails = ({ items ,showbutton}) => {

  const dispatch = useDispatch();
 
  const handleClick=(item)=>{
      dispatch(addItem(item));
  }
  console.log(items);
  return (
    <div className=" mx-2">
      {items.map((item) => (
        <div
          className="my-3 border-gray-300 border-b-2 flex justify-between"
          key={item?.card?.info?.id}
        >
          <div className="text-sm text-start w-9/12  text-gray-700">
            <div className="name font-bold"> {item?.card?.info?.name}</div>
            <div className="price font-bold">
              Rs.
              {item?.card?.info?.price
                ? item?.card?.info?.price / 100
                : item?.card?.info?.defaultPrice / 100}
            </div>
            <div className="description  pr-4 mb-6">
              {item?.card?.info?.description}
            </div>
          </div>
          <div className="logo w-3/12">
            {item?.card?.info?.imageId !== undefined && (
              <img
                className="w-[118px] h-[96px] my-4  ml-12 rounded-md"
                src={MENU_IMG + item.card.info.imageId}
              />
            )}
            {showbutton &&<button className="bg-black text-white relative  bottom-[40px] left-[20px] px-2 rounded-md"
            onClick={()=>handleClick(item)}>
              Add +
            </button>}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AccordianDetails;
