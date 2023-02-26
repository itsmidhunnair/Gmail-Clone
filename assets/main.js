let menuStatus=0;
let statusDiag=0;
let getStartBox=0;

function showMenu(){
    let menu = document.querySelector(".collap-menu");
    let mainContent = document.querySelector(".contentDiv");

    if (menuStatus==0) {
        menu.style.width = "256px";
        mainContent.style.marginLeft="336px";
        menuStatus=1;
        document.getElementById("hamburger").innerHTML = "<img src='https://ssl.gstatic.com/ui/v1/icons/mail/gm3/1x/close_baseline_nv700_24dp.png'/>";
    }
    
    else{
        menu.style.width = "0px";
        mainContent.style.marginLeft="75px";
        menuStatus=0;
        document.getElementById("hamburger").innerHTML = '<svg focusable="false" viewBox="0 0 24 24"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path></svg>';
    }
}

function showStatusDiag() {
    if(statusDiag==0){
        document.querySelector(".statusDropDown").style.display="block";
        statusDiag=1;
    }
    else{
        document.querySelector(".statusDropDown").style.display="none";
        statusDiag=0;
    }
}

function closeGetStart() {
    let tempSpan = document.querySelector(".whiteBoxCross");
    let getStartGrp = document.querySelector(".get_start_grp");

    if (getStartBox==0) {
        getStartGrp.style.height="20px";
        tempSpan.innerHTML="&#x2304;";
        tempSpan.style.top="-10px";
        getStartBox=1;
    }
    else{
        getStartGrp.style.height="";
        tempSpan.innerHTML="&times;";
        tempSpan.style.top="";
        getStartBox=0;
    }

}

// for highlighting each mail
function mailHighlight(e){
    
    console.log(e.target.id);

    if (e.target.checked) {
        var tempId = e.target.id;
        document.querySelector("."+tempId).style.backgroundColor = "#c2dbff";
        mailCBcheck();
    }
    else{
        var tempId = e.target.id;
        document.querySelector("."+tempId).style.backgroundColor = "#eaf1fb";
        mailCBcheck();
    }
};

// to check if there are any checkbox checked
function  mailCBcheck() {

    let allMailCB = document.querySelectorAll(".mail-check");

    console.log("allMailCB");

    let flag=0;
    for (let i = 0; i < allMailCB.length; i++) {
        if (allMailCB[i].checked) {
            flag=1;
            break;
        }
    }    
    if (flag==1) {
        document.querySelector(".icon-collection").style.width="100%";
    }
    else{
        document.querySelector(".icon-collection").style.width="30px";
    }
}


function allCBcheck() {
    var mainCB = document.getElementById("allCB");
    var allSubCB = document.querySelectorAll(".mail-check");
    // console.log(allSubCB)
    for (let i = 0; i < allSubCB.length; i++) {
    if (mainCB.checked) {
          allSubCB[i].setAttribute("checked", "true");
          document.querySelector(".mails").style.backgroundColor = "#c2dbff"
          mailCBcheck()
        }
        else{
            allSubCB[i].removeAttribute("checked");
            document.querySelector(".mails").style.backgroundColor = "#eaf1fb"
            mailCBcheck()
    }
}
}


function showInMailIcon(e){
    var tempClass = e.target.classList[1];
    // console.log(tempClass);
    // console.log(document.querySelector("."+tempClass).childNodes[7].className); //returns 6th child of the parent element
    let tempDateClass = document.querySelector("."+tempClass).childNodes[7];
    console.log(tempDateClass);
    tempDateClass.style.display="block";

    let tempIconClass = document.querySelector("."+tempClass).childNodes[5];
    console.log(tempIconClass)
    tempIconClass.style.display="none";
}

function showInMailDate(e){
    var tempClass = e.target.classList[1];
    // console.log(tempClass);
    // console.log(document.querySelector("."+tempClass).childNodes[7].className); //returns 6th child of the parent element
    let tempDateClass = document.querySelector("."+tempClass).childNodes[7];
    console.log(tempDateClass);
    tempDateClass.style.display="none";
    
    let tempIconClass = document.querySelector("."+tempClass).childNodes[5];
    console.log(tempIconClass)
    tempIconClass.style.display="block";
}

function searchMail(){
    let searchTerm = document.getElementById("searchBox").value.toUpperCase();
    let senderName = document.querySelectorAll(".sender")
    if (searchTerm) {
        let allMail = document.querySelectorAll(".mail");
        // console.log(allMail[1]);
        allMail.forEach(val => val.style.display="none")
        let searchSub = document.querySelectorAll(".mainSubject");

        
        for (let i = 0; i < searchSub.length; i++){
            // console.log(searchSub[i].innerHTML.toUpperCase().indexOf(searchTerm));
            if(searchSub[i].innerHTML.toUpperCase().indexOf(searchTerm)>-1 || senderName[i].innerHTML.toUpperCase().indexOf(searchTerm)>-1)
            {
                // alert("abcd")    
                // console.log(searchSub[i].parentElement.closest(".mail"));
                searchSub[i].parentElement.closest(".mail").style.display="";    
            }
        }
        
    }
    else{
        let allMail = document.querySelectorAll(".mail");
        // console.log(allMail[1]);
        allMail.forEach(val => val.style.display="")
    }

}