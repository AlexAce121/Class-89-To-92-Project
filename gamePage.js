var player_1_name= localStorage.getItem("p1_name");
var player_2_name= localStorage.getItem("p2_name");
var p1_score = 0;
var p2_score = 0;

document.getElementById("player1_name").innerHTML = player_1_name + ":" ;
document.getElementById("player2_name").innerHTML = player_2_name + ":" ;
document.getElementById("player1_score").innerHTML = p1_score ;
document.getElementById("player2_score").innerHTML = p2_score ;

function Send(){
    Number1 = document.getElementById("number1").value;
    Number2 = document.getElementById("number2").value;
    actual_anwer = parseInt(Number1)*parseInt(Number2);
    Question_Number = "<h4>" + Number1 + "X" + Number2 + "</h4>";
    Input = "<br> Answer : <input type='text' id='input_check_box'>";
    Check_Button = "<br><br><button class='btn btn-info' onclick=check()>Check</button>";
    row = Question_Number+Input+Check_Button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("number1").value="";
    document.getElementById("number2").value="";
}

question_turn = "player_1_name";
ans_turn = "player_2_name";

function check(){
    get_ans = document.getElementById("input_check_box").value;

    if(get_ans == actual_anwer){
      if(ans_turn == "player_1_name"){
      p1_score=p1_score+1;
      document.getElementById("player1_score").innerHTML=p1_score;
      }
      else{
        p2_score=p2_score+1;
        document.getElementById("player2_score").innerHTML=p2_score;
      }
    }
    if(question_turn=="player_1_name"){
      question_turn="player_2_name";
        document.getElementById("question").innerHTML= "Question turn :" + player_2_name;
    }
    else{
        question_turn=="player_1_name";
        document.getElementById("question").innerHTML= "Question turn :" + player_1_name;   
    }
    if(ans_turn=="player_2_name"){
        ans_turn="player_1_name";
        document.getElementById("ans").innerHTML= "Answer turn :" + player_1_name;
            }
            else{
                ans_turn="player_2_name";
                document.getElementById("ans").innerHTML= "Answer turn :" + player_2_name;   
            }
}


