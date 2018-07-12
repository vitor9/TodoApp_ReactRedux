// Bibliotecas de terceiros p/ desev
import React from 'react'
// Minha aplicacao
import PageHeader from '../template/pageHeader'
import TodoForm from '../todo/todoForm'
import TodoList from '../todo/todoList'

export default props => (
  <div>
    <PageHeader name='Tarefas' small='Cadastro'></PageHeader>
    <TodoForm />
    <TodoList />
  </div>
)