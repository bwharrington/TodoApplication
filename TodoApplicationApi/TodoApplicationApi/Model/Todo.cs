namespace TodoApplicationApi
{
    public class Todo : ITodo
    {
        private string _id;
        private string _name;
        private bool _isComplete;
        private bool _isActive;

        public Todo(string id, string name, bool isComplete, bool isActive)
        {
            _id = id;
            Name = name;
            _isComplete = isComplete;
            _isActive = isActive;
        }

        public string Id { get => _id; set => _id = value; }
        public string Name { get => _name; set => _name = value; }
        public bool IsComplete { get => _isComplete; set => _isComplete = value; }
        public bool IsActive { get => _isActive; set => _isActive = value; }

    }
}