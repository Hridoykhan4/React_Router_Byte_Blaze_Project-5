import toast from "react-hot-toast";

export const getBlogs = () => {
  let blogs = localStorage.getItem("blogs");
  return blogs ? JSON.parse(blogs) : [];
};

export const saveBlog = blog => {
    const blogs = getBlogs();
    const isExist = blogs.find((b) => b.id === blog.id);
    if(isExist){
        return toast.error("Already BookMarked")
    }
    blogs.push(blog);
    localStorage.setItem('blogs', JSON.stringify(blogs));
    toast.success('Blog Successfully BookMarked');
}


export const deleteBlog = id => {
    let blogs = getBlogs();
    const remaining = blogs.filter((b) => b.id !== id);
    localStorage.setItem('blogs', JSON.stringify(remaining));
    toast.success('Blog Removed from BookMark!')
}