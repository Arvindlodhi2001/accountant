const Blog = require('../models/blog');
const path = require('path');
const fs = require('fs');

const addBlog = async (req, res) => {
    try {
        let blog = req.body;
        blog = {...blog, image: req.file.filename};
        console.log(blog);
        await Blog.create(blog);
        res.status(200).json("Blog Created");
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
}

const deleteBlog = async (req, res) => {
    try {
        const id = req.params.id;
        const blog = await Blog.findByIdAndDelete(id);
        const imgPath = path.join(__dirname, '..', 'uploads', blog.image);
        fs.unlink(imgPath, (err)=>{
            if(err)console.log(err);
            else console.log(imgPath, "deleted");
        })
        res.status(200).json(blog);
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
}
const getBlogs = async (req, res) => {
    try {
        const blog = await Blog.find({});
        res.status(200).json(blog);
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
}

module.exports = {
    addBlog,
    deleteBlog,
    getBlogs,
}