let myGraph1=document.getElementById('myGraph1');
let trace1 ={};
trace1.mode ="line";
trace1.type ="scatter";
trace1.visible =false;
trace1.x =[];
trace1.y =[];
for(let i=0;i<set1.length;i++){
    trace1.x[i] =set1[i][0];
    trace1.y[i] =set1[i][1];
}
let trace2 ={};
trace2.type ="bar";
trace2.visible =true;
trace2.x =[];
trace2.y =[];
for(let i=0;i<set2.length;i++){
    trace2.x[i] =set2[i]['name'];
    trace2.y[i] =set2[i]['count'];
}
let trace3 ={};
trace3.type ="pie";
trace3.labels =[];
trace3.values =[];
trace3.visible = false;
for(let x=0; x<set3.length; x++){
    trace3.labels[x] =set3[x]['name'];
    trace3.values[x] =set3[x]['count'];
}

let data =[];
data.push(trace1);
data.push(trace2);
data.push(trace3);
let layout = {
    margin: {
        t: 50
    }, 
    xaxis:{
        range:[0,6]
    },
    yaxis:{
        range:[0,25]
    },
    title:'Scatter & Line,bar chart,pie chart',
    updatemenus:[
        {
            y:1.2,
            x:0.2,
            yanchor:'top',
            buttons:[
                {
                    method:'restyle',
                    args:['visible',[false, true, false]],
                    label:'兒少出生死亡統計資料'
                },
                {
                    method: 'restyle',
                    args: ['visible', [true, false, false]],
                    label: '桃園市桃園區各月份出生人口統計'
                },
                {
                    method: 'restyle',
                    args: ['visible', [false, false, true]],
                    label: '111年高雄市外籍配偶性別統計'
                },
                
            ]
        }
    ]
};




Plotly.newPlot(myGraph1, data, layout);


