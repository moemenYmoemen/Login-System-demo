




var displayName;



window.addEventListener('load',function(){

    if(get_fromlocalstorage()==null)
    {
        usersList =[];
    }

    else{

    var displayNameH2 = document.getElementById('displayName');
  
    
    displayNameH2.innerHTML = `Welcome, ${displayName}`;
        }

});


function get_fromlocalstorage()
{
   
    
    displayName= window.localStorage.getItem('displayName');


    return displayName;
}


var logoutBtn = document.getElementById('logoutBtn');

logoutBtn.addEventListener('click',function(){
  

        window.location.href = "../index.html";

  
})