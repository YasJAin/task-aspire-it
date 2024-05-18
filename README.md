This repository is for a task given by AspireIt.


****INTRODUCTION****




- The task involves integrating the backend of a project with a machine learning model which is pre-trained : "VaderSentimentAnalysis"(https://github.com/cjhutto/vaderSentiment). 



- The project involves Sentiment Analysis which is a natural language processing algorithm to analyze & determine the emotional tone of a given data set.
  The pre trained machine learning model can be integrated through Pytorch.js or Tensorflow.js.





- In addition to this, the task involves making use of API endpoint handling to create a secure file handling process. The file handling should be able to accept files of various types such as PDF, audio, video etc.
and store the data into a database on MongoDB.





- Finally the project also involves an authentication system that makes use of Passport.js framework to verify the login and password of a user. Implemented a user registration & login functionality with hashed
  passwords stored in a database.






**PROCESS**






-  The first step is creating an server through express & node that involves taking the various input parameters.





-  The second step involves setting up the database for the passwords, input files and the sentiment analysis data.





- Once this is done, it is necessary to connect the database with the server. This way adding, deleting, updating and saving data is a relatively easier task than manually switching to the Mongo database every now & then.




- We can then set up the passport.js Framework for the verification of the security of the user login.











