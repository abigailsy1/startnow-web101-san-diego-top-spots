$(document).ready(function() { 
// write your code here
   // var tr = '';
     $.getJSON("data.json", function(data){
        for (var i = 0; i < data.length; i++) {
       // $.each(data, function(index, item){
           //console.log(this.name);
          var tr = $('<tr/>');
           tr.append("<td>" + data[i].name + "</td>");
           tr.append("<td>" + data[i].description + "</td>");
           tr.append('<td><button> <a href="https://www.google.com/maps?q=' + data[i].location + '">Open in Google Maps</button></a></td>');
           $('table').append(tr);

        }
       
    });
});

