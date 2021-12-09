import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {
  
// article= [
//     {
//       "source": {
//         "id": null,
//         "name": "BBC News"
//       },
//       "author": "https://www.facebook.com/bbcnews",
//       "title": "Afghanistan: Foreign Office chaotic during Kabul evacuation - whistleblower - BBC News",
//       "description": "Thousands of pleas for help went unread and the foreign secretary lacked urgency, an ex-official says.",
//       "url": "https://www.bbc.com/news/uk-59549868",
//       "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/17C4F/production/_121995379_kabulairport.png",
//       "publishedAt": "2021-12-07T10:19:41Z",
//       "content": "By James Landale &amp; Joseph LeeBBC News\r\nImage source, MOD via PA Media\r\nThe UK Foreign Office's handling of the Afghan evacuation after the Taliban seized Kabul was dysfunctional and chaotic, a wh… [+8262 chars]"
//     },
//     {
//       "source": {
//         "id": "cnn",
//         "name": "CNN"
//       },
//       "author": "Nectar Gan, CNN",
//       "title": "China threatens the US with retaliation over diplomatic boycott of Winter Olympics - CNN",
//       "description": "China has threatened the Biden administration with retaliation over its decision to impose a diplomatic boycott of the 2022 Winter Olympics in Beijing, warning the move could harm bilateral relations.",
//       "url": "https://www.cnn.com/2021/12/07/china/china-response-us-olympic-boycott-intl-hnk/index.html",
//       "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/211207015737-beijing-winter-olympics-china-training-1203-restricted-super-tease.jpg",
//       "publishedAt": "2021-12-07T09:43:00Z",
//       "content": "Hong Kong (CNN)China has threatened the Biden administration with retaliation over its decision to impose a diplomatic boycott of the 2022 Winter Olympics in Beijing, warning the move could harm bila… [+4924 chars]"
//     },
//     {
//       "source": {
//         "id": null,
//         "name": "CNBC"
//       },
//       "author": "Holly Ellyatt",
//       "title": "Biden wants to prevent Russia-Ukraine conflict, but experts say time is running out - CNBC",
//       "description": "There are widespread concerns about Russian military activity on the border with Ukraine and its increasingly aggressive rhetoric.",
//       "url": "https://www.cnbc.com/2021/12/07/biden-aims-to-prevent-russia-ukraine-conflict-but-time-is-running-out.html",
//       "urlToImage": "https://image.cnbcfm.com/api/v1/image/106985377-1638863978789-gettyimages-1236037927-RUS_Russian_President_Vladimir_Putin_Meets_Valdia_Discussion_Club_During_Annual_Meeting.jpeg?v=1638864246",
//       "publishedAt": "2021-12-07T09:36:51Z",
//       "content": "Russian President Vladimir Putin speeches during the Valdai Discussion Club's plenary meeting, on October,21,2021, in Sochi, Russia.\r\nU.S. President Joe Biden is expected to give Russian President Vl… [+6940 chars]"
//     },
//     {
//       "source": {
//         "id": "cnn",
//         "name": "CNN"
//       },
//       "author": "Omar Jimenez, Bill Kirkos and Steve Almasy, CNN",
//       "title": "Jussie Smollett, who denied orchestrating attack, heads back to the stand to face cross examination - CNN",
//       "description": "Jussie Smollett will resume testifying in his defense today after taking the stand Monday to rebut allegations that he staged a fake hate crime in 2019 and lied to Chicago police about it.",
//       "url": "https://www.cnn.com/2021/12/07/us/jussie-smollett-trial-tuesday/index.html",
//       "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/211206140046-jussie-smollett-court-super-tease.jpg",
//       "publishedAt": "2021-12-07T08:28:00Z",
//       "content": null
//     },
//     {
//       "source": {
//         "id": "reuters",
//         "name": "Reuters"
//       },
//       "author": null,
//       "title": "Evergrande debt deadline passes with no sign of payment -sources - Reuters",
//       "description": "Some offshore bondholders of China Evergrande Group <a href=\"https://www.reuters.com/companies/3333.HK\" target=\"_blank\">(3333.HK)</a> did not receive coupon payments by the end of a 30-day grace period, four people with knowledge of the matter said, pushing t…",
//       "url": "https://www.reuters.com/world/china/developer-china-evergrandes-shares-set-rise-66-restructuring-looms-2021-12-07/",
//       "urlToImage": "https://www.reuters.com/resizer/ybQAKJaPJ_4ZwWsWZ_Pd9abLjHU=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/VAS3Y3XLCRKCDFIQ4CCZQTUISQ.jpg",
//       "publishedAt": "2021-12-07T08:19:00Z",
//       "content": "HONG KONG/SHANGHAI, Dec 7 (Reuters) - Some offshore bondholders of China Evergrande Group (3333.HK) did not receive coupon payments by the end of a 30-day grace period, four people with knowledge of … [+4310 chars]"
//     },
//     {
//       "source": {
//         "id": "cnn",
//         "name": "CNN"
//       },
//       "author": "Rob Shackelford, CNN",
//       "title": "Hawaii faces life-threatening flooding after some areas of the state see more than a foot of rain in 48 hours - CNN",
//       "description": "Relentless rain in Hawaii has left parts of the state under the threat of \"significant and life-threatening flooding,\" the National Weather Service in Honolulu said Monday night, with some areas already tallying more than a foot of rain over a 48-hour span.",
//       "url": "https://www.cnn.com/2021/12/07/weather/hawaii-rainfall-flooding-threat/index.html",
//       "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/211206231739-02-hawaii-flooding-120621-super-tease.jpg",
//       "publishedAt": "2021-12-07T08:00:00Z",
//       "content": "(CNN)Relentless rain in Hawaii has left parts of the state under the threat of \"significant and life-threatening flooding,\" the National Weather Service in Honolulu said Monday night, with some areas… [+1994 chars]"
//     },
//     {
//       "source": {
//         "id": "cnn",
//         "name": "CNN"
//       },
//       "author": "Samantha Murphy Kelly, CNN Business",
//       "title": "Instagram will now tell users when to take a break from using the app - CNN",
//       "description": "Just a day before the head of Instagram will face questions from lawmakers over its child safety practices, the company is rolling out a handful of new features aimed at making it harder for users, particularly teenagers, to fall down rabbit holes that could …",
//       "url": "https://www.cnn.com/2021/12/07/tech/instagram-take-a-break/index.html",
//       "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/211206165034-restricted-instagram-phone-2021-super-tease.jpg",
//       "publishedAt": "2021-12-07T08:00:00Z",
//       "content": "(CNN Business)Just a day before the head of Instagram will face questions from lawmakers over its child safety practices, the company is rolling out a handful of new features aimed at making it harde… [+4253 chars]"
//     },
//     {
//       "source": {
//         "id": "cnn",
//         "name": "CNN"
//       },
//       "author": "Mochamad Andri, Masrur Jamaluddin and Rhea Mogul, CNN",
//       "title": "Volcano rescue workers dig through thick layers of hot ash in Indonesia after Mount Semeru erupts - CNN",
//       "description": "Rescue workers in Indonesia continued to dig through thick layers of hot ash and debris Tuesday to find survivors of a volcanic eruption that left dozens of people dead and thousands displaced in the country's East Java province, even as the volcano continued…",
//       "url": "https://www.cnn.com/2021/12/06/asia/indonesia-volcano-rescue-intl-hnk/index.html",
//       "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/211205230213-11-mount-semeru-eruption-indonesia-120621-super-tease.jpg",
//       "publishedAt": "2021-12-07T07:39:00Z",
//       "content": null
//     },
//     {
//       "source": {
//         "id": null,
//         "name": "New York Times"
//       },
//       "author": "Katrin Bennhold",
//       "title": "Can Germany’s New Chancellor Revive the Left in Europe? - The New York Times",
//       "description": "Olaf Scholz wants to win back workers who defected to the populist far right. Success could make him a model for Social Democrats everywhere.",
//       "url": "https://www.nytimes.com/2021/12/07/world/europe/germany-olaf-scholz-chancellor.html",
//       "urlToImage": "https://static01.nyt.com/images/2021/12/05/world/00scholz01/00scholz01-facebookJumbo.jpg",
//       "publishedAt": "2021-12-07T05:50:08Z",
//       "content": "During the last Social Democratic government in Germany, the chancellor, Gerhard Schröder, cut benefits and undertook a painful overhaul of the labor market between 2003 to 2005 in a bid to bring dow… [+2602 chars]"
//     },
//     {
//       "source": {
//         "id": null,
//         "name": "KCRA Sacramento"
//       },
//       "author": "KCRA Staff",
//       "title": "COVID-19 in California: Track COVID cases, vaccine rates, omicron variant updates, booster shot and testing info - KCRA Sacramento",
//       "description": "Here is information on the latest COVID-19 cases and hospitalizations, community transmission, breakdowns of vaccination rates, testing info and the latest headlines.",
//       "url": "https://www.kcra.com/article/covid-19-vaccines-boosters-california-tracking-omicron-testing-rapid-tests-variants/38438963",
//       "urlToImage": "https://kubrick.htvapps.com/htv-prod-media.s3.amazonaws.com/images/covid-vaccine-for-web-1616095145.png?crop=1.00xw:1.00xh;0,0&resize=1200:*",
//       "publishedAt": "2021-12-07T05:25:00Z",
//       "content": "Below youll find information on the latest COVID-19 cases and hospitalizations in California, community transmission, vaccine rates and booster shots and the latest headlines -- all in one place.\r\nAp… [+11559 chars]"
//     },
//     {
//       "source": {
//         "id": null,
//         "name": "WDIV ClickOnDetroit"
//       },
//       "author": "Kayla Clarke",
//       "title": "Oxford Community Schools decline Michigan AG’s offer to launch investigation into shooting: ‘I am extremely disappointed’ - WDIV ClickOnDetroit",
//       "description": "Oxford Community Schools have declined Michigan Attorney General Dana Nessel’s offer to conduct a third-party review of the shooting that left four students dead and injured four other people.",
//       "url": "https://www.clickondetroit.com/news/local/2021/12/07/oxford-community-schools-decline-michigan-ags-offer-to-launch-investigation-into-shooting-i-am-extremely-disappointed/",
//       "urlToImage": "https://res.cloudinary.com/graham-media-group/image/upload/f_auto/q_auto/c_thumb,w_700/v1/media/gmg/6ITHUVHC3JG3TBZQFSAZ6E7XDU.jpg?_a=ATABlcW0",
//       "publishedAt": "2021-12-07T04:43:46Z",
//       "content": "OXFORD, Mich. Oxford Community Schools have declined Michigan Attorney General Dana Nessels offer to conduct a third-party review of the shooting that left four students dead and injured four other p… [+1519 chars]"
//     },
//     {
//       "source": {
//         "id": null,
//         "name": "CBS Sports"
//       },
//       "author": "",
//       "title": "2021 NFL playoff picture, standings through Week 13: Patriots No. 1 in AFC; Washington emerges in wild NFC - CBSSports.com",
//       "description": "A look at the NFL standings as the Week 13 games conclude",
//       "url": "https://www.cbssports.com/nfl/news/2021-nfl-playoff-picture-standings-through-week-13-patriots-no-1-in-afc-washington-emerges-in-wild-nfc/",
//       "urlToImage": "https://sportshub.cbsistatic.com/i/r/2021/12/07/7f918506-d89a-4395-b2b1-c5daa1348a3e/thumbnail/1200x675/ae480eb92c6f0c7944847b0ad2f571a8/mac-jones-patriots-usatsi.jpg",
//       "publishedAt": "2021-12-07T04:43:00Z",
//       "content": "Week 13 certainly provided some more craziness in the NFL, a microcosm of how wild the season has been. For the first time since 2000, there have been nine games won by teams over an opponent with at… [+15356 chars]"
//     },
//     {
//       "source": {
//         "id": null,
//         "name": "KPRC Click2Houston"
//       },
//       "author": "Ninfa Saavedra",
//       "title": "Houston woman with no recent travel history tests positive for omicron variant, Judge Hidalgo confirms - KPRC Click2Houston",
//       "description": "A northwest Houston woman with no recent travel history tested positive for the omicron variant of COVID-19 on Monday, according to Harris County Judge Lina Hidalgo.",
//       "url": "https://www.click2houston.com/news/local/2021/12/07/houston-woman-with-no-recent-travel-history-tests-positive-for-omicron-variant-judge-hidalgo-confirms/",
//       "urlToImage": "https://res.cloudinary.com/graham-media-group/image/upload/f_auto/q_auto/c_thumb,w_700/v1/arc-cf/12-07-2021/t_3d9564eaa33443d68c6b1ce2b33c3b88_name_COVID_VARIANT_OMICRON_Loop_Blue.png?_a=ATABlcW0",
//       "publishedAt": "2021-12-07T04:30:00Z",
//       "content": "HOUSTON A northwest Houston woman with no recent travel history tested positive for the omicron variant of COVID-19 on Monday, according to Harris County Judge Lina Hidalgo.\r\nIts normal for viruses t… [+2193 chars]"
//     },
//     {
//       "source": {
//         "id": null,
//         "name": "ESPN"
//       },
//       "author": "Mike Reiss",
//       "title": "New England Patriots throw just three passes, dominate on the ground in win over Buffalo Bills - ESPN",
//       "description": "With a power running game of monumental proportions, led by quarterback Mac Jones and running back Damien Harris, the New England Patriots threw for just 19 yards but bruised their way past the Buffalo Bills in a pivotal AFC East matchup on Monday.",
//       "url": "https://www.espn.com/nfl/story/_/id/32809233/new-england-patriots-throw-just-three-passes-dominate-ground-win-buffalo-bills",
//       "urlToImage": "https://a1.espncdn.com/combiner/i?img=%2Fphoto%2F2021%2F1207%2Fr947739_1296x729_16%2D9.jpg",
//       "publishedAt": "2021-12-07T04:22:29Z",
//       "content": "ORCHARD PARK, N.Y. -- Taking the ball out of rookie quarterback Mac Jones' hands in wind gusts over 40 mph and relying on their running game, the New England Patriots defeated the Buffalo Bills14-10 … [+4163 chars]"
//     },
//     {
//       "source": {
//         "id": null,
//         "name": "Eonline.com"
//       },
//       "author": "Gabrielle Chung",
//       "title": "How Khloe Kardashian Really Feels About Tristan Thompson Allegedly Welcoming Baby With Another Woman - E! Online",
//       "description": "Just days after news broke that Tristan Thompson is facing a paternity lawsuit from Maralee Nichols, a source tells E! News that his ex Khloe Kardashian is \"ignoring the noise.\"",
//       "url": "https://www.eonline.com/news/1312338/how-khloe-kardashian-really-feels-about-tristan-thompson-allegedly-welcoming-baby-with-another-woman",
//       "urlToImage": "https://akns-images.eonline.com/eol_images/Entire_Site/2020824/rs_1200x1200-200924132942-1200-Khloe_Kardashian-Tristan_Thompson-gj.jpg?fit=around%7C1080:1080&output-quality=90&crop=1080:1080;center,top",
//       "publishedAt": "2021-12-07T02:48:00Z",
//       "content": "Khloe Kardashian isn't keeping up with the drama surrounding her ex, Tristan Thompson.\r\nAs E! News previously reported, Thompson is being sued by a woman named Maralee Nichols over pregnancy and chil… [+921 chars]"
//     },
//     {
//       "source": {
//         "id": null,
//         "name": "Hollywood Reporter"
//       },
//       "author": "Lexy Perez",
//       "title": "Chris Noth Says He Felt “Protective” Over Sarah Jessica Parker After Kim Cattrall Fallout - Hollywood Reporter",
//       "description": "After some cast and crew of Sex and the City recently opened up about spats between Kim Cattrall, Chris Noth is now weighing in with his thoughts. In an interview with The Guardian published Monday, the actor said he felt “protective” over co-star Sarah Jessi…",
//       "url": "https://www.hollywoodreporter.com/tv/tv-news/chris-noth-sarah-jessica-parker-kim-cattrall-feud-1235058071/",
//       "urlToImage": "https://www.hollywoodreporter.com/wp-content/uploads/2021/05/MCDSEAN_EC160-H-2021.jpg?w=1024",
//       "publishedAt": "2021-12-07T02:41:37Z",
//       "content": "After some cast and crew of Sex and the City recently opened up about spats between Kim Cattrall, Chris Noth is now weighing in with his thoughts.\r\nIn an interview with The Guardian published Monday,… [+3819 chars]"
//     },
//     {
//       "source": {
//         "id": null,
//         "name": "College Football News"
//       },
//       "author": "Pete Fiutak",
//       "title": "Heisman Finalists Announced: Who Will Come In Second? Predicted Finish - College Football News",
//       "description": "The finalists for the 2021 Heisman Trophy were announced? Who are the four in the hunt for the best individual trophy in all of sports? 2021 Heisman Finalists Announced – Contact/Follow @Pete…",
//       "url": "https://collegefootballnews.com/2021/12/heisman-finalists-announced-who-will-come-in-second",
//       "urlToImage": "https://collegefootballnews.com/wp-content/uploads/sites/83/2020/09/USATSI_14986008-2.jpg?w=1000&h=576&crop=1",
//       "publishedAt": "2021-12-07T02:36:44Z",
//       "content": "The finalists for the 2021 Heisman Trophy were announced? Who are the four in the hunt for the best individual trophy in all of sports?\r\n– Contact/Follow@PeteFiutak\r\nAlabama QB Bryce Young is going t… [+1746 chars]"
//     },
//     {
//       "source": {
//         "id": "reuters",
//         "name": "Reuters"
//       },
//       "author": null,
//       "title": "New York City expands COVID vaccine mandates for children, private sector - Reuters",
//       "description": "New York City expanded its array of COVID-19 mandates on Monday, setting vaccine requirements for children as young as 5 years old and for workers at all private-sector companies as the highly transmissible Omicron variant pushes into more U.S. states.",
//       "url": "https://www.reuters.com/business/healthcare-pharmaceuticals/new-york-city-mandates-vaccines-all-private-businesses-omicron-spreads-2021-12-06/",
//       "urlToImage": "https://www.reuters.com/resizer/exyqXKW_9IsDXbTj25ZqGPm3su8=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/XPJ2CQA2MVKPHLYYS6UKZVSGSA.jpg",
//       "publishedAt": "2021-12-07T02:36:00Z",
//       "content": "NEW YORK, Dec 6 (Reuters) - New York City expanded its array of COVID-19 mandates on Monday, setting vaccine requirements for children as young as 5 years old and for workers at all private-sector co… [+5276 chars]"
//     },
//     {
//       "source": {
//         "id": null,
//         "name": "Deadline"
//       },
//       "author": "Valerie Complex",
//       "title": "Grammys: Recording Academy Pulls Drake’s Nominations From Official Web Site - Deadline",
//       "description": "It was announced earlier today that Drake chose to withdraw his two Grammy nominations, and his nominations were removed from the official Grammy site. According to Variety, the rapper and his management came to the decision but his reason for withdrawing has…",
//       "url": "https://deadline.com/2021/12/grammy-academy-pulls-drakes-nominations-1234886079/",
//       "urlToImage": "https://deadline.com/wp-content/uploads/2021/12/drake-2019-grammys.jpeg?w=681",
//       "publishedAt": "2021-12-07T02:36:00Z",
//       "content": "It was announced earlier today that Drake chose to withdraw his two Grammy nominations, and his nominations were removed from the official Grammy site. \r\nAccording to Variety, the rapper and his mana… [+1807 chars]"
//     },
//     {
//       "source": {
//         "id": null,
//         "name": "9to5Mac"
//       },
//       "author": null,
//       "title": "2021 MacBook Pro users reporting multiple issues with the SD card reader - 9to5Mac",
//       "description": "Users have been reporting slow transfer speeds or even inaccessible files when trying to use an SD card on the new MacBook Pro.",
//       "url": "https://9to5mac.com/2021/12/06/2021-macbook-pro-users-reporting-multiple-issues-with-the-sd-card-reader/",
//       "urlToImage": "https://i1.wp.com/9to5mac.com/wp-content/uploads/sites/6/2021/10/MacBook-Pro-USB-C-ports-dont-support-fast-charging.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
//       "publishedAt": "2021-12-07T02:25:00Z",
//       "content": "One of the main highlights of the new 2021 MacBook Pro is the comeback of the SD card slot. Unfortunately, it seems that some users are having issues with the SD card reader on these new machines, as… [+2107 chars]"
//     }
//   ]

  constructor(){
      super();
// console.log("news component constructor")

this.state={
    article:[],
    page:1,
    loading:false,
    totalResults:0
  
}
  }

 async componentDidMount(){

  const url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=ef5199061e4c42e39908b1343ecebf1e&page=1`;
  const data = await fetch(url)
  const realData = await data.json();
this.setState({
  article:realData.articles,
  totalResults:realData.totalResults
})
  // console.log(this.state.totalResults);

  }
   handlePreClick = async()=>{
     
     const url =`https://newsapi.org/v2/top-headlines?country=in&apiKey=ef5199061e4c42e39908b1343ecebf1e&page=${this.state.page-1}`;
     const data = await fetch(url)
     const realData = await data.json();
     this.setState({
       article:realData.articles,
       page:this.state.page===1?this.state.page:this.state.page-1
       
      })
      
      console.log(this.state.page);
      
    }
    handleNextClick = async()=>{
      

      if(this.state.page===Math.ceil(this.state.totalResults/20)){

      }
else{
  console.log("next clicked");
      

  const url =`https://newsapi.org/v2/top-headlines?country=in&apiKey=ef5199061e4c42e39908b1343ecebf1e&page=${this.state.page+1}`;
  const data = await fetch(url)
  const realData = await data.json();
  this.setState({
    article:realData.articles,
    page:this.state.page + 1
  })
  console.log(this.state.page);
}
      
  }
  
    render() {
        return (
          <>
           <div className=" my-3 container d-flex justify-content-between">  
                <button type="button" disabled={this.state.page===1?true:false} className="btn btn-info" onClick={this.handlePreClick} >&larr; Previous</button>
                <button type="button" className="btn btn-info"  onClick={this.handleNextClick}>Next &rarr;</button>

                </div>

          <div className="container my-5">
      <h2>NewsMonkey- Top Headlines</h2>
               <div className="row">
                   
                {
                  this.state.article.map((element)=>{

                    return(<div className="col-md-4" key={element.url}><NewsItem description={element.description?element.description.slice(0,88):element.title} title={element.title?element.title.slice(0,45):element.title} imageUrl={element.urlToImage} newsUrl={element.url} /></div>)
                  }
                  )
                }

               
             

               </div>
             
           </div>

                <div className=" my-3 container d-flex justify-content-between">  
                <button type="button" disabled={this.state.page===1} className="btn btn-info" onClick={this.handlePreClick} >&larr; Previous</button>
                <button type="button" className="btn btn-info"  onClick={this.handleNextClick}>Next &rarr;</button>

                </div>

           </>
        )
    }
}
