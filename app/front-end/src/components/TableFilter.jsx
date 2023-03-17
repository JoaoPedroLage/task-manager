import React from 'react';
import PropTypes from 'prop-types';

const GamerFilter = ({ currentFilter, setCurrentFilter }) => {
  const handleCurrentFilter = () => {
    const selectedFilter = document.getElementById('classification-filter').value;
    setCurrentFilter(selectedFilter);
  };

  return (
    <form className="filter-form">
      <label htmlFor="classification-filter">
        Filtros:
        <select
          id="classification-filter"
          defaultValue={ currentFilter }
          data-testid="score_boarding__classification_filter"
        >
          <option>Ordem Alfabética</option>
          <option>Data de Criação</option>
          <option>Status</option>
        </select>
      </label>
      <button
        type="button"
        onClick={ () => handleCurrentFilter() }
      >
        Filtrar
      </button>
    </form>
  );
};

GamerFilter.propTypes = ({
  currentFilter: PropTypes.string,
  setCurrentFilter: PropTypes.func,
}).isRequired;

export default GamerFilter;
