import { Outlet } from "react-router-dom";
import GalleryPage1 from "../components/GalleryPage1";

function Gallery() {
  return (
    <div className=''>
      <div className='gallery-title'>
        <h1 className='gallery-title__text'>Gallery</h1>
      </div>

      <Outlet />
      {/* <GalleryPage1 /> */}
    </div>
  );
}
export default Gallery;
