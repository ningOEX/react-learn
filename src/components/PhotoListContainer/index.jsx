import React, { useState, useEffect } from "react";
import { getPhotoList } from "../../servers";
import PhotoList from "../PhotoList";
import "./index.css";
import Page from "../common/Page";
import Loading from "../common/Loading";
import Modal from "../common/Modal";

/**
 * 渲染作品照片的容器，有自己的状态和逻辑
 * @returns
 */
export default function PhotoListContainer() {
  const [page, setPage] = useState(1); // 当前页码
  const [limit, setLimit] = useState(10); // 每页条数
  const [photos, setPhotos] = useState([]); // 照片列表
  const [total, setTotal] = useState(0); // 数据总量
  const [loading, setLoading] = useState(false); // 加载状态

  useEffect(() => {
    (async function () {
      setLoading(true);
      const res = await getPhotoList(page, limit);
      console.log(res);
      setPhotos(res.photos); // 设置照片列表
      setTotal(res.total_results); // 设置总数
      setLoading(false);
    })();
  }, [page, limit]);

  const HandlePageChange = (newPage) => {
    setPage(newPage);
  };

  return (
    <div className="photo-list-container">
      <PhotoList photos={photos} />
      <Modal showModal={loading} bg="rgba(0,0,0,0.2)">
        <Loading />
      </Modal>
      <div className="page-container">
        <Page
          currentPage={page}
          limit={limit}
          pageSize={limit}
          total={total}
          onPageChange={HandlePageChange}
          onPageSizeChange={setLimit}
        />
      </div>
    </div>
  );
}
