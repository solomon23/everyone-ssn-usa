import { promises as fsPromises } from "node:fs";
import { mkdir } from "node:fs/promises";

const generateAndSaveBatch = async (start, end, fileName) => {
  const combinations = [];

  for (let i = start; i <= end; i++) {
    for (let ii = 0; ii < 10; ii++) {
      for (let iii = 0; iii < 10; iii++) {
        for (let iiii = 0; iiii < 10; iiii++) {
          for (let iiiii = 0; iiiii < 10; iiiii++) {
            for (let iiiiii = 0; iiiiii < 10; iiiiii++) {
              for (let iiiiiii = 0; iiiiiii < 10; iiiiiii++) {
                const combination = `${String(i).padStart(2, "0")}${String(
                  ii
                ).padStart(1, "0")}-${String(iii).padStart(2, "0")}-${String(
                  iiii
                ).padStart(1, "0")}${String(iiiii).padStart(1, "0")}${String(
                  iiiiii
                ).padStart(1, "0")}${String(iiiiiii).padStart(1, "0")}`;
                combinations.push(combination);
              }
            }
          }
        }
      }
    }
  }

  await fsPromises.writeFile(fileName, combinations.join("\n"), "utf8");
  console.log(`Batch saved to ${fileName}`);
};

const generateBatches = async () => {
  const folderPath = "./all-ssn-batches";
  await mkdir(folderPath, { recursive: true });

  const batchRanges = [
    { start: 0, end: 3, fileName: `${folderPath}/batch-a.txt` },
    { start: 4, end: 7, fileName: `${folderPath}/batch-b.txt` },
    { start: 8, end: 11, fileName: `${folderPath}/batch-c.txt` },
    { start: 12, end: 15, fileName: `${folderPath}/batch-d.txt` },
    { start: 16, end: 19, fileName: `${folderPath}/batch-e.txt` },
    { start: 20, end: 23, fileName: `${folderPath}/batch-f.txt` },
    { start: 24, end: 27, fileName: `${folderPath}/batch-g.txt` },
    { start: 28, end: 31, fileName: `${folderPath}/batch-h.txt` },
    { start: 32, end: 35, fileName: `${folderPath}/batch-i.txt` },
    { start: 36, end: 39, fileName: `${folderPath}/batch-j.txt` },
    { start: 40, end: 43, fileName: `${folderPath}/batch-k.txt` },
    { start: 44, end: 47, fileName: `${folderPath}/batch-l.txt` },
    { start: 48, end: 51, fileName: `${folderPath}/batch-m.txt` },
    { start: 52, end: 55, fileName: `${folderPath}/batch-n.txt` },
    { start: 56, end: 59, fileName: `${folderPath}/batch-o.txt` },
    { start: 60, end: 63, fileName: `${folderPath}/batch-p.txt` },
    { start: 64, end: 67, fileName: `${folderPath}/batch-q.txt` },
    { start: 68, end: 71, fileName: `${folderPath}/batch-r.txt` },
    { start: 72, end: 75, fileName: `${folderPath}/batch-s.txt` },
    { start: 76, end: 79, fileName: `${folderPath}/batch-t.txt` },
    { start: 80, end: 83, fileName: `${folderPath}/batch-u.txt` },
    { start: 84, end: 87, fileName: `${folderPath}/batch-v.txt` },
    { start: 88, end: 91, fileName: `${folderPath}/batch-w.txt` },
    { start: 92, end: 95, fileName: `${folderPath}/batch-x.txt` },
    { start: 96, end: 99, fileName: `${folderPath}/batch-y.txt` },
    { start: 100, end: 103, fileName: `${folderPath}/batch-z.txt` },
  ];

  for (const { start, end, fileName } of batchRanges) {
    await generateAndSaveBatch(start, end, fileName);
  }
};

generateBatches().catch(console.error);
