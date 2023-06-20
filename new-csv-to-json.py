import csv
import json

def csv_to_json(csv_file, json_file):
    schedule = []
    with open(csv_file, 'r') as file:
        csv_reader = csv.reader(file, delimiter=';')
        data = {}
        for row in csv_reader:
            date = row[2]
            match = {
                "teamA": row[0],
                "teamB": row[1],
                "time": row[3],
                "viewer": row[6]
            }
            if date not in data:
                data[date] = []
            data[date].append(match)
    
    json_data = []
    for date, matches in data.items():
        json_data.append({
            "schedule": matches,
            "date": date
        })
    
    with open(json_file, 'w') as file:
        json.dump(json_data, file, indent=4)

# Example usage
csv_file = 'partidos.csv'  # Replace with the path to your CSV file
json_file = 'partidos.json'  # Replace with the desired path for the output JSON file

csv_to_json(csv_file, json_file)
