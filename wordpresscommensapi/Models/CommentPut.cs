using System;
using CookComputing.XmlRpc;

namespace WordPressSharp.Models
{
    [XmlRpcMissingMapping(MappingAction.Ignore)]
    public class Comment_Put
    {
        [XmlRpcMember("comment_parent")]
        public int CommentParent { get; set; }

        [XmlRpcMember("content")]
        public string Content { get; set; }

        [XmlRpcMember("author")]
        public string Author { get; set; }

        [XmlRpcMember("author_url")]
        public string AuthorUrl { get; set; }

        [XmlRpcMember("author_email")]
        public string AuthorEmail { get; set; }
    }
}
