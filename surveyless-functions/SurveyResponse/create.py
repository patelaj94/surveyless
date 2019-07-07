import json
import logging
import os
import time
import uuid

import boto3
dynamodb = boto3.resource('dynamodb')

def create(event, context):
    
    data = json.loads(event['body'])['body']
    if 'survey_unique_id' not in data:
        logging.error("Validation Failed")
        raise Exception("Couldn't create the survey response.")
        return

    timestamp = int(time.time() * 1000)

    table = dynamodb.Table("surveyResponses")
    
    print(data['survey_unique_id'])
    surveyId = data['survey_unique_id']
    responseText = data['question_text']
    
    ## If table does not exist, put new item
    item = table.get_item(Key = {'survey_unique_id':surveyId})
    if(not "Item" in item):
        print('twas null')
        response = {
        'survey_unique_id': data['survey_unique_id'],
        'answer': data['question_text'],
        'totalYes': 0,
        'totalNo': 0,
        'active' : True,
        'createdAt': timestamp,
        'updatedAt': timestamp
        }
        table.put_item(Item=response)
    
    
    
    ## Increment Logic
    myIncrement = 1
    if(responseText=='yes'):
        response = table.update_item(
        Key = {
            'survey_unique_id': surveyId
        },
        UpdateExpression="set totalYes = totalYes + :val",
        ExpressionAttributeValues={
        ':val': myIncrement
        }
    )
    
    if(responseText=='no'):
        response = table.update_item(
        Key = {
            'survey_unique_id': surveyId
        },
        UpdateExpression="set totalNo = totalNo + :val",
        ExpressionAttributeValues={
        ':val': myIncrement
        }
    )
    

    # create a response
    response = {
        "statusCode": 200,
        "body": json.dumps(response)
    }

    return response