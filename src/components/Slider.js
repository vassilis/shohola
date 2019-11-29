import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { makeStyles } from '@material-ui/core/styles';
import img1 from '../img/9.jpg';
import img2 from '../img/20.jpg';
import img3 from '../img/soccer_007.jpg';
import img4 from '../img/soccer_015.jpg';
import img5 from '../img/soccer_022.jpg';

const useStyles = makeStyles(theme => ({
  img: {
    width: '100%',
    borderRadius: 5,
  },
}));

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function GallerySlider() {
  const classes = useStyles();
  return (
    <Slider
      dots
      infinite
      speed={500}
      slidesToShow={1}
      slidesToScroll={1}
      autoplay
      autoplaySpeed={3000}
      initialSlide={getRandomInt(5)}
    >
      <div>
        <img src={img1} alt="" className={classes.img} />
      </div>
      <div>
        <img src={img2} alt="" className={classes.img} />
      </div>
      <div>
        <img src={img3} alt="" className={classes.img} />
      </div>
      <div>
        <img src={img4} alt="" className={classes.img} />
      </div>
      <div>
        <img src={img5} alt="" className={classes.img} />
      </div>
    </Slider>
  );
}

export default GallerySlider;
