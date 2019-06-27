import json
import logging
import os
import time
import uuid
import boto3
import hashlib

dynamodb = boto3.resource('dynamodb')

def get_survey_id(string):
    nonce = 0
    out = hashlib.sha256((string + str(nonce)).encode('utf-8')).hexdigest()[-6:]
    while nonce < 1000: 
        result = table.get_item(
            Key={
                'surveyId': out
            }
        )
        if "Item" not in result
            return out
        else:
            nonce += 1
            out = hashlib.sha256((string + str(nonce)).encode('utf-8')).hexdigest()[-6:]
    return None

def create(event, context):

    try:
        data = json.loads("".join(event["body"]))["body"]
    except ValueError as e:
        data = event["body"]

    if 'name' not in data:
        logging.error("Validation Failed")
        raise Exception("Couldn't create the Survey.")
        return

    timestamp = int(time.time() * 1000)

    table = dynamodb.Table("surveyQuestionsInfo")

    survey_generated_id = get_survey_id(data["survey_name"])
    survey = {
        'surveyId': survey_generated_id,
        'survey_name': data['survey_name'],
        'question': data['question'],
        'active': True,
        'createdAt': timestamp,
        'updatedAt': timestamp
    }

    # write the todo to the database
    table.put_item(Item=survey)

    # create a response
    response = {
        "statusCode": 200,
        "body": json.dumps(survey)
    }

    return response
