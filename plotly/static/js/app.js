// populate dropdown
var dropdown = d3.select("#selDataset");

d3.json("samples.json").then((samplesData) => {
    samplesData.names.forEach((sample) => {
        dropdown.append("option").text(sample).property("value", sample);

    });

    // initialize webpage with data from first sampleID
    var initSample = samplesData.names[0];
    var initData = samplesData.samples[0];
    var values = initData.sample_values;
    var ids = initData.otu_ids;
    var labels = initData.otu_labels;

    console.log(values);

    // get sample_values first 10
    var sampleValues = initData.sample_values.slice(0,10);
    var revValues = sampleValues.reverse();
    var otu_ids = initData.otu_ids.slice(0,10);
    var revIDs = otu_ids.reverse();
    var strRevIDs = revIDs.map(row => "OTU " + row.toString());
    var otu_labels = initData.otu_labels.slice(0,10);
    var revLabels = otu_labels.reverse();

    console.log(revValues);
    console.log(revIDs);
    console.log(strRevIDs);
    console.log(otu_labels);
    console.log(initSample);

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