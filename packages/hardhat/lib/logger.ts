import { isTestEnv } from "../config";

export function log(...args: any): void {
  if (isTestEnv) return;
  console.log(args);
}
