{
  "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
  "title": "IPL Teams' Home & Away Wins",
  "width": 600,
  "height": 500,
  "data": {
      "url": "https://raw.githubusercontent.com/akshithP/FIT3179/main/A2 Files/TeamHomeAwayWins.csv"
  }, 
  "selection": {
      "team_highlight": {
          "type": "multi",
          "fields": ["Team"]
      }
  },
  "mark": "bar",
  "encoding": {
      "x": {
          "field": "Team",
          "type": "nominal",
          "title": "Team Name"
      },
      "y": {
          "field": "Total",
          "type": "quantitative",
          "title": "Total Win Percentage (%)"
      },
      "color": {
          "field": "Win Type",
          "type": "nominal",
          "scale": {
              "domain": ["Home", "Away"],
              "range": ["#91cf60", "#542788"]
          }
      },
      "opacity": {
          "condition": {"selection": "team_highlight", "value": 1},
          "value": 0.2
      },
      "tooltip": [
          {"field": "Team", "type": "nominal"},
          {"field": "Total", "type": "quantitative", "title": "Total Win %"}
      ]
  }
}


