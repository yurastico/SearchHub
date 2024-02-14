import { useSearch } from "./hooks/useSearch";
import { Button } from "../../components";
import { Container, SearchArea } from "./styles";

function Search() {
  const { username, handleInput, throwUser } =
    useSearch();

  return (
    <Container>
      <SearchArea>
        <h1>SearchHub</h1>
        <h2>Search for users on Github</h2>
        <input
          value={username}
          onChange={handleInput}
          type="text"
          name="username"
          id="username"
          placeholder="Type github username"
        />
        <Button
          text="Search"
          onClick={throwUser}
        />
      </SearchArea>
    </Container>
  );
}

export { Search };