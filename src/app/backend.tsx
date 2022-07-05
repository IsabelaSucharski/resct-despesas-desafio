// criar interfac
// criar os metodos puxando do back
// exportar pro front
// pegar dado fixo de um mex e ano pra aparecer de primeiro na tela

export interface IUser {
  nome: string;
  email: string;
}

export interface IDespesas {
  id: number;
  descricao: string;
  categoria: string;
  valor: number;
  mes: string;
  dia: string;
}

export function getDespesas(): Promise<IDespesas> {
  return fetch("http://localhost:3001/despesas").then((resp) => {
    return resp.json();
  });
}

export function getDespesasMes(mes: string) {
  return fetch(`http://localhost:3001/despesas?mes=${mes}&_sort=dia`, {
    credentials: "include",
  }).then(handleResponse);
}

export function getUserEndpoint(): Promise<IUser> {
  return fetch(`http://localhost:3001/sessao/usuario`, {
    credentials: "include",
  }).then(handleResponse);
}

export function signInEndpoint(email: string, senha: string): Promise<IUser> {
  return fetch(`http://localhost:3001/sessao/criar`, {
    credentials: "include",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, senha }),
  }).then(handleResponse);
}

export function signOutEndpoint(): Promise<IUser> {
  return fetch(`http://localhost:3001/sessao/finalizar`, {
    credentials: "include",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  }).then(handleResponse);
}

export function handleResponse(resp: Response) {
  if (resp.ok) {
    return resp.json();
  } else {
    throw new Error(resp.statusText);
  }
}
