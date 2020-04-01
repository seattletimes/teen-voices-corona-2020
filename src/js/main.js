// var paywall = require("./lib/paywall");
// setTimeout(() => paywall(12345678), 5000);

require("component-responsive-frame/child");

var $ = require('jquery');


$( ".box" ).click(function() {
  var storyNum = $(this).find('.overlay').data("number");

  $('.container').find(`.overlay`).css("opacity",0);

  $(".box").css("background-color","white");
  $(this).css("background-color","orange");

  if($('.story').is(':visible')) {
    $('.story').slideUp(100);
    $('.container').find(`.story[data-number='${storyNum}']`).delay(200).queue(function (next) {
    $(this).slideDown();
    next();
  });
  } else {
    $('.container').find(`.story[data-number='${storyNum}']`).slideDown();
  }


  console.log(storyNum);

  clearTimeout(timer);

});

var timer;


// $(this).data("id");
var randomArray = [5, 2, 8, 1, 6, 3, 7, 4, 9];

var start = 0;

$( document ).ready(function() {

  (function loop () {
    // console.log(start);

    $('.container').find(`.overlay[data-number='${randomArray[start]}']`).css("opacity",1);

    // console.log("hi mom");
    $('.container').find(`.overlay[data-number='${randomArray[start]}']`).delay(4000).queue(function (next) {
    $(this).css("opacity",0);
    next();
  });

    // var ranNum = Math.random() * (4 - 1) + 1;

    // console.log(ranNum);
    start = (start === 8) ? 0 : start + 1;



    timer = window.setTimeout(loop, 5000);





  })();

});
