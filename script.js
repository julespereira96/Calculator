document
  .querySelector(".factorialButton")
  .addEventListener("click", factorialize);

document.querySelector(".showTables").addEventListener("click", function () {
  let start = document.querySelector(".startingInput").value;
  let end = document.querySelector(".endingInput").value;
  Tables(start, end);
});

function factorialize() {
  let num = document.querySelector(".factorialInput").value;
  let result = {
    series: "",
    value: num,
  };
  console.log(num);
  if (num === 0 || num === 1) {
    result.value = 1;
    result.series = "1";
    return result;
  } else {
    while (num > 1) {
      num--;
      result.value *= num;
      result.series += num + (num !== 1 ? "x" : "");
    }
    document.querySelector(".output-series").innerHTML = result.series;
    document.querySelector(".output-value").innerHTML = result.value;
  }
}

// + "=" + result + "<br>"
const difference = 9;

function Tables(start, end) {
  let tempDifference = end - start; //12-2=10

  if (tempDifference <= difference) {
    //10<=9

    for (let i = start; i <= end; i++) {
      let table = "";
      console.log(i);
      for (let j = 1; j < 11; j++) {
        table += i + " x " + j + " = " + j * i + "<br>";
      }
      document.querySelector(".table-output").innerHTML += table + "<br>";
    }
  } else {
    console.log("the end number should be less than ", start + difference);
  }
}

function clr() {
  document.getElementById("result").value = "";
}

function dis(val) {
  document.getElementById("result").value += val;
}

function solve() {
  let x = document.getElementById("result").value;
  let y = eval(x);
  document.getElementById("result").value = y;
}

const factorialLink = document.querySelector(".factorial");
const calculatorLink = document.querySelector(".home");
const multiplicationLink = document.querySelector(".tables");
const box1 = document.querySelector(".box-1");
const box = document.querySelector(".box");
const title = document.querySelector(".title");

factorialLink.addEventListener("click", factorialBox);
multiplicationLink.addEventListener("click", multiplicationTables);
calculatorLink.addEventListener("click", calculatorDisplay);

function factorialBox() {
  title.classList.add("d-none");
  box1.classList.add("d-none");
  box.classList.remove("d-none");
}

function multiplicationTables() {
  title.classList.add("d-none");
  box.classList.add("d-none");
  box1.classList.remove("d-none");
}

function calculatorDisplay() {
  box.classList.add("d-none");
  box1.classList.add("d-none");
  title.classList.remove("d-none");
}

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});
