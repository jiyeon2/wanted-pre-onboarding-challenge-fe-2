/**
 * 할 일
 * @constructor
 * @param {Object} todo  할 일 모델
 * @param {number} todo.id  아이디, 필수
 * @param {string} todo.contents  내용, 필수
 * @param {boolean} todo.isDone 완료여부, 필수
 * @param {string} todo.category  카테고리, 필수
 * @param {Tag[]} [todo.tags]  태그들, 옵셔널
 */
function Todo(todo) {}

/**
 * 태그
 * @constructor
 * @param {Object} tag 태그 모델
 * @param {number} tag.id 태그 식별자, 필수
 * @param {string} tag.name 태그 이름, 필수
 */
function Tag({ id, name }) {}

/**
 * 할 일 생성 함수
 * 할 일을 추가할 수 있다.
 * 내용 없이 추가할 수 없다.
 * @param {string} contents 생성할 할 일의 내용, 필수
 * @returns {Todo} 생성된 할 일 반환한다
 */
function createTodo(contents) {}

/**
 * 특정 할 일 조회 함수
 * ID를 기반으로 특정 할 일을 조회할 수 있다.
 * @param {number} [id] 조회할 특정 할 일의 id
 * @returns {(Todo[] | Todo)} 특정 id 가진 할 일을 반환한다
 */
function readOneTodo(id) {}

/**
 * 모든 할 일 조회 함수
 * 모든 할 일을 조회할 수 있다.
 * @returns {Todo[]} 모든 할 일을 반환
 */
function readTodos() {}

/**
 * 특정 할 일 수정 함수
 * ID를 제외한 모든 속성을 수정할 수 있다.
 * @param {Todo} todo 수정할 할 일 데이터
 * @param {number} todo.id  수정 대상인 할 일 id
 * @param {string} [todo.contents] 수정할 내용
 * @param {boolean} [todo.isDone] 수정할 완료여부 상태
 * @param {string} [todo.category]  수정할 카테고리
 * @param {Tag[]} [todo.tags]  수정할 태그들
 * @returns {Todo} 수정된 할 일을 반환한다
 */
function updateOneTodo(todo) {}

/**
 * 특정 태그 수정 함수
 * 특정 할 일의 특정 태그를 수정한다
 * @param {number} todoId 특정 할 일 id
 * @param {Tag} tag 특정 할 일의 특정 태그
 * @param {number} tag.id 수정 대상인 태그 id
 * @param {string} tag.name 수정할 태그 이름
 * @returns {Tag} 수정된 태그를 반환한다
 */
function updateOneTag(todoId, tag) {}

/**
 * 특정 할 일 삭제
 * @param {number} id 삭제할 할 일의 id
 * @returns {boolean} 삭제 성공 여부 반환
 */
function deleteOneTodo(id) {}

/**
 * 전체 할 일 삭제
 * @returns {boolean} 삭제 성공 여부 반환
 */
function deleteTodos() {}

/** 특정 할 일의 특정 태그 삭제
 * @param {number} todoId 특정 할 일의 id
 * @param {number} tagId 삭제할 특정 태그 id
 * @returns {boolean} 삭제 성공 여부 반환
 */
function deleteOneTag(todoId, tagId) {}

/** 특정 할 일의 모든  태그 삭제
 * @param {number} todoId 모든 태그 삭제할 특정 할 일 id
 * @returns {boolean} 삭제 성공 여부 반환
 */
function deleteTags(todoId) {}
