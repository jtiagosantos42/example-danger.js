import { describe, it, expect } from "@jest/globals";
import { generateId } from "./generate-id";

describe("generateId", () => {
  it("deve retornar uma string", () => {
    const id = generateId();
    expect(typeof id).toBe("string");
  });

  it("deve retornar um UUID válido no formato correto", () => {
    const id = generateId();
    const uuidRegex =
      /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
    expect(id).toMatch(uuidRegex);
  });

  it("deve gerar IDs únicos em chamadas sucessivas", () => {
    const id1 = generateId();
    const id2 = generateId();
    const id3 = generateId();

    expect(id1).not.toBe(id2);
    expect(id2).not.toBe(id3);
    expect(id1).not.toBe(id3);
  });

  it("deve ter o comprimento correto de um UUID (36 caracteres)", () => {
    const id = generateId();
    expect(id).toHaveLength(36);
  });
});
