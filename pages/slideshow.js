import React, { useEffect, useState } from 'react';
import Image from 'next/image';

function ImageSwapper() {
  const [currentImage, setCurrentImage] = useState(null);
  const [imageClass, setImageClass] = useState(null);
  const [imagePosition, setImagePosition] = useState(null);
  const [postedImages, setPostedImages] = useState(null);
  const [initialImages, setInitialImages] = useState(null);

  const callAPI = async () => {
    try {
      const res = await fetch(
        `https://api.netlify.com/api/v1/sites/1cbdf647-a7e2-4796-9027-12c82e6b40f0/submissions`,
        {
          headers: {
            Authorization: 'Bearer nfp_cB7zAGExGpmE4hK1EGwiKneAXFNtq5je335c',
          },
        }
      );
      const data = await res.json();
      let imgs = [];
      data.forEach((item) => {
        //item.question = 'Would you care to share some wedding or marriage advice with us?';
        let element = {};

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
    } catch (err) {
      console.log(err);
    }
  };

  const swapImage = async () => {
    console.log('Swapping Image');
    let selectedIndex = Math.floor(Math.random() * images.length);
    setImageClass('fadeout');
    setImagePosition(styles[Math.floor(Math.random() * styles.length)]);
    setCurrentImage(images[selectedIndex]);
  };

  const styles = [
    'top-left',
    //      "top-right",
    'bottom-left',
    'bottom-right',
  ];

  let images = [
    { img: 'johnson-engage-52.jpg' },
    { img: 'johnson-engage-86bw.jpg' },
    { img: 'johnson-engage-183.jpg' },
    { img: 'johnson-engage-104.jpg' },
    { img: 'johnson-engage-364.jpg' },
    { img: 'IMG_1318.jpg' },
    { img: 'IMG_2551.jpeg' },
  ];

  if (postedImages) {
    images = images.concat(postedImages);
  }

  useEffect(() => {
    callAPI();
    swapImage();

    const fetchInterval = setInterval(() => {
      callAPI();
    }, 60000);
  }, []);

  useEffect(() => {
    const fadeinTimeout = setTimeout(() => {
      setImageClass('null');
    }, 1000);

    const fadeTimeout = setTimeout(() => {
      setImageClass('fadeout');
    }, 7000);

    const intervalId = setTimeout(() => {
      swapImage();
    }, 11000);
  }, [currentImage]);

  return (
    <>
      <div className='shareBox'>
        <Image
          layout='fill'
          src='/qr-code.png'
          alt='Share your image!'
          width={300}
          height={300}
          layout='responsive'
        />
        <h2>Share your photos with us!</h2>
      </div>
      {currentImage && (
        <div className={`${imageClass} ${imagePosition} container slideshow`}>
          <div className='slide'>
            {currentImage.copy && (
              <div className='content'>
                {currentImage.question && (
                  <div className='question'>{currentImage.question}</div>
                )}
                <div
                  className='copy'
                  dangerouslySetInnerHTML={{ __html: currentImage.copy }}
                ></div>
                {currentImage.attribution && (
                  <div className='attribution'>{currentImage.attribution}</div>
                )}
              </div>
            )}
            <img src={currentImage.img} />
          </div>
        </div>
      )}
      <div style={{ position: 'absolute', bottom: 0, padding: '0 16px' }}>
        <h6>Thank you for sharing your app with us, Michael!</h6>
      </div>
    </>
  );
}

export default function SlideShow() {
  return <ImageSwapper />;
}
