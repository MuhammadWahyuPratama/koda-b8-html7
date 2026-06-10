define(["jquery", "calc"], function ($, calc) {
  console.log("script loaded");
  $(document).ready(function () {
    let expression = "";

    $(".buttons button")
      .not(".equal")
      .click(function () {
        const value = $(this).text();

        if ($(this).hasClass("math")) {
          expression += value === "x" ? "*" : value;
        } else {
          expression += value;
        }

        $("#display").text(expression);
      });

    $(".equal").click(function () {
      try {
        const result = calc.calculate(expression);

        $("#display").text(result);

        expression = result.toString();
      } catch (err) {
        console.log(err);

        $("#display").text("Error");

        expression = "";
      }
    });

    $(".del").click(function () {
      expression = expression.slice(0, -1);

      if (expression === "") {
        $("#display").text("0");
      } else {
        $("#display").text(expression);
      }
    });
  });
});