setInterval(function(){
    var now = new Date();
    var hour = now.getHours();
    var mint = now.getMinutes();
    var sec_1 = now.getSeconds();
    
    document.getElementById("hours").innerHTML = hour;
    document.getElementById("mint").innerHTML = mint;
    document.getElementById("sec").innerHTML = sec_1;
    
},10)

    