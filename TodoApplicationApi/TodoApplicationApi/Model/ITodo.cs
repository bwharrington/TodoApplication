namespace TodoApplicationApi
{
    public interface ITodo
    {
        string Id { get; set; }
        bool IsActive { get; set; }
        bool IsComplete { get; set; }
        string Name { get; set; }
    }
}