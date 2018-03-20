window.setTimeout(function () {
  var todos = [];
  var input = prompt("What would you like to do?");

  while (input !== "quit") {
    if (input === "list") {
      listtodos();
    } else if (input === "new") {
      addTodo();
    } else if (input === "delete") {
      deleteTodo();
    }

    input = prompt("What would you like to do?");
  }
  console.log("App Closed");
}, 500);

function listTodos() {
  console.log("********");
  todos.forEach(function (todo, i) {
    console.log(i + ": " + todo);
  })
  console.log("********");
}

function addTodo() {
  todos.push(prompt("New Todo: "));
  console.log("Added Todo");
}

function deleteTodo() {
  var index = prompt("Enter index of item to be deleted?")
  todos.splice(index, 1);
  console.log("Deleted Todo");
}