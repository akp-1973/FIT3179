{
  "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
  "width": 620,
  "height": 520,
  "title": "IPL All Time Batting Leaders (Most Runs)",
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
          "axis": {"tickCount": 11},
          "scale": {"domain": [1, 5500]}
      },
      "color": {
          "value": "#5e3c99"
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
