'use strict';

{
  const main = document.getElementById('main');
  const thumbnails = document.getElementById('thumbnails');
  const prev = document.getElementById('prev');
  const next = document.getElementById('next');
  const play = document.getElementById('play');
  const stop = document.getElementById('stop');

  const images = [
    'https://github.com/Yoshi-Hiraoka/carolsSlideshow/blob/master/420-min.jpg?raw=true',
    'https://github.com/Yoshi-Hiraoka/carolsSlideshow/blob/master/421-min.jpg?raw=true',
    'https://github.com/Yoshi-Hiraoka/carolsSlideshow/blob/master/422-min.jpg?raw=true',
    'https://github.com/Yoshi-Hiraoka/carolsSlideshow/blob/master/423-min.jpg?raw=true',
    'https://github.com/Yoshi-Hiraoka/carolsSlideshow/blob/master/425-min.jpg?raw=true',
    'https://github.com/Yoshi-Hiraoka/carolsSlideshow/blob/master/426-min.jpg?raw=true',
    'https://github.com/Yoshi-Hiraoka/carolsSlideshow/blob/master/427-min.jpg?raw=true',
    'https://github.com/Yoshi-Hiraoka/carolsSlideshow/blob/master/428-min.jpg?raw=true',
    'https://github.com/Yoshi-Hiraoka/carolsSlideshow/blob/master/429-min.jpg?raw=true',
    'https://github.com/Yoshi-Hiraoka/carolsSlideshow/blob/master/430-min.jpg?raw=true',
    'https://github.com/Yoshi-Hiraoka/carolsSlideshow/blob/master/431-min.jpg?raw=true',
    'https://github.com/Yoshi-Hiraoka/carolsSlideshow/blob/master/439-min.jpg?raw=true',
    'https://github.com/Yoshi-Hiraoka/carolsSlideshow/blob/master/446-min.jpg?raw=true',
    'https://github.com/Yoshi-Hiraoka/carolsSlideshow/blob/master/447-min.jpg?raw=true',
    'https://github.com/Yoshi-Hiraoka/carolsSlideshow/blob/master/448-min.jpg?raw=true',
  ];

  let currentNum = 0;
  let timeoutId;
  let isPlaying = false;

  const img = document.createElement('img');
  img.src = images[currentNum];
  main.appendChild(img);

  images.forEach((image, index) => {
    const thumbnail = document.createElement('img');
    thumbnail.src = image;
    thumbnails.appendChild(thumbnail);
    thumbnail.addEventListener('click', () => {
      img.src = image;
      currentNum = index;
    });
  });

  prev.addEventListener('click', () => {
    currentNum--;
    if(currentNum < 0) {
      currentNum = images.length - 1;
    }
    img.src = images[currentNum];
  });

  next.addEventListener('click', () => {
    currentNum++;
    if(currentNum > images.length - 1) {
      currentNum = 0;
    }
    img.src = images[currentNum];
  });

  function autoPlay() {
    next.click();
    timeoutId = setTimeout(() => {
      autoPlay();
    },3000);
  }

  play.addEventListener('click', () => {
    if(isPlaying) {
      return;
    } else {
      autoPlay();
    }
    isPlaying = true;
  });

  stop.addEventListener('click', () => {
    isPlaying = false;
    clearTimeout(timeoutId);
  });


}
