import React from 'react'

const NewsItem =(props)=>{
  
      const {title, description, imageUrl, newsUrl, author, date, source} = props;
    return (
      <div>
          <div className="card my-3" >
            <img src={imageUrl} className="card-img-top" alt="..."/>
            <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left: "90%", zIndex: "1"}}>{source}</span>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <p className="card-text"><small className="text-muted">By {author} on {date}</small></p>
                <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-sm btn-dark">Read More</a>
            </div>
            </div>
      </div>
    )
  
}

export default NewsItem