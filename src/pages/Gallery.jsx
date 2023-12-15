import { Outlet } from "react-router-dom";

function Gallery() {
  return (
    <div>
      <div className='gallery-title'>
        <h1 className='gallery-title__text'>Gallery</h1>
      </div>
      <Outlet />
    </div>
  );
}
export default Gallery;
