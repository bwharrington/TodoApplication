using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using TodoApplicationApi.Repository;

namespace TodoApplicationApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    [EnableCors("MyPolicy")]
    public class TodoApplicationController : ControllerBase
    {
        private readonly ILogger<TodoApplicationController> _logger;
        private static TaskRepository taskRepository = new();

        public TodoApplicationController(ILogger<TodoApplicationController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        [Route("GetTodoList")]
        public ActionResult GetTodoList()
        {
            try
            {
                return Ok(taskRepository.GetTasks());
            } 
            catch(Exception ex)
            {
                _logger.LogError("Error in GetTodoList");
                _logger.LogError(ex.Message);
                _logger.LogError(ex.StackTrace);
                return StatusCode(StatusCodes.Status500InternalServerError);
            }
            
        }

        [HttpPost]
        public ActionResult Post(Todo task)
        {
            try
            {
                taskRepository.addTodo(task);
                return StatusCode(StatusCodes.Status200OK);
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "Error : " + ex.Message);
            }
        }

        [HttpPut("{id}")]
        public ActionResult Put(int id, ITodo task)
        {
            try
            {
                if (task == null)
                {
                    return BadRequest("Query ID doesn't matches the object property");
                }

                // Save Task work here.

                return Ok(task);
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError,"Error : " + ex.Message);
            }
        }

        [HttpDelete("{id}")]
        public ActionResult Delete(string id)
        {
            try
            {
                var removedCount = taskRepository.deleteTodo(id);
                if(removedCount > 0)
                {
                    return Ok($"Successfully deleted : {id}");
                } 
                else if (removedCount == 0)
                {
                    return NotFound($"couldn't find todo {id}");
                } 
                else
                {
                    StatusCode(StatusCodes.Status500InternalServerError, "Error something meaning full.");
                }
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "Error : " + ex.Message);
            }

            return NotFound($"couldn't find todo {id}");
        }
    }
}