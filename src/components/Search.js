import React, { useState } from 'react'
import Actor from './Actors';
import Show from './Show';
import "../App.css";

const Search = () => {

    const [actor, setActor] = useState(false);
    const [show, setShow] = useState(false);
    const [Val, setVal] = useState("");

    const setActorFilter = () => {
        setShow(false);
        setActor(true);
    }

    const setShowFilter = () => {
        setActor(false);
        setShow(true);
       
    }

    return (
        <>
            <section className="main-div">
             <div className="front-div-1">
                 <div className="front-div-2">
                     <div className="front-div-3">
                             <p className="tvmaze">TVmaze</p>
                             <p className="search">Search your favourite shows</p>
                            <div className="radio-div">
                            <input type="radio" className='actor-input' name="movie" onChange={() => setActorFilter()} /><span className='actor-span'>By Actor</span>
                            <input type="radio" className='show-input' name="movie" onChange={() => setShowFilter()} /><span className='show-span'>By Shows</span>
                            </div>
                            <div>
                            <input
                                type="text"
                                value={Val}
                                onChange={(e) => setVal(e.target.value)}
                                className="input-data"
                                placeholder="Search by name...."
                            />
                            </div>
                    </div>
                 </div>
             </div>
         </section>
        {actor ? <Actor data={Val}/> : ""}
        {show ? <Show data={Val} /> : ""}

        <div className='footer-div'>@2022 TVmaze Developed By Devendra Singh Chauhan</div>
        </>
    )
}

export default Search;