import React from 'react';
import styles from './Gallery.module.css';
import images from '../../assets/gallery/GalleryImages'


export const Gallery = () => {
  return (
    <div className={styles.gallery}>
      <h1 className={styles.heading}>GALLERY</h1>
      <div className={styles.imageContainer}>
        <img className={styles.image} src={images[0]} alt="gallery"/>
      </div>
    </div>
    
  )
}

export default Gallery;