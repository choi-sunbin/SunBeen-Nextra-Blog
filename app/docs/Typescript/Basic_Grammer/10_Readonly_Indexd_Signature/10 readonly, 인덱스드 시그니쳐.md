# 🟦 TypeScript - readonly & 인덱스드 시그니처(Index Signature) 정리

## 📌 1. readonly 키워드

readonly는 읽기 전용 속성을 정의할 때 사용됩니다.

```ts
interface A {
	readonly a: string
	b: string
}

const aaaa: A = { a: "hello", b: "world" }
aaaa.a = "123" // Error
```

✅ TypeScript가 타입 안정성을 지켜주는 기능 중 하나

## 📌 2. 인덱스드 시그니처 (Index Signature)

- 객체의 속성이 어떤 키와 값의 타입을 가질 수 있는지를 정적 타입으로 선언하는 방법
- typescript에서 여러가지 속성이 존재 할때 한 속성을 전부 처리할 수 있도록 처리
- 객체의 속성이 어떤 키와 값의 타입을 가질 수 있는지 정의할 때
- JS로 변환 시 존재하지 않음 → 타입 검사용 문법

```ts
type A = { [key: string]: string }
```

- 모든 속성의 키는 string, 값은 string이어야 한다는 뜻
- 키 이름은 자유롭게 지정 가능 (key, option, prop, 등)
- JS로 변환 시 존재하지 않음 → 타입 검사용 문법

```ts
// 활용 예시
interface ConfigOptions {
	[optionName: string]: string | number | boolean
}

const appConfig: ConfigOptions = {
	theme: "dark",
	version: 1.2,
	debug: true
	// 옵션이 추가될 수 있음
}
```
