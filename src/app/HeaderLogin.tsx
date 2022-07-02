import { Box, Button } from "@material-ui/core";

export function HeaderLogin() {
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
        Ola user
        <Button href="/">Sair</Button>
      </Box>
    </Box>
  );
}
