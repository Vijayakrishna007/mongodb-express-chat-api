const express=require("express");
const app=express();
const mongoose=require("mongoose");
const path=require("path");
const chat=require("./models/chat.js");
const methodOverride=require("method-override");

app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"));
main()
.then(()=>{
    console.log("conection established")
})
.catch(err => console.log(err));

async function main() { //copy from mongoose website
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

//index route 
app.get("/chats",async(req,res)=>{
    let chats=await chat.find();
    //console.log(chats);
    res.render("index.ejs",{chats});
});
//new route
app.get("/chats/new",(req,res)=>{
    res.render("new.ejs")
 });

//create route
app.post("/chats",(req,res)=>{
   let {from,to,msg}=req.body;
   let newchat= new chat({
        from:from,
        msg:msg,
        to:to,
        created_at:new Date()
   });
   newchat.save()
   .then(res=>{
    console.log("chat saves");
   })
   .catch(err=>{
    console.log(err);   
   })
   res.redirect("/chats");
});
 
 //edit route
 app.get("/chats/:id/edit",async (req,res)=>{
     let{id}=req.params;
     let Chat=await chat.findById(id);
     res.render("edit.ejs",{Chat});
 })
   
//update route
app.put("/chats/:id",async (req,res)=>{
    let{id}=req.params;
    let{msg: newmess}=req.body;
    let upchat=await chat.findByIdAndUpdate(
        id,
        {msg:newmess},
        {runValidators:true,new:true}
        );
    //console.log(upchat);
    res.redirect("/chats");
});

//destroy route 
app.delete("/chats/:id",async(req,res)=>{
    let{id}=req.params;
    await chat.findByIdAndDelete(id);
    res.redirect("/chats");
});

// let chat1=new chat({
//     from:"Jack Sparrow",
//     to:"Davey Jones",
//     msg:"hi",
//     created_at:new Date()
// });
// chat1.save().then((res)=>{
//     console.log(res);
// });


app.listen(8080,()=>{
    console.log("listening at port 8080");
});

app.get("/",(req,res)=>{
    res.send("working");

});