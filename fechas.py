import csv
import json

equipos = {"1": "La Naranja Geriatrica",
           "2": "Farola FC",
           "3": "All Inclusive FC",
           "4": "Los Suplentes",
           "5": "Pablo y los sexto's",
           "6": "Carlinga",
           "7": "Rejunte FC",
           "8": "Los PapiFootball",
           "9": "Whiscola FCC",
           "10": "La Scaloneta",
           "11": "Sala Azul Remix",
           }

with open ('partidos.csv', 'r') as f1:
    csv_reader = csv.reader(f1, delimiter=';')
    partidosJson = []
    for n in csv_reader:
       
        newLine = {"teamA":equipos[n[0]], "teamB":equipos[n[1]], "dia": n[3], "fecha": n[2], "horario": n[4], "golesA":n[5], "golesB":n[6], "libre": n[7] }
        partidosJson.append(newLine)

    fileJson = json.dumps(partidosJson)
    with open ('partidos.json','w') as f2:
        f2.write (fileJson)
        f2.close()
    f1.close()
