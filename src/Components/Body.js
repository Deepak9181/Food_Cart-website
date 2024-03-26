import Food,{FoodwithLabel} from "./Food";
import { useEffect, useState } from "react";
import Shrimmer from "./Shrimmer";
import { Link } from "react-router-dom";
import { BODY_API_URL } from "../utilis/contsant";
import useOnlineStatus from "../utilis/useOnlinestatus";

const Body = () => {
  const myvar = [];
  const [Restuarantlist, setRestuarantlist] = useState(myvar);

  const [FilterCard, setFilterCard] = useState([]);

  const [SearchText, setSearchText] = useState("");

  const[btn,setbtn]=useState(false)


  //creating a component promoted card taking food component as input 
  const DiscountCard = FoodwithLabel(Food);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const val = await fetch(BODY_API_URL);

      const jsonval = await val.json();

      // console.log(jsonval);

      const { restaurants } =
        jsonval?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle;

        //  console.log(jsonval?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyles);
      
      // console.log(restaurants.info.aggregatedDiscountInfoV3.subHeader);

      setRestuarantlist(restaurants);

      setFilterCard(restaurants);
    } catch (error) {
      console.log(error);
    }
  };

  const online = useOnlineStatus();

  if (online === false) {
    return <h1>You are offline...</h1>;
  }

  if (Restuarantlist.length === 0) {
    return (
      <div className="shrimmer">
        <Shrimmer />
      </div>
    );
  }

  return (
    <div className="body-container ml-14">
      <div className="body-upper flex  flex-wrap ml-2 mt-4">
        <div className="search-container">
          <input
            className="search-bar border font-sans border-black border-solid m-2 w-48 rounded-sm px-1"
            value={SearchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>

          <button
            className="filter-btn m-2 ml-4 py-1 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border-black border hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            onClick={() => {
              console.log(SearchText);
              const searchlist = Restuarantlist.filter((res) =>
                res.info.name.toLowerCase().includes(SearchText.toLowerCase())
              );
              setFilterCard(searchlist);
            }}
          >
            Search
          </button>
        </div>

        <div className="filter-container">
          <button 
          className={btn ? "text-white bg-blue-700 hover:bg-blue-800  font-medium rounded-lg text-sm m-2 ml-4 py-1 px-5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 " : "filter-btn m-2 ml-4 py-1 px-5 me-2 mb-2 text-sm font-medium text-gray-900  bg-white rounded-lg border-black border hover:bg-gray-100 hover:text-blue-700 focus:z-10  dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"}
          onClick={() => {
              const Filterlist = Restuarantlist.filter(
                (resrating) => resrating.info.avgRating >= 4.5
              );
              setFilterCard(Filterlist);
              setbtn(!btn)
              if(btn==true){
                setFilterCard(Restuarantlist)
              }
            }}
          >
            Top Rated Restuarant
          </button>
        </div>
      </div>

      <div className="food-card flex flex-wrap ">
        {FilterCard.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurant/" + restaurant.info.id}
          >
          {restaurant?.info?.aggregatedDiscountInfoV3?.header ? <DiscountCard resData={restaurant}/> :<Food resData={restaurant} />}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
