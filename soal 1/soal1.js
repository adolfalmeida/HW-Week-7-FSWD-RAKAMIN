import { kelilingPersegi, kelilingPersegiPanjang } from "./modules/keliling.js";
import { luasPersegi, luasPersegiPanjang } from "./modules/luas.js";

const kelilingPersegi1 = kelilingPersegi(6);
const luasPersegi1 = luasPersegi(6);

console.log(`Hasil keliling persegi adalah ${kelilingPersegi1}`);
console.log(`Hasil luas persegi adalah ${luasPersegi1}`);

console.log("=====================================================")

const kelilingPersegiPanjang1 = kelilingPersegiPanjang(7, 5);
const luasPersegiPanjang1 = luasPersegiPanjang(7, 5);

console.log(`Hasil keliling persegi panjang adalah ${kelilingPersegiPanjang1}`);
console.log(`Hasil luas persegi panjang adalah ${luasPersegiPanjang1}`);
