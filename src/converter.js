export function celsiusToFahrenheit(celsius) {
  const c = Number(celsius);
  return Number(((c * 9) / 5 + 32).toFixed(0));
}

export function fahrenheitToCelsius(fahrenheit) {
  const f = Number(fahrenheit);
  return Number((((f - 32) * 5) / 9).toFixed(0));
}
