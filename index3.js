// 숙제 1. 회원정보라는 변수에 타입 지정하기
var 회원정보 = {
    name: 'kim',
    age: 30,
    plusOne: function (x) {
        return x + 1;
    },
    changeName: function () {
        console.log('안녕');
    }
};
// 숙제 2. 함수 2개 만들고 타입 정의하기
function cutZero(a) {
    if (a[0] === '0') {
        return a.substring(1);
    }
    else {
        return a.substring(0);
    }
}
function removeDash(a) {
    var result = a.replace('-', '');
    return parseFloat(result);
}
var 내용 = document.querySelector('#title');
if (내용 instanceof Element) {
    내용.innerHTML = "안녕하지않아요";
}
var 링크 = document.querySelector('.link');
if (링크 instanceof HTMLAnchorElement) { // html Narrowing 방법
    링크.href = "https://kakao.com";
}
var 버튼 = document.querySelector('#button');
버튼 === null || 버튼 === void 0 ? void 0 : 버튼.addEventListener('click', function () {
    console.log('안녕');
});
// 숙제 1. 이미지 바꾸는 예제
var 이미지 = document.querySelector('#image');
if (이미지 instanceof HTMLImageElement) {
    이미지.src = "new.PNG";
}
// 숙제 2. 네이버라는 클래스 전체 링크 바꿔주기
var 네이버 = document.querySelectorAll('.naver');
네이버.forEach(function (a) {
    if (a instanceof HTMLAnchorElement) {
        a.href = "https://kakao.com";
    }
});
