const sliderContainer = document.querySelector(".slider-container");
const rightSlider = document.querySelector(".right-slider");
const leftSlider = document.querySelector(".left-slider");
const upButton = document.querySelector(".up-button");
const downButton = document.querySelector(".down-button");
const slidesLength = rightSlider.querySelectorAll('div').length;

let activeSliderIndex = 0;

leftSlider.style.top = `-${(slidesLength - 1) * 100}vh`;

upButton.addEventListener("click", () => changeSlide("up"));
downButton.addEventListener("click", () => changeSlide("down"));

const changeSlide = (diretion) => {
    const sliderHeight = sliderContainer.clientHeight;
    if (diretion === 'up') {
        activeSliderIndex++;
        if (activeSliderIndex > slidesLength - 1) {
            activeSliderIndex = 0;
        }
    } else if (diretion === 'down') {
        activeSliderIndex--;
        if (activeSliderIndex < 0) {
            activeSliderIndex = slidesLength - 1;
        }
    }
    rightSlider.style.transform = `translateY(-${activeSliderIndex * sliderHeight}px)`
    leftSlider.style.transform = `translateY(+${activeSliderIndex * sliderHeight}px)`
}