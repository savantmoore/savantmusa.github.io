var images = ["images/image1.jpg", "images/image2.jpg", "images/image3.jpg", "images/image4.jpg", "images/image5.jpg", "images/image6.jpg", "images/image7.jpg", "images/image8.jpg"];
var index = 0;
images.reverse();

var previousImage = function(index, length) {
  if (index<=0) {
    return length-1;
  } else {
    return index-1;
  }
}
var nextImage = function(index, length) {
  return ((index+1)% length);
}

$("#skip").on("click", function() {
  index = nextImage(index, images.length);
  $("#image-to-vote-on").attr("src", images[index]);
});

$("#back").on("click", function() {
  index = previousImage(index, images.length);
  $("#image-to-vote-on").attr("src", images[index]);
});
