import json

with open('aws-data.json') as aws_data_file:
    awsData = json.load(aws_data_file)

print(awsData['items'][0]['value'])
