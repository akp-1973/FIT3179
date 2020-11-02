{
  "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
  "width": 630,
  "height": 400,
  "title": "IPL Players Country of Origin",
  "projection": {"type": "equirectangular"},
  "layer": [
    {
      "data": {
        "url": "https://raw.githubusercontent.com/akshithP/FIT3179/main/A2 Files/world.json",
        "format": {"type": "topojson", "feature": "world"}
      },
      "mark": {"type": "geoshape", "fill": "lightgray", "stroke": "white"}
    },
    {
      "data": {
        "url": "https://raw.githubusercontent.com/akshithP/FIT3179/main/A2 Files/playersCountryCount.csv"
      },
      "mark": {"type": "circle"},
      "encoding": {
        "longitude": {"field": "Long", "type": "quantitative"},
        "latitude": {"field": "Lat", "type": "quantitative"},
        "size": {
          "field": "Count",
          "type": "quantitative"

        },
        "color": {
          "field": "Percentage of Players",
          "type": "quantitative",
          "scale": {"scheme": "viridis"}
        },
        "tooltip": [
          {"field": "Country", "type": "nominal"},
          {"field": "Count", "type": "quantitative"},
          {"field": "Percentage of Players", "type": "quantitative"}
        ]
      }
    }
  ]
}