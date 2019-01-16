function add(number1, number2)
{
  return number1 + number2;
};

function subtract(number1, number2)
{
  return number1 - number2;
};

function multiply(number1, number2)
{
  return number1 * number2;
};

function divide(number1, number2)
{
  return number1 / number2;
};

$(document).ready(function() {
  inp = 0;
  var first = 0;
  var op=null;;
  $("#display").text(inp);
  $(".n").click(function() {
    if($("#display").text().charAt($("#display").text().length-1) === '.'){
      inp += parseFloat($(this).text()/10);
      $("#display").text(inp);
    }else{
      inp *= 10;
      inp += parseFloat($(this).text());
      $("#display").text(inp);
    }
  });
  $("#C").click(function() {
    inp = 0;
    $("#display").text(inp);
    $("#op").text("");
    $("#first").text("");
    op=null;
  });
  $("#neg").click(function() {
    inp *= -1;
    $("#display").text(inp);
  });
  $("#perc").click(function() {
    inp /= 100;
    $("#display").text(inp);
  });
  $("#dcm").click(function() {
    $("#display").text(inp + '.');
  });
  $(".op").click(function() {
    if(op !== null)
    {
      switch (op) {
        case "pls":
          inp = add(first, inp);
          break;
        case "mn":
        inp = subtract(first, inp);
          break;
        case "mlt":
        inp = multiply(first, inp);
          break;
        case "dvd":
        inp = divide(first, inp);

          break;
      }
      $("#display").text(inp);
      $("#op").text("");
      $("#first").text("");
      op=null;
    }
       first = inp;
      $("#first").text(inp);
      $("#op").text($(this).text());
      op = $(this).attr('id');
      console.log(op);
      inp = 0;
      $("#display").text(inp);
  });
  $("#eql").click(function() {
    switch (op) {
      case "pls":
        inp = add(first, inp);
        break;
      case "mn":
      inp = subtract(first, inp);
        break;
      case "mlt":
      inp = multiply(first, inp);
        break;
      case "dvd":
      inp = divide(first, inp);

        break;
    }
    $("#display").text(inp);
    $("#op").text("");
    $("#first").text("");
    op=null;
  });

});
