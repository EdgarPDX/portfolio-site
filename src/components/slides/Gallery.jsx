import React, {useState} from 'react';
import styles from './Gallery.module.css';
import images from '../../assets/gallery/GalleryImages'


export const Gallery = () => {
const [imageSub, setImage] = useState(0);

const handleLeft = () => {
  if(imageSub > 0 ){
    setImage(imageSub - 1)
  }
};

const handleRight = () => {
  if(imageSub < images.length -1){
  setImage(imageSub + 1)
}
    
}

  return (
    <div className={styles.gallery}>
      <h1 className={styles.heading}>GALLERY</h1>
      <div className={styles.imageContainer}>
        <div className={styles.imageFrame}>
          <img className={styles.galleryImage} src={images[imageSub]} alt="gallery"/>
        </div>
       <div className={styles.buttonContainer}>
         <button className={styles.button} onClick={handleLeft}>&#129152;</button>
        <button className={styles.button} onClick={handleRight}>&#129154;</button>
       </div>
        
      </div>
    </div>
    
  )
}

export default Gallery;
