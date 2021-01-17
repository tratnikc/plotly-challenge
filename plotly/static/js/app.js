// populate dropdown
var dropdown = d3.select("#selDataset");

d3.json("../data/samples.json").then((samplesData) => {
    samplesData.names.forEach((sample) => {
        dropdown.append("option").text(sample).property("value", sample);

    })
    console.log(samplesData);
    console.log(samplesData.metadata);
    console.log(samplesData.names);
    console.log(samplesData.samples[0].id);

});

