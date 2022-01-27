import React from 'react';
import styles from './Gallery.module.css';
import images from '../../assets/gallery/GalleryImages';
import { Carousel, Image } from 'react-bootstrap';


export const Gallery = () => {


const oldGallery =  (<div id ='gallery'className={styles.gallery}>
<h1 className={styles.heading}>GALLERY</h1>
<div className={styles.imageContainer}>

  <Carousel fade>
    <Carousel.Item>
      <Image
        
        className={styles.img}
        src={images[0]}
        alt="First slide"
        fluid
      />
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <Image
        
        className={styles.img}
        src={images[1]}
        alt="Second slide"
        fluid
      />
  
      <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <Image
        
        className={styles.img}
        src={images[2]}
        alt="Third slide"
        fluid
      />
  
      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <Image
        
        className={styles.img}
        src={images[3]}
        alt="Third slide"
        fluid
      />
  
      <Carousel.Caption>
        <h3>fourth slide label</h3>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <Image
        
        className={styles.img}
        src={images[4]}
        alt="Third slide"
        fluid
      />
  
      <Carousel.Caption>
        <h3>fourth slide label</h3>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <Image
        
        className={styles.img}
        src={images[5]}
        alt="Third slide"
        fluid
      />
  
      <Carousel.Caption>
        <h3>fourth slide label</h3>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  
</div>


</div>)

  return (
    oldGallery
  )
}

export default Gallery;
