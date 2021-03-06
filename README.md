# plotly-challenge
 
## Belly Button Biodiversity
https://tratnikc.github.io/BellyButtonBiodiversity/

### included

  1. [index.html](https://github.com/tratnikc/plotly-challenge/blob/main/plotly/index.html)
  2. [samples.json datafile](https://github.com/tratnikc/plotly-challenge/tree/main/plotly/data)
  3. [app.js in /js folder](https://github.com/tratnikc/plotly-challenge/blob/main/plotly/static/js/app.js)
  4. [bonus.js in /js folder](https://github.com/tratnikc/plotly-challenge/blob/main/plotly/static/js/bonus.js)
  5. [images](https://github.com/tratnikc/plotly-challenge/tree/main/plotly/images)

### Requirements
Build an interactive dashboard to explore the <a href="http://robdunnlab.com/projects/belly-button-biodiversity/" rel="nofollow noreferrer noopener" target="_blank">Belly Button Biodiversity dataset</a>, which catalogs the microbes that colonize human navels.
  1. Create a horizontal bar chart
  2. Create a bubble chart
  3. Display sample metadata on the webpage
  4. Deploy app to a free static page hosting service, such as GitHub Pages
  5. Submit the links to deployment and GitHub repository

<b>Bonus</b>
  * Adapt the Gauge Chart from 
<a href="https://plot.ly/javascript/gauge-charts/" rel="nofollow noreferrer noopener" target="_blank">https://plot.ly/javascript/gauge-charts/</a>
 to plot the weekly washing frequency of the individual.

### About the Data
Hulcr, J. et al.(2012) 
<em>A Jungle in There: Bacteria in Belly Buttons are Highly Diverse, but Predictable</em>
A Jungle in There: Bacteria in Belly Buttons are Highly Diverse, but Predictable
<em>A Jungle in There: Bacteria in Belly Buttons are Highly Diverse, but Predictable</em>
. Retrieved from: 
<a href="http://robdunnlab.com/projects/belly-button-biodiversity/results-and-data/" rel="nofollow noreferrer noopener" target="_blank">http://robdunnlab.com/projects/belly-button-biodiversity/results-and-data/</a>


### Images
#### Dashboard
<img src="https://github.com/tratnikc/plotly-challenge/blob/main/plotly/images/dashboard.png" width=600 height=600 />


### Note

#### Gauge Chart with needle
*Gauge Chart using new Gauge Chart combined with Line and Scatter Charts*
  * use code ```hybridGauge(metadata.wfreq);``` to display chart
<img src="https://github.com/tratnikc/plotly-challenge/blob/main/plotly/images/hybridGauge.png" width=400 />

#### Gauge Chart "older" code base
*Gauge Chart using a combination of Line, Pie, and Scatter charts*
  * use code ```pieGauge(metadata.wfreq);``` to display this chart
![Gauge Chart using a combination of Line, Pie, and Scatter charts](https://github.com/tratnikc/plotly-challenge/blob/main/plotly/images/oldcode.png)

*-tratnikc*