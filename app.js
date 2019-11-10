window.onload= function()
{
    loadrequest();
}
function loadrequest()
{
    
   
    document.getElementById("search").onclick= function()
    {
        var httpRequest = new XMLHttpRequest();
        var url = "superheroes.php";
        httpRequest.open('POST', url);
        event.preventDefault();
        httpRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        httpRequest.onreadystatechange = function()
        {
            if (httpRequest.readyState === XMLHttpRequest.DONE) 
            {
                if (httpRequest.status === 200) 
                {
                    
                        var response = httpRequest.responseText;
                    
                    document.getElementById("result").innerHTML= response;
                    
                    
                 } 
            }
        };

        const data = "searchby=" + document.getElementById("searchby").value;
        httpRequest.send(data);

    }
    
    

}
