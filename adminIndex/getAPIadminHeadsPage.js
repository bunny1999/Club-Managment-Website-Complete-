// XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var data = JSON.parse(this.responseText);
    if(document.getElementById("varify").value != ""){
        var APIData = data;
        //dom creation
        var tbody = document.querySelector('tbody');
        for(var i=0;i<=APIData.length;i++){
            var tr = document.createElement('tr');
                tr.setAttribute('id','row'+i);
            var th = document.createElement('th');
                th.setAttribute('class','clubNameDarkTheme');
                th.textContent = APIData[i].clubName;
            var td1 = document.createElement('td');
                td1.textContent = APIData[i].headName;
            var td2 = document.createElement('td');
                td2.textContent = APIData[i].headEmail;
            var td3 = document.createElement('td');
                td3.textContent = APIData[i].headPhone;
            var td4 = document.createElement('td');
                td4.textContent = APIData[i].headUsername;
            var td5 = document.createElement('td');
                td5.textContent = APIData[i].headPassword;
            var modifyBtnTd = document.createElement('td');
            var modifyBtn =  document.createElement('button');
                modifyBtn.setAttribute('type','button');
                modifyBtn.setAttribute('class','btn btn-danger');
                modifyBtn.setAttribute('onclick','modifyBtn('+i+');')
                modifyBtn.textContent = 'Modify';
            modifyBtnTd.appendChild(modifyBtn);
            tr.appendChild(th);
            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            tr.appendChild(td4);
            tr.appendChild(td5);
            tr.appendChild(modifyBtnTd);
            tbody.appendChild(tr);
        }
    }
  }
}    
xmlhttp.open("GET", "../apiData/headsData.php", true);
xmlhttp.send();