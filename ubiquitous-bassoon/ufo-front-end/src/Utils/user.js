//how we create a token
const login = async (username, useremail, userpassword) => {
  const response = await fetch("http://localhost:5000/user/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: username,
      email: useremail,
      password: userpassword,
    }),
  });
  const data = response.json();
  localStorage.setItem("MyToken", data.user.token);
};

//how we delete a token
const logout = async () => {
  const response = await fetch("http://localhost:5000/user/logout", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("MyToken")}`,
    }
    // body: JSON.stringify({
    //   password: inputpassword,
    // }),
  });
  const data = response.json();
  if (data.message === "token deleted") localStorage.remove("MyToken");
};

//how we check token
const getUser = async () => {
  const response = await fetch("http://localhost:5000/user", {
    method: "GET",
    headers: { Authorization: `Bearer ${localStorage.getItem("MyToken")}` },
  });
  const data = response.json();
  // data.user;
};


export {login, logout, getUser} 

