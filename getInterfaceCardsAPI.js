// var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var data = JSON.parse(this.responseText);
    var APIData = data["cardsAPI"];
    //dom creation
    var cardContainer = document.getElementById("mainCardContainer");
    for(var i=0;i<APIData.length;i++){
        var divmain = document.createElement("div");
            divmain.setAttribute("class","card");
            divmain.setAttribute("style","width: 15rem;margin-right:10px;margin-bottom:20px;");
        var img = document.createElement("img")
            img.setAttribute("class","card-img-top" );
            img.setAttribute("style","width:230px;margin-left:4px;position: relative;top:-15px;box-shadow: 0 8px 8px 0 rgba(0, 0, 0, 0.2);border-radius:3px;")
            img.setAttribute("src","./media/"+APIData[i].FcardImage);
            img.setAttribute("alt","Card image cap");
        var divcontent = document.createElement("div");
            divcontent.setAttribute("class","card-body");
            divcontent.setAttribute("style","margin-top:-20px;")
        var title = document.createElement("h5");
            title.setAttribute("class","card-title text-center");
            title.setAttribute("style","font-weight:800;font-family: 'Poppins', sans-serif;");
            title.innerHTML = APIData[i].FcardTitle;
        var content = document.createElement("p");
            content.setAttribute("class","card-text");
            content.setAttribute("style","padding-left:10px;border:1.5px solid #E9ECEF;border-radius:10px;font-family: 'Hind', sans-serif;")
            content.innerHTML = APIData[i].FcardDescription;
        var form = document.createElement("form");
            form.setAttribute("method","get");
            form.setAttribute("action","./joinPages/comonJoinPage.php")
        var button =  document.createElement("button")    
            button.setAttribute('name',APIData[i].FcardTitle);
            button.setAttribute("class","btn btn-primary joinNowButton");
            button.innerHTML= "Join Now";
            button.setAttribute('type','submit');
        form.appendChild(button);
        divcontent.appendChild(title);
        divcontent.appendChild(content);
        divcontent.appendChild(form);
        divmain.appendChild(img);
        divmain.appendChild(divcontent);
        cardContainer.appendChild(divmain);
    }    
  }
};
xmlhttp.open("GET", "./apiData/clubsAPIData.php", true);
xmlhttp.send();

// console.log(APIData);
