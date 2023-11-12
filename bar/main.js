let myGraph2=document.getElementById('myGraph2');
let trace2 ={};
trace2.type ="bar";
trace2.x =[];
trace2.y =[];
for(let i=0;i<animals.length;i++){
    trace2.x[i] =animals[i]['name'];
    trace2.y[i] =animals[i]['count'];
}
let data =[];
data.push(trace2);
let layout ={
    margin:{
    t:0
    }
};
Plotly.newPlot(myGraph2, data, layout);