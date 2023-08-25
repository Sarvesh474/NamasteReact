import { React, useEffect, useState } from "react";
import RestroCard from "./RestroCard";
// import { reslist } from "../Utils/mockData/reslist";
// import Shimmer from "./Shimmer";
const Body = () => {
  const [listOfres, setListOfRes] = useState([]);
  const [filteredResturent, setFilteredResturent] = useState([])
  const [searchText, setSearchText] = useState("")

  useEffect(() => {
    fetchData();
  }, [listOfres]);

  const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json()
    setListOfRes(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredResturent(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  }
  // listOfres.length  === 0 ? (
  //   <Shimmer /> 
  //   ):

  return (
    <div className='body'>
      <div className='filter'>
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
            placeholder="search here" />
          <button className="search-btn"
            onClick={() => {
              // console.log(searchText)
              const searchFilter = listOfres.filter((res) =>
                res.data.name.toLowerCase().includes(searchText.toLowerCase()));
                setFilteredResturent(searchFilter)
            }}

          >Search</button>
        </div>
        <button className="filter-btn"
          onClick={() => {
            const filteredList = listOfres.filter(
              (res) => res.avgRating >= 4.00
            );
            setFilteredResturent(filteredList)
          }}
        >Top Rated restro</button>
      </div>
      <div className='res-container'>
        {filteredResturent &&
          filteredResturent.map((resturent) => (
            <RestroCard key={resturent.id} resData={resturent} />))
        }
      </div>

    </div>
  )
}
export default Body;