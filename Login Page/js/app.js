document.getElementById(`submit`).addEventListener(`click`, function(){
    let username = document.getElementById(`username`).value;
    let password = document.getElementById(`password`).value;
    if (localStorage.getItem(`newusername`) === username && localStorage.getItem(`newpassword`) === password){
        document.getElementById(`username`).value = ``;
        document.getElementById(`password`).value = ``;
        alert(`Login Successful!`);
    } else{
        alert(`Invalid combination of username and password!`);
    }
});

document.getElementById(`submitNew`).addEventListener(`click`, function(){
    let usernameNew = document.getElementById(`usernameNew`).value;
    let passwordNew = document.getElementById(`passwordNew`).value;
    if (usernameNew === `` && passwordNew === ``){
        alert(`You must enter a username and password!`);
    } else if (usernameNew === `` && passwordNew !== ``){
        alert(`You must enter a username!`);
    } else if (usernameNew !== `` && passwordNew === ``){
        alert(`You must enter a password!`);
    } else if (usernameNew){
        localStorage.setItem("newusername", usernameNew);
        localStorage.setItem("newpassword", passwordNew);
        document.getElementById(`usernameNew`).value = ``;
        document.getElementById(`passwordNew`).value = ``;
        alert(`Profile successfully created!`);
    }
})

document.getElementById(`delete`).addEventListener(`click`, function(){
    let usernameDelete = document.getElementById(`usernameDelete`).value;
    let passwordDelete = document.getElementById(`passwordDelete`).value;
    if (usernameDelete !== `` && passwordDelete !== ``){
        if (localStorage.getItem(`newusername`) === usernameDelete && localStorage.getItem(`newpassword`) === passwordDelete){
            localStorage.removeItem(`newusername`);
            localStorage.removeItem(`newpassword`);
            alert(`Profile successfully deleted!`);
            document.getElementById(`usernameDelete`).value = ``;
            document.getElementById(`passwordDelete`).value = ``;
        } else if (localStorage.getItem(`newusername`) !== usernameDelete || localStorage.getItem(`newpassword`) !== passwordDelete){
            alert(`No profile exists using provided username and password!`);
        }
    } else if(usernameDelete === `` || passwordDelete === ``){
        alert(`Please enter your complete login information!`);
    }
    
});