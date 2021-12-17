import React, { Component } from 'react'

const NewsItem = (props)=> {

      let {description,imageUrl, title, newsUrl} = props;
        return (
          <div className="container my-3"  >

          
          
            <div className="card" style={{width: "18rem"}}>
            {imageUrl?<img className="card-img-top my-3" style={{height:"150px"}}  src={imageUrl} alt="Card image cap"/>:""}
            <div className="card-body">
              
           <h5 className="card-title">{title}</h5>


              <p className="card-text">{description}....</p>
              
              

              <p> 
             <strong>Author:</strong> {props.author}
                </p> 
                <p className="my-4 text-muted">published at : {new Date(props.timeDate).toGMTString()}</p>
              <a href={newsUrl} target="_blank" className="btn"  style={{backgroundColor: "cyan" , color:"black"}}>Read More</a>
             
            </div>
          </div>
          </div>
        )
    
}
export default NewsItem;
