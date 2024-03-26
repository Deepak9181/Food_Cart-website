import { useState } from "react";
import AccordianDetails from "./AccordianDetails";

const AccordianMenu = (props) => {
  const { data ,showItem,setexpand} = props;

  const onhandle = () => {
    setexpand(); 
  } 
  
  return (
    <div>
      <div className="bg-gray-50 my-3 f w-6/12 m-auto p-4">
        <div
          className=" flex justify-between p-4 font-bold text-lg text-gray-800 cursor-pointer"
          onClick={onhandle}
        >
          <span>
            {data.title} ({data?.itemCards.length})
          </span>
          <span>⬇️</span>
        </div>
        {showItem && <AccordianDetails items={data?.itemCards} showbutton={true}/>}
      </div>
    </div>
  );
};

export default AccordianMenu;
