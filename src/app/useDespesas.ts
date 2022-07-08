import { useEffect, useMemo, useState } from "react";
import { getDespesasMes, IDespesas } from "./backend";

interface IDespesasCategoria {
  categoria: string;
  despesaTotal: number;
}

export function useDespesas(anoMes: string) {
  const [despesasMes, setDespesasMes] = useState<IDespesas[]>([]);
  // const [despesaTotal, setDespesaTotal] = useState(0);

  useEffect(() => {
    getDespesasMes(anoMes).then(setDespesasMes);
  }, [anoMes]);

  return useMemo(() => {
    return {
      despesasMes,
      despesaTotal: handleDespesasTotal(despesasMes),
      despesasCategoria: handleDespesaCategoria(despesasMes),
    };
  }, [despesasMes]);
}

function handleDespesaCategoria(
  despesasMes: IDespesas[]
): IDespesasCategoria[] {
  const resultado: IDespesasCategoria[] = [];

  for (const despesa of despesasMes) {
    const item = resultado.find((item) => item.categoria === despesa.categoria);
    if (item) {
      item.despesaTotal += despesa.valor;
    } else {
      resultado.push({
        categoria: despesa.categoria,
        despesaTotal: despesa.valor,
      });
    }
  }

  resultado.sort((a, b) => b.despesaTotal - a.despesaTotal);
  return resultado;
}

const handleDespesasTotal = (despesasMes: IDespesas[]): number => {
  let soma = 0;

  // for(const despesa of despesasMes){
  //   soma+=despesa.valor
  // }

  despesasMes.filter(({ valor }) => {
    soma += valor;
  });

  return soma;
};
