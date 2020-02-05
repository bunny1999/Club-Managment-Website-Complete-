var modifyButton = 0;
function modifyBtn(i){
    modifyButton++;
    if(modifyButton ==1){
        // document.getElementById("row"+i).children[1].innerHTML = "";
        // document.getElementById("row"+i).children[1].innerHTML = "<textarea style='width:100px;height:30px;resize:none;border:none'></textarea>";
        // document.getElementById("row"+i).children[2].innerHTML = "";
        // document.getElementById("row"+i).children[2].innerHTML = "<textarea style='width:140px;height:30px;resize:none;border:none'></textarea>";
        // document.getElementById("row"+i).children[3].innerHTML = "";
        // document.getElementById("row"+i).children[3].innerHTML = "<textarea style='width:100px;height:30px;resize:none;border:none'></textarea>";
        // document.getElementById("row"+i).children[4].innerHTML = "";
        var club = document.getElementById("row"+i).children[0].innerHTML;
        var usrname = document.getElementById("row"+i).children[4].innerHTML;
        var pass = document.getElementById("row"+i).children[5].innerHTML; 
        document.getElementById("row"+i).children[4].innerHTML = "<input class='form-control' id='headEmail' >";
        document.getElementById("row"+i).children[5].innerHTML = "<input class='form-control' id='headPass' >";
        var newtd = document.createElement('td');
        var saveBtn = document.createElement('button');
            saveBtn.setAttribute("class",'btn btn-primary');
            saveBtn.setAttribute('onclick','saveCardEdit('+i+')')
            saveBtn.innerHTML ="Save";
        newtd.appendChild(saveBtn);
        document.getElementById('row'+i).appendChild(newtd);
        
        document.getElementById("headEmail").value = usrname;
        document.getElementById("headPass").value =pass;        
        document.getElementById("Hclub").value = club;
        document.getElementById("Hemail").value = usrname;
        document.getElementById("Hpass").value =pass;

        document.getElementById("headEmail").addEventListener("input",function(event){
            document.getElementById("Hemail").value = event.target.value;
        });
        document.getElementById("headPass").addEventListener("input",function(event){
            document.getElementById("Hpass").value = event.target.value;
        });
    }   
    else{
        return false;
    }
}
function saveCardEdit(i){
    document.getElementById("Hsubmit").click();
}

