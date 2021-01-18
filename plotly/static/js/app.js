// populate dropdown
var dropdown = d3.select("#selDataset");

d3.json("data/samples.json").then((samplesData) => {
    samplesData.names.forEach((sample) => {
        dropdown.append("option").text(sample).property("value", sample);
    });
    var sampleID = dropdown.property("value");
    console.log(sampleID);
    console.log(samplesData);
    createBarChart(sampleID);
    createBubbleChart(sampleID);
    //displayMetadata(samplesData);
});

function optionChanged(sampleID) {
    // get data based on the sampleID
    console.log(sampleID);
    createBarChart(sampleID);
    createBubbleChart(sampleID);
}

function createBarChart(selectedID) {
    console.log(selectedID.toString());

    d3.json("data/samples.json").then((data) => {
        data.samples.forEach((sample) => {
            if (sample.id == selectedID.toString()) {
                selectedData = sample;
                // initialize webpage with data from first sampleID
                var initSample = selectedData.id;
                var initData = selectedData;
                console.log(initData);

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

            }
        
        })
    })

};

function createBubbleChart(selectedID) {
    d3.json("data/samples.json").then((data) => {
        data.samples.forEach((sample) => {
            if (sample.id == selectedID.toString()) {
                selectedData = sample;
                var initSample = selectedData.id;
                var initData = selectedData;
                var otuIDstr = initData.otu_ids.map(String);
                console.log(otuIDstr);
            
                var data1 = [{
                    x: initData.otu_ids,
                    y: initData.sample_values,
                    text: initData.otu_labels,
                    mode: "markers",
                    marker: {
                        color: otuIDstr,
                        size: initData.sample_values
                    }
                }];
            
                var layout1 = {
                    xaxis: { title: "OTU ID"},
                    showlegend: false
                };
            
                Plotly.newPlot("bubble", data1, layout1);
            
            }
        })
    })

};

function displayMetadata(selectedData) {
    var sampleIndex = 0;
    // display metadata
    // get reference to panel body
    var dataPanel = d3.select("#sample-metadata");
    // clear data
    dataPanel.html("");
    console.log(selectedData.metadata[sampleIndex]);
    var metadata = selectedData.metadata[sampleIndex];

    Object.entries(metadata).forEach(([key, value]) => {
        //var panelBody = dataPanel.append("div").attr("class","panel-body").text(`${key}: ${value}`);
        var panelBody = dataPanel.append("p").text(`${key}: ${value}`);
        console.log(`${key}: ${value}`);
    });
}