{
  "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
  "data": {"url": "https://raw.githubusercontent.com/akshithP/FIT3179/main/A2 Files/Team_Wins.csv"},
  "width": 400,
  "height": 400,
  "title": "IPL Team's Yearly Wins",
  "params": [
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
          "Sunrisers Hyderbad"
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
          "Sunrisers Hyderbad"
        ],
        "name": "Team Selection:"
      }
    }
  ],
  "transform": [
    {"filter": "team_selection == null || datum.Team == team_selection"}
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