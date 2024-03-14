import React from "react";
import { LuSearch } from "react-icons/lu";
import "../filter/Filter.scss"

function Filter() {
  return (
    <div className="filter">
      <h1>
        Search result for <b>Nigeria</b>
      </h1>
      <div className="top">
        <div className="item">
          <label htmlFor="city">Location</label>
          <input
            type="text"
            name="city"
            id="city"
            placeholder="City Location"
          />
        </div>
      </div>
      <div className="bottom">
        <div className="item">
          <label htmlFor="type">Types</label>
          <select name="type" id="type">
            <option value="" >any</option>
            <option value="buy" >Buy</option>
            <option value="rent" >Rent</option>
          </select>
        </div>
        <div className="item">
          <label htmlFor="property">Property</label>
          <select name="property" id="property">
            <option value="" >any</option>
            <option value="apartment" >Apartment</option>
            <option value="house" >House</option>
            <option value="land" >Land</option>
          </select>
        </div>
        <div className="item">
          <label htmlFor="minPrice">Min Price</label>
          <input
            type="number"
            name="minPrice"
            id="minPrice"
            placeholder="any"
          />
        </div>
        <div className="item">
          <label htmlFor="maxPrice">Max Price</label>
          <input
            type="number"
            name="maxPrice"
            id="maxPrice"
            placeholder="any"
          />
        </div>
        <div className="item">
          <label htmlFor="bedroom">Bedroom</label>
          <input
            type="text"
            name="bedroom"
            id="bedroom"
            placeholder="any"
          />
        </div>
        <button>
          <LuSearch className=" search"/>
        </button>
      </div>
    </div>
  );
}

export default Filter;
