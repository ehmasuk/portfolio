import fs from "fs";
import path from "path";

export default function extractCodeFromFile({ file }: { file: string }) {
  const filePath = path.join(process.cwd(), file);
  const code = fs.readFileSync(filePath, "utf8");

  return code;
}
