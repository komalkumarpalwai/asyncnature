const randomcolor=function()
{
    const value="0123456789ABCDEF"
    let color="#";
    for(i=0;i<6;i++)
    {
        color +=value[Math.floor(Math.random()*16)];
      
    }
    return color;

}

let start=document.getElementById("start")
let stop=document.getElementById("stop")
let intervelid;
start.addEventListener("click",function()
{

  let changebgcolor=function()
  {
    document.body.style.backgroundColor=randomcolor();
  }
 intervelid= setInterval(changebgcolor,1000);
})
stop.addEventListener("click",function()
{
    let stopChangingColor=function()
    {
      
    }
    clearInterval(intervelid)
    console.log("hi")
})