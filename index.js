
const { log } = require("console");
const http=require("http");

const fs=require("fs");

const PORT=30500;
const hostname="localhost";

const home=fs.readFileSync("./index.html","utf-8");

// console.log(__dirname);

const server=http.createServer((request,response)=>
{
   if(request.url === "/")
   {
  return   response.end(home);
    // response.end("<h1>HOME PAGE</h1>");
   }

  else if(request.url === "/about")
   {
 return  response.end("<h1>ABOUT PAGE</h1>");
   }

  else if(request.url === "/service")
   {
   return  response.end("<h1>Service Page</h1>");
   }

  else if(request.url === "/contact")
   {
    return response.end("<h1>CONTACT PAGE</h1>");
   }

  else if(request.url === "/cart")
   {
  return  response.end("<h1>CART PAGE</h1>");
   }
   else
   {
   return  response.end("<h1>404 Server Not Found</h1>");
   }
});


server.listen(PORT,hostname,()=>
{
    console.log(`Server Is Working On http://${hostname}:${PORT})`);
});


