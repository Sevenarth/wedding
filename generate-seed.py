#!/usr/bin/env python3
from cuid2 import cuid_wrapper
from pathlib import Path
import csv
import sys
import re
import unicodedata

generate_cuid = cuid_wrapper()


if len(sys.argv) != 2:
    print("you forgot the file path!")
    sys.exit(1)

path = Path(sys.argv[1])
psearcher = re.compile(r"(\w[\w ]+\w)(?: \(([\w, ]+)\))?")

def normalise(text):
    return unicodedata.normalize("NFD", text).encode('ASCII', 'ignore').decode("utf-8").lower()

def gather_people(text):
    return ((p.group(1), p.group(2)) for p in psearcher.finditer(text))

headline = True
invites = []

with open(path) as csvfile:
    reader = csv.reader(csvfile)
    for entry in reader:
        if headline:
            headline = False
            continue

        accessCode = entry[0].replace(" ", "").lower()
        addressee = entry[1]
        loginNames = {}
        people = []
        for name, alt_names in gather_people(entry[2]):
            people.append(name)
            name = name.strip()
            login_name = name.lower()
            normalised_name = normalise(name)
            loginNames[login_name] = name
            if login_name != normalised_name:
                loginNames[normalised_name] = name

            if alt_names is None:
                continue

            for alt_name in alt_names.split(","):
                alt_name = alt_name.strip()
                login_alt_name = alt_name.lower()
                normalised_name = normalise(alt_name)
                loginNames[login_alt_name] = alt_name
                if normalised_name != login_alt_name:
                    loginNames[normalised_name] = alt_name
        
        locations = [l.strip() for l in entry[3].split(",")]
            
        invites.append((
            accessCode,
            addressee,
            loginNames,
            people,
            locations
        ))

sql = []

for invite in invites:
    accessCode, addressee, loginNames, people, locations = invite
    inviteId = generate_cuid()
    sql.append(f"INSERT INTO invites(id, addressee) VALUES('{inviteId}', '{addressee}')")
    for name, displayName in loginNames.items():
        displayName = f"'{displayName}'" if displayName else "null"
        sql.append(f"INSERT INTO logins(accessCode, name, displayName, inviteId) VALUES ('{accessCode}', '{name}', {displayName}, '{inviteId}')")
    for location in locations:
        sql.append(f"INSERT INTO responses(location, inviteId) VALUES ('{location}', '{inviteId}')")
        for person in people:
            sql.append(f"INSERT INTO persons(name, location, inviteId) VALUES('{person}', '{location}', '{inviteId}')")

print(";\n".join(sql))