using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using ProductDataAccess;

namespace ProductServices.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class ProductsController : ApiController
    {
        //GET https://localhost:44317/api/products
        public IEnumerable<Model> Get()
        {
            using (ProductDetailEntities entities = new ProductDetailEntities())
            {
                return entities.Models.ToList();
            }
        }
    }
}
 