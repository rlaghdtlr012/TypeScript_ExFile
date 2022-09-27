var 이름0 = 3;
var 이름1 = ["kim"];
var 이름2 = { name: "kim" };
var 이름3 = 123; // 문자열 혹은 숫자가 들어올 수 있음
var 이름4; // 타입실드 해제문법임 --> 일반 자바스크립트처럼 쓸 수 있음
var 이름5; // 모든 자료형 허용해줌. 이게 더 안전함
function 함수(x) {
    return x * 2; // 함수의 파라미터와 return 값 둘 다 변수지정 가능
}
var john = { name: 'kim', age: "123" };
이름1 = ["123"];
var name1 = "김홍식";
var age = 28;
var 출생지역 = "강릉";
var 좋아하는가수 = { 가수이름: "뉴진스", 노래제목: "Hype Boy" };
function 함수1(x) {
    return x * 2;
}
// 리턴값이 void인 함수 선언방법
function 함수2(x) {
    // x는 아직 형태가 정해지지 않았기 때문에 밑에 코드는 에러가 뜬다.
    // console.log(x+3);
}
// Narrowing 문법
function 내함수(x) {
    if (typeof x === 'number') {
        return x + 1; // x의 타입이 숫자라고 확실히 정해지면 x+1값을 리턴한다.(Narrowing)
    }
    else {
        return x + '1';
    }
}
// Assertion 문법(타입 덮어쓰기)
function 내함수1(x) {
    var array = [];
    array[0] = x;
}
function 함수3(x) {
    return x.toString.length;
}
function 결혼가능하냐(pay, house, attractive) {
    if (house === true) {
        house = 500;
    }
    else {
        house = 0;
    }
    if (attractive === '상') {
        attractive = 100;
    }
    else {
        attractive = 0;
    }
    if (pay + house + attractive > 600) {
        return "결혼가능";
    }
    return "";
}
