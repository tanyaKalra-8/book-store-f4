import React from "react";

const HomeBody = ({info}) => {
    return (
        <div>
            <div className="container">
                {info.map((data,index)=> (
                    <div className="parent">
                        <div className="child">
                            <img src={data.volumeInfo.imageLinks.thumbnail} alt="image"/>
                        </div>
                        <div className="child1">
                            <h4> {data.volumeInfo.title} </h4>
                            <p>{data.volumeInfo.description}</p>
                            <button key={index}>Now Read!</button>
                        </div>
                    </div>
                ))}
            </div>
            
            <div className="moreBooksContainer">
                   <h2>More Books</h2> 
                   <div className="moreBooks">
                        {info.map((data)=>(
                            <img src={data.volumeInfo.imageLinks.thumbnail} alt="image"/>
                        ))}
                   </div>
            </div>
        </div>
    )
};

export default HomeBody;