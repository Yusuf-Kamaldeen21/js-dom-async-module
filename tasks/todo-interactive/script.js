const listItems = document.querySelectorAll('li');
//const title = document.querySelector('h1');


//title.style.color = 'blue';


listItems.forEach((item) => {
  const checkbox = item.querySelector('input[type="checkbox"]');
  const taskText = item.querySelector('.task');
  const allTasks = document.querySelectorAll('.task');

  allTasks.forEach((task) => {
    task.style.color = 'grey';
  });

  checkbox.addEventListener('change', () => {
    const completed = checkbox.checked;
    item.classList.toggle('completed', completed);
    taskText.style.textDecoration = completed ? 'line-through' : 'none';
  });
});

