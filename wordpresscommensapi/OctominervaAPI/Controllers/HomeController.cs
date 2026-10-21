using OctominervaAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using WordPressSharp;
using WordPressSharp.Models;

namespace OctominervaAPI.Controllers
{
    public class HomeController : Controller
    {
        //
        // GET: /Home/
        public ActionResult Index()
        {
            return Json("hola",JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public ActionResult Add(int postId, int parentId,string content, Author author)
        {
            Comment_Put comment = new Comment_Put()
            {
                Author=author.name,
                AuthorEmail= author.email,
                AuthorUrl=author.url,
                CommentParent= parentId,
                Content=content
            };
            try
            {
                int commentId;
                using (var client = new WordPressClient(new WordPressSiteConfig
                {
                    BaseUrl = "http://octominervablog2.gear.host",
                    Username = "REPLACE_WITH_YOUR_VALUE",
                    Password = "REPLACE_WITH_YOUR_VALUE",
                    BlogId = 1
                }))
                {
                    commentId = client.NewComment(postId, comment);
                }

                return Json(commentId);
            }
            catch (Exception ex)
            {
                return Json(ex.Message);
            }

        }

        [HttpOptions]
        public ActionResult Add()
        {
            return Json("");
        }
    }
}
