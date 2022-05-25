import React, {useState, useEffect} from 'react';
import Loading from './Loading';
import NewsItem from './NewsItem';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';

const News =(props)=>{
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  let [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0);
 

   const updatePage= async ()=> {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pageSize}`;
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json();
    props.setProgress(70);
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    props.setProgress(100);
    setLoading(false);
  }

  useEffect(() => {
    updatePage();
    // eslint-disable-next-line
  }, [])
  

    const fetchMoreData = async () => {
    setPage(++page);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
    setLoading(false);
  };

  
    return (
      <>
        <h2 className='text-center' style={{marginTop:"5rem"}}>DigiNews : Daily Dose of Current Affairs</h2>
        {loading && <Loading/>}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Loading />}
        >
          <div className="container">
            <div className="row">
              {articles.map((element) => {
                return (
                  <div className="col-md-4" key={element.url}>
                    <NewsItem
                      title={element.title ? element.title : ''}
                      description={
                        element.description ? element.description : ''
                      }
                      imageUrl={
                        element.urlToImage
                          ? element.urlToImage
                          : 'https://images.indianexpress.com/2022/05/Realme-Narzo-50-Narzo-50-Pro.jpg'
                      }
                      newsUrl={element.url}
                      author={element.author ? element.author : 'Unknown'}
                      date={new Date(element.publishedAt).toUTCString()}
                      source={element.source.name}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>
      </>
    );
  
}

News.defaultProps = {
  country: 'in',
  pageSize: 8,
  category: 'general',
  totalResults: 0,
};
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  catagory: PropTypes.string,
};

export default News;
