import os
import json

from CreateSurvey import decimalencoder
import boto3
dynamodb = boto3.resource('dynamodb')


def get(event, context):
    table = dynamodb.Table("surveyResponses")

    # fetch todo from the database
    result = table.get_item(
        Key={
            'survey_unique_id_question_text': event['pathParameters']['id']
        }
    )

    # create a response
    response = {
        "statusCode": 200,
        "body": json.dumps(result['Item'],
                           cls=decimalencoder.DecimalEncoder)
    }

    return response