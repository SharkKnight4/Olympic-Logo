canvas= document.getElementById("myCanvas");
c=canvas.getContext("2d");
width=2;
c.beginPath();
c.strokeStyle="black";
c.lineWidth=width;
c.rect(150,150,500,200);
c.stroke();

c.beginPath();
c.strokeStyle="blue";
c.lineWidth=5;
c.arc(300,200,40,0,2*Math.PI);
c.stroke();

c.beginPath();
c.strokeStyle="black";
c.lineWidth=5;
c.arc(400,200,40,0,2*Math.PI);
c.stroke();

c.beginPath();
c.strokeStyle="red";
c.lineWidth=5;
c.arc(500,200,40,0,2*Math.PI);
c.stroke();

c.beginPath();
c.strokeStyle="yellow";
c.lineWidth=5;
c.arc(350,250,40,0,2*Math.PI);
c.stroke();

c.beginPath();
c.strokeStyle="green";
c.lineWidth=5;
c.arc(450,250,40,0,2*Math.PI);
c.stroke();