
import React, { Component } from 'react'

export class Newsitems extends Component {
  render() {

    let { title, description, imgUrl, newsUrl, date } = this.props;

    return (
      <div className='my-3'>

        <div className="card" >
          <img src={!imgUrl ? "https://c.ndtvimg.com/2019-01/8jkmi1m8_ibm-bloomberg_625x300_09_January_19.jpg" : imgUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}<span className="badge bg-danger">Latest News</span></h5>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small className="text-danger">Last Updated On {new Date(date).toGMTString()} </small></p>
            <a href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
          </div>
        </div>

      </div>
    )
  }
}

export default Newsitems
