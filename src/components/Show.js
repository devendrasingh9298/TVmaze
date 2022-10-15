import React, { useState, useEffect } from "react";
import ShowBox from "./ShowBox";

import "../App.css";

function Show(props) {
    const [showData, setshowData] = useState([]);
    
    let inputVal =  props.data;

    let Url = "";
    if (inputVal.length > 0) {
        Url = `https://api.tvmaze.com/search/shows?q=${inputVal}`;
    } else {
        Url = `https://api.tvmaze.com/search/shows?q=friends`;
    }

    const getshowData = async () => {
        try {
            let respone = await fetch(Url);
            let resData = await respone.json();
            setshowData(resData);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getshowData();
    },[inputVal]);
    
    return (
        <>
        <div className='parent'>
          {
            showData.map((item, index) => {  
                return <ShowBox item = {item.show} />;
          })
          }
          </div>
        </>
    );
}

export default Show;