# 배열

```

arr[] = {1,2,3}

```

### Array.of()

    주어진 인자를 요소로 갖는 새 배열 생성
    Array.of(1, 2, 3) → [1, 2, 3]

### Array.from()

    유사 배열/이터러블을 배열로 변환
    Array.from('hello') → ['h', 'e', 'l', 'l', 'o']

### new Array()

    배열 생성자
    new Array(3) → [empty × 3]

### isArray()

```
    배열인지 여부 확인
    Array.isArray([1, 2, 3]) → true
```

### forEach

    각 요소에 대해 콜백 실행 (반환값 없음)

```
    for문과 같이 반복
    tempList.forEach((x, i)=>{ console.log(x + i); })
```

### map

    각 요소에 대해 콜백 실행 후, return 새 배열 반환

```
    tempList2 = tempList.map ((x, i) =>{ return x \* 2 })
    tempList2 = [2,4,6,8]
```

### filter

    조건을 만족하는 요소만 새 배열 반환
    tempList2 =tempList.filter(x => x > 1)
    tempList2 = [2, 3, 4]

### fill

기본 값을 설정할 수 있으며, 선언시에는 empty를, fill()을 하게 되면 undefined를 체워넣게 되고, 값을 지정해서 해당 배열을 초기화 할 수 있습니다.

#### Array(9)

```
[empty * 9]
```

#### Array(9).fill()

```
[undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined]
```

#### Array(9).fill(0)

```
[0,0,0,0,0,0,0,0,0]
```

#### 응용

```
Array(9).fill(0)
[0,0,0,0,0,0,0,0,0]
```

배열과 같은 함수는 연달아 쓰기 편하다.

```
    Array(9).fill(0).map((element, index)=>{
    return index+1;
    })

[1,2,3,4,5,6,7,8,9]
```

### length

```
    길이 반환
    [1, 2, 3].length → 3
```

### concat()

```
    배열 합치기 → 새 배열 반환
    [1, 2].concat([3, 4]) → [1, 2, 3, 4]
```

### slice()

```
    부분 배열 추출 (원본 수정 안 함)
    [1, 2, 3].slice(1) → [2, 3]
```

## 추가 삭제

### push()

```
    끝에 요소 추가
    길이 반환	arr.push(4)
```

### pop()

```
    끝 요소 제거
    제거된 요소 반환	arr.pop()
```

### unshift()

```
    앞에 요소 추가 → 길이 반환
    arr.unshift(0)
```

### shift()

```
    앞 요소 제거 → 제거된 요소 반환
    arr.shift()
```

### splice()

```
- 삭제만 하기
  splice(start, deleteCount)
- 추가만 하기
  splice(start, 0, item1, item2, ...)
- 삭제 + 추가 (교체)
  splice(start, deleteCount, item1, item2, ...)

let arr = ['a', 'b', 'c', 'd'];

arr.splice(1, 2, 'a', 'b')
arr = ['a', 'a', 'b', 'd']
```

### reverse()

```
    배열 순서 뒤집기
    [1, 4, 3].reverse() → [3, 4, 1]
```

### sort()

```
    배열 정렬 (기본은 문자열 기준)
    [1, 4, 2].sort() → [1, 2, 4]

    역순정렬 : [1, 4, 2].sort().reverse() → [4, 2, 1]
```

## 찾기

### includes()

```
    배열에 특정 값 포함 여부
    [1, 2, 3].includes(2) → true
```

### indexOf()

```
    특정 요소 인덱스 (없으면 -1)
    [1, 2, 3].indexOf(2) → 1
```

### lastIndexOf()

```
    마지막 요소 인덱스 반환
    [1, 2, 3, 2].lastIndexOf(2) → 3
```

## 문자열

### join()

```
    요소를 문자열로 결합
    [1, 2, 3].join('-') → "1-2-3"
```

### toString()

```
    문자열로 변환
    [1, 2, 3].toString() → "1,2,3"
```

#### 그외

```
let arr = [1, 2, 3]; // Packed mode 빠름
arr[1000] = 5; // Sparse mode로 강등 느려짐
코드에 문제가 있어 보이지만, 동작은 한다.
배열이, 일반 객체와 비슷하게 동작하는 형식으로 mode를 바꿔 동작한다.

Sparse(구멍)
타입 혼합,
대량의 인덱스 점프

초기엔 최적화된 C배열 같은 느낌으로 빠르게 돌아가지만
구조가 복잡해지면 → 객체처럼 동작하고 느려진다
메모리는 자동으로 관리되고, 가비지 컬렉터가 정리함
```
