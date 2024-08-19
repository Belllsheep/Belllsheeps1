var today = new Date();
var hourNow = today.getHours();
var greeting;

if(hourNow>=18 || hourNow<5) greeting='Good Evening!';
else if(hourNow>=5 && hourNow<12)greeting='Good Morning!';
else greeting='Good Afternoon!';

document.write('<h3>' + greeting + '</h3>');
