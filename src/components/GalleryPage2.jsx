import { Link } from "react-router-dom";
import { galleryImg } from "./GalleryFiles";
import { LazyLoadImage } from "react-lazy-load-image-component";

function GalleryPage2() {
  const galleryImages = galleryImg.filter((item) => item.id >= 7);

  return (
    <div className='gallery'>
      <div className='gallery__container'>
        <div className='gallery__grid'>
          {galleryImages.map((image) => {
            return (
              <div
                className='gallery__photos'
                key={image.id}
                style={{ backgroundImage: `url( ${image.background} )` }}
              >
                <LazyLoadImage src={image.img} alt='Gym image' />
              </div>
            );
          })}
        </div>
      </div>
      <div className='gallery__page2-numbers'>
        <div className='gallery__page2-number'>
          <Link to='/gallery/page-1' onClick={() => window.scrollTo(0, 0)}>
            1
          </Link>
        </div>
        <div className='gallery__page2-number'>
          <Link to='/gallery/page-2' onClick={() => window.scrollTo(0, 0)}>
            2
          </Link>
        </div>
      </div>
    </div>
  );
}
export default GalleryPage2;
