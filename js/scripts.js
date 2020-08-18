$(document).ready(function () {
  const icecreamFlavors = ['chocolate', 'vanilla', 'rocky road', 'strawberry'];
// icecreamFlavors.forEach(function (element) {
//   $('#icecreamList').append('<li>' + element + '</li>');
// })
  for ( let i = 0; i < icecreamFlavors.length; i++)
  {
    $('#icecreamList').append('<li>' + icecreamFlavors[i] + '</li>');
  }

});