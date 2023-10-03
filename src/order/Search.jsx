import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Search() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  function HandlerSubmit(e) {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
  }
  return (
    <form onSubmit={HandlerSubmit}>
      <label>Search your Order</label>
      <input
        type="text"
        value={query}
        placeholder="Order Id"
        onChange={(e) => {
          setQuery(() => e.target.value);
        }}
      ></input>
    </form>
  );
}

export default Search;
