const express = require("express")

const app = express()

app.get("/", (req,res)=>{
<<<<<<< HEAD
    res.send("Jenkins Pipeline Project is Running Successfully")
=======
    res.send("Jenkins Pipeline Project is Good Way Running")
>>>>>>> 746023e506937aa2a498675b5bfd8e673bcda0e0
})

app.listen(3000, ()=>{
    console.log("Server running on port 3000")
})
