import json
import logging
import os
import time
import uuid

import boto3
dynamodb = boto3.resource('dynamodb')


def create(event, context):
    data = json.loads(event['body'])
    if 'name' not in data:
        logging.error("Validation Failed")
        raise Exception("Couldn't create the Survey Code.")
        return

    timestamp = int(time.time() * 1000)

    table = dynamodb.Table("codeToSurvey")

    survey = {
        'survey_code': str(uuid.uuid1()),
        'survey_id': data['survey_id'],
        'question': data['question_text'],
        'active': True,
        'createdAt': timestamp,
        'updatedAt': timestamp,
    }

    # write the todo to the database
    table.put_item(Item=survey)

    # create a response
    response = {
        "statusCode": 200,
        "body": json.dumps(survey)
    }

    return response
