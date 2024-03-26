import { LOGO_URL } from "../utilis/contsant";

const Food = (props) => {
  const { resData } = props;

  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
    resData?.info;

  return (
      <div className="food m-3 p-4 w-[240px] bg-gray-200 rounded-sm hover:bg-gray-300 hover:shadow-black shadow-sm">
        <img
          className="food-photo h-[210px] w-[220px]"
          src={
              LOGO_URL +
            cloudinaryImageId
          }
          alt="food-pic"
        />
        <h2 className="font-bold py-2 text-lg">{name}</h2>
        <h3>{cuisines.join(", ")}</h3>
        <h3>{avgRating}</h3>
        <h3>{costForTwo}</h3>
        <h4>{resData?.info?.sla?.deliveryTime} mins</h4>
    </div>

  
  );
};

// Higher order function

 export const FoodwithLabel=(Food)=>{
  return(props)=>{
    const {resData}=props;
    const{header,subHeader}=resData?.info?.aggregatedDiscountInfoV3;
    return(
      <div>
        <label className=" absolute mt-0.7 ml-[12px] p-1 bg-black text-white rounded-sm">{header} {subHeader}</label>
        <Food {...props}/>
      </div>
    )
  }

}

export default Food;
