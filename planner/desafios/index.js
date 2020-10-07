/*===========================Desafios===========================*/
/*Cria tarefa e checa se está vazia*/
function createTask() {
  const task = document.querySelector('#tarefa');
  let taskValue = task.value

  //Desafio 1:
  if (taskValue === "") {
    alert("A tarefa não pode ser vazia, digite alguma tarefa!");
    return
  }

  const weekDay = document.querySelector('#dias-semana').value;
   //Desafio 4:
  const HourDay = document.querySelector('#horas-dia').value;

  const weekDivs = document.querySelectorAll(".semana div")
  for (const weekDiv of weekDivs) {
    let ids = weekDiv.getAttribute('id');
    let idNumber = Math.floor(Math.random() * 1000000)
    if (ids === weekDay) {
      weekDiv.innerHTML += `<li onclick="streakTask(${idNumber})" id="${idNumber}">${taskValue} às ${HourDay}</li>`;
    }
  }

  task.value = ""

}

 //Desafio 2:
/*Traceja ou remove tracejo de uma tarefa*/
function streakTask(idNumber) {
  //Seleciona todos os li's
  const weekDivsLis = document.querySelectorAll(".semana div li");

  //Percorre todos os li's
  for (const weekDivsLi of weekDivsLis) {
    //Pega o id
    const id = Number(weekDivsLi.getAttribute("id"));
    //Pega a class
    const checkClass = weekDivsLi.getAttribute("class")

    //Verifica se o id da tarefa é igual ao id passado como parâmetro da função
    if (idNumber === id) {
      //Adiciona a classe que traceja a tarefa
      weekDivsLi.classList.add('streak');

      //Verifica e se a tarefa com a classe que traceja a tarefa, ele remove
      if (checkClass == "streak") {
        weekDivsLi.classList.remove("streak")
      }
    }
  }
}

 //Desafio 3:
/*Apaga todas as tarefas*/
function cleanTasks() {
  const confirmation = confirm("Tem certeza que deseja deletar todas as tarefas?");
  const weekDivs = document.querySelectorAll(".semana div")
  if (confirmation) {
    for (const weekDiv of weekDivs) {
      weekDiv.innerHTML = ""
    }
  }
}
