
import React, { Component } from 'react'
import Newsitems from './Newsitems'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


export class News extends Component {


  static defaultProps = {
    category: 'general',
  }

  static propTypes = {
    category: PropTypes.string,
  }



  constructor(props) {
    super(props);
    console.log("Hello I am component from News component");
    this.state = {
      articles: [],
      loading: true,
      country: 'in',
      totalResult: 0
    }
    document.title = `NewsToday-${this.props.category}`;
  }



  async UpdateNews() {
    const url = `https://newsapi.org/v2/top-headlines?country=${this.state.country}&category=${this.props.category}&apiKey=${this.props.apiKey}`;

    this.setState({ loading: true });

    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      articles: parseData.articles,
      loading: false,
      totalResult: parseData.totalResult
    });
  }


  // IMP NOTE : THIS IS USE FOR Fetch the API 


  async componentDidMount() {

    this.UpdateNews();
  }



  fetchMoreData = async () => {

    this.setState({ country: this.state.country = 'us' });

    const url = `https://newsapi.org/v2/top-headlines?country=${this.state.country}&category=${this.props.category}&apiKey=${this.props.apiKey}`;
    let data = await fetch(url);
    let parseData = await data.json();

    this.setState({
      articles: this.state.articles.concat(parseData.articles),
      totalResult: parseData.totalResult
    });
  }




  render() {
    return (
      <div className="container my-5">

        <h1 className="text-center" style={{ padding: '35px 0px' }}>NewsToday - Top {this.props.category} Headlines</h1>

        {this.state.loading && <Spinner />}

        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResult}
          loader={<Spinner />}
        >

          <div className="container">

            <div className="row" >
              {this.state.articles.map((element) => {
                return <div className="col-md-4" key={element.url} >
                  <Newsitems title={element.title ? element.title : " "} description={element.description ? element.description : " "}
                    imgUrl={element.urlToImage} newsUrl={element.url} date={element.publishedAt} />
                </div>

              })}
            </div>
          </div>

        </InfiniteScroll>

      </div>
    )
  }
}

export default News
