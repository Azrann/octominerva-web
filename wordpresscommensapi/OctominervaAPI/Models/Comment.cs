using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace OctominervaAPI.Models
{
    public class Comment
    {
        public int CommentParent { get; set; }

        public string Content { get; set; }

        public string Author { get; set; }

        public string AuthorUrl { get; set; }

        public string AuthorEmail { get; set; }
    }
}