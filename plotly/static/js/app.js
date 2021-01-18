// populate dropdown
var dropdown = d3.select("#selDataset");

d3.json("samples.json").then((samplesData) => {
    samplesData.names.forEach((sample) => {
        dropdown.append("option").text(sample).property("value", sample);
    });

    // initialize webpage with data from first sampleID
    var initSample = samplesData.names[0];
    var initData = samplesData.samples[0];

    // get sample_values first 10
    var revValues = initData.sample_values.slice(0,10).reverse();
    var otuIDs = initData.otu_ids.slice(0,10).reverse();
    var strRevIDs = otuIDs.map(row => "OTU " + row.toString());
    var revLabels = initData.otu_labels.slice(0,10).reverse();

    // horizontal bar chart
    var data0 = [{
        x: revValues,
        y: strRevIDs,
        text: revLabels,
        name: initSample,
        type: "bar",
        orientation: "h"
    }];

    var layout0 = {
        barmode: "group"
    };

    Plotly.newPlot("bar", data0, layout0);
});

function optionChanged(sampleID) {
    // get data based on the sampleID
    console.log(sampleID);
}