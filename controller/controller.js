const service = require("../service/service");
const cookieConfig = {
    httpOnly : true,
    maxAge : 5000
}

const index = (req,res)=> {
    res.render("index");
}

const popup = (req,res) => {
    res.render("popup");
}

const login = (req,res) => {
    res.render("login");
}

const check = (req,res) => {
    const result = service.listcheck(req.param("ID"),req.param("NAME"));
    if(result == 1) {
        res.cookie("MyCookie","value",cookieConfig);
    }
    
    res.redirect("/login");
}

const mlist = (req,res)=>{
    const memberlist = service.member();
    res.render("list",{memberlist});
}

module.exports = {index, popup, login, check, mlist};