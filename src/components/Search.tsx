import {
  useCallback,
  useState,
  KeyboardEvent,
  useEffect,
  ChangeEvent,
} from "react";
import { css } from "otion";

interface SearchProps {
  defaultValue?: string;
  onChange?: (q: string) => void;
}

const Search = ({ defaultValue = "", onChange = () => {} }: SearchProps) => {
  const [search, setSearch] = useState(defaultValue);

  const handlePressEnter = useCallback(
    (e: KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") {
        onChange(search);
      }
    },
    [onChange, search]
  );

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => setSearch(e.target.value),
    []
  );

  const handleButtonClick = useCallback(() => {
    onChange(search);
  }, [onChange, search]);

  useEffect(() => {
    setSearch(defaultValue);
  }, [defaultValue]);

  return (
    <div
      className={css({
        display: "flex",
        width: "100%",
        maxWidth: 1260,
        alignSelf: "center",
      })}
    >
      <input
        className={css({
          padding: 16,
          flex: 1,
          border: "1px solid #9B9B9B90",
          borderTopLeftRadius: 4,
          borderBottomLeftRadius: 4,
        })}
        type="text"
        placeholder="Search Scientific or Common Name"
        value={search}
        onChange={handleChange}
        onKeyDown={handlePressEnter}
      />

      <button
        className={css({
          backgroundColor: "#A5C577",
          color: "#fff",
          padding: "0 32px",
          border: "1px solid #9B9B9B90",
          borderLeftWidth: 0,
          borderTopRightRadius: 4,
          borderBottomRightRadius: 4,
        })}
        onClick={handleButtonClick}
      >
        SEARCH
      </button>
    </div>
  );
};

export default Search;
