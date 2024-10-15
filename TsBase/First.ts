// 타입 별칭 type Alias
type operation = {
    data: number[],
    output:(num: number) => number[]
};

// 사용자 정의 타입 operation 적용 예시
let sum: operation = {
    data: [30, 60, 90],
    output(num) {
        return this.data.map(n => n + num);
    }
};

let multiply:operation = {
    data: [110, 230, 870, 231],
    output(num){
      return this.data.map(n=>n*num);
    }
};

// 유니온 타입
function getAge(age: number | string): string {
    if(typeof age === "number") {
        return age.toString();
    }
    else {
        return age;
    }
}