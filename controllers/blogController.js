const Blog = require('../model/blog');


const blog_index = (req, res) => {
     Blog.find()
    .then((result)=>{
        res.render('blogs/index', {title: 'All Blogs', blogs:result})

    })
    .catch((err)=>{
        console.log(err)
    })
}

const blog_details = (req, res) =>{ 
     const id = req.params.id
    Blog.findById(id)
        .then((result) => {
            res.render('blogs/details', {blog: result, title: 'Blog details'} )
        
        })
        .catch((err)=> {
            res.status(404).render('404', {title: 'Blog not found'})
        })

}

const blogs_create_get =(req, res) =>{
    res.render('blogs/create', {title: 'create a new blog'})
}

const blogs_create_post = (req, res) => {
    const blog = new Blog(req.body);
        blog.save()
            .then((result)=> {
                res.redirect('/blogs')
            })
            .catch((err)=>{
                console.log(err)
            })
}

const blogs_delete_post = (req, res) => {
        const id = req.params.id;

    Blog.findByIdAndDelete(id)
        .then((result) => {
            res.json({redirect:'/blogs'})
        })
        .catch((err)=>{
        console.log(err)
        })
}

module.exports = {
    blog_index,
    blog_details,
    blogs_create_get,
    blogs_create_post,
    blogs_delete_post
    
}