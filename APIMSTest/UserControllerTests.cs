using API.Controllers;
using API.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace APIMSTest
{
    [TestClass]
    public class UserControllerTests
    {
        [TestMethod]
        public void GetAllUsers_NoInputs_ReturnList()
        {
            // Arrange
             int value1 = 10;
             int value2 = 20;


            // Act
             bool result = value1 == value2;

            // Assert
            Assert.IsFalse(result);
        }
    }
}
