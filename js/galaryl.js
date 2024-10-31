var mainImage= document.getElementById("mainImage");
var img1= document.getElementById('img1');

img1.onclick =function(){
    var imgUrl= img1.getAttribute('src');
    mainImage.setAttribute('src',imgUrl);
}
img2= document.getElementById('img2');
img2.onclick =function(){
    var imgUrl= img2.getAttribute('src');
    mainImage.setAttribute('src',imgUrl);
}
img3= document.getElementById('img3');

img3.onclick =function(){
    var imgUrl= img3.getAttribute('src');
    mainImage.setAttribute('src',imgUrl);
}
 var img4= document.getElementById('img4');

img4.onclick =function(){
    var imgUrl= img4.getAttribute('src');
    mainImage.setAttribute('src',imgUrl);
}
 var img5 = document.getElementById("img5");
    img5.onclick= function(){
    var imgUrl= img5.getAttribute("src");
    mainImage.setAttribute('src',imgUrl);
};