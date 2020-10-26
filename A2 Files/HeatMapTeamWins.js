{
  "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
  "data": {"url": "https://raw.githubusercontent.com/akshithP/FIT3179/main/A2 Files/Team_Wins.csv"},
  "width": 400,
  "height": 400,
  "title": "IPL Team's Yearly Wins",
  "params": [
    {
      "name": "Wins_above",
      "value": 0,
      "bind":{
        "input": "range",
        "min": 0,
        "max": 11,
        "step": 1,
        "name": "Minimun Wins" 
      }

    },
    {
      "name": "team_selection",
      "bind":{
        "input": "select",
        "options": [
          null,
          "Chennai Super Kings",
          "Deccan Chargers",
          "Delhi Daredevils",
          "Gujarat Lions",
          "Kings XI Punjab",
          "Kochi Tuskers Kerala",
          "Kolkata Knight Riders",
          "Mumbai Indians",
          "Pune Warriors",
          "Rajastan Royals",
          "Rising Pune Supergiants",
          "Royal Challengers Bangalore",
          "Sunrisers Hyderabad"
        ],
        "labels": [
          "Show All",
          "Chennai Super Kings",
          "Deccan Chargers",
          "Delhi Daredevils",
          "Gujarat Lions",
          "Kings XI Punjab",
          "Kochi Tuskers Kerala",
          "Kolkata Knight Riders",
          "Mumbai Indians",
          "Pune Warriors",
          "Rajastan Royals",
          "Rising Pune Supergiants",
          "Royal Challengers Bangalore",
          "Sunrisers Hyderabad"
        ],
        "name": "Team Selection:"
      }
    }
  ],
  "transform": [
    {"filter": "team_selection == null || datum.Team == team_selection"},
    {"filter": "datum.Wins > Wins_above"}
  ],
  "mark": "rect",
  "encoding": {
    "y": {"field": "Team", 
           "type": "nominal"},
    "x": {"field": "Year", 
           "type": "ordinal"},
    "color": { "field": "Wins", 
                "type": "quantitative", 
               "scale": {
                  "scheme": "viridis"
                }
             },
    "tooltip": [
      {"field": "Team", "type": "nominal"},
      {"field": "Year", "type": "ordinal"},
      {"field": "Wins", "type": "quantitative"}
    ]
   }
}