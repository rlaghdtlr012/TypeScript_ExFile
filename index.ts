type Name = string | number;
let 이름0 : Name = 3;
let 이름1 : (string | number)[] = ["kim"];
let 이름2 : { name : string } = { name : "kim" };
let 이름3 : string | number = 123; // 문자열 혹은 숫자가 들어올 수 있음
let 이름4 : any; // 타입실드 해제문법임 --> 일반 자바스크립트처럼 쓸 수 있음
let 이름5 : unknown; // 모든 자료형 허용해줌. 이게 더 안전함
function 함수(x : number) : number { // 파라미터 number, 리턴값 number
    return x*2  // 함수의 파라미터와 return 값 둘 다 변수지정 가능
}
type Member = {
    [key :string] : string, // 글자로 된 모든 object 속성의 타입은: string

}
let john : Member = { name : 'kim', age : "123" };
이름1 = ["123"];

let name1 :string = "김홍식";
let age :number = 28;
let 출생지역 : string = "강릉";

let 좋아하는가수 :{ 가수이름 : string, 노래제목 : string} = { 가수이름 : "뉴진스", 노래제목 : "Hype Boy"};

function 함수1(x:number) : number /*리턴값에 대한 변수 형식 지정*/{
    return x*2
}
// 리턴값이 void인 함수 선언방법
function 함수2(x:number|string) :void {
    // x는 아직 형태가 정해지지 않았기 때문에 밑에 코드는 에러가 뜬다.
    // console.log(x+3);
}


// Narrowing 문법
function 내함수(x :number |string){ // 애매한 변수 타입을 가지고 있다면 if문 등을 이용하여 Narrowing 해줘야한다.
    if(typeof x === 'number'){
        return x + 1  // x의 타입이 숫자라고 확실히 정해지면 x+1값을 리턴한다.(Narrowing)
    } else{
        return x + '1'
    }
}


// Assertion 문법(타입 덮어쓰기)
function 내함수1(x :number|string){
    let array :number[] = [];
    array[0] = x;
}

function 함수3(x :number){
    return x.toString.length
}

function 결혼가능하냐(pay :number, house :boolean|number, attractive :string|number) :string {
    if(house === true){
        house = 500;
    }else{
        house = 0;
    }
    if(attractive === '상'){
        attractive = 100;
    } else {
        attractive = 0;
    }
    if(pay + house + attractive > 600){
        return "결혼가능"
    }
    return ""
}