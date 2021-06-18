import React from "react";
import PropTypes from "prop-types";
import AlbumList from "./components/AlbumList";

AlbumFeature.propTypes = {};

function AlbumFeature(props) {
  const albumList = [
    {
      id: 1,
      name: "Mở Đầu Hoàn Hảo",
      thumbnailUrl:
        "https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/1/7/b/a/17ba5720e78f37ed33351b9957fb507d.jpg",
    },
    {
      id: 2,
      name: "Thay Lời Muốn Nói: Hẹn Hò",
      thumbnailUrl:
        "https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/0/c/f/6/0cf61f53713fddfc912dc533fa9c4659.jpg",
    },
    {
      id: 3,
      name: "Yêu Là Phải Nói !",
      thumbnailUrl:
        "https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/8/e/3/5/8e3517db7aebc40a409d382dd441dce7.jpg",
    },
    {
      id: 4,
      name: "EDM Việt Gây Nghiện",
      thumbnailUrl:
        "https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/2/e/9/f/2e9f3f40e5a70a96a4e5622e30148853.jpg",
    },
    {
      id: 5,
      name: "Nhạc Việt Tropical Hay Nhất",
      thumbnailUrl:
        "https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/2/b/5/d/2b5d44213fe4ec71cc673f92c20c21b7.jpg",
    },
  ];

  return (
    <div>
      <h2>Có Thể Bạn Muốn Nghe</h2>
      <AlbumList albumList={albumList} />
    </div>
  );
}

export default AlbumFeature;
