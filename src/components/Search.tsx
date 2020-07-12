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
        paddingRight: 128,
        paddingLeft: 128,
        "@media": {
          "(max-width: 1024px)": {
            gridTemplateColumns: "repeat(1, auto)",
            paddingLeft: 16,
            paddingRight: 16,
          },
        },
      })}
    >
      <input
        className={css({
          padding: 16,
          flex: 1,
          border: "1px solid #9B9B9B",
          borderTopLeftRadius: 4,
          borderBottomLeftRadius: 4,
        })}
        type="text"
        onKeyDown={handlePressEnter}
        value={search}
        onChange={handleChange}
      />

      <button
        className={css({
          backgroundColor: "#A5C577",
          padding: "0 32px",
          border: "1px solid #9B9B9B",
          borderLeftWidth: 0,
          borderTopRightRadius: 4,
          borderBottomRightRadius: 4,
        })}
        onClick={handleButtonClick}
      >
        Search
      </button>
    </div>
  );
};

export default Search;
