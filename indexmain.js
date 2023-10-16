/*dynamic 문서객체를 선택*/ 
let target = document.querySelector("#dynamic");

function randomString() {
  //배열변수
let stringArr = ["SEOUL", "DAEJEON", "DAEGU", "BUSAN", "INCHEON", "GWANGJU"];
//배열변수 중 랜덤으로 하나를 선택:floor는 소수점 버림
let selectString = stringArr[Math.floor(Math.random() * stringArr.length)];
//해당 문자열을 split("")방식으로 분리시켜라: 글자 하나하나 쪼개기
let selectStringArr = selectString.split("");

return selectStringArr;
}

//텍스트 문장 다 타이핑되면 리셋되는 효과
function resetTyping(){
  target.textContent = "";
  dynamic(randomString());
}

//랜덤매개변수가 0보다 클 경우 계속 반복(한글자씩 텍스트 타이핑 효과)
function dynamic(randomArr) {
  if(randomArr.length > 0) {
    target.textContent += randomArr.shift();
    setTimeout(function(){
      dynamic(randomArr);
    },80); 
  }else {
    setTimeout(resetTyping,3000)
  }
}

//다이나믹을 호출할 때 selectStringArr을 매개변수로 받음
dynamic(randomString());

//커서가 깜빡임 효과:active 클래스가 추가되었다가 삭제되었다가 반복 
function blink() {
  target.classList.toggle("active");
}
//반복함수 이용
setInterval(blink,500);