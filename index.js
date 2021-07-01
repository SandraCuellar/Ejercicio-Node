const os = require("os");
const chalk = require ("chalk");
const { win32 } = require("path");
const sistemaOperativo = os.platform();
console.log('Hackeando tu sistema operativo...');
let memoriaLibre;
let nombreVersion;

console.log(sistemaOperativo);
if (sistemaOperativo === "win32") console.log("Tu no molas mucho");
if (sistemaOperativo ==="darwin") console.log("Tú no molas nada. Bueno, excepto si eres Geraldine o Pol. En ese caso molas. Pero por ser tú, no por usar Mac");
if (sistemaOperativo ==="linux") console.log("Tú molas");
os.freemem();
memoriaLibre = os.freemem()/1024/1024;
console.log(`Cuidado, te quedan ${memoriaLibre} Mb de RAM libre`);
os.version();
nombreVersion = os.version();
console.log(`La versión de tu sistema operativo es ${nombreVersion}`);
