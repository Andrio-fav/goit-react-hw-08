import { useDispatch } from 'react-redux';
import { useDebouncedCallback } from 'use-debounce';
import { changeFilter } from '../../redux/filters/slice';
import css from './SearchBox.module.css';

export default function SearchBox() {
  const dispatch = useDispatch();

  const handleChange = useDebouncedCallback((e) => {
    dispatch(changeFilter(e.target.value));
  }, 300);

  return (
    <div>
      <p>Find contacts by name</p>
      <input className={css.field} type="text" name="search" onChange={handleChange}></input>
    </div>
  );
}