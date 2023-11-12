let myGraph3=document.getElementById('myGraph3');
let trace3 ={};
trace3.type ="pie";
trace3.labels =[];
trace3.values =[];
for(let x=0; x<evaluation_ratio.length; x++){
    trace3.labels[x] =evaluation_ratio[x]['name'];
    trace3.values[x] =evaluation_ratio[x]['count'];
}
let data =[];
data.push(trace3);
let layout ={
    margin:{
        t:10,
        l:0,
    }
};
Plotly.newPlot(myGraph3, data, layout);
