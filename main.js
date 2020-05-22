'use strict';

{
  const main = document.getElementById('main');
  const thumbnails = document.getElementById('thumbnails');
  const prev = document.getElementById('prev');
  const next = document.getElementById('next');
  const play = document.getElementById('play');
  const stop = document.getElementById('stop');

  const images = [
    'img/420.jpg',
    'img/421.jpg',
    'img/422.jpg',
    'img/423.jpg',
    'img/425.jpg',
    'img/426.jpg',
    'img/427.jpg',
    'img/428.jpg',
    'img/429.jpg',
    'img/430.jpg',
    'img/431.jpg',
    'img/439.jpg',
    'img/446.jpg',
    'img/447.jpg',
    'img/448.jpg',
  ];

  let currentNum = 0;
  let timeoutId;
  let isPlaying = false;

  const img = document.createElement('img');
  img.src = 'img/425.jpg';
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
