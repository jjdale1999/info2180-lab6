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

        function converttoupper (txt){
            if(txt.split(" ").length>1){
                return txt.split(" ")[0].charAt(0).toUpperCase() + txt.split(" ")[0].substr(1).toLowerCase()+ " "+txt.split(" ")[1].charAt(0).toUpperCase() + txt.split(" ")[1].substr(1).toLowerCase();
            }else{
                return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
            }
        }
        const data = "searchby=" + converttoupper(document.getElementById("searchby").value);
        httpRequest.send(data);

    }
    
    

}
