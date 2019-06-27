from __future__ import print_function

def handler(event, context):
    print("Received event: " + str(event))
    return '<?xml version=\"1.0\" encoding=\"UTF-8\"?>'\
           '<Response><Message>Hello world! -Lambda</Message></Response>'

