

   let numberOfSliders = 6;

   let counters = Array.apply(null, Array(numberOfSliders)).map(Number.prototype.valueOf, 0);
   
   let imageCache = [...Array(numberOfSliders)].map(x => Array());       
   
/*
//If you hardcode the paths use next var structure and delete the parameter in Lazy() function
let images = [
    "/img/img1.jpg"
    ,"/img/img2.jpg"
    ,"/img/img3.jpg"
    ,"/img/img4.jpg"]

//if you are using multiple slideshows

let images = [
  // Slideshow 1 paths

    [ "/img/img1.jpg"
    ,"/img/img2.jpg"
    ,"/img/img3.jpg"
    ,"/img/img4.jpg"],

  // Slideshow 2 paths

    ["/img/img8.jpg"
    ,"/img/img9.jpg"
    ,"/img/img10.jpg"
    ,"/img/img11.jpg"]
    ]

    */
   
    async function Lazy(images) {
   
           let sliders = document.getElementsByClassName("sliderFrame");
   
           for (let x = 0; x < sliders.length; x++) {
   
   
           const fill = new Promise((resolve, reject) => {
   
               for (let y = 0; y < images[x].length; y++) {
   
                  
   
   
                   if (y >= 8) {
                       imageCache[x].push(images[x][y]);
                   }
                   else {
                       let img = document.createElement("img");
                       img.src = images[x][y];
                       sliders[x].lastElementChild.firstElementChild.appendChild(img);
   
                   }
               }
               resolve(true);
               });
              
              
               //Eventhandlers
             
               fill.then(bool => {
                   SlideShow(sliders[x], x);
               });
   
               }  
   
   }
   
   function SlideShow(slideshow, i) {
       let cache = imageCache[i]
           let images = slideshow.lastElementChild.firstElementChild.children;
           let slide = slideshow.firstElementChild.children[2].firstElementChild;
           let arrowL = slideshow.firstElementChild.firstElementChild;
           let arrowR = slideshow.firstElementChild.children[1];
   
           //First image on slide
           counters[i] = (counters[i] + 1) % images.length;
           slide.src = images[counters[i]].src;
   
           //Auto Slide
           const interval = setInterval(function () {
               counters[i] = (counters[i] + 1) % images.length;
   
               slide.src = images[counters[i]].src;
               loadNextImage();
   
             
   
   
           }, 5000);
   
           //Auto load at scroll end
       slideshow.lastElementChild.firstElementChild.onscroll = function () {
           var element = slideshow.lastElementChild.firstElementChild;
                if (element.scrollWidth - element.scrollLeft === element.clientWidth) {
                    for (let z = 0; z < 5; z++) {
                        loadNextImage();
                    }
                }
           };
           //Left arrow
   
           arrowL.onclick = function () {
               clearInterval(interval);
   
               counters[i] = (counters[i] - 1) % images.length;
               counters[i] = counters[i] < 0 ? 6 : counters[i];
               slide.src = images[counters[i]].src;
       }
   
           //Right arrow
           arrowR.onclick = function () {
               clearInterval(interval);
               loadNextImage();
   
               counters[i] = (counters[i] + 1) % images.length;
   
               slide.src = images[counters[i]].src;
           }
           //Carousel
           for (let y = 0; y < images.length; y++) {
   
               images[y].onclick = function () {
                   clearInterval(interval);
                   slide.src = images[y].src;
               }
            }
   
   
       function loadNextImage() {
           if (imageCache.length >= 1) {
               let src = cache.pop();
   
               if (typeof src !== 'undefined') {
                   let img = document.createElement("img");
                   img.src = src;
                   let slider = slideshow.lastElementChild.firstElementChild;
                   slider.appendChild(img);
   
                   let index = slider.children.length - 1; 
                   img.onclick = function () {
                       clearInterval(interval);
                       slide.src = img.src;
                       counters[i] = index;
                       console.log(counters[i]);
   
                   }
   
               }
              
           }
           
      
   
       }
           
       
   
   }
   
   
   
   