window.onload = function(){
    let navUL = document.getElementById("navUL");
    let navLIs = navUL.children;
    for (var i = 0; i < navLIs.length; i++){
        navLIs[i].addEventListener('click', function(){
           let path = this.id;
           window.open(path, "_self");
        })
    }
};