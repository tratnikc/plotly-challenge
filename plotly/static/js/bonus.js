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

}
