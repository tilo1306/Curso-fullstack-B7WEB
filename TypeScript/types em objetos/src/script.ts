function resumo(usuario: { nome: string; idade?: number }) {
  if (usuario.idade !== undefined) {
    return `Olá ${usuario.nome}, tudo bem? Você tem ${usuario.idade!}`;
  } else {
    return `Olá ${usuario.nome}, tudo bem? `;
  }
}
let u = {
  nome: "Douglas",
  idade: 90,
};

resumo(u);
