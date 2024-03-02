from flask import Flask, request

# Create a Flask application
app = Flask(__name__)

# Define a route for the root URL '/'
@app.route('/')
def hello_world():
    return 'Hello, World! This is a basic Flask server.'

@app.route('/post', methods=['POST'])
def handle_post():
    # Get the JSON data from the POST request
    data = request.json
    
    # Process the data (for example, print it to the console)
    print("Received POST request data:", data)
    
    # Return a response (for example, a JSON response)
    return {'message': 'POST request received', 'data': data}

# Run the Flask application
if __name__ == '__main__':
    app.run(debug=True)