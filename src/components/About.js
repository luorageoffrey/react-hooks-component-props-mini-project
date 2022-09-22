import React from "react"
function About({imgsrc='https://via.placeholder.com/215', text, link,more_text, name}){
    return (
        <aside>
            <img src={imgsrc} alt="blog logo"></img>
            <p >{text} <a href={link}> {name} </a>. {more_text}</p>
                        
        </aside>
    )
}

export default About 