import React, { useEffect, useState  } from "react";
import { movieApi } from "../api/movies";
import { Tabs, Table } from "antd";
import Loading from "../components/common/Loading"

export default function Admin() {
  const [movie, setMovie] = useState([
    {
      key: 0,
      label: "loading",
    },
  ]); // 分类
  const [movieKey, setMovieKey] = useState(null); // 当前分类id
  const [page, setPage] = useState(1); // 分页
  const [total, setTotal] = useState(0); // 分页
  const [belongMovies, setBelongMovies] = useState([]); // 当前分类集
  const [isLoading,setIsLoading] = useState(true)

  const columns = [
    {
      title:"电影",
      dataIndex:"name",
      width:"25%",
      editable:true
    },
    {
      title:"电影关于",
      dataIndex:"description",
      editable:true
    },
    {
    title: '操作',
    key: 'operation',
    fixed: 'end',
    width: 100,
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    render: (_,record,index) => <a onClick={()=>{
      console.log(record.id);
      movieApi.getMoviesImages(28).then(res=>{
        console.log(res);
      })
    }}>查看</a>,
  },
  ]

  // 获取电影分类
  useEffect(() => {
    (async () => {
      const resp = await movieApi.getMovies();
      if (resp) {
        setMovieKey(resp.genres[0].id); // 初始第一个
        setMovie(
          resp.genres.map((m) => {
            return {
              key: m.id,
              label: m.name,
            };
          }),
        );
      }
    })();
  }, []);

  // 获取分类电影列表
  useEffect(() => {
    (async () => {
      if (!movieKey) return;
      setIsLoading(true)
      const belongMoviesResp = await movieApi.getBelongMovies(movieKey, page);
      const resp = await movieApi.getMoviesImages(movieKey)
      console.log('resp',resp);
      setBelongMovies(belongMoviesResp.results.map((bm,index)=>{
        return {
          key: bm.id,
          ...bm,
          name:`《 ${bm.name} 》`,
          description: bm.description || "-"
        }
      }));
      setIsLoading(false)
    })();
  }, [movieKey, page]);

  
  const onChange = (key) => {
    setMovieKey(key)
  };
  

  // 标签导航栏
  const tabUI = (
    <Tabs defaultActiveKey={movieKey} items={movie} onChange={onChange} />
  );

  // 列表
  const tableListUI = <Table scroll={{ y: 65 * 10 }} columns={columns} dataSource={belongMovies}/>

  const contentStyle = {
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
    margin: "auto 20px",
  };

  return (
    <div>
      <header style={{padding:"0 12px"}}>{tabUI}</header>
      <div style={{
        position:"fixed",
        bottom:"20px",
        left:"220px"
      }}>{isLoading && <Loading />}</div>
      <div className="content" style={contentStyle}>
        {tableListUI}
      </div>
    </div>
  );
}
