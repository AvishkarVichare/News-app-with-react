import React, { Component } from 'react'

export default class NewsItem extends Component {
    render() {
      let {description,imageUrl, title, newsUrl} = this.props;
        return (
          <div className="container my-3"  >

          
          
            <div className="card" style={{width: "18rem"}}>
            {imageUrl?<img className="card-img-top my-3" style={{height:"150px"}}  src={imageUrl} alt="Card image cap"/>:""}
            <div className="card-body">
              {title.length<45?<h5 className="card-title">{title}</h5>:<h5 className="card-title">{title}.....</h5>

}
              <p className="card-text">{description}....</p>
              <a href={newsUrl} target="_blank" className="btn"  style={{backgroundColor: "cyan" , color:"black"}}>Read More</a>
            </div>
          </div>
          </div>
        )
    }
}
