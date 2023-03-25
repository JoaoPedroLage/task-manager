import React from 'react';
import PropTypes from 'prop-types';
import { requestPost } from '../services/requests';

const AddTask = () => {
  const newTaskHandler = async (e) => {
    e.preventDefault();
    const taskName = document.getElementById('task-name').value;
    const taskDescription = document.getElementById('task-description').value;
    const taskStatus = document.getElementById('task-status').value;

    await requestPost('/tasks', { taskName, taskDescription, taskStatus });
  };

  return (
    <form>
      <label htmlFor="data-task" id="main-label">
        Nova Tarefa
        <input id="task-name" type="text" placeholder="Nome da tarefa" />
        <input id="task-description" type="text" placeholder="Descricao da tarefa" />
        <label id="select-label" htmlFor="data-task">
          Status da tarefa:
          <select
            id="task-status"
            defaultValue="pendente"
          >
            <option>pendente</option>
            <option>em andamento</option>
            <option>pronto</option>
          </select>
        </label>
      </label>
      <button
        data-testid="score_boarding__classification_filter_button"
        type="submit"
        onClick={ (e) => newTaskHandler(e) }
      >
        Adicionar
      </button>
    </form>

  );
};

AddTask.propTypes = ({
  currentFilter: PropTypes.string,
  setCurrentFilter: PropTypes.func,
}).isRequired;

export default AddTask;
