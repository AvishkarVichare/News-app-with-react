import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import InfiniteScroll from 'react-infinite-scroll-component';
import SpinnerBottom from './SpinnerBottom';
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
  this.props.setProgress(10);
  this.setState({loading:true})

   const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=ef5199061e4c42e39908b1343ecebf1e&page=1&pagesize=${this.props.pageSize}&category=${this.props.category}`;
    
   
   const data = await fetch(url)
  
  const realData = await data.json();
this.setState({
  article:realData.articles,
  totalResults:realData.totalResults,
  loading:false
})
this.props.setProgress(100);

  console.log(this.state.totalResults);

  }


  fetchMoreData = async()=>{
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=ef5199061e4c42e39908b1343ecebf1e&page=${this.state.page+1}&pagesize=${this.props.pageSize}&category=${this.props.category}`;
    
   
   const data = await fetch(url)
  
  const realData = await data.json();
this.setState({
  page:this.state.page+1,
  article:this.state.article.concat(realData.articles),
  totalResults:realData.totalResults,
  loading:false
})
  console.log(this.state.totalResults);
  }


  //  handlePreClick = async()=>{
  
 
  //   this.setState({
  //     loading:true
  //   });
     
  //    const url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=ef5199061e4c42e39908b1343ecebf1e&page=${this.state.page-1}&pagesize=${this.props.pageSize}&category=${this.props.category}`;
  //    const data = await fetch(url)
  //    const realData = await data.json();
  //    this.setState({
  //      article:realData.articles,
  //      page:this.state.page===1?this.state.page:this.state.page-1,
  //      loading:false
       
       
  //     })
      
  //     console.log(this.state.page);
      
  //   }
//     handleNextClick = async()=>{
     
//       if(this.state.page===Math.ceil(this.state.totalResults/this.props.pageSize)){
        
//       }
//       // console.log("next clicked");
//       else{
      
//       this.setState({loading:true})
// console.log(this.state.totalResults)
//       const url =`https://newsapi.org/v2/top-headlines?country=us&apiKey=ef5199061e4c42e39908b1343ecebf1e&page=${this.state.page+1}&pagesize=${this.props.pageSize}&category=${this.props.category}`;
   
//   const data = await fetch(url)
//   const realData = await data.json();
//   this.setState({
//     article:realData.articles,
//     page:this.state.page + 1,
//     loading:false
//   })
//   console.log(this.state.page);
//       }

      
//   }
  
    render() {
     
        return (
          <>
 

          
      <h2 className="my-5 text-center">NewsMonkey- Top Headlines {this.capitalizeFirstLetter(this.props.category)}</h2>

      {this.state.loading && <Spinner/>}


      <InfiniteScroll
          dataLength={this.state.article.length}
          next={this.fetchMoreData}
          hasMore={this.state.article.length!==this.state.totalResults}
          loader={<SpinnerBottom/>}
       
        >
<div className="container my-5">
                  <div className="row">
                {
                  this.state.article.map((element)=>{
                    return(<div className="col-md-4" key={element.url}><NewsItem timeDate={element.publishedAt} description={element.description?element.description.slice(0,88):element.description} title={element.title?element.title.slice(0,45):element.title} imageUrl={element.urlToImage} newsUrl={element.url}  author={element.author===null?"Unknown":element.author} /></div>)
                  }
                  )
                }
                        </div>
               </div>

               </InfiniteScroll>
                

               
             

             
   

            

           </>
        )
    }
}
