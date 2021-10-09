const posts = [
    { name: "Post 1", author: "Yazar 1" },
    { name: "Post 2", author: "Yazar 2" },
    { name: "Post 3", author: "Yazar 3" },
    { name: "Post 4", author: "Yazar 4" },
  ];
  
  const listPosts = () => {
    posts.map((post) => {
      console.log(post.name);
    });
  };
 
  const addPost = (newPost) => {
    const promise1 = new Promise((resolve, reject) => {
      posts.push(newPost);
      resolve(posts);
    });
    return promise1;
  };
  listPosts();
  async function showPosts() {
    try {
      console.log("Eklendikten sonra listelendi.")
      await addPost({ name: "Post 5", author: "Yazar 5" });
      console.log()
      listPosts();
    } catch (error) {
      console.log(error);
    }
  }
  showPosts();
 