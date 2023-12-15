import { galleryImg } from "./GalleryFiles";
// import { galleryImg } from "./GalleryFiles";
import { LazyLoadImage } from "react-lazy-load-image-component";
import FitnessProps from "./FitnessProps";

const Fitness = () => {
  const fitnessImages = galleryImg.filter((item) => item.id <= 10);
  return (
    <div className='fitness'>
      <div className='fitness__container'>
        <div className='fitness__grid'>
          {fitnessImages.map((card) => {
            return (
              <div className='fitness__photos'>
                <FitnessProps
                  key={card.id}
                  img={card.img}
                  title={card.title}
                  time={card.time}
                  instructor={card.instructor}
                  background={card.background}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Fitness;

// import { galleryImg } from "./GalleryFiles";
// import { LazyLoadImage } from "react-lazy-load-image-component";

// const Fitness = () => {
//   const galleryImages = galleryImg.filter((item) => item.id <= 10);
//   return (
//     <div className='fitness'>
//       <div className='fitness__container'>
//         <div className='fitness__grid'>
//           {galleryImages.map((image) => {
//             return (
//               <div className='gallery__photos' key={image.id}>
//                 <LazyLoadImage
//                   style={{ width: "300px" }}
//                   src={image.img}
//                   alt='Gym image'
//                 />
//                 <h1>{image.title}</h1>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// };
// export default Fitness;
