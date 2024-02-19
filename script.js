// Получаем элементы слайдера
const slider = document.querySelector('.slider');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');

const dotsEl = document.querySelectorAll('.dot');
// Массив для хранения изо
const slides = Array.from(slider.querySelectorAll('img'));
const slideCount = slides.length;
let slideIndex = 0;

// Устанавливаем обработчики событий для кнопок
prevButton.addEventListener('click', showPreviousSlide);
nextButton.addEventListener('click', showNextSlide);

// Функция для показа предыдущего слайда
function showPreviousSlide() {
  slideIndex = (slideIndex - 1 + slideCount) % slideCount;
  updateSlider();

  dotsEl.forEach((dot, index) => {
    if (index === slideIndex) {
      dot.classList.add("active");
    } else {
      dot.classList.remove("active");
    }
  });
}

// Функция для показа следующего слайда
function showNextSlide() {
  slideIndex = (slideIndex + 1) % slideCount;
  updateSlider();
}

// Функция для обновления отображения слайдера
function updateSlider() {
  slides.forEach((slide, index) => {

    if (index === slideIndex) {
      slide.style.display = 'block';
      dotsEl[index].classList.add('active');
    } else {
      slide.style.display = 'none';
      dotsEl[index].classList.remove("active");
    }
  });
}

// Функция для быстрого переключения между изображениями 
  function jumpToSlide(index) {
    slideIndex = index;
    updateSlider(slideIndex);
  }
  dotsEl.forEach((dot, index) => {
    dot.addEventListener("click", () => jumpToSlide(index));
  });

// Инициализация слайдера
updateSlider();
