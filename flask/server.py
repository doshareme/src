from flask import *
from flask_cors import CORS
import random
import os
import boto3
import time
import uuid
import hashlib
from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi


app = Flask(__name__) 
CORS(app)

s3 = boto3.client(
    service_name ="s3",
    endpoint_url = os.environ['ENDPOINT_URL'],
    aws_access_key_id = os.environ['AWS_ACCESS_KEY_ID'],
    aws_secret_access_key = os.environ['AWS_SECRET_ACCESS_KEY'],
    region_name=os.environ['AWS_REGION_NAME'], # Must be one of: wnam, enam, weur, eeur, apac, auto
)



uri = "mongodb+srv://"+os.environ['MONGO_USER']+":"+os.environ['MONGO_PASS']+"@"+os.environ['MONGO_HOST']+os.environ['MONGO_DB']+"?retryWrites=true&w=majority"

# Create a new client and connect to the server
client = MongoClient(uri, server_api=ServerApi('1'))

def download_file(bucket_name, object_name, file_name):
    s3.download_file(bucket_name, object_name, file_name)
    print("Downloaded file: ", file_name)

def upload_file(bucket_name, object_name, file_name):
    # generate slug
    s3.upload_file(file_name, bucket_name, object_name)
    print("Uploaded file: ", file_name)

def gen_random_string(length):
    rd=random.randint(0,5)
    return str(uuid.uuid4()).replace('-', '')[rd:rd+length]

try:
    max_size=os.environ['MAX_SIZE']
    app.config['MAX_CONTENT_LENGTH'] = max_size
finally:
    print("MAX_SIZE not set, using default 200MB")
    app.config['MAX_CONTENT_LENGTH'] =200 * 1024 * 1024 # 200MB



@app.route('/')
def ok():
    return "Endpoint OK"

@app.route('/version')
def get():
    return "1.0.1"


@app.route('/upload', methods=['POST']) 
def upload(): 
# Create a new client and connect to the server
    client = MongoClient(uri, server_api=ServerApi('1'))

    if request.method == 'POST': 
  
        # Get the list of files from webpage 
        files = request.files.getlist("file") 
        start=time.process_time()
        slug=gen_random_string(4)

        # Iterate for each file in the files List, and Save them 
        for file in files:
            file.save(file.filename) 
            print("Size of file: ",file.filename,)
            #record time to upload file
            #Put Error handling here
            client.db.collection.insert_one({"slug":slug,"filename":file.filename,"size":len(files),"time":time.time(),"status":"uploaded","host":request.host,"ip":request.remote_addr,"headers":request.headers.to_wsgi_list(),"md5":hashlib.md5(file.read()).hexdigest()})
            upload_file("host",slug+'/'+file.filename, file.filename)
            os.remove(file.filename)
        stop=time.process_time()
        print("No. of files: ", len(files))
        client.close()
        return {"message":"Uploaded files","time":stop-start,"slug":slug}
  
  
if __name__ == '__main__': 
    debug=False
    if debug:
        app.run(debug=True)
    else:
        from waitress import serve
        print("Server starting on port 5000")
        serve(app,listen='*:5000')