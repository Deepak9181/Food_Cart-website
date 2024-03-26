import Shrimmer from "./Shrimmer";
import { useParams } from "react-router-dom";
import useMenuData from "../utilis/useMenuData";
import AccordianMenu from "./AccordianMenu";
import { useState } from "react";

const Menu = () => {
  const[expand,setexpand]=useState(null);

  
  const { id } = useParams();

  const resInfo = useMenuData(id);

  //  console.log(resInfo)
  //  console.log(resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR);

  if (resInfo === null) return <Shrimmer />;

  const { name, cuisines, locality } =
    resInfo?.data?.cards[0]?.card?.card?.info;

  // console.log(resInfo);

  let { cards } = resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR
    ? resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR
    : resInfo?.data?.cards[0]?.groupedCard?.cardGroupMap?.REGULAR;

  // console.log(cards);

  const Menulist = cards.filter(
    (c) =>
      c?.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  //  console.log(Menulist);

  return (
    <div className="menu-container text-center ">
      <h1 className="my-5 text-2xl font-bold">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(",")} - {locality}
      </p>

      {Menulist.map((menu,index) => (
        <AccordianMenu key={menu?.card?.card?.title} 
        data={menu?.card?.card}
        showItem ={index===expand && true}
        setexpand={()=>setexpand(index)}/>
      ))}
    </div>
  );
};

export default Menu;
