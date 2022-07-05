import { Box, Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useAuthContext } from "./authContext";
import { signOutEndpoint } from "./backend";

export function HeaderLogin() {
  const { user, onSignOut } = useAuthContext();
  let history = useHistory();

  function singout() {
    signOutEndpoint();
    onSignOut();
    history.push("/login");
  }

  return (
    <Box
      className=" "
      height={100}
      display="flex"
      justifyContent="space-between"
      alignItems="center"
    >
      <h1>Despesas</h1>
      <Box>
        Ola {user.nome}
        <Button onClick={() => singout()}>Sair</Button>
      </Box>
    </Box>
  );
}
