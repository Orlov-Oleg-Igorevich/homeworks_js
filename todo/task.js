let input = document.querySelector('.tasks__input');
input.required = true;

let taskList = document.querySelector('.tasks__list');

let form = document.querySelector('.tasks__control');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  taskList.insertAdjacentHTML('beforeend', `<div class="task">
                                              <div class="task__title">
                                                ${document.querySelector('.tasks__input').value}
                                              </div>
                                              <a href="#" class="task__remove">&times;</a>
                                            </div>`);
  form.reset();
})

taskList.addEventListener('click', (event) => {
  event.preventDefault();
  let target = event.target;
  target = target.closest('.task__remove');
  if (!target) return;
  target.closest('.task').remove();
})