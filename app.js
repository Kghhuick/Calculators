var budgetCalculator = (function() {

  var allButtons = document.querySelectorAll("input[type=button]");
  var input = document.querySelector("input[type=text]");
  var result = document.querySelector("#basicCalculator > input:nth-child(20)");
  var cancel = document.querySelector("#basicCalculator > input:nth-child(19)");

  [...allButtons].forEach(function(el) {
    el.addEventListener("click", function() {
      if (el.value == "=" || el.value == "C") {
        return;
      } else {
        input.value = input.value + el.value;
        return input.value;
      }
    });
  });

  result.addEventListener("click", function() {
    input.value = eval(input.value);
  });

  cancel.addEventListener("click", function() {
    input.value = ""
  });
})();

var percentageTipCalculator = (function() {
  var submitForm = document.getElementById("percentageTipCalculator");

  submitForm.addEventListener("submit", function() {
    event.preventDefault();
    var inputValueOne = document.querySelector("#amount").value;
    var inputValueTwo = document.querySelector("#percentage").value;

    var one = parseInt(inputValueOne);
    var two = parseInt(inputValueTwo);
    var tip = one * (two / 100);
    var total = one + tip;

    document.querySelector("#tip").value = tip;
    document.querySelector("#total").value = total;
  });
})();
