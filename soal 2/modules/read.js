import { readFile } from "fs/promises";

const readData = async () => {
  try {
    const data = await readFile("log.txt", "utf-8");
    console.log(data);
    return data
  } catch (error) {
    throw new Error("Error membaca data", error);
  }
};


export { readData };
