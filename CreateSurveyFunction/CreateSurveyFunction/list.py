import json
import os

from CreateSurvey import decimalencoder
import boto3
dynamodb = boto3.resource('dynamodb')


def list(event, context):
    table = dynamodb.Table("surveyResponses")

    # fetch all todos from the database
    result = table.scan()

    # create a response
    response = {
        "statusCode": 200,
        "body": json.dumps(result['Items'], cls=decimalencoder.DecimalEncoder)
    }

    return response