import React, { useEffect, useState } from "react";
import Image from 'next/image'


function ImageSwapper () {
    const [currentImage, setCurrentImage] = useState(null);
    const [imageClass, setImageClass] = useState(null);
    const [imagePosition, setImagePosition] = useState(null);
    const [postedImages, setPostedImages] = useState(null);
    const [initialImages, setInitialImages] = useState(null);

    const callAPI = async () => {
      try {
        const res = await fetch(
          `https://api.netlify.com/api/v1/sites/1cbdf647-a7e2-4796-9027-12c82e6b40f0/submissions`, {
            headers: {
              "Authorization": "Bearer nfp_cB7zAGExGpmE4hK1EGwiKneAXFNtq5je335c",
            },
          }
        );
        const data = await res.json();
        let imgs = [];
        data.forEach((item) => {
          //item.question = 'Would you care to share some wedding or marriage advice with us?';
          let element = {}

          if (!item.data.file) {
            return;
          }

          if (item.data.name) {
            element.attribution = item.data.name;
          }

          if (item.data.message) {
            element.copy = '<p>' + item.data.message + '</p>';
          }


          element.img = item.data.file.url;

          imgs.push(element);
        });

        setPostedImages(imgs);
        console.log('got images');
        // console.log(data);
      } catch (err) {
        console.log(err);
      }
    };

    const swapImage = async () => {
      console.log("Swap Image");
      console.log(images);
      setImageClass('fadeout');
      setImagePosition(styles[Math.floor(Math.random() * styles.length)]);
      setCurrentImage(images[Math.floor(Math.random() * images.length)]);
    }

    console.log("render");

    const styles = [
      "top-left",
//      "top-right",
      "bottom-left",
      "bottom-right"
    ];

    let images = [
      // { img: 'g1.jpeg' },
      // { img: 'g2.jpeg' },
      // { img: 'g3.jpeg' },
      // { img: 'g5.jpeg' },
      // { img: 'g6.jpeg' },
      // { img: 'g8.jpeg' },
      // { img: 'g9.jpeg' },
      // { img: 'g10.jpeg' },
      // { img: 'g11.jpeg' },
      // { img: 'g12.jpeg' },
      // { img: 'g14.jpeg' },
      // { img: 'g15.jpeg' },
      // { img: 'g16.jpeg' },
      // { img: 'g17.jpeg' },
      // { img: 'g18.jpeg' },
      // { img: 'g19.jpeg' },
      // { img: 'g20.jpeg' },
      // { img: 'g21.jpeg' },
      // { img: 'g22.jpeg' },
      // { img: 'g24.jpeg' },
      // { img: 'g25.jpeg' },
      // { img: 'g26.jpeg' },
      // { img: 'g28.jpeg' },
      // { img: 'g29.jpeg' },
      // { img: 'g30.jpeg' },
      // { img: 'g31.jpeg' },
      // { img: 'g32.jpeg' },
      // { img: 'g33.jpeg' },
      // { img: 'g34.jpeg' },
      // { img: 'g35.jpeg' },
      // { img: 'g37.jpeg' },
      // { img: 'g38.jpeg' },
      // { img: 'g39.jpeg' },
      // { img: 'g40.jpeg' },
    ]

    // advice.forEach((element) => {
    //   element.question = 'Would you care to share some wedding or marriage advice with us?';
    //   images.push(element);
    // });
    // songs.forEach((element) => {
    //   element.question = 'Is there a specific song you\'d like to dance to?';
    //   images.push(element);
    // });

    if (postedImages) {
      console.log(postedImages);
      images = images.concat(postedImages);
    }

    useEffect(() => {

      //setInitialImages(i);
      //setImages(i);
      callAPI();
      swapImage();

      const fetchInterval = setInterval(() => {
        callAPI();
      }, 60000)

    }, []);

    useEffect(() => {

      const fadeinTimeout = setTimeout(() => {
        // console.log("Fade in timeout");
        setImageClass('null');
      }, 1000);

      const fadeTimeout = setTimeout(() => {
        // console.log("Fade out timeout");
          setImageClass('fadeout');
      }, 7000);

      const intervalId = setTimeout(() => {
        // console.log("swap");
        swapImage();
      }, 11000)


    }, [currentImage])

    return (
      <>
      <div className="shareBox">
      <Image
                      layout='fill'
                      src='/qr-code.png'
                      alt='Share your image!'
                      width={300}
                      height={300}
                      layout='responsive'
                    />
                    <h1>Share your photos with us!</h1>
      </div>
        {currentImage && (
          <div className={`${imageClass} ${imagePosition} container slideshow`}>
            <div className="slide">
              {currentImage.copy && (
                <div className="content">
                  {currentImage.question && (
                    <div className="question">
                      {currentImage.question}
                    </div>
                  )}
                  <div className="copy" dangerouslySetInnerHTML={{ __html: currentImage.copy }}></div>
                  {currentImage.attribution && (
                    <div className="attribution">
                      {currentImage.attribution}
                    </div>
                  )}
                  </div>
              )}
              <img src={currentImage.img} />
            </div>
          </div>
        )}
      </>
    )
}


export default function SlideShow() {
  return (
    <ImageSwapper />
  )
}