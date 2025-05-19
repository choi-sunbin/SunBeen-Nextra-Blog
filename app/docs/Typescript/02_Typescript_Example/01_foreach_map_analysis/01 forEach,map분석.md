# 제네릭 실전 예제

## 인터페이스의 제너릭

interface A<T>

## 타입의 제너릭

    type A<T>

## class의 제너릭

    class A<T>{}

## 타입 추론

foreach는 제너릭을 이용하여, 타입 추론이 가능하다.

```ts
// value: number
[1, 2, 3]
	.forEach((value) => {
		console.log(value);
	})
	[
		// value: string
		("1", "2", "3")
	].forEach((value) => {
		console.log(value);
	})
	[
		// value: boolean
		(true, false, true)
	].forEach((value) => {
		console.log(value);
	})

	[
		// value : number | string | boolean
		(123, "123", true)
	].forEach((value) => {
		console.log(value);
	});
```

## 제너릭을 사용하는 이유

```ts
// 타입이 한가지라고 추론이 불가능함
// 2*2 총 4가지의 모든 경우를 계산해서 사용할 수 없음
function numOrStrAdd(a: number | string, b: number | string) {
	return a + b;
}
```

## forEach 분석

```ts
//lib.es5.d.ts

interface Array<T> {
	/**
	 * Performs the specified action for each element in an array.
	 * @param callbackfn A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array.
	 * @param thisArg An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
	 * 배열의 각 요소에 대해 지정된 작업을 수행합니다.
	 * @param callbackfn 최대 세 개의 인수를 허용하는 함수입니다. 각각에 대해 배열의 각 요소에 대해 한 번씩 callbackfn 함수를 호출합니다.
	 * @param thisArg 이 키워드가 callbackfn 함수에서 참조할 수 있는 객체입니다. 이 Arg를 생략하면 undefined 값이 이 값으로 사용됩니다.
	 */

	forEach(callbackfn: (value: T, index: number, array: T[]) => void, thisArg?: any): void;
}
```

- interface Array<T>에 forEach가 선언되어 있습니다.
- CallBackfn 함수는 callbackfn: (value: T, index: number, array: T[])
  - value: T와 array: T[]가 Array<T>의 제너릭을 함께 공유하는 것이 확인 가능합니다.

## map 분석

```ts
interface Array<T> {
	/**
 	* Calls a defined callback function on each element of an array, and returns an array that contains the results.
	* @param callbackfn A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array.
	* @param thisArg An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.

	* 배열의 각 요소에서 정의된 콜백 함수를 호출하고 결과가 포함된 배열을 반환합니다.
	* @param callbackfn 최대 세 개의 인수를 허용하는 함수입니다. 각각에 대해 배열의 각 요소에 대해 한 번씩 callbackfn 함수를 호출합니다.
	* @param thisArg 이 키워드가 callbackfn 함수에서 참조할 수 있는 객체입니다. 이 Arg를 생략하면 undefined 값이 이 값으로 사용됩니다.
	*/

	map<U>(callbackfn: (value: T, index: number, array: T[]) => U, thisArg?: any): U[];
}
```

- interface Array<T>에 map이 선언되어 있습니다.
- CallBackfn 함수는 callbackfn: (value: T, index: number, array: T[])
  - value: T와 array: T[]가 Array<T>의 제너릭을 함께 공유하는 것이 확인 가능합니다.
- callbackfn(~) => U
  - T와 다른 제너릭 U를 사용한 것을 확인할 수있습니다.
  - T와는 타입이 다를 수 있다는 의미이며,
  - map의 처리결과가 U[] 배열인 것을 확인할 수 있습니다.
