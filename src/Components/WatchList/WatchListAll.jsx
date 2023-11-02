import {addtoWatchlist,getWatchlist} from "../WatchList/WatchlistService"
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BiSolidRightArrow } from "react-icons/bi";
import { CarouselComponent } from '../Carousel/Carousel';
import { WatchList } from './WatchList';

function WatchListAll(){

    const[filteredWatchList,setFilteredWatchList]=useState([]);

    const watchListTypes = ["movie","tv show"];

    useEffect(()=>{ 
        // if(!isLoaded){
        getWatchlist()
        .then(response=>{
            setFilteredWatchList(response.data.data.shows)
            console.log("res",response.data.data.shows)
            // setIsLoaded(true);
        })
    // }
    },[])

        console.log("filtet",filteredWatchList);
    return(
        <>
            <div style={{background:"#00050d", padding:'300px'}}>
                {/* {
                    watchListTypes.map((type)=>(
                            filteredWatchList.type===type
                        <CarouselComponent moviesInfo={filteredWatchList} type={type}/> 
                    ))
                } */}
                {/* <CarouselComponent/> */}
            </div>
        </>
    )
}
export default WatchListAll;