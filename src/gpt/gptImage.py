from openai import OpenAI
import base64
import os
from flask import Flask, jsonify, request, request, render_template
from flask_cors import CORS
from werkzeug.utils import secure_filename
from dotenv import load_dotenv


load_dotenv("./.env")
api_key = os.getenv("OPENAI_API_KEY")
client = OpenAI(api_key="OPENAI_API_KEY")

app = Flask(__name__)
CORS(app)
app.config['UPLOAD_FOLDER'] = os.getcwd()

def main():   
    return render_template("index.html") 

def encode_image(image_path):
  with open(image_path, "rb"  ) as image_file:
    return base64.b64encode(image_file.read()).decode('utf-8')

@app.route('/run-python-script', methods=['POST'])
def pythonscript():
    #Saves file
    # if request.method == 'POST':   
    #     f = request.files['file'] 
    #     f.save(f.filename)   
    #     print("yooo")

    if 'file' in request.files:
        file = request.files['file']
        filename = secure_filename(file.filename)
        print(filename)
        # Here you should save the file
        file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
        print("yooo")
        return 'File uploaded successfully'

    print("noooo")
    return 'No file uploaded'

    # base64_image = encode_image(filename)
    print("poo!")
    #data = request.json
    #filename = data.get('filename')
    #prompt = data.get('prompt')
    response_data = {"string": "hi"}

    return jsonify(response_data)

app.run(debug=True)