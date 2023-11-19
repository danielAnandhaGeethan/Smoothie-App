import json
from pymongo import MongoClient

# Connect to MongoDB
client = MongoClient('mongodb://localhost:27017/')
db = client['dj']
collection = db['smoothies']

# Read the JSON file
with open('./smoothie_recipes.json', 'r') as infile:
    data = json.load(infile)

collection.insert_many(data)

print(f"{len(data)} documents have been inserted into MongoDB.")
