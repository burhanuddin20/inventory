const db = require("../db/queries");


async function createUsernameGet(req, res) {
  // render the form
  console.log("usernames will be logged here - wip")
  // needs to display a html form to the user with one
  //  username input submitted to below 
  res.render("createUser", {
      title: "Create user",
    });
}


async function getUsernames(req, res) {
  const usernames = await db.getAllUsernames();
  console.log("Usernames: ", usernames);
  res.send("Usernames: " + usernames.map(user => user.username).join(", "));
}



async function createUsernamePost(req, res) {
  const { username } = req.body;
  await db.insertUsername(username);
  res.redirect("/");
}

module.exports = {
  getUsernames,
  createUsernameGet,
  createUsernamePost
};

