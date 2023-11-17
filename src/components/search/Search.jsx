import { Fragment, useState } from "react";
import { FiSearch } from "react-icons/fi";

const Search = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <Fragment>
      <button onClick={() => setToggle(!toggle)}>
        <FiSearch size={24} style={{ backgroundColor: "transparent" }} />
      </button>
      <form
        onSubmit={(e) => e.preventDefault()}
        action="#"
        className={`${toggle ? "" : "hide"}`}
      >
        <input
          type="text"
          placeholder="Search"
          className="searchbox"
          required
        />
        <button type="submit">
          <FiSearch size={24} style={{ backgroundColor: "transparent" }} />
        </button>
      </form>
    </Fragment>
  );
};
export default Search;
