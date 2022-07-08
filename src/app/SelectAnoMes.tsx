import { Box, FormControl, InputLabel, NativeSelect } from "@material-ui/core";
import { useEffect, useState } from "react";
import { meses, anos } from "../helpers";

interface IAno {
  ano: string;
  id: string;
}

interface IMes {
  mes: string;
  id: string;
}

interface ISelectedAnoMes {
  anoMes: string;
  toggleRoute(novoAnoMes: string): void;
}

export function SelectedAnoMes(props: ISelectedAnoMes) {
  let [ano, mes] = props.anoMes.split("-");

  const [listAno, setListAno] = useState<IAno[]>([]);
  const [listMes, setListMes] = useState<IMes[]>([]);

  useEffect(() => {
    setListAno(anos);
    setListMes(meses);
  }, []);

  return (
    <>
      <FormControl margin="normal">
        <Box>
          <InputLabel id="select-ano">Ano</InputLabel>
          <NativeSelect
            id="select-ano"
            value={ano}
            onChange={(e) => props.toggleRoute(e.target.value + "-" + mes)}
          >
            {listAno.map((a) => {
              return (
                <option key={a.ano} value={a.ano}>
                  {a.ano}
                </option>
              );
            })}
          </NativeSelect>
        </Box>
      </FormControl>
      <FormControl margin="normal">
        <Box>
          <InputLabel id="select-mes">Mes</InputLabel>
          <NativeSelect
            id="select-mes"
            value={mes}
            onChange={(e) => props.toggleRoute(ano + "-" + e.target.value)}
          >
            {listMes.map((m) => {
              return (
                <option key={m.id} value={m.id}>
                  {m.mes}
                </option>
              );
            })}
          </NativeSelect>
        </Box>
      </FormControl>
    </>
  );
}
