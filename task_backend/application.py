from flask import Flask, jsonify
from flask_cors import CORS
import os 

# Create instance of the Flask application, and define an API endpoint at the specified URL to listen for GET requests.
application = Flask(__name__)
CORS(application)

# Route specified URL to LoadFile function
@application.route('/api/get-file-content', methods=['GET'])
def LoadFile():

    # Create the file path manually, could improve this to list out text files in the directory
    file_path = 'task_text.txt'

    # Read specified file and place it into content variable. If no file is found, return a standard error message instead.
    if os.path.exists(file_path):
        with open(file_path, 'r') as file:
            content = file.read()

    else:
            content = "File not found"
            
    # Place the content into json object for HTTP GET 
    return jsonify({"fileContents":content})
    
# Run the the flask server
if __name__ == '__main__':
    print("Starting flask server...")
    application.run(port=5000)


