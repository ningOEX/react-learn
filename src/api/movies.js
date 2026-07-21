import http from '../utils/http';

export const movieApi = {
    // 获取列表分类
    getMovies:()=>{
       return http.get('/genre/movie/list')
    },
    // 获取属于电影列表
    getBelongMovies:(movie_id,page)=>{
        return http.get(`/movie/${movie_id}/lists?page=${page}`)
    },
    getMoviesImages:(movie_id)=>{
        return http.get(`/movie/${movie_id}/images`)
    }
}
