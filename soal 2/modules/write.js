import { writeFile } from "fs/promises";
import { readData } from "./read.js";

const writeData = async () => {
  try {
    const data = await readData();

    await writeFile("logbaru.txt", data);
    console.log("Data berhasil disimpan");
  } catch (error) {
    throw new Error("Gagal menulis data", error);
  }
};

export { writeData };
