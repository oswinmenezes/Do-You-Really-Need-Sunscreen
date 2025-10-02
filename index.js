import express from "express"
import axios from "axios"
import bodyParser from "body-parser"
import env from "dotenv"

env.config();
const port=process.env.PORT ||3000;
const app=express();
app.use(bodyParser.urlencoded({extended:true}));
const api_Key=process.env.API_KEY;
app.use(express.static("public"));


app.get("/",(req,res)=>{
    res.render("index.ejs");
})

app.post("/result",async(req,res)=>{
    try{
        const responce=await axios.get("https://api.api-ninjas.com/v1/geocoding",{params:{city:req.body.usercity},headers:{"X-Api-Key":process.env.API_KEY_CITY}});

        const lattitude=responce.data[0].latitude;
        const longitude=responce.data[0].longitude;
        const result=await axios.get("https://api.openuv.io/api/v1/uv",{params:{lat:lattitude,lng:longitude},headers: { "x-access-token": api_Key }});

        
        const uv=result.data.result.uv;
        const peak_uv=result.data.result.uv_max;
        if(uv>=5){
            var verdict="WEAR SUN-SCREEN";
        }
        else{
            var verdict="SUN-SCREEN NOT REQUIRED";
        }
        res.render("result.ejs",{verdict:verdict,current_uv:uv,highest_uv_today:peak_uv});
    }
    catch(error){
        res.status(404).send("Location Not Found");
    }
    
});
app.listen(port,()=>{
    console.log(`server is running at port ${port}`);
});