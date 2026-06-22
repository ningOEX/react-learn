/**
 * 获取作品图片列表
 * @param {*} page
 * @param {*} limit
 * @returns
 */
export function getPhotoList(page, limit) {
    
  const headers = {
    Authorization: "FktcH4rkZP3IOWDmw7NAUW1rMsXbx3iwNcWKqcGIUzUeQpatWsOpwFVj",
  };

  return fetch(`/v1/curated?page=${page}&per_page=${limit}`, { headers }).then((res) =>
    res.json(),
  );
}
