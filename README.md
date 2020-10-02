# Lazy_Gallery.js

Lazy Gallery is a small js framework designed to quickly create one or more lazy loading slideshows


#  Features!

  - Autoplay Slideshow
  - Change image with arrows
  - Change image with Carousel
  - Lazy Loaded ;)


You can also:
  - Fully modify the script as you wish 
  - Multiple Slideshows supported
 



### Installation


* Download [lazy_gallery.js](https://github.com/Sadik-Dev/Lazy_Gallery.js/blob/main/lazy_gallery.js) to the js folder of your project
* Add following scripts just before closing body tag

  ```ruby
  <script src="~/js/lazy_gallery.js"></script>
    <script>
        Lazy(@data);
    </script>
  ```

**You can call Lazy() at each moment to fill the carousels and create the event handlers**
**In my example I call it in my view where i also give the array with the paths of my images**

**If you want to hardcode the paths of the images**
[Go to the js Part](#JS-part)




#### HTML part


##### Use next Structure for each Slideshow


---

  ```ruby
 <!-- Don't change the class names and id's -->

    <div class="sliderFrame">
       <div id="slider" class="flexslider">
            <img class="arrowL" src="img/arrowLeft.png">
            <img class="arrowR" src="img/arrowRight.png">
            <div class="slide">
                <!-- This is the main image that is shown -->
                 <img src=""> 
            </div>
      </div>
      <div class="carrousel">
            <div class="slides">
   <!-- Our script wil fill this div with all the images for this slideshow -->
            </div>
       </div>
    </div>
```

**You can also use my css to get the same result as on the pictures**
 [lazy_gallery.css](https://github.com/Sadik-Dev/Lazy_Gallery.js/blob/main/css/lazy_gallery.css) 

#### JS part
