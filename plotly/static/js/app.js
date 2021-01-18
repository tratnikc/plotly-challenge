// populate dropdown
var dropdown = d3.select("#selDataset");

d3.json("../data/samples.json").then((samplesData) => {
    samplesData.names.forEach((sample) => {
        dropdown.append("option").text(sample).property("value", sample);

    });

    // initialize webpage with data from first sampleID
    var initSample = samplesData.names[0];
    // horizontal bar chart
    // var trace0 = {
        

    // }
    console.log(initSample);
    console.log(samplesData);
    console.log(samplesData.metadata);
    console.log(samplesData.names);
    console.log(samplesData.samples);

});

function optionChanged(sampleID) {
    // get data based on the sampleID
    console.log(sampleID);
}