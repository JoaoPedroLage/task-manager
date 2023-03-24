import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { requestData, requestEdit, requestErase } from '../services/requests';
import Loading from './Loading';

const TasksTable = ({ currentFilter }) => {
  const endpoint = '/';

  const [tasks, setTasks] = useState([]);

  const getTasks = (theendpoint, body) => requestData(theendpoint, body)
    .then((response) => setTasks(response))
    .catch((error) => console.log(error));

  useEffect(() => {
    const apiTasks = '/';

    switch (currentFilter) {
    case 'Status':
      getTasks(apiTasks, { filter: 'status' });
      break;
    case 'Data de Criação':
      getTasks(apiTasks, { filter: 'dataDeCriacao' });
      break;
    default:
      getTasks(apiTasks, { filter: 'ordemAlfa' });
      break;
    }
  }, [currentFilter]);

  useEffect(() => {
    if (tasks.length === 0) {
      getTasks(endpoint);
    }
  }, [tasks]);

  if (!tasks.length) {
    return (<Loading />);
  }

  return (
    <section className="score-board-table-section">
      <table className="score-board-table">
        <thead>
          <tr>
            <th data-testid="score_boarding__classification">Nome da tarefa</th>
            <th data-testid="score_boarding__team_name">Descricao da tarefa</th>
            <th data-testid="score_boarding__total_points">Status da tarefa</th>
            <th data-testid="score_boarding__total_points">Data de criação</th>
          </tr>
        </thead>
        <tbody>
          {
            tasks.map(({
              id,
              taskName,
              taskDescription,
              taskStatus,
              createdAt,
            },
            index) => (
              <tr key={ taskName }>
                <td
                  className="score-board-team-name"
                  data-testid={ `score_boarding__team_name_${index + 1}` }
                >
                  {taskName}
                </td>
                <td
                  className="score-board-total-points"
                  data-testid={ `score_boarding__total_points_${index + 1}` }
                >
                  { taskDescription }
                </td>
                <td
                  className="score-board-total-games"
                  data-testid={ `score_boarding__total_games_${index + 1}` }
                >
                  { taskStatus }
                </td>
                <td
                  className="score-board-total-games"
                  data-testid={ `score_boarding__total_games_${index + 1}` }
                >
                  { createdAt }
                </td>
                <td>
                  <button
                    id="edit-button"
                    type="button"
                    onClick={ async () => requestEdit(`${endpoint}${id}`) }
                  >
                    <img
                      src="https://img.icons8.com/material-outlined/344/edit--v1.png"
                      alt="Editar"
                      width="30px"
                      height="30px"
                    />
                  </button>
                </td>
                <td>
                  <button
                    id="erase-button"
                    type="button"
                    onClick={ async () => {
                      requestErase(`${endpoint}/${id}`); window.location.reload(false);
                    } }
                  >
                    <img
                      src="https://cdn3.iconfinder.com/data/icons/social-messaging-ui-color-line/254000/82-512.png"
                      alt="Apagar"
                      width="30px"
                      height="30px"
                    />
                  </button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </section>
  );
};

TasksTable.propTypes = {
  currentFilter: PropTypes.string.isRequired,
};
export default TasksTable;
