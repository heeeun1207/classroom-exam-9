// business logic
// % 나머지 값을 내는 연산자 "%"
// 7 % 2 = 1
// 숫자 7을 2로 나눈 나머지 값은 1이다.
// 8 % 2 = 0 
// 숫자 8을 2로 나눈 나머지 값은 0이다 
// 홀수 odd number , 짝수  even number를 구분하는 근거로 
// 2로 나눈값의 '몫 을 제외한 나머지가 0이면 짝수 0이 아니면 홀수라는 결론이 나온다.

//work: 오라클빌딩에는 두개의 엘리베이터가 있다.
// 홀수 전용 짝수 전용 엘리베이터 두개가 마련되어있지만, 예외가 발생한다.
//짝수 엘리베이터는 1층도 가능하게 설계되어있다.
//홀수 엘리베이터는 10층도 가능하게 설계되어이있다.

//ESM 모듈 방식으로 사용가능한 
//npm install inquirer 모듈을 설치하여 
//지하1층 부터 10층까지의 숫자를 입력할 수 있는 인터페이스를 제작한다.
//"문을 열겠습니다." 라는 문구가 나오게 한다.
//1초뒤에 "n층에 도착하였습니다" 라는 문구가 나오게 한다.
// "문을 닫았습니다." 라는 문구가 나오게 한다 

//위의 설명을 종합하여 orderlist로 (순서가 있는 목록)으로 예상되는 절차를 술어로 작성해보세요 . 

//!gpt 보고했습니다..
//npm 2 . inquirer 
import inquirer from "inquirer";

// 일정 시간동안 대기하는 함수
function sleep(ms) {   //* 
  return new Promise(resolve => setTimeout(resolve, ms));
}

// 홀수 층용 엘리베이터 함수
async function oddElevator(floorNumber) {
  console.log(`홀수 층용 엘리베이터로 이동합니다. ${floorNumber}층으로 이동 중입니다...`);
  await sleep(1000);
  console.log(`${floorNumber}층에 도착하였습니다.`);
}

// 짝수 층용 엘리베이터 함수
async function evenElevator(floorNumber) {
  console.log(`짝수 층용 엘리베이터로 이동합니다. ${floorNumber}층으로 이동 중입니다...`);
  await sleep(1000);
  console.log(`${floorNumber}층에 도착하였습니다.`);
}

// 메인 함수 //* async await 
async function main() {
  console.log("문을 열겠습니다.");

  // 층수 입력 받기
  const answers = await inquirer.prompt({
    type: 'list',
    name: 'floorNumber',
    message: '어느 층으로 이동하시겠습니까?',
    choices: ['지하 1층', '1층', '2층', '3층', '4층', '5층', '6층', '7층', '8층', '9층', '10층'],
  });

  // 선택한 층수 
  const floorNumber = answers.floorNumber;

  // 지하 1층인 경우 floorNumber의 값을 -1로 바꿔준다
  let mappedFloorNumber;
  if (floorNumber === '지하 1층') {
    mappedFloorNumber = -1;
  } else {
    mappedFloorNumber = parseInt(floorNumber);
  }

  // 홀수 층인 경우 홀수용 엘리베이터 함수 호출, 짝수 층인 경우 짝수용 엘리베이터 함수 호출
  if (mappedFloorNumber % 2 === 0) {
    await evenElevator(mappedFloorNumber);
  } else {
    await oddElevator(mappedFloorNumber);
  }

  console.log("문을 닫겠습니다.");
  console.log(`${floorNumber}에 도착하였습니다.`);
}

// 프로그램 시작
main();
