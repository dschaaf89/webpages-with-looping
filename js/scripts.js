$(document).ready(function () {
  const icecreamFlavors = ['chocolate', 'vanilla', 'rocky road', 'strawberry'];
icecreamFlavors.forEach(function (element) {
  $('#icecreamList').append('<li>' + element + '</li>');
})
});