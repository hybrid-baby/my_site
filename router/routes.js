module.exports = app =>{
  //create new post
  app.post("/posts",posting.create);
  //retrieve all posts
  app.get("/posts",posting.findAll);
  //retrieve a single post
  app.get("/posts",posting.findOne);
  //update a single post
  app.put("/posts",posting.update);
  //delete post
  app.delete("/posts",posting.delete);
  //delete all posts
  app.delete("/posts",posting.deleteAll);
};
