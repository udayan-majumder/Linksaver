"use client"

import { useState } from "react"

export const AddLinkCards= ({selectedCatgeory,linkDB,setlinksDB,setIsCard})=>{
   
    const [TopicName,setTopicName] = useState("")
    const [Link,setLink] = useState("")
 
    return(
        <div className="Main-LinkCard-Container">
            <div className="LinkCards-Heading">{selectedCatgeory} Links</div>
            <div className="Input-div">
            <input placeholder="Topic Name" onChange={(e)=>{setTopicName(e.target.value)}} value={TopicName}/>
            <input placeholder="Link" onChange={(e)=>{setLink(e.target.value)}} value={Link}/>
            <button onClick={()=>{
                if(TopicName.length>0 && Link.length>0){
                 setlinksDB(prev=>[...prev,{"type":selectedCatgeory,"topicname":TopicName,"link":Link}])
                setTopicName("")
                setLink("")
                }
               
            }}>Save</button>
            </div>
            <div className="Links-show-div">
               {linkDB?.map((items,index)=>(
               items?.type === selectedCatgeory ? <a href={items?.link} target="_blank" key={index}>
                {items?.topicname}
               </a> : null
               ))}

            </div>
            <div className="Close-LinkCard">
                <button onClick={()=>setIsCard(false)} >Close</button>
            </div>
            
        </div>
    )
}

