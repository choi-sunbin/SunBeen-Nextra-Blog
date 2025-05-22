# 🟦 TypeScript 클래스 - 접근 제어자, 인터페이스, 추상 클래스 정리

## 📌 1.클래스 기반 구조
```ts

class A1 {
	a: string // 초기화 되지 않았다는 알림 표시 (strict 모드 에러)
	b: string = "456" // 다음과 같이 초기화
}

class A2 {
	a: string;
	b: string;

	//  b: string = 123 기본값 default value
	constructor(a: string, b: string = 123) {
		this.a = a
		this.b = b
	}
}

class B {
	a: string = "123"
	b: string = 123

	method() {
		console.log(123)
	}
}

const a1 = new A("123")
const a2 = new A("123", 345)
const a3: A = new A("123")

// 클래스의 이름은 그 자체만으로도 타입을 나타 낸다

const b1: typeof AA = A
const b2: typeof A = new A("123") // 에러
```

## 📌 2. 클래스 접근 제어자

- class에 private, protected 추가됨

| 접근 제어자 | 클래스 내부 | 상속된 클래스(extends) | 클래스 외부 접근(인스턴스) |
| ----------- | ----------- | ---------------------- | -------------------------- |
| public      | ✅          | ✅                     | ✅                         |
| protected   | ✅          | ✅                     | ❌                         |
| private     | ✅          | ❌                     | ❌                         |


```ts
class A {
	public pub = "공개"
	protected prot = "상속 가능"
	private priv = "비공개"

	// 자바스크립트에서 private
	#b: number = 123
}

class B extends A {
	show() {
		console.log(this.pub) // ✅
		console.log(this.prot) // ✅
		// console.log(this.priv) // ❌ private 접근 불가
	}
}

const b = new B()
console.log(b.pub) // ✅
console.log(b.prot) // ❌
console.log(b.priv) // ❌

```

## 📌 3. readonly

 - 읽기 전용 속성. 초기화 이후 값 변경이 불가능합니다.

```ts
interface A {
	readonly a: string
	b: string
}

const aaaa: A = { a: "hello", b: "world" }
aaaa.a = "123" // ❌ Error: 읽기 전용
```

## 📌 4. interface와 class의 관계

- interface는 추상적인 타입 선언 → 컴파일 결과로 JS에는 존재하지 않음
- class는 실행 가능한 코드로 변환됨 → 런타임에도 존재함
- class에 private, protected 추가됨
- 추상에 의존하고, 구현에 의존하지말라 (interface), (class)


```ts
// interface 추상
// interface는 사라짐
interface A {
	readonly a: string
	b: string
}

// interface 멤버는 public으로 구현해야 함
class B implements A {
	//private a: string = "hi"        // ❌ Error: private은 interface와 호환 불가
	//protected b: string = "world"   // ❌ Error: protected도 안됨

	public a: string = "hi" // ✅ OK
	public b: string = "world"
}

class C extends B {}
new C().a
new C().b
```

## 📌 5. 추상 클래스 (abstract)
### 🧩 개념
abstract class는 직접 인스턴스화할 수 없는 클래스

abstract method는 반드시 하위 클래스에서 구현해야 함

```ts
	abstract class D {
		private readonly a : string = '123';
		b: string = '345';
		c: string = 'wow';

		abstract method(): void;
		// 추상 클래스도 실질 함수 메소드를 가질 수있다.
		method2() {
			return '3';
	}
```