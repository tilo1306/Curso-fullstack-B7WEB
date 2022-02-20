function resumo(usuario: { nome: string; idade: number }) {
  return `Olá ${usuario.nome}, tudobem? Você tem ${usuario.idade!}`;
}
let u = {
  nome: "Douglas",
  idade: 90,
};

resumo(u);
