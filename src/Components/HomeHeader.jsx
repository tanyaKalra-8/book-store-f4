import React, {useState, useEffect} from "react";
import axios from "axios";
import logo from "../Resources/Standard Collection 11.png";
import logoName from "../Resources/KeazoNBOOKS.png";
import heart from "../Resources/bx_bx-book-heart.png";
import notification from "../Resources/Vector (1).png";
import Preminum from "../Resources/Group.png";
import profile from "../Resources/IMG20210528181544.png";
import search1 from "../Resources/ant-design_search-outlined.png"

const HomeHeader = ({setInfo}) => {

    const [search, setSearch] = useState("")

    async function getInfo(){
        try{
            const resources = await axios.get("https://www.googleapis.com/books/v1/volumes",
            {params:{
                q:search || "harry potter"
            }});
            // console.log(resources.data.items)     
            setInfo(resources.data.items);
        }
        catch(error){
            console.log(error);
        }
    }

    useEffect(()=>{
        getInfo();
    },[getInfo]);

    return (
        <div>
            <div className="header">
                <div className="logo">
                    <img id="logo" src={logo} alt="logo" />
                    <img id="name" src={logoName} alt="Name" />
                </div>
                <div className="search">
                    <div>

                    <img id="search" src={search1} alt="search"/>
                    </div>
                    <input
                    className="searchBar"
                    type="search"
                    placeholder="Search for the book you want and read it now... Sherlock Holmes, Harry Pot..."
                    onChange={(e)=> setSearch(e.target.value)}
                    value={search}
                    />
                    <button onClick={getInfo} className="searchButton">Search</button>
                </div>
                <div className="ele">
                    <img className="icon" src={heart} alt="Fav Book"/>
                    <img className="icon" src={notification} alt="notification"/>
                    <img className="icon" src={Preminum} alt="Preminum"/>
                    <img className="icon" src={profile} alt="Profile"/>
                </div>
            </div>
        </div>
    );
};

export default HomeHeader;
