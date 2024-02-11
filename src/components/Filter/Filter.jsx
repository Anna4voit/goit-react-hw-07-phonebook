import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/filter-slice';
import { selectFilter } from '../../redux/selectors';

import css from './Filter.module.css';

export const Filter = () => {
  const filterValue = useSelector(selectFilter);
  const dispatch = useDispatch();

  const changeFilter = event => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <div>
      <label className={css.label}>
        Find contacts by name
        <input
          type="text"
          name="filter"
          value={filterValue}
          onChange={changeFilter}
          required
        />
      </label>
    </div>
  );
};
