// Write your code here
import React from 'react'
import './index.css'

const TodoItem = props => {
  const {details, deleteTodoItem} = props
  const {id, title} = details
  const handleClick = () => {
    deleteTodoItem(id)
  }
  return (
    <li className="list">
      <p className="title">{title}</p>
      <button className="btn" onClick={handleClick}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
