function gaugeThis(wfreq) {
    var data = [
        {
          domain: { x: [0, 1], y: [0, 1] },
          value: wfreq,
          title: { text: "<b>Belly Button Washing Frequency</b> <br> Scrubs Per Week" },
          type: "indicator",
          mode: "gauge+number+delta",
          delta: { reference: 4 },
          gauge: {
            axis: { range: [null, 9] },
            bar: { color: "#6699ff"},
            steps: [
              { range: [0, 1], color: "#ffffcc" },
              { range: [1, 2], color: "#ccffcc" },
              { range: [2, 3], color: "#ccff66" },
              { range: [3, 4], color: "#bbff33" },
              { range: [4, 5], color: "#ccff99" },
              { range: [5, 6], color: "#99ff99" },
              { range: [6, 7], color: "#33cc33" },
              { range: [7, 8], color: "#009933" },
              { range: [8, 9], color: "#006622" }
            ],
            text: "sample",
            threshold: {
              line: { color: "red", width: 4 },
              thickness: 0.75,
              value: 8
            }
          }
        }
      ];
      var gauge = d3.select("#gauge");
      var layout = { width: 600, height: 450, margin: { t: 0, b: 0 } };
      Plotly.newPlot('gauge', data, layout);

};

function pieGauge(wfreq) {

    var level = wfreq;

    // Trig to calc meter point
    var degrees = Math.min(190 - level*20, 180),
        radius = .5;
    var radians = degrees * (Math.PI / 180);
    var x = radius * Math.cos(radians);
    var y = radius * Math.sin(radians);
  
    // Path: may have to change to create a better triangle
    var mainPath = 'M -.0 -0.025 L .0 0.025 L ',
        pathX = String(x),
        space = ' ',
        pathY = String(y),
        pathEnd = ' Z';
    var path = mainPath.concat(pathX,space,pathY,pathEnd);

    console.log(path);
  
    var data = [{ type: 'scatter',
        x: [0], y:[0],
        marker: {size: 18, color:'850000'},
        showlegend: false,
        name: 'BellyButtonDiversity ',
        text: level,
        hoverinfo: 'text+name'},
      { values: [180/9,180/9,180/9,180/9, 180/9, 180/9, 180/9, 180/9, 180/9, 180],
      rotation: 90,
      text: ['8-9','7-8','6-7', '5-6', '4-5', '3-4',
                '2-3', '1-2', '0-1',''],
      textinfo: 'text',
      textposition:'inside',
      marker: {colors:["#006622", "#009933",
                      "#33cc33", "#99ff99",
                      "#ccff99", "#bbff33",
                      "#ccff66","#ccffcc",
                      "#ffffcc",'rgba(0, 0, 0, 0)']},
      hole: .5,
      type: 'pie',
      showlegend: false
    }];
  
    var layout = {
      shapes:[{
          type: 'line',
          x0: 0,
          y0: 0,
          x1: x,
          y1: y,
          fillcolor: '850000',
          line: {
            color: '850000'
          }
        }],
      title: '<b>Belly Button Washing Frequency</b> <br> Scrubs per week.',
      height: 500,
      width: 500,
      xaxis: {zeroline:false, showticklabels:false,
                showgrid: false, range: [-1, 1]},
      yaxis: {zeroline:false, showticklabels:false,
                showgrid: false, range: [-1, 1]}
    };
  
    Plotly.newPlot('gauge', data, layout);
};
