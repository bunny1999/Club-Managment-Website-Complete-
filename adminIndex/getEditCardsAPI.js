var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var data = JSON.parse(this.responseText);
    if(document.getElementById("varify").value == "admin"){
        var APIData = data["cardsAPI"];
        //dom creation
        var cardContainer = document.getElementById("mainCardContainer");
        for(var i=0;i<APIData.length;i++){
            var divmain = document.createElement("div");
                divmain.setAttribute("class","card");
                divmain.setAttribute("id","insertedCard"+i);
                divmain.setAttribute("style","width: 15rem;");
            var img = document.createElement("img");
                img.setAttribute("class","card-img-top" );
                img.setAttribute("src","../media/"+APIData[i].FcardImage);
                img.setAttribute("alt","Card image cap");
            var divcontent = document.createElement("div");
                divcontent.setAttribute("class","card-body");
            var title = document.createElement("h5");
                title.setAttribute("class","card-title text-center");
                title.setAttribute("style","font-weight:800;");
                title.innerHTML = APIData[i].FcardTitle;
            var content = document.createElement("p");
                content.setAttribute("class","card-text text-center");
                content.setAttribute("style","");
                content.innerHTML = APIData[i].FcardDescription;
            var button = document.createElement("button");
                button.setAttribute("id","editBtn"+i);
                button.setAttribute("onclick","editCard("+i+")");
                button.setAttribute("style","color:white")
                button.setAttribute("class","btn btn-primary joinNowButton");
                button.innerHTML = "Edit";
            divcontent.appendChild(title);
            divcontent.appendChild(content);
            divcontent.appendChild(button);
            divmain.appendChild(img);
            divmain.appendChild(divcontent);
            cardContainer.appendChild(divmain);
        }
    }
  }
};
xmlhttp.open("GET", "../apiData/clubsAPIData.php", true);
xmlhttp.send();
