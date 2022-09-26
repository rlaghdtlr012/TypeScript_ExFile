type Name = string | number;
let 이름0 : Name = 3;
let 이름1 : string[] = ["kim"];
let 이름2 : { name : string } = { name : "kim" };
let 이름3 : string | number = 123; // 문자열 혹은 숫자가 들어올 수 있음
function 함수(x : number) : number { // 파라미터 number, 리턴값 number
    return x*2  // 함수의 파라미터와 return 값 둘 다 변수지정 가능
}
type Member = {
    [key :string] : string, // 글자로 된 모든 object 속성의 타입은: string

}
let john : Member = { name : 'kim', age : "123" };
이름1 = ["123"];