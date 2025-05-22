# 🟦 TypeScript void, undefined, 인터페이스 병합 정리

## 📌 1. void와 undefined는 다르다

- void : **반환값은 신경쓰지 않겠다**는 의미의 타입
- undefined : 실제 JS 값 undefined에 해당하며, 할당되거나 반환될 수 있음

✅ 예제: void는 undefined만 반환 가능

```ts
function a(): void {
	// return '3';
	// return 4;
	// return null;
	return undefined; // ❗ 에러 아님 (단, 반환값은 무시됨)
}

const result = a(); // result 타입은 void
console.log(result); // 출력: undefined
```

🔍 TypeScript는 리턴값을 사용하지 않겠다는 뜻이지,
반환값이 없다는 뜻은 아님.

## 📌 2. 콜백 함수에서의 void 의미

```ts
function forEach(arr: number[], callback: (el: number) => void): void {
	for (let el of arr) {
		callback(el);
	}
}

forEach([1, 2, 3], (el) => {
	return "abc"; // ✅ 허용됨. 반환값은 사용되지 않기 때문
});
```

콜백 함수에 void를 쓰면 "반환값을 기대하지 않는다"는 의미이지, 리턴하지 말라는 의미는 아님.

## 📌 3. Declare

### declare란?

- TypeScript에서 "이건 JS 어딘가에 이미 정의돼 있으니, 타입만 선언할게!" 라고 알려주는 키워드
- declare는 자바스크립트 변환시 사라진다.
- declare를 만들어두면, 타입선언만 사용가능하다.

- 타입만 선언 : JS에는 실제 코드가 있는데, TS에선 타입만 필요할 때
- JS 구현 없이 타입 보장 : 코드 없이 존재하는 것처럼 선언할 수 있음 (.d.ts)
- 글로벌 변수/함수 선언 : 브라우저 전역 API, 외부 라이브러리 변수 등

## 📌 4. undefined를 리턴 타입으로 썼을 때

```ts
declare function forEach(arr: number[], callback: (el: number) => undefined): void;

// target.push(el)의 리턴값은 number이므로 에러 발생 ❌
forEach([1, 2, 3], (el) => {
	target.push(el); // ❌ Error: number 반환 → undefined 아님
});

//2개의 함수가 존재한다고 했을때
//declare function forEach(arr: number[], callback: (el:number) => void): void 에러가 나지않음
```

void는 리턴값을 무시하므로 괜찮지만,

undefined는 정확히 undefined를 반환해야 함 → return; 또는 return undefined; 만 허용

## 📌 5. 인터페이스에서 void 리턴 함수

```ts
interface Human {
	talk: () => void;
}

const human: Human = {
	talk() {
		return "hello"; // ✅ 허용됨, 리턴값 무시됨
	}
};
```

메서드 시그니처가 (): void여도 리턴값이 있어도 OK

단, 그 리턴값은 호출처에서 쓸 수 없음

## 📌 6. void 반환을 우회해 타입 지정하는 경우

```ts
interface A {
	talk: () => void;
}

const a: A = {
	talk() {
		return 3; // ✅ 허용됨 (무시됨)
	}
};

const b1 = a.talk(); // 타입은 void
// const b2 = a.talk() as number // ❌ 에러
const b3 = a.talk() as unknown as number; // ✅ 우회 가능
const b4 = <number>(<unknown>a.talk()); // ✅ 우회 가능
```
