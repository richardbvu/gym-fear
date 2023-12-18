import { Outlet } from "react-router-dom";

function Gallery() {
  return (
    <div>
      <div className='page-title'>
        <h1 className='page-title__text'>Gallery</h1>
      </div>
      <Outlet />
    </div>
  );
}
export default Gallery;
