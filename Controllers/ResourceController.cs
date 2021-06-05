using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;
using TestTaskBrokereeSolutions.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace TestTaskBrokereeSolutions.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ResourceController : ControllerBase
    {
        private ResourceDataContext dataContext = new ResourceDataContext();
        
        // GET: api/<ResourceController>
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Resource>>> GetAll()
        {
            var result = await Task.Run(() => dataContext.GetResources());
            return new JsonResult(result);
        }

        // GET api/<ResourceController>/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Resource>> GetResourceDetail(int id)
        {
            var result = await Task.Run(() => dataContext.GetResourceFromId(id));
            if (result is null)
            {
                return NotFound();
            }

            return new JsonResult(result);
        }

        // POST api/<ResourceController>
        [HttpPost]
        public async Task<ActionResult<Resource>> Post(Resource resource)
        {
            await Task.Run(() => dataContext.SaveResource(resource));
            return CreatedAtAction("GetResourceDetail", new { id = resource.Id }, resource);
        }

        // PUT api/<ResourceController>/5
        [HttpPut("{id}")]
        public async Task<ActionResult> Put(int id, Resource value)
        {
            var resource = await Task.Run(() => dataContext.GetResourceFromId(id));
            if (resource is null)
            {
                return NotFound();
            }

            dataContext.UpdateResource(value);
            return NoContent();

        }

        // DELETE api/<ResourceController>/5
        [HttpDelete("{id}")]
        public async Task<ActionResult> Delete(int id)
        {
            var result = await Task.Run(() => dataContext.GetResourceFromId(id));
            if (result is null)
            {
                return BadRequest();
            }

            dataContext.DeleteResource(id);
            return NoContent();
        }
    }
}
