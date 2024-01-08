import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {

  constructor(){
    super();
    this.state = {
      articles : [],
      loading : false,
      page :1
    }
  }

  async componentDidMount(){
    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=7e8f5c53d3a74ea4ace232887fc95760&page=1&pageSize=20`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({articles : parsedData.articles, totalResults : parsedData.totalResults})
  }

  handlePrevClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=7e8f5c53d3a74ea4ace232887fc95760&page=${this.state.page - 1 }&pageSize=20`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      page : this.state.page - 1,
      articles : parsedData.articles
    })
  }

  handleNextClick = async () => {
    if(this.state.page + 1 > Math.ceil(this.state.totalResults/20)){}
    else
    {let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=7e8f5c53d3a74ea4ace232887fc95760&page=${this.state.page + 1}&pageSize=20`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      page : this.state.page + 1,
      articles : parsedData.articles
    })}
  }

  render() {
    return (
      <div className='container my-3'>
        <h1 className="text-center"><b><u>News Monkey - Top headlines</u></b></h1>
        <div className="row">
        {this.state.articles.map((element) => {
          return(
            <div className="col-md-4" key={element.url}>
              <NewsItem title={element.title?element.title:""} description={element.description?element.description:""} imgUrl={element.urlToImage} newsUrl={element.url}/>
            </div>
          )
        })}
        </div>
        <div className="container d-flex justify-content-between my-5">
        <button disabled={this.state.page<=1} type="button" class="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
        <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/20)} type="button" class="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}