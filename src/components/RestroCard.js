import React from "react";
import {CDN_URL} from '../Utils/constants'

const RestroCard = (props) => {
  // console.log(props)
  const {resData}=props
  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
    sla,
  } = resData.info;
// const {deliveryTime}=sla;
  return (
    <div className='res-card '>
        <img
    className="rounded-lg"
    alt="res-logo"
    src={CDN_URL + cloudinaryImageId}
  />
  <h3 className="font-bold py-4 text-lg">{name}</h3>
  <h4>{cuisines.join(",")}</h4>
  <h4>{avgRating} stars</h4>
  <h4>{costForTwo }</h4>
  <h4>{sla.deliveryTime} minutes</h4>
    </div>
  )
}
export default RestroCard;