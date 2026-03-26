import { randomUUID } from "node:crypto";

export function generateId(): string {
  const uuid = randomUUID();
  console.log(`Generated UUID: ${uuid}`);
  return uuid;
}
