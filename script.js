// Oficina Mecânica
// Ordens "Aguardando Peça"
// Adicionar estimativa de frete
// Somar valor pendente total

const ordensServico = [
    { id: 1, servico: 'Troca de Suspensão', valorPecas: 850.00, status: 'Aguardando Peça' },
    { id: 2, servico: 'Revisão Geral', valorPecas: 400.00, status: 'Concluído' },
    { id: 3, servico: 'Reparo no Câmbio', valorPecas: 2200.00, status: 'Aguardando Peça' },
    { id: 4, servico: 'Alinhamento', valorPecas: 0.00, status: 'Concluído' },
    { id: 5, servico: 'Retífica de Motor', valorPecas: 3500.00, status: 'Aguardando Peça' },
];

// 1. Filter: Aqui ele vai filtrar apenas ordens "Aguardando Peça"
const aguardando = ordensServico.filter(ordem => ordem.status === 'Aguardando Peça');

// 2. Map: Adiciona uma estimativa de frete para o cliente (estou usando 5%)
const ordensComFrete = aguardando.map(ordem => {
    const estimativaFrete = ordem.valorPecas * 0.05;
    return {
        ...ordem,
        frete: estimativaFrete,
        valorTotalPendente: ordem.valorPecas + estimativaFrete
    };
});

// 3. Reduce: Somar o valor pendente total (Peças + Fretes)
const faturamentoPendenteTotal = ordensComFrete.reduce((acumulador, ordem) => {
    return acumulador + ordem.valorTotalPendente;
}, 0);

//Exibir os dados
console.table(ordensComFrete);

console.log(`--- Relatório de logística (oficina) ---`);
console.log(`Ordens aguardando peças: ${ordensComFrete.length}`);
console.log(`Valor total a ser pago (Peças + Frete): R$ ${faturamentoPendenteTotal.toFixed(2)}`);

