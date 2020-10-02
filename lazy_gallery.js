let numberOfSliders = 6;

let counters = Array.apply(null, Array(numberOfSliders)).map(Number.prototype.valueOf, 0);


async function Lazy(images) {
    let promise = new Promise(function () {
       
            let slideshows = document.getElementsByClassName("slides");
            for (let x = 0; x < slideshows.length; x++) {

                for (let y = 0; y < images[x].length; y++) {
                    let img = document.createElement("img");
                    img.src = images[x][y];

                    slideshows[x].appendChild(img);
                }
            }

       
    });

    setTimeout(function () {
        promise.then(SlideShow());
    });
  

   

}

function SlideShow() {
    let sliders = document.getElementsByClassName("sliderFrame");
    for (let i = 0; i < sliders.length; i++) {
        let images = sliders[i].lastElementChild.firstElementChild.children;
        let slide = sliders[i].firstElementChild.children[2].firstElementChild;
        let arrowL = sliders[i].firstElementChild.firstElementChild;
        let arrowR = sliders[i].firstElementChild.children[1];

        //Auto Slide
        const interval = setInterval(function () {
            counters[i] = (counters[i] + 1) % images.length;

            slide.src = images[counters[i]].src;
        }, 5000);

        //Left arrow

        arrowL.onclick = function () {
            clearInterval(interval);

            counters[i] = (counters[i] - 1) % images.length;
            counters[i] = counters[i] < 0 ? 6 : counters[i];
            slide.src = images[counters[i]].src;
        }

        arrowR.onclick = function () {
            clearInterval(interval);
            counters[i] = (counters[i] + 1) % images.length;

            slide.src = images[counters[i]].src;
        }

        for (let y = 0; y < images.length; y++) {

            images[y].onclick = function () {
                clearInterval(interval);
                slide.src = images[y].src;
            }
        }
    }

}



