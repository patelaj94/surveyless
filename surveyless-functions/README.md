#All functions supporting a survey.

1. DynamoDB table CRUDs
	- SurveyAdmin: CRUD Functionalities dealing with creation of a survey (TableName: surveyQuestionsInfo)
	- SurveyResponse: CRUD Functionalities dealing with collecting data about survey responses (TableName: surveyResponses)

2. Sample datasets
	- sampleSurveyAdminData: A sample json of the team's agreed data we want to persist in the surveyQuestionsInfo table. 
	- sampleSurveyResponseData: A sample json of the team's agreed data we want to persist in the surveyResponses table.


#Setup
1. We have been using the Serverless Framework to manage the dependencies and deploy code easily. (https://serverless.com - Download here)
2. Once you have downloaded, you will need to configure your aws credentials for Serverless Framework to deploy on your behalf. https://serverless.com/framework/docs/providers/aws/guide/credentials/ 
3. Change directory to where serverless.yml sits
4. 'serverless deploy'