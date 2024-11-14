var http = require("http");
// console.log(http);
var server = http.createServer((req,res)=>{
    console.log(req.method,res.statusCode);
    res.write("Name: Abhiram \n");
    res.write("Degree: B.Tech(EEE) \n");
    res.write("college: Malla reddy college of engineering and technology \n");
    res.write("cgpa: 8.78 \n");
    res.write("Intermediate: MPC \n");
    res.write("college: Narayana junior college \n");
    res.write("marks or percentage: 972 or 97.2% \n");
    res.write("SSC \n");
    res.write("School: St. Ann's high school \n");
    res.write("gpa: 9");
    res.end();
})
var port = 3000;
server.listen(port,()=>{
    console.log("server has started "+"http://localhost:"+port);
})
