import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`

const TaskContainer = styled.div`
  display: grid;
  grid-template-columns: 200px 1fr;
  padding: 10px;
`

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({ complete }) => (complete ? 'line-through' : 'none')};
`

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`

const ButtonContainer = styled.div`
  display: flex;
`

const Button = styled.button`
  margin-left: 5px;
`

class App extends React.Component {
  state = {
    tasks: [],
    inputValue: '',
    filter: ''
  }

  componentDidMount = () => {
    if (localStorage.getItem("tasks")) {
      const tasks = localStorage.getItem("tasks")
      const tasksList = JSON.parse(tasks)
      this.setState({
        tasks: tasksList
      })
    }
  }

  componentDidUpdate() {
    localStorage.setItem("tasks", JSON.stringify(this.state.tasks))
  };

  onChangeInput = (event) => {
    this.setState({ inputValue: event.target.value })
  }

  createTask = () => {
    const newTask = {
      id: Date.now(),
      text: this.state.inputValue,
      complete: false
    }
    const newTaskList = [...this.state.tasks, newTask]
    this.setState({ tasks: newTaskList })

    /*Limpando input */
    this.setState({ inputValue: "" })
  }

  selectTask = (id) => {
    const newTaskList = this.state.tasks.map(task => {
      if (task.id === id) {
        const newTask = {
          ...task,
          complete: !task.complete
        }
        return newTask
      } else {
        return task
      }
    })

    this.setState({ tasks: newTaskList });
  }

  onChangeFilter = (event) => {
    this.setState({ filter: event.target.value })
  }

  /* Desafio 1 */
  deleteTask = (id) => {
    const newTaskList = this.state.tasks.filter(task => {
      return task.id !== id;
    })
    this.setState({ tasks: newTaskList });
  }

  /*Desafio 3 gambiarra */
  updateTask = (id, value) => {
    const newTaskList = this.state.tasks.map(task => {
      if (task.id === id) {
        const newTask = {
          ...task,
          text: value
        }
        return newTask
      } else {
        return task
      }
    })

    this.setState({ tasks: newTaskList });

    /*Limpando input */
    this.setState({ inputValue: "" })
  }

  /* Desafio 4 */
  deleteAllTasks = () => {
    const check = window.confirm("Tem certeza que deseja apagar todas as tarefas?")
    if (check) {
      this.setState({ tasks: [] });
    }
    return
  }
  /*Desafio 6 */
  OrderTasksGrowing = () => {
    let orderedTasks = this.state.tasks.sort((a, b) => {
      if (a.text > b.text) {
        return 1;
      }
      if (a.text < b.text) {
        return -1;
      }
      return 0;
    })
    this.setState({ tasks: orderedTasks });
  }

  OrderTasksDecreasing = () => {
    let orderedTasks = this.state.tasks.sort((a, b) => {
      if (a.text > b.text) {
        return -1;
      }
      if (a.text < b.text) {
        return 1;
      }
      return 0;
    })
    this.setState({ tasks: orderedTasks });
  }

  render() {
    const filterList = this.state.tasks.filter(task => {
      switch (this.state.filter) {
        case 'pending':
          return !task.complete
        case 'complete':
          return task.complete
        default:
          return true
      }
    })

    return (
      <Container>
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <label>Digite a sua nova tarefa:</label>
          <input value={this.state.inputValue} onChange={this.onChangeInput} />
          <Button onClick={this.createTask}>Adicionar</Button>
          <Button onClick={this.deleteAllTasks}>Apagar todas</Button>
          <Button onClick={this.OrderTasksGrowing}>Ordenar crescente</Button>
          <Button onClick={this.OrderTasksDecreasing}>Ordenar decrescente</Button>
        </InputsContainer>
        <br />

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filter} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pending">Pendentes</option>
            <option value="complete">Completas</option>
          </select>
        </InputsContainer>
        <TarefaList>
          {filterList.map(task => {
            return (
              <TaskContainer key={task.id}>
                <Tarefa
                  complete={task.complete}
                  onClick={() => this.selectTask(task.id)}
                >
                  {task.text}
                </Tarefa>
                <ButtonContainer>
                  <Button onClick={() => this.updateTask(task.id, this.state.inputValue)}>Editar</Button>
                  <Button onClick={() => this.deleteTask(task.id)}>Apagar</Button>
                </ButtonContainer>
              </TaskContainer>
            )
          })}
        </TarefaList>
      </Container>
    )
  }
}

export default App

