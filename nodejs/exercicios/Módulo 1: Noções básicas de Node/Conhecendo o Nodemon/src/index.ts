import validator from "validator";
let name: string = "douglas";
if (validator.isLowercase(name)) {
  console.log(`A string ${name} é toda minúscula`);
} else {
  console.log(`A string ${name} NÃO é toda minúscula`);
}
