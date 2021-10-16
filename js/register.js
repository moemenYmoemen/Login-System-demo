// import { userData, userList } from "./userData.js";

var userData = {
    name:'',
    email:'',
    password:''
}

var usersList = new Array();
var localStorageVar = 'localstorageData';


var signupBtn = document.getElementById('registerbtn');
var signupMsg = document.getElementById('signupMsg');
var signupInputs = document.getElementsByClassName('form-control');


signupBtn.addEventListener('click',function(){

    if(signupInputs[0].value && signupInputs[1].value && signupInputs[2].value)
    {
        if(checkIfmailExists(signupInputs[1].value, getEmailList(usersList)))
        {
            failedRegistration();
        }
        else 
        {

        var newUserdata = Object.create(userData);

        newUserdata.name = signupInputs[0].value ;
        newUserdata.email = signupInputs[1].value ;
        newUserdata.password = signupInputs[2].value ;

        addNewUser(newUserdata);
        successRegistration();
        add_toLocalstorage(usersList);
        goTomain();

        }

    }
    else
    {
        signupMsg.innerHTML = 'Please Enter all values';
    }

    console.log(usersList);

});

function goTomain()
{
    setTimeout(function(){

        window.location.href = "../index.html";

    }, 1500); 
    
}

function checkIfmailExists(email, emailList)
{
    return emailList.includes(email);


}

function getEmailList(usersList)
{
    var emailList= [];

    if(usersList!=null)
    {

        for(var i=0; i< usersList.length; i++)
        {
            emailList.push(usersList[i].email);
    
    
        }
    

    }
 
    return emailList;


}

function successRegistration()
{
    signupMsg.innerHTML = 'Success';
    signupMsg.classList.remove('text-danger');
    signupMsg.classList.add('text-success');
}

function failedRegistration()
{
    signupMsg.innerHTML = 'Email is previously registered';
    signupMsg.classList.add('text-danger');
    signupMsg.classList.remove('text-success');
}

function addNewUser(newUserdata)
{

    usersList.push(newUserdata);

}

function add_toLocalstorage(usersList)
{
    window.localStorage.setItem(`${localStorageVar}`, JSON.stringify(usersList));
}

function get_fromlocalstorage()
{
    usersList = JSON.parse(window.localStorage.getItem(`${localStorageVar}`));
    return usersList;
}


window.addEventListener('load',function(){

    if (get_fromlocalstorage()==null)
    {
        usersList=[];
    }

    
});