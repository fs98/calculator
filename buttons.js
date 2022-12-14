const BUTTONS_LIST = [
  {
    classes: "clear",
    onclick: clearDisplay,
    text: "AC",
  },
  {
    classes: "sign",
    onclick: inputSign,
    text: "+/-",
  },
  {
    classes: "percent",
    onclick: inputPercent,
    text: "%",
  },
  {
    classes: "operator",
    onclick: () => inputOperator("/"),
    text: "/",
  },
  {
    classes: "operand",
    onclick: () => inputNumber("7"),
    text: "7",
  },
  {
    classes: "operand",
    onclick: () => inputNumber("8"),
    text: "8",
  },
  {
    classes: "operand",
    onclick: () => inputNumber("9"),
    text: "9",
  },
  {
    classes: "operator",
    onclick: () => inputOperator("*"),
    text: "*",
  },
  {
    classes: "operand",
    onclick: () => inputNumber("4"),
    text: "4",
  },
  {
    classes: "operand",
    onclick: () => inputNumber("5"),
    text: "5",
  },
  {
    classes: "operand",
    onclick: () => inputNumber("6"),
    text: "6",
  },
  {
    classes: "operator",
    onclick: () => inputOperator("-"),
    text: "-",
  },
  {
    classes: "operand",
    onclick: () => inputNumber("1"),
    text: "1",
  },
  {
    classes: "operand",
    onclick: () => inputNumber("2"),
    text: "2",
  },
  {
    classes: "operand",
    onclick: () => inputNumber("3"),
    text: "3",
  },
  {
    classes: "operator",
    onclick: () => inputOperator("+"),
    text: "+",
  },
  {
    classes: "operand",
    onclick: () => inputNumber("0"),
    text: "0",
  },
  {
    classes: "decimal",
    onclick: () => inputDecimal("."),
    text: ".",
  },
  {
    classes: "equals",
    onclick: () => inputEquals("="),
    text: "=",
  },
];

const calculator = document.getElementById("calculator");

BUTTONS_LIST.map((button) => {
  const buttonElement = document.createElement("button");
  buttonElement.type = "button";
  buttonElement.classList = `${button.classes} grid-item`;
  buttonElement.onclick = button.onclick;
  buttonElement.innerHTML = button.text;

  return calculator.appendChild(buttonElement);
});
