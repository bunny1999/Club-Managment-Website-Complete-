function createHead(i){
    var nameValue = document.getElementById("row"+i).children[3].textContent;
    var emailValue = document.getElementById("row"+i).children[6].textContent;
    var phoneValue = document.getElementById("row"+i).children[7].textContent;
    var clubName = document.getElementById("row"+i).children[8].textContent;
    
    document.getElementById("headName").value=nameValue;
    document.getElementById("headEmail").value=emailValue;
    document.getElementById("headPhone").value=phoneValue;
    document.getElementById("headClub").value=clubName;
    document.getElementById("makeHead").click();
}