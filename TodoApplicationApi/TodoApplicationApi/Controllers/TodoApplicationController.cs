using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace TodoApplicationApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    [EnableCors("MyPolicy")]
    public class TodoApplicationController : ControllerBase
    {
        private readonly ILogger<TodoApplicationController> _logger;

        public TodoApplicationController(ILogger<TodoApplicationController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        [Route("GetTodoList")]
        public ActionResult<List<Todo>> GetTodoList()
        {
            _logger.LogInformation("");
            _logger.LogInformation("");
            TodoApplicationImpl todoImpl = new TodoApplicationImpl();

            List<Todo> todoList = null;
            try
            {
                //todoList = todoImpl.doSomething(credits);
            } catch(Exception ex)
            {
                _logger.LogError("Error in GetTodoList");
                _logger.LogError(ex.Message);
                _logger.LogError(ex.StackTrace);
                return StatusCode(StatusCodes.Status500InternalServerError);
            }
            
            return Ok(todoList);
        }

    }
}