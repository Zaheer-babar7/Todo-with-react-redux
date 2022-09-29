import React from 'react';
import { useState } from 'react';

import {
  addTodo,
  deleteTodo,
  deleteAll,
  updateTodo,
} from '../redux/actions/index';

import { useDispatch, useSelector } from 'react-redux';

import { AiFillDelete } from 'react-icons/ai';
import { BiEditAlt } from 'react-icons/bi';
const Todo = () => {
  const [inputValue, setinputValue] = useState('');
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todoReducer.list);
  //   const [todoItem, setTodoItem] = useState([]);
  const [indexNumber, setIndexNumber] = useState('');
  const [updateInput, setupdateInput] = useState('');

  //   console.log(indexNumber, "indexNumber");
  //   const addTodo = () => {
  //     todoItem.push(inputValue);

  //     setTodoItem([...todoItem]);
  //     setinputValue("");
  //   };

  //   const deleteAll = () => {
  //     setTodoItem([]);
  //   };

  //   const deleteTodo = (ind) => {
  //     console.log("delete todo", ind);
  //     todoItem.splice(ind, 1);
  //     setTodoItem([...todoItem]);
  //   };

  //   const updateTodo = (ind) => {
  //     todoItem.splice(ind, 1, updateInput);
  //     setTodoItem([...todoItem]);
  //     setIndexNumber("");
  //     setupdateInput("");
  //   };

  //   const editTodo = (ind) => {
  //     setupdateInput(todoItem[ind]);
  //   };

  return (
    <div>
      <h1 className='bg-dark text-white text-center p-4'>TODO APP</h1>

      <div className='mt-5 px-4'>
        <input
          type='text'
          className='form-group form-control'
          placeholder='ENTER TODO'
          value={inputValue}
          onChange={(e) => setinputValue(e.target.value)}
        />
        <div className='mt-3 d-flex gap-3'>
          <button
            className='btn btn-primary'
            onClick={() => {
              dispatch(addTodo(inputValue));
              setinputValue('');
            }}
          >
            ADD TODO
          </button>
          <button
            className='btn btn-danger'
            onClick={() => dispatch(deleteAll())}
          >
            DELETE TODO
          </button>
        </div>
      </div>

      <section className='mt-5 px-4'>
        {todos.map((todo, ind) => {
          return (
            <React.Fragment key={todo.id}>
              {indexNumber === ind ? (
                <div>
                  <input
                    onChange={(e) => setupdateInput(e.target.value)}
                    className='form-control form-group my-3'
                    value={updateInput}
                    autoFocus
                  />
                  <button
                    onClick={() => {
                      dispatch(updateTodo(updateInput, ind));
                      setIndexNumber('');
                    }}
                    className='btn btn-primary my-2'
                  >
                    UPDATE
                  </button>
                </div>
              ) : (
                <div className='alert alert-primary d-flex justify-content-between'>
                  {todo.title}
                  <div className='d-flex gap-2'>
                    <AiFillDelete
                      color='black'
                      className='icon'
                      onClick={() => dispatch(deleteTodo(todo.id))}
                      size={25}
                    />
                    <BiEditAlt
                      color='black'
                      className='icon'
                      onClick={() => {
                        setIndexNumber(ind);
                        setupdateInput(todo.title)
                      }}
                      size={25}
                    />
                  </div>
                </div>
              )}
            </React.Fragment>
          );
        })}
      </section>
    </div>
  );
};

export default Todo;
