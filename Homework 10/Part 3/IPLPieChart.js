{
  "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
  "width": 500,
  "height": 600,
  "title": "IPL Circket Players Batting Hand Style",
  "data": {
      "url": "https://raw.githubusercontent.com/akshithP/FIT3179/main/Homework 10/Part 3/Batting_Hand_Data.csv"
  },
  "encoding": {
      "theta": {
          "field": "Total Batsmen", 
          "type": "quantitative"
          }
  },
  "layer": [
      {
          "selection": { 
      "batting_highlight": { "type": "multi", "fields": ["Batting Hand"], "bind": "legend" } 
},
  "mark":"arc",
  "encoding": {
      "color":{"field": "Batting Hand", "type": "nominal",
      "scale": {
          "domain": [
              "Right Hand",
              "Left Hand "
          ],
          "range": [
              "#66c2a5",
              "#fc8d62"
          ]
      }
    },
    "opacity": { 
        "condition": {"selection": "batting_highlight", "value": 1.0}, "value": 0.3
},
    "tooltip": [
        {"field": "Batting Hand", "type": "nominal"},
        {"field": "Total Batsmen", "type": "quantitative"}
    ]
  }
      }, 
      {"mark": {
          "type": "text",
          "radius": 90,
          "dy": -60,
          "fontSize": 17},
          "encoding": {
              "text": {"field": "Batting Hand", "type": "nominal"}
          }
      
      }
  ]
  

}