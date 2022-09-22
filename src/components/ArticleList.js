
import React from "react";

function ArticleList({title, date="January 1, 1970", preview,minutes}){


    let icons = []
    if(minutes <= 30){

        let numIcons = Math.floor(minutes / 5)

        
            
        for(let x=0; x<=numIcons;x++){
            icons.push('☕️')
        }

    }else if(minutes>30){

        let numIcons = Math.floor(minutes / 10)

                    
        for(let x=0; x<=numIcons;x++){
            icons.push('🍱')
        }

    }


    return (
        <>
            <article>
                <h3>{title}</h3>
                <small>{date}</small>
                <small> <span> &#903; </span> {icons} {minutes} min read</small>
                <p>{preview}</p>
            </article> 
        </>
    )
}

export default ArticleList