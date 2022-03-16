

const $ = document.querySelector.bind(document)

const addTask = (event) => {
  event.preventDefault()
  const taskDescription = $('#task-description').value

  const newTaskItem = `
  <li>${taskDescription}</li>
  `
  $('#task-list').insertAdjacentHTML('beforeend', newTaskItem)
  $('#task-form').reset()
  saveTask(taskDescription)
}

const saveTask = (task) => {
  let tasksStr = localStorage.getItem('tasks')
  if(!tasksStr){
    const tasks = []
    tasks.push(task)
    tasksStr = JSON.stringify(tasks)
    localStorage.setItem('tasks' , tasksStr)
  }
}