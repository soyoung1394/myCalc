// Not a functional design. Created for the Daily UI Challenge at dailyui.co //

var op_1 = '';
var op_2 = '';
var oper = '';
var result = '';
const ZERO = '0.00';
const MAX_LENGTH = 10;

// A $( document ).ready() block.
$(document).ready(function() {
  initCalc(ZERO);
});

var initCalc = function(val) {
  $('#screen').html(val);
  console.log("initCalc: result=" + $('#screen').html());

  result = $('#screen').html();
  op_1 = '';
  op_2 = '';
  oper = '';
};

$('.btn-digit').click(function(e) {
  var digit = $(e.target).html();
  console.log('button is clicked: digit='+digit);
  
  if( $('#screen').html().length >= MAX_LENGTH ) return;
  
  var value = $('#screen').html() + digit;
  if( $('#screen').html() == ZERO ){
    value = digit;
  }
  $('#screen').html(value);
});

$('.btn-init').click(function(e) {
  console.log('button is clicked: init(C)');
  initCalc(ZERO);
});


// $('#screen') 액정에 값 p를 출력
var screen = function(p) {};

// 앞의 값(operand1)과 연산자를 저장해 두기
var calculate = function(p) {};

// 연산자와 값을 모두 초기화
$('#clear').click(function() {});

// 부등호 토글 기능
$('#sign').click(function() {});

// 스크린의 값을 하나씩 지우기
$('#backspace').click(function() {});

// 계산하기 : 피연산자 2개와 연산자에 따라 결과값 출력
var result = function() {};

// 숫자 버튼인 경우 스크린에 출력
$('.digit').click(function(e) {});

// 연산자 버튼인 경우 계산준비
$('#divide, #multiply, #minus, #plus').click(function(e) {});

// '=' 눌렀을 경우 계산 실행하기
$('#equal').click(function() {});