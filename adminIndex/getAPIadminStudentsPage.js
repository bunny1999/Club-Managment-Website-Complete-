var usn= document.getElementById("HdSusn").value;
var name= document.getElementById("HdSname").value;
var club= document.getElementById("HdSclub").value;
var year= document.getElementById("HdSyear").value;
if(usn!='' || name!='' || club!='' || year!=''){}
else{
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var data = JSON.parse(this.responseText);
        if(document.getElementById("varify").value == "admin"){
            var APIData = data;
            //dom creation
            var tbody = document.querySelector('tbody');
            for(var i=0;i<APIData.length;i++){
                var tr = document.createElement('tr');
                    tr.setAttribute('id','row'+i);
                    if(APIData[i].Position == "Head"){
                        tr.setAttribute("style","background-color: #FEC134;");
                        var td0=document.createElement("td");
                        tr.appendChild(td0);                        
                    }
                    else{
                        var td0=document.createElement("td");
                            var btn=document.createElement("button");
                                btn.setAttribute("class","btn btn-warning");
                                btn.setAttribute("onclick","createHead("+i+");");
                        td0.appendChild(btn);
                        tr.appendChild(td0);
                    }
                var th = document.createElement('th');
                    th.setAttribute('scope','row');
                    th.textContent = i+1;
                var td1 = document.createElement('td');
                    td1.textContent = APIData[i].USN;
                var td2 = document.createElement('td');
                    td2.textContent = APIData[i].Name;
                var td3 =document.createElement("td");
                    td3.textContent = APIData[i].Branch;
                var td7 = document.createElement('td');
                    td7.textContent = APIData[i].Year;
                var td4 = document.createElement('td');
                    td4.textContent = APIData[i].Email;
                var td5 = document.createElement('td');
                    td5.textContent = APIData[i].Phone;
                var td6 = document.createElement('td');
                    td6.textContent = APIData[i].Club;
                tr.appendChild(th);
                tr.appendChild(td1);
                tr.appendChild(td2);
                tr.appendChild(td3);
                tr.appendChild(td7);
                tr.appendChild(td4);
                tr.appendChild(td5);
                tr.appendChild(td6);
                tbody.appendChild(tr);
            }
            document.getElementById("noOfStudent").value =i;
        }
    }
    }    
    xmlhttp.open("GET", "../apiData/studentsData.php", true);
    xmlhttp.send(); 
}