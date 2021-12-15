import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';

export default class News extends Component {
  

  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
  constructor(props){
      super(props);
      document.title= `${this.capitalizeFirstLetter(this.props.category)}-NewsMonkey`;
// console.log("news component constructor")

this.state={
  article:[],
  page:1,
  loading:false,
  totalResults:0
  
}

  }

  
  



 async componentDidMount(){

  this.setState({loading:true})

   const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=ef5199061e4c42e39908b1343ecebf1e&page=1&pagesize=${this.props.pageSize}&category=${this.props.category}`;
    
   
   const data = await fetch(url)
  
  const realData = await data.json();
this.setState({
  article:realData.articles,
  totalResults:realData.totalResults,
  loading:false
})
  console.log(this.state.totalResults);

  }
   handlePreClick = async()=>{
  
 
    this.setState({
      loading:true
    });
     
     const url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=ef5199061e4c42e39908b1343ecebf1e&page=${this.state.page-1}&pagesize=${this.props.pageSize}&category=${this.props.category}`;
     const data = await fetch(url)
     const realData = await data.json();
     this.setState({
       article:realData.articles,
       page:this.state.page===1?this.state.page:this.state.page-1,
       loading:false
       
       
      })
      
      console.log(this.state.page);
      
    }
    handleNextClick = async()=>{
     
      if(this.state.page===Math.ceil(this.state.totalResults/this.props.pageSize)){
        
      }
      // console.log("next clicked");
      else{
      
      this.setState({loading:true})
console.log(this.state.totalResults)
      const url =`https://newsapi.org/v2/top-headlines?country=us&apiKey=ef5199061e4c42e39908b1343ecebf1e&page=${this.state.page+1}&pagesize=${this.props.pageSize}&category=${this.props.category}`;
   
  const data = await fetch(url)
  const realData = await data.json();
  this.setState({
    article:realData.articles,
    page:this.state.page + 1,
    loading:false
  })
  console.log(this.state.page);
      }

      
  }
  
    render() {
     
        return (
          <>
           <div className=" my-3 container d-flex justify-content-between">  
                <button type="button" disabled={this.state.page===1?true:false} className="btn btn-info" onClick={this.handlePreClick} >&larr; Previous</button>
                <button type="button" disabled={this.state.page===Math.ceil(this.state.totalResults/this.props.pageSize)} className="btn btn-info"  onClick={this.handleNextClick}>Next &rarr;</button>

                </div>

          <div className="container my-5">
      <h2 className="my-5 text-center">NewsMonkey- Top Headlines {this.capitalizeFirstLetter(this.props.category)}</h2>

      {this.state.loading && <Spinner/>}

               <div className="row">
                   
                {!this.state.loading &&
                  this.state.article.map((element)=>{

                    return(<div className="col-md-4" key={element.url}><NewsItem timeDate={element.publishedAt} description={element.description?element.description.slice(0,88):element.description} title={element.title?element.title.slice(0,45):element.title} imageUrl={element.urlToImage} newsUrl={element.url}  author={element.author===null?"Unknown":element.author} /></div>)
                  }
                  )
                }

               
             

               </div>
             
           </div>

                <div className=" my-3 container d-flex justify-content-between">  
                <button type="button" disabled={this.state.page===1} className="btn btn-info" onClick={this.handlePreClick} >&larr; Previous</button>
                <button type="button" disabled={this.state.page>Math.ceil(this.state.totalResults/this.props.pageSize)} className="btn btn-info"  onClick={this.handleNextClick}>Next &rarr;</button>

                </div>

           </>
        )
    }
}
