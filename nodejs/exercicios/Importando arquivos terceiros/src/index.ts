import validator from "validator";

console.log(validator.isEmail("doug1306@gmail.com"));

let ip = "192.198.1.1";
console.log(validator.isIP(ip));
