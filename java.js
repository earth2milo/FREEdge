/////// CAROUSEL DATA FUNCTIONS //////


const buttons = document.querySelectorAll("[data-carousel-button]")
const pdf=document.getElementById("")

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]")

    const activeSlide = slides.querySelector("[data-active]")
    let newIndex = [...slides.children].indexOf(activeSlide) + offset
    if (newIndex < 0) newIndex = slides.children.length - 1
    if (newIndex >= slides.children.length) newIndex = 0

    slides.children[newIndex].dataset.active = true
    delete activeSlide.dataset.active
  })
})

//// END OF CAROUSEL DATA FUNCTIONS //////

//// Start of FAQ Page Functions ////

var faq=document.getElementsByClassName("faq-question");
var i;

for (i=0; i<faq.length; i++) {
  faq[i].addEventListener("click",function() {
    // toggle between active and removed class
    this.classList.toggle("active");
    // hiding element!
    var body= this.nextElementSibling;
    if (body.style.display === "block") {
      body.style.display = "none";
  } else {
      body.style.display = "block";
  }
});
    }

    /// Toolkit PDF Full Screen //// 
document.addEventListener("dblclick", () => {
    document.documentElement.requestFullscreen().catch((e) => {
console.log(e);

    });

  });
