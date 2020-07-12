import { useCallback, useState, KeyboardEvent, useEffect } from "react";
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

  useEffect(() => {
    setSearch(defaultValue);
  }, [defaultValue]);

  const handleButtonClick = useCallback(() => {
    onChange(search);
  }, [onChange, search]);

  return (
    <div
      className={css({
        display: "flex",
        paddingRight: 128,
        paddingLeft: 128,
      })}
    >
      <div
        className={css({
          display: "flex",
          border: 1,
          borderStyle: "solid",
          borderColor: "#9B9B9B",
          borderTopLeftRadius: 4,
          borderBottomLeftRadius: 4,
          overflow: "hidden",
          flex: 1,
        })}
      >
        <input
          className={css({ padding: 8, border: 0, flex: 1 })}
          type="text"
          onKeyDown={handlePressEnter}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <button
        className={css({
          backgroundColor: "#A5C577",
          paddingLeft: 16,
          paddingRight: 16,
          border: 0,
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
