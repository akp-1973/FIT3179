{
  "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
  "title": "IPL Players Origin",
  "width": 800,
  "height": 600,
  "projection": {"type": "equirectangular"},
  "data": {
    "url": "https://raw.githubusercontent.com/akshithP/FIT3179/main/A2 Files/world.json",
    "format": {"type": "topojson", "feature": "world"}
  },
  "transform": [
    {
      "lookup": "properties.name",
      "from":{
        "data": {
          "url": "https://raw.githubusercontent.com/akshithP/FIT3179/main/Homework 9/playersCountryCount.csv"
        },
        "key": "Country",
        "fields": ["Count"]
      }
    }
  ],
  "mark": {"type": "geoshape"},
  "encoding": {
    "color": {"field": "Count", "type": "quantitative"}
  }

}
