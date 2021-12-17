import React, {useState,useEffect} from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import InfiniteScroll from 'react-infinite-scroll-component';
import SpinnerBottom from './SpinnerBottom';
const News = (props)=> {
  

  const capitalizeFirstLetter =(string)=> {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  


  const [article, setArticle] = useState([]);
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false)
  const [totalResults, setTotalResults] = useState(0)


  
  





  useEffect(async() => {
    props.setProgressFun(10);
    setLoading(true)
  
     const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&apiKey=${props.apiKey}&page=1&pagesize=${props.pageSize}&category=${props.category}`;
      
     
     const data = await fetch(url)
    
    const realData = await data.json();
 


  setArticle(realData.articles)
  setTotalResults(realData.totalResults)
  setLoading(false)

  props.setProgressFun(100);
  
    console.log(totalResults);
    
  }, [])






  const fetchMoreData = async()=>{
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&apiKey=${props.apiKey}&page=${page+1}&pagesize=${props.pageSize}&category=${props.category}`;
    
   
   const data = await fetch(url)
  
  const realData = await data.json();



setPage(page+1)
setArticle(article.concat(realData.articles))
setTotalResults(realData.totalResults)
setLoading(false)

  console.log(totalResults);
  }


 
  
   
     
        return (
          <>
 

          
      <h2 className="my-5 text-center">NewsMonkey- Top Headlines {capitalizeFirstLetter(props.category)}</h2>

      {loading && <Spinner/>}


      <InfiniteScroll
          dataLength={article.length}
          next={fetchMoreData}
          hasMore={article.length!==totalResults}
          loader={<SpinnerBottom/>}
       
        >
<div className="container my-5">
                  <div className="row">
                {
                 article.map((element)=>{
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

    export default News