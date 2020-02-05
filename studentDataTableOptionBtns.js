var addBtnActive =false;
var deleteBtnActive = false;

var addBtn = 0;
function addStudent(str){
    addBtn++;
    if(addBtn == 1){
        var tbody= document.querySelector('tbody');       
            var tr = document.createElement('tr');
                tr.setAttribute('id','addingRow');
                if(str='admin'){
                    var td0=document.createElement("td");
                    tr.appendChild(td0);
                }
                var th = document.createElement('th');
                    th.setAttribute('scope','row');
                    th.textContent = '#';
                var td1 = document.createElement('td');
                    td1.innerHTML = "<input class='form-control' id='tusn'>";
                var td2 = document.createElement('td');
                    td2.innerHTML = "<input class='form-control' id='tname'>"; 
                var td3= document.createElement('td');
                    td3.innerHTML = "<select class='form-control' id='tdepartment' ><option>CSE Department</option><option>ISE Dept.</option><option>ECE Dept.</option><option>EEE Dept.</option></select>";
                var td4=document.createElement('td');
                    td4.innerHTML="<select class='form-control' id='tyear' ><option>THIRD YEAR</option><option>SECOUND YEAR</option><option>FIRST YEAR</option></select>";
                var td5 = document.createElement('td');
                    td5.innerHTML = "<input class='form-control' id='temail'>";
                var td6 = document.createElement('td');
                    td6.innerHTML = "<input class='form-control' id='tphone'>";
                var td7 = document.createElement('td');
                    td7.innerHTML = "<input class='form-control' id='tclub'>";
                
                var saveBtn = document.createElement('button');        
                    saveBtn.setAttribute("class",'btn btn-primary');
                    saveBtn.setAttribute("type","submit")
                    saveBtn.setAttribute('onclick','saveBtnAddStudent();')
                    saveBtn.setAttribute("style","margin-top:10px;");
                    saveBtn.innerHTML ="Save";
        tr.appendChild(th);
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);
        tr.appendChild(td6);
        tr.appendChild(td7);
        tr.appendChild(saveBtn);
        tbody.appendChild(tr);

        addBtnActive =true;

        if(str != 'admin'){
            document.getElementById("tclub").value = str;
            document.getElementById("tclub").setAttribute("readonly","true");
            document.getElementById("sclub").value= str;
        }

        document.getElementById("sdept").value="CSE Department";
        document.getElementById("syear").value="THIRD YEAR";
        document.getElementById("tusn").addEventListener("input",function(event){  
            document.getElementById("susn").value = event.target.value;
        });
        document.getElementById("tname").addEventListener("input",function(event){
            document.getElementById("sname").value = event.target.value;
        });
        document.getElementById("tdepartment").addEventListener("input",function(event){
            document.getElementById("sdept").value = event.target.value;
        });
        document.getElementById("tyear").addEventListener("input",function(event){
            document.getElementById("syear").value = event.target.value;
        });
        document.getElementById("temail").addEventListener("input",function(event){
            document.getElementById("semail").value = event.target.value;
        });
        document.getElementById("tphone").addEventListener("input",function(event){
            document.getElementById("sphone").value = event.target.value;
        });
        document.getElementById("tclub").addEventListener("input",function(event){
            document.getElementById("sclub").value = event.target.value;
        });
    }
    else{
        return false;
    }
}
function saveBtnAddStudent(){
    document.getElementById("addsubmit").click();
}
var deleteBtnClick = 0;
function deleteStudent(usnCoordinates,clubCoordinates){
    deleteBtnClick++;
    if(deleteBtnClick == 1){
        for(var i=0;i<document.getElementById("noOfStudent").value;i++){
            var td = document.createElement('td');
            var deleteBtn = document.createElement('button');
                deleteBtn.setAttribute("class",'btn btn-danger');
                deleteBtn.setAttribute('type',"button");
                deleteBtn.setAttribute('onclick','deleteRow('+i+','+usnCoordinates+','+clubCoordinates+')')
                deleteBtn.textContent = "Delete";
            td.appendChild(deleteBtn);
            document.getElementById("row"+i).appendChild(td);   
        }
        deleteBtnActive = true;
    }
    else{
        return false;
    }
}
function deleteRow(i,Fusn,Fclub){
    var usnValue = document.getElementById("row"+i).children[Fusn].textContent;
    var clubName = document.getElementById("row"+i).children[Fclub].textContent;
    document.getElementById("Dusn").value = usnValue;
    document.getElementById("Dclub").value = clubName;
    document.getElementById("Dbtn").click();
}

document.getElementById('addStudentBtn').addEventListener('click',()=>{
    if(deleteBtnActive){
        deleteBtnActive = false;
        window.location.reload();
    }
});

document.getElementById('deleteStudentBtn').addEventListener('click',()=>{
    if(addBtnActive){
        addBtnActive = false;
        window.location.reload();
    }
});
var afterSearchURL;
function SearchStudent(){
    afterSearchURL=window.location.href;
    document.getElementById("searchForm").setAttribute("action",window.location.href)
    document.getElementById("searchSubmit").click();
}

