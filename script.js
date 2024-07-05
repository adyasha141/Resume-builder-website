function addNewWEField(){
    // console.log("Adding new field");

let newNode=document.createElement('textarea');
newNode.classList.add('form-control');
newNode.classList.add('weField');
newNode.classList.add('mt-2');
newNode.setAttribute("rows", 3);
newNode.setAttribute("placeholder" , "Enter here");

let weOb=document.getElementById('we');
let weAddButtonOb=document.getElementById("weAddButton");

weOb.insertBefore(newNode , weAddButtonOb);

}
function addNewAQField(){
let newNode=document.createElement('textarea');
newNode.classList.add('form-control');
newNode.classList.add('eqField');
newNode.classList.add('mt-2');
newNode.setAttribute("rows", 3);
newNode.setAttribute("placeholder" , "Enter here");
newNode

let aqOb=document.getElementById('aq');
let aqAddButtonOb=document.getElementById("aqAddButton");

aqOb.insertBefore(newNode , aqAddButtonOb);

}

// uploaded_image

const image_input=document.querySelector("#image_input");
var uploaded_image="";

image_input.addEventListener("change", function(){
    const reader = new FileReader();
    reader.addEventListener("load",() =>{
        uploaded_image = reader.result;
        document.querySelector("#display_image").style.backgroundImage= `url(${uploaded_image})`
    });
    reader.readAsDataURL(this.files[0]);
});


// generating resume 
function generateResume(){
    let nameField=document.getElementById("nameField").value;
    let nameT1=document.getElementById('nameT1');
    nameT1.innerHTML=nameField;
    
    // DIRECT 
    document.getElementById('nameT2').innerHTML=nameField;


    // Contant 
    document.getElementById('contactT').innerHTML=document.getElementById('contactField').value;

    // e-mail id 
    document.getElementById('emailT').innerHTML=document.getElementById('emailField').value;

    // DOB
    document.getElementById('dobT').
    innerHTML=document.getElementById('dobField').
    value; 


    // address
    document.getElementById('addressT').innerHTML=document.getElementById('addressField').value;

    // facebook
    document.getElementById('fbT').innerHTML=document.getElementById('fbField').value;

    // instagram
    document.getElementById('instaT').innerHTML=document.getElementById('instaField').value;

    // linkedIn
    document.getElementById('linkT').innerHTML=document.getElementById('linkField').value;

    // objective
    document.getElementById('objectiveT').innerHTML=document.getElementById('objectiveField').value;

    // workexperience
    let wes=document.getElementsByClassName("weField");

    let str="";

    for(let e of wes)
    {
        str=str + `<li> ${e.value}</li>`;
    }

    document.getElementById('weT').innerHTML = str;

    // ACCEDEMIC 
    let aqs=document.getElementsByClassName("eqField");

    let str1="";

    for(let e of aqs)
    {
        str1=str1 + `<li> ${e.value}</li>`;
    }

    document.getElementById('aqT').innerHTML = str1;


    document.getElementById('resume-form').style.display='none';
    document.getElementById('resume-template').style.display='block';



    

    document.getElementById('uploadT').innerHTML=document.getElementById('uploadField').value;
}


// print resume 
function printResume()
{

    window.print();

}
