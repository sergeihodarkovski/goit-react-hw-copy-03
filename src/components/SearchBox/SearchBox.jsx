import s from "./SearchBox.module.css";

const SearchBox = ({ value, onChange }) => {
  return (
    <div>
      <label className={s.wrapper}>
        Find contacts by name
        <input
          type="text"
          value={value}
          onChange={onChange}
          className={s.input}
        />
      </label>
    </div>
  );
};

export default SearchBox;
