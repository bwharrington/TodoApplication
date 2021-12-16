namespace TodoApplicationApi.Repository
{
    public class TaskRepository
    {
        private List<ITodo> todos = new List<ITodo>();

        public TaskRepository()
        {
            Todo todo = new(Guid.NewGuid().ToString(), "Task 1", true, true );
            todos.Add(todo);

            todo = new(Guid.NewGuid().ToString(), "Task 2", true, true);
            todos.Add(todo);

            todo = new(Guid.NewGuid().ToString(), "Task 3", true, true);
            todos.Add(todo);

            todo = new(Guid.NewGuid().ToString(), "Task 4", true, true);
            todos.Add(todo);
        }

        public List<ITodo> GetTasks()
        {
            return todos;
        }

        public int deleteTodo(string id)
        {
            if(string.IsNullOrEmpty(id))
            {
                throw new ArgumentNullException("id");
            }

            try
            {
                return todos.RemoveAll(s => s.Id == id);
            }
            catch(Exception ex)
            {
                return -1;
            }
        }

        public void addTodo(ITodo todo)
        {
            string id = Guid.NewGuid().ToString();
            todo.Id = id;
            todos.Add(todo);
        }

    }
}
