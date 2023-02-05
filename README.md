# 프리온보딩 프론트엔드 챌린지 2차

Todo 앱을 JSDoc으로 문서화하는 챌린지 과제

230206

- [x] 필요한 데이터 모델링

```js
Todo {
    id(required),
    contents(required),
    isDone(required),
    category(required),
    tags(optional)
}

Tag {
    id(required),
    name(required)
}
```

- [x] 사용되는 함수 선언부 만들기

```
  - CREATE
    - createTodo
  - READ
    - readOneTodo
    - readTodos
  - UPDATE
    - updateOneTodo
    - updateOneTag
  - DELETE
    - deleteOneTodo
    - deleteTodos
    - deleteOneTag
    - deleteTags
```

- [x] JSDoc 활용해 문서화
- [x] github page 활용해 정적 페이지 배포
  - [링크](https://jiyeon2.github.io/wanted-pre-onboarding-challenge-fe-2/)

## Usage

### Install

```bash
npm install
or
yarn
```

### Build

```bash
npm run docs
or
yarn docs
```

#### Reference

- [jsdoc.app](https://jsdoc.app)
- [과제](https://gist.github.com/pocojang/3c3d4470a3d2a978b5ebfb3f613e40fa)
