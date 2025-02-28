document.addEventListener('click', advent);

function advent(event) {
  let target = event.target;
  if (!target.closest('.book__control')) return;
  event.preventDefault();
  let book = document.querySelector('.book');
  let fontControl = book.querySelector('.book__control_font-size');
  let colorControl = book.querySelector('.book__control_color');
  let bgControl = book.querySelector('.book__control_background');

  if (target.closest('.book__control_font-size')) {
    if (target.classList.contains('font-size_active')) return;

    let activeFont = fontControl.querySelector('.font-size_active');
    let data = activeFont.dataset.size;

    if (data) book.classList.remove(`book_fs-${data}`);
    activeFont.classList.remove('font-size_active');
    target.classList.add('font-size_active');

    if (target.dataset.size) book.classList.add(`book_fs-${target.dataset.size}`);

  } else if (target.closest('.book__control_color')) {
    if (target.classList.contains('.color_active')) return;

    let activeColor = colorControl.querySelector('.color_active');
    let data = activeColor.dataset.textColor;

    if (data) book.classList.remove(`book_color-${data}`);
    activeColor.classList.remove('color_active');
    target.classList.add('color_active');

    if (target.dataset.textColor) book.classList.add(`book_color-${target.dataset.textColor}`);

  } else if (target.closest('.book__control_background')) {
    if (target.classList.contains('.color_active')) return;

    let activeBgColor = bgControl.querySelector('.color_active');
    let data = activeBgColor.dataset.bgColor;

    if (data) book.classList.remove(`book_bg-${data}`);
    activeBgColor.classList.remove('color_active');
    target.classList.add('color_active');

    if (target.dataset.bgColor) book.classList.add(`book_bg-${target.dataset.bgColor}`);
  
  }

} 

// const bookElement = document.getElementById("book");
// const controlElements = document.querySelector(".book__controls");

// const updateClassList = (baseClass, modifier) => {
//   const previousClass = Array.from(bookElement.classList).find((className) => className.startsWith(baseClass));
//   if (previousClass) {
//     bookElement.classList.remove(previousClass);
//   }
//   if (modifier) {
//     bookElement.classList.add(`${baseClass}${modifier}`);
//   }
// };

// const onClickHandler = (event) => {
//   const target = event.target;
//   const { size, textColor, bgColor } = target.dataset;

//   if (size || textColor || bgColor) {
//     event.preventDefault();

//     const controlGroup = target.closest(".book__control").querySelectorAll("a");
//     controlGroup.forEach((element) =>
//       element.classList.remove(`${target.classList[0]}_active`)
//     );
//     target.classList.add(`${target.classList[0]}_active`);

//     updateClassList("book_fs-", size);
//     updateClassList("book_color-", textColor);
//     updateClassList("book_bg-", bgColor);
//   }
// };

// controlElements.addEventListener("click", onClickHandler);