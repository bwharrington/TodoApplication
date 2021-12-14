using Microsoft.Extensions.Logging;
using TodoApplicationApi.Controllers;
using Xunit;
using Moq;
using Microsoft.AspNetCore.Mvc;
using TodoApplicationApi;
using System.Collections.Generic;

namespace TodoApplicationApiTests
{
    public class TodoApplicationApiTests
    {
        private ILogger<TodoApplicationController> _logger;
        TodoApplicationController todoApplicationController;

        public TodoApplicationApiTests()
        {
            var mock = new Mock<ILogger<TodoApplicationController>>();
            _logger = mock.Object;

            todoApplicationController = new(_logger);
        }


        [Fact]
        public void TodoApiTests_does_something_results()
        {
            //var results = GetResultFromSlotMachineRoll(10);
            //Assert.Equal(3, results.Count);
        }

        [Fact]
        public void TodoApplicationApiTests_returns_200()
        {
            var items = todoApplicationController.GetTodoList();
            var results = (ObjectResult)items.Result;
            Assert.Equal(200, results.StatusCode);
        }
    }
}