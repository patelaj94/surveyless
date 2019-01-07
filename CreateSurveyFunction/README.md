#All functions supporting a survey.

1. DynamoDB table CRUDs
	- SurveyAdmin: CRUD Functionalities dealing with creation of a survey (TableName: surveyQuestionsInfo)
	- SurveyResponse: CRUD Functionalities dealing with collecting data about survey responses (TableName: surveyResponses)

2. Sample datasets
	- sampleSurveyAdminData: A sample json of the team's agreed data we want to persist in the surveyQuestionsInfo table. 
	- sampleSurveyResponseData: A sample json of the team's agreed data we want to persist in the surveyResponses table.