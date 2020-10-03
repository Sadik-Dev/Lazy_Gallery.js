# Lazy_Gallery.js

Lazy Gallery is a small js framework designed to quickly create one or more lazy loading slideshows

Also with sample .net code to fetch all image paths automaticaly from a specific folder and send it to the script

[![Demo CountPages alpha](https://j.gifs.com/E8j7z4.gif)](https://github.com/Sadik-Dev/Lazy_Gallery.js)

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

  ```html
  <script src="~/js/lazy_gallery.js"></script>
    <script>
        Lazy(image-paths);
    </script>
  ```

**You can call Lazy() at each moment to fill the carousels and create the event handlers**
**In my example I call it in my view where i also give the array with the paths of my images**

**If you want to hardcode the paths of the images**
[Go to the js Part](#JS-part)



## Usage


#### HTML CSS part


##### Use next Structure for each Slideshow


---

  ```html
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
 *  ##### Chose how much slideshows you will use by changing the next variable in lazy_gallery.js
  ```javascript
  let numberOfSliders = ?;
```

* ##### Give the image paths to the Lazy() function

1. First option is to hardcode the paths like this, do it in the lazy_gallery.js file

**If you hardcode the paths use next var structure and delete the parameter in Lazy() function**
  ```javascript
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

```
2. Second option is to give the paths from your back-end server
    // Example in .Net
    
    1. Make for each slideshow a folder in your images folder and fill it with your images
    2. Get all images from your folders and send it to your view 
    
    Example of the method I use
    
    ```c#
     public IActionResult Index()
        {
            int numberOfSlideshows = 2;
            String[][] paths = new String[numberOfSlideshows][];
            //Slideshow 1
            String[] cat1 = new DirectoryInfo("wwwroot/img/Doors").GetFiles().Select(f =>  f.ToString().
            Substring(f.ToString().LastIndexOf("\\img"))).ToArray();
            paths[0] = cat1;

            //Slideshow 2
            var cat2 = new DirectoryInfo("wwwroot/img/Windows").GetFiles().Select(f => f.ToString().
            Substring(f.ToString().LastIndexOf("\\img"))).ToArray();
            paths[1] = cat2;

       

            return View(paths);
        }
    ```
    
    3. Convert your model to a js array in your view
     ```razor
     @model String[][]
    @{
        var image-paths = @Html.Raw(Json.Serialize(Model));
        }
    ```
    
    4. Call Lazy(image-paths);
    
    I do it when closing the body tag
   ```html
     <script>
        Lazy(@image-paths);
    </script>
     ```

### Congratulations your slideshows are ready !

## License
[MIT](https://github.com/Sadik-Dev/Lazy_Gallery.js/blob/main/LICENSE)
