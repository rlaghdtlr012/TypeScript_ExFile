// 변수에 들어갈 수 있는 것을 미리 정해놓는 것을 Literal Types라고 한다.
var 이름; // 이 변수에는 무조건 'kim'만 들어올 수 있음
var 나이; // 이 변수에는 123 밖에 들어올 수 없음
var 접니다;
접니다 = '커플';
// 함수의 파라미터 자리에 무조건 hello 밖에 들어올 수 없음
// + 리턴값이 무조건 0이나 1밖에 될 수 없음
function 함수(a) {
    return 1;
}
함수('hello');
// 가위 바위 보 중에 1개를 파라미터로 받는 함수
// 가위 바위 보만 들어올 수 있는 array를 return 해야함
function 가위바위보(x) {
    return ['가위'];
}
var 자료 = {
    name: 'kim'
}; // as const는 오브젝트의 자료를 완전히 잠가놓고 싶을때 쓰는 명령어. 이거 쓰면 29줄 에러 안남
function 내함수2(a) {
}
var 함수함수 = function (a) {
    return 10; // 함수 타입지정
};
