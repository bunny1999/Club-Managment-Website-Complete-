var editButton = 0;
function editCard(i){
    editButton++;
    if(editButton ==1){
        var imgMainDiv = document.createElement("div");
            imgMainDiv.setAttribute("class","card");
        var img = document.createElement("img");
            img.setAttribute("class","card-img-top card-img");
        var imageName= document.getElementById("insertedCard"+i).children[0].src.split("/");
        imageName =imageName[imageName.length-1];
            img.setAttribute("src","../media/"+imageName);
            img.setAttribute("id","tempCardImage");
            img.setAttribute("alt","Card image cap");
        var btndiv = document.createElement("div");
            btndiv.setAttribute("class","card-img-overlay");
        var btn = document.createElement("button");
            btn.setAttribute("class","btn btn-warning");
            btn.setAttribute("onclick","changeCardImg();");
            btn.setAttribute("style","float:right");
            btn.innerHTML = "<img src='../media/smallestEditPNG.png'>"
        var inputfile= document.createElement("input");
            inputfile.setAttribute("type","file");
            inputfile.setAttribute("id","cardImageChange");
            inputfile.setAttribute("style","display:none");
        btndiv.appendChild(btn);
        btndiv.appendChild(inputfile);
        imgMainDiv.appendChild(img);
        imgMainDiv.appendChild(btndiv);
        document.getElementById("insertedCard"+i).insertBefore(imgMainDiv,document.getElementById("insertedCard"+i).children[1]);  
        document.getElementById("insertedCard"+i).removeChild(document.getElementById("insertedCard"+i).children[0]);
        
        var title=document.getElementById("insertedCard"+i).children[1].children[0].innerHTML;
        document.getElementById("insertedCard"+i).children[1].children[0].innerHTML = "<textarea style='width:100px;height:30px;padding-left:20px;resize:none;border:none;overflow:hidden;'>"+title+"</textarea>";
        var desc=document.getElementById("insertedCard"+i).children[1].children[1].innerHTML;
        document.getElementById("insertedCard"+i).children[1].children[1].innerHTML = "<textarea style='min-height:70px;resize:none;border:none;overflow:hidden;'>"+desc+"</textarea>";
        var saveform = document.createElement("form");
            saveform.setAttribute("method","POST"); 
            saveform.setAttribute("action","./updateClubCard.php");
            saveform.setAttribute('onclick','return saveCardEdit('+i+');');
            var inp0= document.createElement("input");
                inp0.setAttribute("type","text");
                inp0.setAttribute("class","hide");
                inp0.setAttribute("name","cardName");
                inp0.setAttribute("value",title);
            var inp1= document.createElement("input");
                inp1.setAttribute("type","text");
                inp1.setAttribute("class","hide");
                inp1.setAttribute("name","newCardImage");
                inp1.setAttribute("id","newCardImage");
                inp1.setAttribute("value",imageName);
            var inp2= document.createElement("input");
                inp2.setAttribute("type","text");
                inp2.setAttribute("class","hide");
                inp2.setAttribute("name","newCardTitle");
                inp2.setAttribute("id","newCardTitle");
                inp2.setAttribute("value",title);
            var inp3= document.createElement("input");
                inp3.setAttribute("type","text");
                inp3.setAttribute("class","hide");
                inp3.setAttribute("name","newCardDescription");
                inp3.setAttribute("id","newCardDescription");
                inp3.setAttribute("value",desc);
            var saveBtn = document.createElement('button');
                saveBtn.setAttribute("class",'btn btn-success');
                saveBtn.setAttribute("style","width:238px;");
                // saveBtn.setAttribute("style","border:1px solid black;background-color:blue;color:white;font-weight:bold;");
                saveBtn.innerHTML ="Save";
        saveform.appendChild(inp0);
        saveform.appendChild(inp1);
        saveform.appendChild(inp2);
        saveform.appendChild(inp3);
        saveform.appendChild(saveBtn);
        document.getElementById("insertedCard"+i).appendChild(saveform);
        var deleteform = document.createElement("form");
            deleteform.setAttribute("method","POST"); 
            deleteform.setAttribute("action","./deleteCard.php");
            deleteform.setAttribute('onclick','return deleteCard('+i+');');
            var inp= document.createElement("input");
                inp.setAttribute("type","text");
                inp.setAttribute("class","hide");
                inp.setAttribute("name","cardName");
                inp.setAttribute("value",title);
            var deleteBtn = document.createElement('button');
                deleteBtn.setAttribute("class",'btn btn-danger');
                deleteBtn.setAttribute("style","margin-top:2px;width:238px;");
                deleteBtn.textContent = "Delete";
        deleteform.appendChild(inp);  
        deleteform.appendChild(deleteBtn);
        document.getElementById("insertedCard"+i).appendChild(deleteform);        
    }
    else{
        return false;
    }
    document.getElementById("insertedCard"+i).children[1].children[0].children[0].addEventListener("input",function(event){
        var newTitle = event.target.value;
        document.getElementById("newCardTitle").value=newTitle;            
    });
    document.getElementById("insertedCard"+i).children[1].children[1].children[0].addEventListener("input",function(event){
        var newDesc =event.target.value;
        document.getElementById("newCardDescription").value=newDesc;            
    });
}
function changeCardImg(){
    document.getElementById("cardImageChange").click();
    document.getElementById("cardImageChange").addEventListener("change",function(event){
        var newCardImage=event.target.files[0].name;
        document.getElementById("tempCardImage").setAttribute("src","../media/"+newCardImage);
        document.getElementById("newCardImage").value=newCardImage;            
    });
}
function saveCardEdit(i){
    if(document.getElementById("insertedCard"+i).children[1].children[1].children[0].value== "" || document.getElementById("insertedCard"+i).children[1].children[0].children[0].value== ""){
        alert("Field Value Is Missing");
        return false;
    }
    else{
        return true;
    }
}

function deleteCard(i){
    //authentication before deletion
}
function disableEditBtn(){
    var i=0;
    while(document.getElementById("editBtn"+i)!=undefined){
        document.getElementById("editBtn"+i).disabled = true;
        i++;
    }
}
var createButton = 0;
function createClub(){
    createButton++;
    if(createButton ==1){
        disableEditBtn();
        var divmain = document.createElement("div");
            divmain.setAttribute("class","card");
            divmain.setAttribute("id","addCardDOM");
            divmain.setAttribute("style","width: 15rem");
            var imgMainDiv = document.createElement("div");
                imgMainDiv.setAttribute("class","card");
            var img = document.createElement("img");
                img.setAttribute("class","card-img-top card-img");
                img.setAttribute("id","tempCardImage");
                img.setAttribute("style","height:140px")
            var btndiv = document.createElement("div");
                btndiv.setAttribute("class","card-img-overlay");
            var btn = document.createElement("button");
                btn.setAttribute("class","btn btn-warning");
                btn.setAttribute("onclick","changeCardImg();");
                btn.setAttribute("style","margin-top:30px;margin-left:20px;font-weight:bold;");
                btn.innerHTML = "Choose Profile.."
            var inputfile= document.createElement("input");
                inputfile.setAttribute("type","file");
                inputfile.setAttribute("id","cardImageChange");
                inputfile.setAttribute("style","display:none");
            btndiv.appendChild(btn);
            btndiv.appendChild(inputfile);
            imgMainDiv.appendChild(img);
            imgMainDiv.appendChild(btndiv);
            var divcontent = document.createElement("div");
                divcontent.setAttribute("class","card-body");
                var textareaTitle = document.createElement("textarea");
                    textareaTitle.setAttribute("class","card-title text-center");
                    textareaTitle.setAttribute("id","addCardTitle");
                    textareaTitle.setAttribute("placeholder","Title");
                    textareaTitle.setAttribute("style",'width:100px;height:30px;border-radius:5px;resize:none;overflow:hidden;margin-left:50px;') 
                var textareaDesc = document.createElement("textarea");
                    textareaDesc.setAttribute("class","card-text");
                    textareaDesc.setAttribute("id","addCardDescription");
                    textareaDesc.setAttribute("placeholder","Description..");
                    textareaDesc.setAttribute('style','min-height:70px;border-radius:5px;resize:none;overflow:hidden;')
                var button1 = document.createElement("button");
                    button1.setAttribute("onclick","return cardThumnaleDone();");
                    button1.setAttribute("style","color:white;margin-left:70px;")
                    button1.setAttribute("id","addNextBtn");
                    button1.setAttribute("class","btn btn-warning");
                    button1.setAttribute("data-target","#popBox")
                    button1.setAttribute("data-toggle","modal") 
                    button1.innerHTML = "Next";
                var newSaveForm = document.createElement("form");
                    newSaveForm.setAttribute("method","POST"); 
                    newSaveForm.setAttribute("action","./addClubs.php");
                    newSaveForm.setAttribute('onclick','return addConform();');    
                    var inp1= document.createElement("input");
                        inp1.setAttribute("type","text");
                        inp1.setAttribute("class","hide");
                        inp1.setAttribute("name","newCardImage");
                        inp1.setAttribute("id","newCardImage");
                    var inp2= document.createElement("input");
                        inp2.setAttribute("type","text");
                        inp2.setAttribute("class","hide");
                        inp2.setAttribute("name","newCardTitle");
                        inp2.setAttribute("id","newCardTitle");
                    var inp3= document.createElement("input");
                        inp3.setAttribute("type","text");
                        inp3.setAttribute("class","hide");
                        inp3.setAttribute("name","newCardDescription");
                        inp3.setAttribute("id","newCardDescription");
                    
                    var inp4= document.createElement("input");
                        inp4.setAttribute("type","text");
                        inp4.setAttribute("class","hide");
                        inp4.setAttribute("name","headImage");
                        inp4.setAttribute("id","headImage");
                    var inp5= document.createElement("input");
                        inp5.setAttribute("type","text");
                        inp5.setAttribute("class","hide");
                        inp5.setAttribute("name","headTitle");
                        inp5.setAttribute("id","headTitle");
                    var inp6= document.createElement("input");
                        inp6.setAttribute("type","text");
                        inp6.setAttribute("class","hide");
                        inp6.setAttribute("name","headDescription");
                        inp6.setAttribute("id","headDescription");
                    
                    var inp7= document.createElement("input");
                        inp7.setAttribute("type","text");
                        inp7.setAttribute("class","hide");
                        inp7.setAttribute("name","joinImage");
                        inp7.setAttribute("id","joinImage");
                    var inp8= document.createElement("input");
                        inp8.setAttribute("type","text");
                        inp8.setAttribute("class","hide");
                        inp8.setAttribute("name","joinTitle");
                        inp8.setAttribute("id","joinTitle");
                    var inp9= document.createElement("input");
                        inp9.setAttribute("type","text");
                        inp9.setAttribute("class","hide");
                        inp9.setAttribute("name","joinDescription");
                        inp9.setAttribute("id","joinDescription");

                    var inp10= document.createElement("input");
                        inp10.setAttribute("type","text");
                        inp10.setAttribute("class","hide");
                        inp10.setAttribute("name","username");
                        inp10.setAttribute("id","username");
                    var inp11= document.createElement("input");
                        inp11.setAttribute("type","text");
                        inp11.setAttribute("class","hide");
                        inp11.setAttribute("name","password");
                        inp11.setAttribute("id","password");
                    var button2 = document.createElement("button");
                        button2.setAttribute("id","addSaveBtn");
                        button2.setAttribute("style","color:white;margin-top:5px;display:none;")
                        button2.setAttribute("class","btn btn-primary joinNowButton");
                        button2.innerHTML = "Save";
                newSaveForm.appendChild(inp1);
                newSaveForm.appendChild(inp2);
                newSaveForm.appendChild(inp3);

                newSaveForm.appendChild(inp4);
                newSaveForm.appendChild(inp5);
                newSaveForm.appendChild(inp6);
                
                newSaveForm.appendChild(inp7);
                newSaveForm.appendChild(inp8);
                newSaveForm.appendChild(inp9);
                newSaveForm.appendChild(inp10);
                newSaveForm.appendChild(inp11);
                newSaveForm.appendChild(button2);            
            divcontent.appendChild(textareaTitle);
            divcontent.appendChild(textareaDesc);
            divcontent.appendChild(button1);
            divcontent.appendChild(newSaveForm);
        divmain.appendChild(imgMainDiv);
        divmain.appendChild(divcontent);
        document.getElementById("mainCardContainer").insertBefore(divmain,document.getElementById("addCardsCard"));
        
        document.getElementById("addCardTitle").addEventListener("input",function(event){
            var newTitle = event.target.value;
            document.getElementById("newCardTitle").value=newTitle;            
        });
        document.getElementById("addCardDescription").addEventListener("input",function(event){
            var newDesc =event.target.value;
            document.getElementById("newCardDescription").value=newDesc;            
        });
    }
    else{
        return false;
    }
}
function cardThumnaleDone(){
    if(document.getElementById("newCardTitle").value== "" || 
        document.getElementById("newCardDescription").value== "" ||
        document.getElementById("newCardImage").value== ""){
        
        alert("Field Value Is Missing");
        return false;
    }
    else{
        var div1 = document.createElement("div");
            div1.setAttribute("class","modal fade");
            div1.setAttribute("tabindex","-1");
            div1.setAttribute("id","popBox");
            div1.setAttribute("role","dialog");
            div1.setAttribute("aria-labelledby","exampleModalCenterTitle");
            div1.setAttribute("aria-hidden","true");
            var div2= document.createElement("div");
                div2.setAttribute("class","modal-dialog modal-dialog-centered");
                var div3 = document.createElement("div");
                    div3.setAttribute("class","modal-content");
                    
                    var div4 = document.createElement("div");
                        div4.setAttribute("class","modal-header");
                        div4.innerHTML = "<h5 class='modal-title' id='exampleModalCenterTitle'>Head Page Info</h5><button type='button' class='close' data-dismiss='modal' aria-label='Close'></button><span aria-hidden='true'>&times;</span></button>";
                    var div5 = document.createElement("div");
                        div5.setAttribute("class","modal-body");
                        var btn1 = document.createElement("button");
                            btn1.setAttribute("class","btn btn-warning");
                            btn1.setAttribute("onclick","pngImage();");
                            btn1.setAttribute("style","");
                            btn1.setAttribute("accept","image/png")
                            btn1.innerHTML = "Choose PNG Image"
                        var inputfile1= document.createElement("input");
                            inputfile1.setAttribute("type","file");
                            inputfile1.setAttribute("id","pngImage");
                            inputfile1.setAttribute("style","display:none");
                        var img1 = document.createElement("img");
                            img1.setAttribute("style","width:150px;height:100px;margin-top:5px;");
                            img1.setAttribute("id","tempPngImage");
                        var br01 = document.createElement("br");
                        var br02 = document.createElement("br");
                        var textareaTitle1 = document.createElement("textarea");
                            textareaTitle1.setAttribute("class","card-title text-center");
                            textareaTitle1.setAttribute("id","addHeadPageTitle");
                            textareaTitle1.setAttribute("placeholder"," Head Page Title..");
                            textareaTitle1.setAttribute("style",'margin-top:5px;width:200px;height:30px;border-radius:5px;resize:none;overflow:hidden') 
                        var textareaDesc1 = document.createElement("textarea");
                            textareaDesc1.setAttribute("class","card-text");
                            textareaDesc1.setAttribute("id","addHeadPageDescription");
                            textareaDesc1.setAttribute("placeholder","Head Page Description..");
                            textareaDesc1.setAttribute('style','width:300px;min-height:70px;border-radius:5px;resize:none;overflow:hidden;')
                    div5.appendChild(btn1);
                    div5.appendChild(inputfile1);
                    div5.appendChild(br01);
                    div5.appendChild(img1);
                    div5.appendChild(br02)
                    div5.appendChild(textareaTitle1);
                    div5.appendChild(textareaDesc1);

                    var div9 = document.createElement("div");
                        div9.setAttribute("class","modal-header");
                        div9.innerHTML = "<h5 class='modal-title' id='exampleModalCenterTitle'>Login Info</h5>"; 
                    var div10 = document.createElement("div");
                        div10.setAttribute("class","modal-body");
                        var para1= document.createElement("p");
                            para1.innerHTML="Username:";
                            var textareausername = document.createElement("textarea");
                                textareausername.setAttribute("id","addusername");
                                textareausername.setAttribute("placeholder","New Username..");
                                textareausername.setAttribute("style",'position:relative;top:10px;padding-left:10px;width:200px;height:30px;border-radius:5px;resize:none;overflow:hidden;')
                        para1.appendChild(textareausername);
                        var para2= document.createElement("p");
                            para2.innerHTML="Password:";
                            var textareapassword = document.createElement("textarea");
                                textareapassword.setAttribute("id","addpassword");
                                textareapassword.setAttribute("placeholder","New Password..");
                                textareapassword.setAttribute("style",'position:relative;top:10px;padding-left:10px;width:200px;height:30px;border-radius:5px;resize:none;overflow:hidden;')
                        para2.appendChild(textareapassword); 
                    div10.appendChild(para1);
                    div10.appendChild(para2);

                    var div6 = document.createElement("div");
                        div6.setAttribute("class","modal-header");
                        div6.innerHTML = "<h5 class='modal-title' id='exampleModalCenterTitle'>Join Page Info</h5>";
                    var div7 = document.createElement("div");
                        div7.setAttribute("class","modal-body");
                        var btn2 = document.createElement("button");
                            btn2.setAttribute("class","btn btn-warning");
                            btn2.setAttribute("onclick","joinCoverImage();");
                            btn2.setAttribute("style","");
                            btn2.innerHTML = "Choose Cover Image"
                        var inputfile2= document.createElement("input");
                            inputfile2.setAttribute("type","file");
                            inputfile2.setAttribute("id","joinCoverImage");
                            inputfile2.setAttribute("style","display:none");
                        var img2 = document.createElement("img");
                            img2.setAttribute("style","width:200px;height:100px;margin-top:5px;");
                            img2.setAttribute("id","tempCoverImage");
                        var br11 = document.createElement("br");
                        var br12 = document.createElement("br");                        
                        var textareaTitle2 = document.createElement("textarea");
                            textareaTitle2.setAttribute("class","card-title text-center");
                            textareaTitle2.setAttribute("id","addJoinPageTitle");
                            textareaTitle2.setAttribute("placeholder","Join Page Title..");
                            textareaTitle2.setAttribute("style",'margin-top:5px;width:200px;height:30px;border-radius:5px;resize:none;overflow:hidden;') 
                        var textareaDesc2 = document.createElement("textarea");
                            textareaDesc2.setAttribute("class","card-text");
                            textareaDesc2.setAttribute("id","addJoinPageDescription");
                            textareaDesc2.setAttribute("placeholder","Join Page Description..");
                            textareaDesc2.setAttribute('style','width:400px;min-height:70px;border-radius:5px;resize:none;overflow:hidden;')
                    div7.appendChild(btn2);
                    div7.appendChild(inputfile2);
                    div7.appendChild(br11);
                    div7.appendChild(img2);
                    div7.appendChild(br12)
                    div7.appendChild(textareaTitle2);
                    div7.appendChild(textareaDesc2);              
                div3.appendChild(div4);
                div3.appendChild(div5);
                div3.appendChild(div9);
                div3.appendChild(div10);
                div3.appendChild(div6);
                div3.appendChild(div7);
                    var div8 = document.createElement("div");
                        div8.setAttribute("class","modal-footer");
                        var button = document.createElement("button");
                            button.setAttribute("type","button");
                            button.setAttribute("class","btn btn-primary");
                            button.setAttribute("data-dismiss",'modal')
                            button.setAttribute("onclick","savePopData();");
                            button.innerHTML="Save"
                        div8.appendChild(button);
                div3.appendChild(div8);
            div2.appendChild(div3);
        div1.appendChild(div2)
        document.body.appendChild(div1);
        
        document.getElementById("addJoinPageTitle").addEventListener("input",function(event){
            var newTitle = event.target.value;
            // console.log(newTitle);
            document.getElementById("joinTitle").value=newTitle;            
        });
        document.getElementById("addJoinPageDescription").addEventListener("input",function(event){
            var newDesc =event.target.value;
            // console.log(newDesc);
            document.getElementById("joinDescription").value=newDesc;            
        });
        
        document.getElementById("addHeadPageTitle").addEventListener("input",function(event){
            var newTitle = event.target.value;
            // console.log(newTitle);
            document.getElementById("headTitle").value=newTitle;            
        });
        document.getElementById("addHeadPageDescription").addEventListener("input",function(event){
            var newDesc =event.target.value;
            // console.log(newDesc);
            document.getElementById("headDescription").value=newDesc;            
        });
        document.getElementById("addusername").addEventListener("input",function(event){
            var newDesc =event.target.value;
            // console.log(newDesc);
            document.getElementById("username").value=newDesc;            
        });
        document.getElementById("addpassword").addEventListener("input",function(event){
            var newDesc =event.target.value;
            // console.log(newDesc);
            document.getElementById("password").value=newDesc;            
        });        
        return true;
    }
}
function pngImage(){
    document.getElementById("pngImage").click();
    document.getElementById("pngImage").addEventListener("change",function(event){
        var newPNGImage=event.target.files[0].name;
        // console.log(newPNGImage);
        document.getElementById("tempPngImage").setAttribute("src","../media/"+newPNGImage);
        document.getElementById("headImage").value=newPNGImage;            
    });
}


function joinCoverImage(){
    document.getElementById("joinCoverImage").click();
    document.getElementById("joinCoverImage").addEventListener("change",function(event){
        var newCoverImage=event.target.files[0].name;
        // console.log(newCoverImage);
        document.getElementById("tempCoverImage").setAttribute("src","../media/"+newCoverImage)
        document.getElementById("joinImage").value=newCoverImage;            
    });
}

function savePopData(){
    document.getElementById("addNextBtn").style.display = "none";
    document.getElementById("addSaveBtn").style.display = "block";    
}

function addConform(){
    if(document.getElementById("newCardTitle").value== "" || 
        document.getElementById("newCardDescription").value== "" ||
        document.getElementById("newCardImage").value== "" ||
        document.getElementById("headImage").value== "" ||
        document.getElementById("headTitle").value== "" ||
        document.getElementById("headDescription").value== "" ||
        document.getElementById("joinImage").value== "" ||
        document.getElementById("joinTitle").value==""  ||
        document.getElementById("joinDescription").value== "" ||
        document.getElementById("username").value == "" ||
        document.getElementById("password").value == ""
    ){
        alert("Feild Value Is Missing!, ReEnter Details");
        return false; 
    }
    else{
        return true;
    }
}
