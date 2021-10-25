// 하루의 아침 점심 저녁 식사의 칼로리로 입력을 3개 받는다.
const breakfast = Number(prompt("아침 식사의 칼로리를 입력하세요."));
const lunch = Number(prompt("점심 식사의 칼로리를 입력하세요."));
const dinner = Number(prompt("저녁 식사의 칼로리를 입력하세요."));

// 모든 칼로리를 합친 결과를 출력한다.
const total = breakfast + lunch + dinner;
alert("오늘 하루 섭취한 총 칼로리는 " + total + "kcal 입니다.");
console.log("오늘 하루 섭취한 총 칼로리는 " + total + "kcal 입니다.");