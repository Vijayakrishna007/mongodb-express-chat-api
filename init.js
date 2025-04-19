const mongoose=require("mongoose");
const chat=require("./models/chat.js")
main()
.then(()=>{
    console.log("conection established")
})
.catch(err => console.log(err));
async function main() { //copy from mongoose website
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}let allchats=[{
    from:"banner",
    to:"tony",
    msg:"pass berries",
    created_at:new Date()
    },
    {
      from:"thor",
      to:"odin",
      msg:"give me my power",
      created_at:new Date()
    },
    {
      from:"cap",
      to:"hulk",
      msg:"smash",
      created_at:new Date()
    },
    {
      from:"Jack Sparrow",
      to:"Davey Jones",
      msg:"Oi! Fishface! Lose something?",
      created_at:new Date()
    },
    {
      from:"tony",
      to:"thor",
      msg:"point break",
      created_at:new Date()
    },
];
chat.insertMany(allchats)
.then (()=>mongoose.connection.close())
.catch(err =>{console.log(err)});