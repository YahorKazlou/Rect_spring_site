import { useState } from "react";
import debounce from "../../utils/debounce";

const SearchBar = ({ onSearch }) => {
      const [value, setValue] = useState("");

      const onChange = (e) => {
            const value = e.target.value;
            setValue(value);
            debounce(onSearch, 300)(value);
      };

      return (
            <input
                  value={value}
                  onChange={onChange}
                  type="text"
                  className="searchInput"
                  placeholder="search..."
            />
      );
};

export default SearchBar;
