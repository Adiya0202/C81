canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
ctx.beginPath();
ctx.strokeStyle="black";
ctx.lineWidth=1;
ctx.rect(250,143,430,200);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="blue";
ctx.lineWidth=1;
ctx.arc(350,200,40,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="black";
ctx.lineWidth=1;
ctx.arc(450,200,40,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="red";
ctx.lineWidth=1;
ctx.arc(550,200,40,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="#FDD835";
ctx.lineWidth=1;
ctx.arc(400,250,40,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="#76FF03";
ctx.lineWidth=1;
ctx.arc(500,250,40,0,2*Math.PI);
ctx.stroke();