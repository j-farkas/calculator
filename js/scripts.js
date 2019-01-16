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
  var op=null;
  var dec = false;
  var count = 0;
  $("#display").text(inp);
  $(".n").click(function() {
    if(dec === true){
      count +=1;
      inp += parseFloat($(this).text()/(10**count));
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
    dec = false;
    count = 0;
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
    if(dec === false){
          dec = true;
    $("#display").text(inp + '.');
  }
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
      dec = false;
      count = 0;
    }
       first = inp;
      $("#first").text(inp);
      $("#op").text($(this).text());
      op = $(this).attr('id');
      inp = 0;
      dec = false;
      count = 0;
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
    dec = false;
    count = 0;
  });

});
