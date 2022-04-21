const express = require("express");
const cors = require("cors");
const { query } = require("express");
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
// app.use(express.json());
app.use(express.json() )
app.get("/", (req, res) => {
  res.send(" sob kichu tik tak ja tor sata ami kotha bolbo na");
});

const users = [
  {
    id: 1,
    name: "Depika Paducon",
    email: "depika@gmail.com",
    phone: "0178888958",
  },
  {
    id: 2,
    name: "sabnor Paducon",
    email: "depika@gmail.com",
    phone: "0178888958",
  },
  {
    id: 3,
    name: "kokila Paducon",
    email: "depika@gmail.com",
    phone: "0178888958",
  },
  {
    id: 4,
    name: "shila Paducon",
    email: "depika@gmail.com",
    phone: "0178888958",
  },
  {
    id: 5,
    name: "Depika Paducon",
    email: "depika@gmail.com",
    phone: "0178888958",
  },
  {
    id: 6,
    name: "Depika Paducon",
    email: "depika@gmail.com",
    phone: "0178888958",
  },
  {
    id: 7,
    name: "Depika Paducon",
    email: "depika@gmail.com",
    phone: "0178888958",
  },
  {
    id: 8,
    name: "Depika Paducon",
    email: "depika@gmail.com",
    phone: "0178888958",
  },
  {
    id: 9,
    name: "Depika Paducon",
    email: "depika@gmail.com",
    phone: "0178888958",
  },
  {
    id: 10,
    name: "Depika Paducon",
    email: "depika@gmail.com",
    phone: "0178888958",
  },
  {
    id: 11,
    name: "Depika Paducon",
    email: "depika@gmail.com",
    phone: "0178888958",
  },
];
app.get("/users", (req, res) => {
  if(req.query.name){
    const search=req.query.name.toLowerCase();
    const matched=users.filter(user=>user.name.toLowerCase().includes(search));
    res.send(matched);
  }
  else{
    res.send(users);
  }
});
app.get("/user/:id", (req, res) => {
  console.log(req.params);
  const id = parseInt(req.params.id);
  const user = users.find((u) => u.id === id);
  res.send(user);
});

app.post('/user',(req,res) =>{
  const user=req.body;
  user.id= users.length + 1;
  users.push(user)
  res.send(user)
})


app.get("/fruits", (req, res) => {
  res.send(["apple", "orange", "mango"]);
});

app.get("/fruits/mango/fazle", (req, res) => {
  res.send("sour sound fazle falvor");
});

app.listen(port, () => {
  console.log("Listening to port", port);
});
