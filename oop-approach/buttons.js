const BUTTONS_LIST = [
  {
    classes: "clear",
    onclick: calculator.clearDisplay,
    text: "AC",
  },
  {
    classes: "sign",
    onclick: calculator.inputSign,
    text: "+/-",
  },
  {
    classes: "percent",
    onclick: calculator.inputPercent,
    text: "%",
  },
  {
    classes: "backspace",
    onclick: calculator.inputBackspace,
    text: "DEL",
  },
  {
    classes: "operand",
    onclick: () => calculator.inputNumber("7"),
    text: "7",
  },
  {
    classes: "operand",
    onclick: () => calculator.inputNumber("8"),
    text: "8",
  },
  {
    classes: "operand",
    onclick: () => calculator.inputNumber("9"),
    text: "9",
  },

  {
    classes: "operator",
    onclick: () => calculator.inputOperator("/"),
    text: "/",
  },
  {
    classes: "operand",
    onclick: () => calculator.inputNumber("4"),
    text: "4",
  },
  {
    classes: "operand",
    onclick: () => calculator.inputNumber("5"),
    text: "5",
  },
  {
    classes: "operand",
    onclick: () => calculator.inputNumber("6"),
    text: "6",
  },
  {
    classes: "operator",
    onclick: () => calculator.inputOperator("*"),
    text: "*",
  },
  {
    classes: "operand",
    onclick: () => calculator.inputNumber("1"),
    text: "1",
  },
  {
    classes: "operand",
    onclick: () => calculator.inputNumber("2"),
    text: "2",
  },
  {
    classes: "operand",
    onclick: () => calculator.inputNumber("3"),
    text: "3",
  },
  {
    classes: "operator",
    onclick: () => calculator.inputOperator("-"),
    text: "-",
  },

  {
    classes: "decimal",
    onclick: calculator.inputDecimal,
    text: ".",
  },
  {
    classes: "operand",
    onclick: () => calculator.inputNumber("0"),
    text: "0",
  },
  {
    classes: "equals",
    onclick: () => calculator.inputEquals("="),
    text: "=",
  },

  {
    classes: "operator",
    onclick: () => calculator.inputOperator("+"),
    text: "+",
  },
];

const calculatorElement = document.getElementById("calculator");

BUTTONS_LIST.map((button) => {
  const buttonElement = document.createElement("button");
  buttonElement.type = "button";
  buttonElement.classList = `${button.classes} grid-item`;
  buttonElement.onclick = button.onclick;
  buttonElement.innerHTML = button.text;

  return calculatorElement.appendChild(buttonElement);
});
