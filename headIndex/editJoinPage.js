function coverTitleChange(){
    var oldTitle = document.getElementById("clubCoverTitle").innerHTML;
    document.getElementById("clubCoverTitle").innerHTML="<textarea style='width:450px;height:80px;padding-left:20px;resize:none;border:none;border-radius: 20px;overflow:hidden;opacity:0.3;'>"+oldTitle+"</textarea>"
    // document.getElementById("saveBtn").style.display = "block";
}
function coverDescriptionChange(){
    var oldDescription= document.getElementById("clubCoverDescription").innerHTML;
    document.getElementById("clubCoverDescription").innerHTML="<textarea style='min-width:650px;min-height:5px;padding-left:20px;resize:none;border:none;border-radius: 20px;overflow:hidden;opacity:0.3;'>"+oldDescription+"</textarea>"
    // document.getElementById("saveBtn").style.display = "block";
}
function uploadCover(){
    document.getElementById("coverImageChange").click();
    document.getElementById("coverImageChange").addEventListener("change",function(event){
        var newCoverImage=event.target.files[0].name;
        document.getElementById("clubCoverImage").setAttribute("src","../media/"+newCoverImage);
        document.getElementById("newCoverImage").value=newCoverImage;            
    });
    document.getElementById("saveBtnBox").style.display = "block";
}
document.getElementById("clubCoverTitle").addEventListener("input",function(event){
    document.getElementById("saveBtnBox").style.display = "block";           
    var newCoverTitle=event.target.value;
    document.getElementById("newTitle").value=newCoverTitle;
});
document.getElementById("clubCoverDescription").addEventListener("input",function(event){
    document.getElementById("saveBtnBox").style.display = "block";                      
    var newCoverDescription=event.target.value;
    document.getElementById("newDescription").value=newCoverDescription;
});

// function addEvent(){
//     var today= new Date();
//     var date=today.getFullYear()+"-"+today.getMonth()+"-"+today.getDate();
//     document.getElementById("presentDate").value = date;
// }

var clubName = document.getElementById("nameClub").value; 
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var data = JSON.parse(this.responseText);
    if(data[clubName]){
      var APIData = data[clubName];
      // console.log(APIData);
      //dom creation
      var eventContainer = document.getElementById("eventList");
      for(var i=0;i<APIData.length;i++){
        var color = colorGenrator();
        var divmain = document.createElement("div");
            divmain.setAttribute("id","eventDom");
            divmain.setAttribute("style","margin:0px 60px 10px 60px");
            var divdate= document.createElement("div");
                divdate.setAttribute("style","float:left;font-size:25px;font-weight:bolder;");
                var p  = document.createElement("p");
                    //seprate out event date and conert month from no to spel
                    var arrDate = splitDate(APIData[i].eventDate);
                    var month = numToMonth(arrDate[1]);
                    var spanp1= document.createElement("span");
                        spanp1.setAttribute("style","margin-left:18px;");
                        spanp1.innerHTML = arrDate[0];
                    var spanp2 = document.createElement("span");
                        spanp2.setAttribute("style","position:relative;top:-12px;");
                        spanp2.innerHTML = "<br/>";
                        spanp2.innerHTML += month;
                p.appendChild(spanp1);
                p.appendChild(spanp2);
            divdate.appendChild(p);
            var divbody = document.createElement("div");
                divbody.setAttribute("style","float:left;border-left:2px solid"+color+";margin-left:10px;");
                var divheading = document.createElement("div");
                    divheading.setAttribute("style","border-bottom:2px solid"+color+";width:450px;");
                    var span1= document.createElement("span");
                        span1.setAttribute("id","eventTitle("+i+")")
                        span1.setAttribute("style","font-weight:bold;font-size:20px;padding-left:5px;");
                        span1.innerHTML = APIData[i].title;
                divheading.appendChild(span1);
                var divlower = document.createElement("div");
                    divlower.setAttribute("style","background-color:#F1F1F1;padding-left:20px;");
                    var spanl1 = document.createElement("span");
                        spanl1.setAttribute("style","color:#757575;");
                        spanl1.innerHTML = "<i class='fa fa-clock-o' style='color:#757575'></i> ";
                        spanl1.innerHTML += APIData[i].updateon; 
                    var spanl2 =document.createElement("span");
                        spanl2.setAttribute("style","color:#757575;padding-left:150px;");
                        spanl2.innerHTML = "Last Date: "+APIData[i].lastDate;
                divlower.appendChild(spanl1);
                divlower.appendChild(spanl2);
            divbody.appendChild(divheading);
            divbody.appendChild(divlower);
            var btn = document.createElement("button");
                btn.setAttribute("class","btn btn-danger");
                btn.setAttribute("onclick","deleteEvent("+i+");");
                btn.setAttribute("style","width:25px;height:25px;border-radius:14px;");
                btn.innerHTML = "<i class='fa fa-close' style='position:relative;top:-6px;left:-6px;'></i>";
        divmain.appendChild(divdate);
        divmain.appendChild(divbody);
        divmain.appendChild(btn);
        var divclear = document.createElement("div");
            divclear.setAttribute("style","clear:both");

        eventContainer.appendChild(divmain);
        eventContainer.appendChild(divclear);
      }  
    }
    else{
      console.log("ERROR!!")
    }
  }
};
xmlhttp.open("GET", "../apiData/eventsDataAPI.php", true);
xmlhttp.send();

function splitDate(str){
  str = str.split("-");
  str = [str[2],str[1]];
  return str; 
}

function numToMonth(num){
  switch (num) {
    case '01':
      return "Jan";
    case '02':
      return "Feb";
    case '03':
      return "Mar";
    case '04':
      return "Apr";
    case '05':
      return "May";
    case '06':
      return "Jun";
    case '07':
      return "July";
    case '08':
      return "Aug";
    case '09':
      return "Sept";
    case '10':
      return "Oct";
    case '11':
      return "Nov";
    case '12':
      return "Dec";
  }
}

function colorGenrator(){
  var randomNo=Math.floor(Math.random() * 7) + 1;
  switch (randomNo) {
    case 1:
      return "#F18D9D";
    case 2:
      return "#C8361B";
    case 3:
      return "#91C12A"; 
    case 4:
      return "#FCE75C";
    case 5:
      return "#F67528";
    case 6:
      return "#2F4E96"; 
    case 7:
      return "#9B4F16";  
  }
}

function deleteEvent(i){
  var title = document.getElementById("eventTitle("+i+")").innerHTML;
  document.getElementById("title").value = title;
  document.getElementById("Dsubmit").click();
}