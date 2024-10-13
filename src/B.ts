// 함수에서 타입 정의하는 방법
// 타스를 쓰면 코드 작성 과정에서 함수의 파라미터로 어떤 타입을 넣어야 하는지 알 수 있으며 리턴 값의 타입도 정의함
// 만약에 return 값이 number라는 것을 정의 해놓고 갑자기 null값을 반환한다면 오류 발생
function sum(x :number, y :number) :number {
    return x + y;
}

// 숫자 배열의 총합을 구하는 sumArray 함수
function sumArray(numbers :number[]) :number {
    return numbers.reduce((acc, current) => acc + current, 0);
}
const total= sumArray([1, 2, 3, 4, 5]);