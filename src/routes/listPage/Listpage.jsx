import React from 'react'
import { listData } from '../../lib/dummyData'
import "./Listpage.scss"
import Filter from '../../Components/filter/Filter';
import Card from '../../Components/card/Card';
import Map from '../../Components/map/Map';

function Listpage() {

    const data = listData;

  return (
    <div className='ListPage'>
        <div className="listContainer">
            <div className="wrapper">
                <Filter />
                {data.map(item => (
                    <Card key={item.id} item={item}/>
                ))}
            </div>
        </div>
        <div className="mapContainer">
            <Map items={data}/>
        </div>
    </div>
  )
}

export default Listpage