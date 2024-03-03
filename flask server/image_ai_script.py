from openai import OpenAI
from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
from flask import Flask, request
from flask_cors import CORS  # Import CORS from flask_cors  
from dotenv import load_dotenv
import os

# Load environment variables from .env file
load_dotenv()

client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

app = Flask(__name__)
CORS(app)
# Send request to gpt
def gpt_request(url, prompt):

    response =  client.chat.completions.create(
    model="gpt-4-vision-preview",
    messages=[
        {
        "role": "user",
        "content": [
            {"type": "text", "text": prompt},
            {
            "type": "image_url",
            "image_url": {
                "url": url,
            },
            },
        ],
        }
    ],
    max_tokens=300,
    )
    print(response.choices[0].message.content)
    return response.choices[0].message.content

def db_request(id, url, prompt):
    uri = "mongodb+srv://imanullah1112:ImanUllah@uottahack.oi3vja4.mongodb.net/"

    # Create a new client and connect to the server
    client = MongoClient(uri, server_api=ServerApi('1'))

    # Send a ping to confirm a successful connection
    try:
        client.admin.command('ping')
        print("Pinged your deployment. You successfully connected to MongoDB!")
    except Exception as e:
        print(e)

    db = client['test']
    note_collection = db["notes"]
    response = gpt_request(url, prompt)

    new_document = {
        "response": response,
        "lecId": id
    }

    return note_collection.insert_one(new_document)

@app.route('/gpt-request', methods = ['POST'])
def run_script():
    data = request.get_json()
    print("HIOI")
    lecId = data.get('lecId')

    url = data.get('url')
    prompt = data.get('prompt')
    db_request(lecId, url, prompt)
    return "Success"

if __name__ == '__main__':
    app.run(debug=True)

