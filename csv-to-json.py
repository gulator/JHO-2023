import csv
import json

with open ('positions.csv', 'r') as f1:
    csv_reader = csv.reader(f1, delimiter=';')
    positionsJson = []
    for n in csv_reader:
       newLine = {"team":n[0],"pts":n[1],"dg":n[2],"pj":n[3],"pg":n[4],"pe":n[5],"pp":n[6],"gf":n[7],"ge":n[8],"img":n[9]}
       positionsJson.append(newLine)

    fileJson = json.dumps(positionsJson)
    with open ('positions.json','w') as f2:
        f2.write (fileJson)
        f2.close()
    f1.close()
   