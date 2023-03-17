import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import AddTask from '../components/AddTask';
import TasksTable from '../components/TasksTable';
import TableFilter from '../components/TableFilter';
import '../styles/pages/leaderboard.css';

const Leaderboard = () => {
  const [logged, setLogin] = useState(false);
  const [currentFilter, setCurrentFilter] = useState('Ordem Alfabética,');

  useEffect(() => {
    const user = localStorage.getItem('user');

    if (!user) return setLogin(false);

    if (JSON.parse(user).token) return setLogin(true);
  }, [logged, setLogin]);

  return (
    <>
      <Header
        page="TASK MANAGER"
        logged={ logged }
        setLogin={ setLogin }
      />
      <div className="add-task-board-table-section">
        <AddTask
          currentFilter={ currentFilter }
          setCurrentFilter={ setCurrentFilter }
        />
      </div>
      <div className="task-board-table-section">
        <TasksTable
          currentFilter={ currentFilter }
          setCurrentFilter={ setCurrentFilter }
        />
        <TableFilter
          currentFilter={ currentFilter }
          setCurrentFilter={ setCurrentFilter }
        />
      </div>
    </>
  );
};

export default Leaderboard;
