import json
import logging
import os
import time
import uuid

import boto3
dynamodb = boto3.resource('dynamodb')


def create(event, context):
    try:
        data = json.loads("".join(event["body"]))["body"]
    except ValueError as e:
        data = event["body"]
    
    if 'name' not in data:
        logging.error("Validation Failed")
        raise Exception("Couldn't create the survey response.")
        return

    timestamp = int(time.time() * 1000)

    table = dynamodb.Table("surveyResponses")

    survey = {
        'survey_unique_id': data['survey_unique_id'],
        'answer': data['question_text'],
        'totalYes': 0,
        'totalNo': 0,
        'active' : True,
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