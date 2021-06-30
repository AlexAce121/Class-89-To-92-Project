function adduser(){
    var Player1 = document.getElementById("Player1Name").value;
    var Player2 = document.getElementById("Player2Name").value;

    localStorage.setItem("p1_name" , Player1);
    localStorage.setItem("p2_name" , Player2);

    window.location="gamePage.html";
}