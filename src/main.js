// Bootstrap’s CSS and JS Import
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import { celsiusToFahrenheit, fahrenheitToCelsius } from "./converter";

const form = document.querySelector("#converter-form");
const tempValue = document.querySelector("#temp-value");
const tempType = document.querySelector("#temp-type");
const result = document.querySelector("#result");

const C2F = "c2f";

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const currentValue = tempValue.value;
  const coversionType = tempType.value;

  let output;

  if (coversionType === C2F) {
    const fahrenheit = celsiusToFahrenheit(currentValue);
    output = `${currentValue}°C = ${fahrenheit}°F`;
  } else {
    const celsius = fahrenheitToCelsius(currentValue);
    output = `${currentValue}°F = ${celsius}°C`;
  }

  result.textContent = output;
});
