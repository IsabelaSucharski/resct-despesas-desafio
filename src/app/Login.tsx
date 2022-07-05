import { Box, Button, Container, TextField } from "@material-ui/core";
import React, { useState } from "react";
import { signInEndpoint, IUser } from "./backend";

interface ILogin {
  onSignIn: (user: IUser) => void;
}

export function Login(props: ILogin) {
  const [email, setEmail] = useState("usuario2@email.com");
  const [senha, setSenha] = useState("react");

  const signIn = (e: React.FormEvent) => {
    e.preventDefault();
    signInEndpoint(email, senha).then((res) => {
      props.onSignIn(res);
    });
  };

  return (
    <Container maxWidth="sm">
      <Box border={1} borderColor="black" height={300} width={300}>
        <h1>login</h1>
        <form onSubmit={signIn}>
          <TextField
            label="Email"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></TextField>
          <TextField
            label="Senha"
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          ></TextField>
          <div>
            <Button type="submit">Login</Button>
          </div>
        </form>
      </Box>
    </Container>
  );
}
