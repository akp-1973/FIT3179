{
  "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
  "width": 500,
  "height": 400,
  "title": "COVID-19 Cases Per Country (13 Oct 2020)",
  "data": {
    "url": "https://raw.githubusercontent.com/KaneSec/vega_lite/main/4_interactive_scatter_plot/data/COVID_19_10_Oct_2020.csv"
  },
  "transform": [
    {"filter": "datum.Active > 0"},
    {"filter": "datum.Deaths > 0"}
  ],
  "mark":"circle",
  "encoding": {
    "x": {
      "field": "Confirmed",
      "type": "quantitative",
      "title": "Confirmed Cases",
      "axis": {"tickCount": 7},
      "scale": {"type": "log", "domain": [1, 10000000]}
    },
    "y":{
      "field": "Deaths",
      "type": "quantitative",
      "axis": {"tickCount": 6},
      "scale": {"type": "log", "domain": [1, 1000000]}
    },
    "color":{
      "field": "Continent",
      "type": "nominal"
      
    },
    "size": {
      "field": "Population",
      "type": "quantitative",
      "scale": {
        "type": "threshold",
        "domain": [1000000, 10000000, 50000000, 100000000, 500000000],
        "range": [10, 50, 150, 200, 300, 400]
      },
      "legend": {"format": ".1s"}
    }
  }
}