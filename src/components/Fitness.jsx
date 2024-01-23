import { galleryImg } from "./GalleryFiles";
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
