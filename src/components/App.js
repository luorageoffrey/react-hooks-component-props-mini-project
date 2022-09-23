import React from "react";
import blogData from "../data/blog";

import Header from "../components/Header.js";
import About from "../components/About.js";
import ArticleList from "./ArticleList";

console.log(blogData);

function App() {

  const intro ={
    text : "Personal blog by",
    link: "https://mobile.twitter.com/dan_abramov",
    more_text: "I explain with words and code.",
    name:"Dan Abramov",
    imgSrc:"https://overreacted.io/static/profile-pic-c715447ce38098828758e525a1128b87.jpg"
  
  }

  const articleList = blogData.posts.map((post)=>{
    
    return <ArticleList     
          title={post.title}
          date={post.created}
          preview={post.preview}
          minutes={post.minutes}
        />
  }

  )

  return (
    <div className="App">
      <Header/>
      <About imgsrc={intro.imgSrc}   text={intro.text} link={intro.link} more_text={intro.more_text} name={intro.name}/>
      {articleList}
    </div>  
    
  );
}

export default App;
