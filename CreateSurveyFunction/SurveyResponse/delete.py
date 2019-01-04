import os

import boto3
dynamodb = boto3.resource('dynamodb')


def delete(event, context):
    table = dynamodb.Table("surveyResponses")

    # delete the todo from the database
    table.delete_item(
        Key={
            'survey_unique_id_question_text': event['pathParameters']['id']
        }
    )

    # create a response
    response = {
        "statusCode": 200
    }

    return response