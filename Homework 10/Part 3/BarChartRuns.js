{
  "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
  "width": 500,
  "height": 500,
  "title": "IPL Teams Home & Away Win Rate",
  "data": {
      "url": "https://raw.githubusercontent.com/akshithP/FIT3179/main/Homework 10/Part 3/TopTenRuns.csv"
  },
  "selection": {
      "batsman_highlight": {
          "type": "multi",
          "fields": ["Batsman"]
      }
  },
  "mark": "bar",
  "encoding": {
      "x": {
          "field": "Batsman", 
          "type": "nominal"
        },
      "y": {
          "field": "Total Runs", 
          "type": "quantitative",
          "axis": {"tickCount": 10},
          "scale": {"domain": [1, 5500]}
      },
      "color": {
          "value": "#e34a33"
      },
      "opacity": {
          "condition": {"selection": "batsman_highlight", "value": 1},
          "value": 0.2
      },
      "tooltip": [
          {"field": "Batsman", "type": "nominal"},
          {"field": "Total Runs", "type": "quantitative"}
      ]
  }

}