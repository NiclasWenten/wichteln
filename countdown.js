var countDownDate = new Date("Dec 24, 2021 00:00:00").getTime();

var x = setInterval(function() {

    var now = new Date().getTime();

    var distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
    document.getElementById("countdownD").innerHTML ="<span class='zahld'>" + days   +"</span>" + "<span class='textd'>"+"Tage"+"</span>";
    document.getElementById("countdownM").innerHTML ="<span class='zahld'>" + minutes+"</span>" + "<span class='textd'>"+"Minuten"+"</span>";
    document.getElementById("countdownS").innerHTML ="<span class='zahld'>" + seconds+"</span>" + "<span class='textd'>"+"Sekunden"+"</span>";
    document.getElementById("countdownH").innerHTML ="<span class='zahld'>" + hours  +"</span>" +" "+ "<span class='textd'>"+"Stunden"+"</span>";
      
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("countdownp").innerHTML = "EXPIRED";
    }
  }, 1000);