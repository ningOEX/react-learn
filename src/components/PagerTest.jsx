import React, { Component } from "react";
import Pager from "./Pager";
import MovieList from "./MovieList";
import Loading from "./Loading";
export default class PagerTest extends Component {
  // 初始数据
  state = {
    current: 1,
    total: 0,
    limit: 12,
    paneNumber: 5,
    movieList: [],
    currentMovieList:[],
    isLoading:false,
  };

  // 实例已挂载
  componentDidMount() {
    this.fetchMovieData();
  }

  /**
   * 获取猫眼电影实时票房
   * @returns
   */
  async fetchMovieData() {
    this.setState({
      isLoading:true
    })
    const res = await fetch("https://api.nxvav.cn/api/maoyan/movie/")
      .then((resp) => resp.json())
      .then((resp) => resp.data);
    //根据每页显示大小进行切分数组，（模拟分页）
    this.chunkMovies(res.list,this.state.limit);
    this.setState({
      total: res.list.length,
      isLoading:false
    });
    
  }

  /**
   * 将数组按每页显示多少进行切分
   * @param {*} movieList 
   * @param {*} limit 
   * @returns 
   */
  chunkMovies(movieList, limit) {
    const result = [];
    for (let i = 0; i < movieList.length; i += limit) {
      result.push(movieList.slice(i, i + limit));
    }
    this.setState({
      movieList:result,
      currentMovieList:result[this.state.current - 1]
    })
  }

  /**
   * 处理点击分页事件
   * @param {*} number
   */
  handleClick = (number) => {
    this.setState({
      current: number,
      currentMovieList:this.state.movieList[number - 1]
    });
  };

  render() {
    return (
      <>
        <Loading show={this.state.isLoading} />
        <MovieList movies={this.state.currentMovieList} />
        <div style={{
          display:"flex",
          flexWrap:"wrap",
          alignItems:"center",
          gap:"10px",
          marginTop:"10px",
          justifyContent:"center"
        }}>
          <Pager onClickPage={this.handleClick} {...this.state} />
        </div>
      </>
    );
  }
}
