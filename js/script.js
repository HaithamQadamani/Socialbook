// for toogle botton to change the seetingsmenu class height
var settingsmenu = document.querySelector(".settings-menu");
// for dark botton
var darkBtn = document.getElementById("dark-btn");

function settingsMenuToggle(){
    settingsmenu.classList.toggle("settings-menu-height"); 
}

// for dark botton toogle
darkBtn.onclick = function(){
    // to move the toogle right & left
    darkBtn.classList.toggle("dark-btn-on");
    // to code the dark theme
    document.body.classList.toggle("dark-theme");

    // localstorge at js for fix the dark theme when page refresh to keep it dark
    // update the localstorge when click on togll botton
    if (localStorage.getItem("theme") == "light") {
        // create local storge variable
        localStorage.setItem("theme", "dark");
    }
    else{
        localStorage.setItem("theme", "light");
    }
}

// if to check if localstorge is there
if(localStorage.getItem("theme") == "light"){
    // if it is light it will remove the darkbtn (to be off) & darktheme //els if it will be on
    darkBtn.classList.remove("dark-btn-on");
    document.body.classList.remove("dark-theme");
}
else if(localStorage.getItem("theme") == "dark"){
    darkBtn.classList.add("dark-btn-on");
    document.body.classList.add("dark-theme");
}
else{
    //defualt value 
    localStorage.setItem("theme", "light");
}
