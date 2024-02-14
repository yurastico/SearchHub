import { useHome } from "./hooks/UseHome";
import { Button } from "../../components";
import { Container } from "./styles";

function Home() {
  const { handleGoToSearch } = useHome();

  return (
    <Container>
      <h1>SearchHub</h1>
      <h2>Search for users in github</h2>
      <Button
        text="Search for users in github<"
        onClick={handleGoToSearch}
      />
    </Container>
  );
}

export { Home };