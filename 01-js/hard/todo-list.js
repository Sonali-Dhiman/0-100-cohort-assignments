/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor(){
    this.todo = [];
  }

  add(todo){
    this.todo.push(todo)
  }

  remove(todoIndex){
    if(todoIndex < this.todo.length){
      let oldArr =this.todo;
      let newArr = [ ...oldArr.slice(0,todoIndex), ...oldArr.slice(todoIndex+1, this.todo.length)];
      this.todo = newArr;
    }
  }

  update(index, updatedTodo){
    if(index < this.todo.length){
      let oldArr =this.todo;
      oldArr[index] =  updatedTodo
      // let newArr = oldArr[inex];
      // newArr.push(updatedTodo);
      // newArr = newArr.concat([...oldArr.slice(index , this.todo.length)]);
      this.todo = oldArr;
    }
  }

  getAll(){
    return this.todo;
  }
  get(indexOfTodo){
    if(indexOfTodo < this.todo.length) {
      return this.todo[indexOfTodo]
    } else {
      return null;
    }
  }

  clear(){
    this.todo = [];
  }
}

let todoList = new Todo();
// todoList.add('Task 1');
// 		todoList.add('Task 2');
// 		todoList.add('Task 3');
//     todoList.add('Task 4');
// 		todoList.add('Task 5');
// 		todoList.add('Task 6');
// console.log(todoList.getAll());
// console.log(todoList.get(4));
// todoList.update(3,'task30');
// console.log(todoList.getAll());
// todoList.remove(3);
// console.log(todoList.getAll());
todoList.add('Task 1');
		todoList.add('Task 2');
		todoList.add('Task 3');

		todoList.update(1, 'Updated Task 2');
    console.log(todoList.get(1));
    console.log(todoList.getAll());
    todoList.update(3, 'Invalid Task');
    console.log(todoList.getAll());
module.exports = Todo;
