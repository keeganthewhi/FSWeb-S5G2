import './less/index.less'

// Örnek bir event kullanımı aşağıdadır. Çalıştırmak için comment dışına alın
document.querySelector("h1").addEventListener("click",function(e){
alert("Bana tıkladın!")
 });


// Kodlar buraya gelecek!
const navAnchors = document.querySelectorAll("nav a");

navAnchors.forEach(anchor => {
  anchor.addEventListener("mouseover", function(e) {
    console.log("USTUME GELDIN")
  });
});

const navAnchors2 = document.querySelectorAll("nav a");

navAnchors2.forEach(anchor => {
  anchor.addEventListener("mouseover", function(e) {
    anchor.style.color = "red"
  });
});
const navAnchors3 = document.querySelectorAll("nav a");

navAnchors3.forEach(anchor => {
  anchor.addEventListener("mouseout", function(e) {
    anchor.style.color = ""
  });
});

const navAnchors4 = document.querySelectorAll("nav a");

navAnchors4.forEach(anchor => {
  anchor.addEventListener("mouseover", function(e) {
    anchor.style.transform = "scale(1.2 )";
      anchor.style.transition = "transform 0.3s ease-in-out";
  });
});

const navAnchors5 = document.querySelectorAll("nav a");

navAnchors5.forEach(anchor => {
  anchor.addEventListener("mouseout", function(e) {
    anchor.style.transform = "scale(1)";
  });
});

const img1 = document.querySelector("img")

let originalHeight = img1.clientHeight
img1.addEventListener("dblclick" , function(e){
    if (img1.clientHeight > originalHeight) {

        img1.style.height = originalHeight + "px";
        
    }
else {
    img1.style.height =" 800px"
}
}) ;    

let preventerAnchors = document.querySelectorAll("nav a")



preventerAnchors.forEach(function(e){  
  e.addEventListener("click", function(e) {
    e.preventDefault()
    window.location.href = "https://app.workintech.com.tr/"

  })
})
  let arkaPlan = document.querySelector(".container.home")
  arkaPlan.addEventListener("mouseover", function(e){
    arkaPlan.style.backgroundColor = "blue"
  })

  let benideAl = document.querySelectorAll("div.destination")

  benideAl.forEach(div => {
    div.addEventListener("click", function(e) {
      window.location.href = "https://www.youtube.com/"
    })
  })