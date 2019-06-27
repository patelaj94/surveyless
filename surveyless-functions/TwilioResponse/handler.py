from __future__ import print_function
from urllib.parse import parse_qs
import json

def handler(event, context):
    print('Received event: ' + json.dumps(event))
    data = parse_qs(event['body'])
    msg = 'sup'
    twiml = "<?xml version='1.0' encoding='UTF-8'?><Response><Message>{}</Message></Response>".format(msg)

    response = {
        "statusCode":  200,
        "headers": {
            "Content-Type": "text/xml"
        },
        "body": twiml
    }
    return response
