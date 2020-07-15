import {
  useCallback,
  useState,
  KeyboardEvent,
  useEffect,
  ChangeEvent,
} from "react";
import { css } from "otion";

// Components
import Button from "~/components/Button";

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
        alignSelf: "center",
        width: "100%",
        maxWidth: 1260,
        "@media": {
          "(max-width: 768px)": {
            flexDirection: "column",
          },
        },
      })}
    >
      <input
        className={css({
          padding: 16,
          flex: 1,
          border: "1px solid #9B9B9B90",
          borderTopLeftRadius: 4,
          borderBottomLeftRadius: 4,
          "@media": {
            "(max-width: 768px)": {
              borderRadius: 4,
            },
          },
        })}
        type="text"
        placeholder="Search Scientific or Common Name"
        value={search}
        onChange={handleChange}
        onKeyDown={handlePressEnter}
      />

      <Button
        className={css({
          border: "1px solid #9B9B9B90",
          borderLeftWidth: 0,
          borderRadius: "0 4px 4px 0",
          "@media": {
            "(max-width: 768px)": {
              marginTop: 8,
              borderRadius: 4,
              borderLeftWidth: 1,
            },
          },
        })}
        onClick={handleButtonClick}
      >
        SEARCH
      </Button>
    </div>
  );
};

export default Search;
