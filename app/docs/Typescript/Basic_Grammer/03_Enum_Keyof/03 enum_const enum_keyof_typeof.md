# 🟦 enum, const enum, as const, keyof, typeof 정리

## 📌 1. Enum (열거형)

여러 관련된 값들을 하나의 이름 아래에 그룹화할 수 있는 타입스크립트의 기능

- 기본값은 숫자 0부터 시작하여 1씩 증가
- 숫자 열거형: enum Direction { Up = 0, Down = 1, ... } 와 동일
- 런타임에도 객체로 존재하며, 양방향 매핑이 가능함

```ts
//Enum Default
enum EDirection {
	Up, // 0
	Down, // 1
	Left, // 2
	Right // 3
}

// 양방향 맵핑
EDirection.Up // 0
EDirection[0] // 'Up'
```

## 📌 2. const enum

런타임에는 제거되고, 컴파일 시 숫자 값으로 인라인됨 (최적화)

### ❗주의

- const enum은 객체가 런타임에 생성되지 않음
- 라이브러리처럼 여러 모듈에서 사용할 경우 tsconfig의 preserveConstEnums 옵션을 설정하거나, 대신 객체 + as const를 사용하는 것을 권장

## 📌 3. 문자열 열거형

- 값이 문자열이면 자동 증가 없음, 모든 값 수동 지정 필요
- JS로 변환 시 const enum이기 때문에 문자열 상수만 남음

```ts
const enum Direction {
	Up = "UP",
	Down = "DOWN"
}
```

## 📌 4. 객체를 enum처럼 사용하기 (with as const)

- as const는 객체 속성들을 리터럴 타입으로 고정함 (readonly + 정확한 값)
- 런타임에도 객체가 존재하기 때문에 디버깅, 출력 등에 유리
- 타입 추론 및 활용성이 좋기 때문에 실무에서 더 많이 사용
- as const 는 모든 값을 리터럴 타입으로 고정 + Read Only

```ts
const ODirection = {
	Up: 0,
	Down: 1,
	Left: 2,
	Right: 3
} as const
```

```ts
// 타입 추론시, number로 사용
const enum EDirection {
	UP, //0
	Down, //1
	Left, //2
	Right //3
}

// // JS로 변환 시 → const a = 0;
const a = EDirection.Up
const b = EDirection.Down
```

## 📌 5. 타입 지정

Enum의 타입을 직접정으로 지정 가능

```ts
const enum EDirection {UP : 0, Down :1, Left : 2, Right : 3,} {
    UP = 0,
    Down =1,
    Left = 2,
    Right = 3,
}

//Enum은 직접 함수로서 사용 가능
function walk(dir: EDirection) {}
```

## 📌 6. 타입 추론

- typeof : 값을 타입으로 바꾸는 키워드
- keyof : keyof: 객체 타입의 "키"만 추출하여 유니온 타입으로 반환

```ts
const obj = {
	a: "apple",
	b: "banana"
}

type ObjType = typeof obj

// ObjType
{
	a: string
	b: string
}

type Keys = keyof ObjType
// "a" | "b"

// 타입스크립트는 obj가 '값'이기 때문에 바로 keyof obj 는 ❌ 오류
type Key = keyof typeof obj
// → typeof obj: { a: string; b: string }
// → keyof { a: string; b: string } → "a" | "b"

type Key = (typeof obj)[keyof typeof obj]
// typeof obj[keyof typeof obj] → string	그 타입의 값의 타입 (유니온)
// string | string | string → string
```

```ts
const Direction = {
  Up: 0,
  Down: 1,
  Left: 2,
  Right: 3,
} as const;

typeof Direction
{
  readonly Up: 0,
  readonly Down: 1,
  readonly Left: 2,
  readonly Right: 3
}

// 키 타입 추론
// keyof typeof Direction
type DirectionKey = keyof typeof Direction
// => 'Up' | 'Down' | 'Left' | 'Right'


// 값 타입 추론
// (typeof Direction)[keyof typeof Direction]
// → 위 키들로 해당 객체 타입을 인덱싱하면 값들의 타입 유니온이 됩니다.
type DirectionValue = (typeof Direction)[keyof typeof Direction]
// as const가 붙어있을 경우 => 0 | 1 | 2 | 3
// 없으면 number
```

```ts
//Enum 사용하지 않고, 처리를 했을때
//Value
type Direction = (typeof ODirection)[keyof typeof ODirection] as const
// Key
type Direction = [keyof typeof ODirection] as const


function run(dir: Direction) {}

walk(EDirection.Left)
run(EDirection.Right)
```
