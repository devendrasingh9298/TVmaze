import "../App.css";

function ShowBox(props){
    
    const item = props.item;


    return(
        <div className="box-div">
                {item.image ? (
                <a href="item._links.self.href">
                <img
                src={item.image.medium}
                class="poster"
                alt={
                item.name != null ? item.name : "Not found"
                    }
                />
                </a>
                ) : (
                    <div>
                    <img src="https://www.prokerala.com/movies/assets/img/no-poster-available.jpg" />
                    </div>
                )}
            <div className="rating-div"></div>
            
             <h3>{item.name}</h3>
             <p>{item.language}</p>
             <p>Runtime : {item.averageRuntime} Minutes</p>            
        </div> 
    );
}

export default ShowBox;