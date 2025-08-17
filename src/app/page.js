"use client";
import { useState, useEffect } from "react";
import {AddLinkCards} from "../components/cardsComponent"

export default function Home() {
  const [Categories, setCategories] = useState([
    "Instagram",
    "Youtube",
    "Whatsapp",
    "X",
    "Secret",
    "Others",
  ]);
  const [LinksDB, setLinksDB] = useState([]);
  const [isCard, setisCard] = useState(false);
  const  [SelectedCategory,setSelectedCategory] = useState("")

  useEffect(() => {
    const isDB = localStorage.getItem("LinkDB");
    if (!isDB) {
      localStorage.setItem("LinkDB", JSON.stringify(LinksDB));
    } else {
      setLinksDB(JSON.parse(isDB));
    }
  }, []);

  useEffect(()=>{
 localStorage.setItem("LinkDB",JSON.stringify(LinksDB))
  },[LinksDB])

  return (
    <div className="Main-container">
      <div className="sub-container">
        <div className="Navbar">
          <div className="Navbar-text">LinkSaver</div>
        </div>
        {isCard ? (
            <AddLinkCards selectedCatgeory={SelectedCategory} linkDB={LinksDB} setIsCard={setisCard} setlinksDB={setLinksDB}/>
        ) : (
          <div className="Categories-div">
            {Categories?.map((items) => (
              <div className="Category-cards-div">
                  <button className="Category-cards" onClick={()=>{
                    setSelectedCategory(items)
                    setisCard(true)
                  }}
                    >{items}</button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
