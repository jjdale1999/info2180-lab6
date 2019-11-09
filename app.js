window.onload= function(){
    loadrequest();
}
function loadrequest(){
    var httpRequest = new XMLHttpRequest();
var url = "superheroes.php";
document.getElementById("search").onclick= function(){
    httpRequest.onreadystatechange = printphp;
httpRequest.open('GET', url);
httpRequest.send();
}

function printphp() {
if (httpRequest.readyState === XMLHttpRequest.DONE) {
 if (httpRequest.status === 200) {
 var response = httpRequest.responseText;
 
 alert(response);
 } else {
 alert('There was a problem with the request.');
 }
}
}
}

