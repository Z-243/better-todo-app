export function Header(props) {
  const { todos } = props; // destcstruct todo(in TodoList <Todocard/>) from props
  const openTasksCount = todos.filter((todo) => !todo.complete).length;
  // check is no. of Tasks is 1 or more
  const isTasksPlural = openTasksCount != 1;
  const taskOrTasks = isTasksPlural ? "tasks" : "task";

  return (
    <header>
      <h1 className="text-gradient">
        You have {openTasksCount} open {taskOrTasks}.
      </h1>
    </header>
  );
}
