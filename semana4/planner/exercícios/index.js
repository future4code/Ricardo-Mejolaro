/*===========================Exercícios===========================*/
//Exercício 1:
function createTask() {
  //Exercício 2:
  const task = document.querySelector('#tarefa');
  let taskValue = task.value
  
  //Exercício 3:
  const weekDay = document.querySelector('#dias-semana').value;

  //Exercício 5:
  const weekDivs = document.querySelectorAll(".semana div")
  for (const weekDiv of weekDivs) {
    let ids = weekDiv.getAttribute('id');
    if (ids === weekDay) {
      weekDiv.innerHTML += `${taskValue} <br><br>`;
    }
  }

  //Exercício 6:
  task.value = ""

}