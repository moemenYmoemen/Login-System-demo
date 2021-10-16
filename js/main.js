var loginBtn = document.getElementById('loginbtn');
var loginMsg = document.getElementById('loginMsg');
var loginInputs = document.getElementsByClassName('form-control');
var usersList =[];
var localStorageVar = 'localstorageData';

loginBtn.addEventListener('click',function(){

    console.log();

    if(loginInputs[0].value && loginInputs[1].value)
    {
        loginMsg.innerHTML = '';

        var status = checkEmailPassword(loginInputs[0].value ,loginInputs[1].value);

        if(status == 'Success')
        {
            loginMsg.innerHTML = 'Success';
            goTologin();
            
        }
        else if(status =='Password is incorrect')
        {
            loginMsg.innerHTML = 'Password is incorrect';
        }
        else if(status =='Email is not registered')
        {
            loginMsg.innerHTML = 'Email is not registered';
        }
        

    }
    else
    {
        loginMsg.innerHTML = 'Please Enter all values';
    }
    

});


window.addEventListener('load',function(){

    if(get_fromlocalstorage()==null)
    {
        usersList =[];
    }
});

function get_fromlocalstorage()
{
    usersList = JSON.parse(window.localStorage.getItem(`${localStorageVar}`));
    return usersList;
}

function checkEmailPassword(email,password)
{
    var emailFound= false;


    if(usersList.length)
    {
        for(var i = 0 ;i < usersList.length; i++)
        {
            if(usersList[i].email==email)
            {
                emailFound == true;
                if(usersList[i].password==password)
                {
                    window.localStorage.setItem('displayName',`${usersList[i].name}`);
                    return 'Success';
                    
                }
                else 
                {
                    return 'Password is incorrect';
                }

                break;
            }


        }

        if(emailFound == false)
        {
           
                return 'Email is not registered';
            
        }
    }

    return 'emptylist';


}


function goTologin()
{
    setTimeout(function(){

        window.location.href = "./Sub/home.html";

    }, 1500); 
    
}