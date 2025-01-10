import { describe, it, expect, test } from "vitest";
import { celsiusToFahrenheit, fahrenheitToCelsius } from "../src/converter.js";

describe("celsiusToFahrenheit tests", () => {
  it("should convert 0C to 32F", () => {
    expect(celsiusToFahrenheit(0)).toBe(32);
  });

  it("should convert 100C to 212F", () => {
    expect(celsiusToFahrenheit(100)).toBe(212);
  });

  it('should convert "25"C to 77F', () => {
    expect(celsiusToFahrenheit("25")).toBe(77);
  });

  it("should convert -40C to -40F", () => {
    expect(celsiusToFahrenheit(-40)).toBe(-40);
  });

  it("should convert -5C to -23F", () => {
    expect(celsiusToFahrenheit(-5)).toBe(23);
  });
});

describe("fahrenheitToCelsius tests", () => {
  it("should convert 0F to -18C", () => {
    expect(fahrenheitToCelsius(0)).toBe(-18);
  });

  it("should convert 100F to 38C", () => {
    expect(fahrenheitToCelsius(100)).toBe(38);
  });

  it('should convert "45"F to 7C', () => {
    expect(fahrenheitToCelsius("45")).toBe(7);
  });

  it("should convert -40F to -40C", () => {
    expect(fahrenheitToCelsius(-40)).toBe(-40);
  });

  it("should convert 400F to 204C", () => {
    expect(fahrenheitToCelsius(400)).toBe(204);
  });
});
