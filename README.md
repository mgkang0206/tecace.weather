Building A Bixby Capsule
•	Setup Developing Environment
•	Create a New Capsule
•	Various Factors Building the Capsule
–	Concept Models:
–	Action Model
–	Endpoint
–	JavaScript Code
–	Training
–	Capsule Model
–	Dialog
–	Layout
–	Simulator
•	References
•	Source Code
–	*Please note that Bixby Capsule is still in beta phase, and there will be many changes before it is available to the general public.
Setup Developing Environment
•	Please refer to Bixby Development Environment
Create a New Capsule
•	Click settings button on the bottom left
•	Click "create new" button to create a new capsule
•	Name the capsule with "organization name.capule name" format
Various Factors Building the Capsule
C:\04f10eee519b8d2c28b88d2567aa29b2
C:\04f10eee519b8d2c28b88d2567aa29b2
•	There are various factors which play roles in a capsule.
–	Concept models: It is a type of Sixtree(.6t) structure which defines the objects used in the capsule.
–	Action models: It is also a type of Sixtree(.6t) structure which defines the type of action, inputs/outputs and if the objects are required or not.
–	Endpoints: It is also a type of Sixtree(.6t) structure which defines the action endpoints, accepted inputs, local endpoints(Javascript files) and authorizations if required.
–	Javascript code: This is where the developer codes the necessary steps taken in the background.
–	Training: Developer can train the capsule to use natural languages
–	Capsule model: It defines the name, version format of the capsule also the language and imported libraries.
–	Vocabularies: It can be used to define synonyms for objects stated in certain types of models.
–	Layouts: Html format which defines how the outcome is presented to the end-users.
–	Dialog: Developer can write a custom reply for each outcomes.
Concept Models:
C:\96311b66fadc6be5f6b239873c43a2e8
C:\96311b66fadc6be5f6b239873c43a2e8
C:\d314cadf70b7f1c680c321873c88ee1c
C:\d314cadf70b7f1c680c321873c88ee1c
•	The Weather concept model has other objects inside because Weather object is an output(Goal) of the GetWeather action model below.
Action Model
C:\c9b381dc35abb87c94bea879331d233e
C:\c9b381dc35abb87c94bea879331d233e
•	In this action model:
–	Input is city (which is "required" and only one can be given.)
–	Output is Weather (which outputs city, forecast, and temperature,and the picture of the city's landmark)
–	Also, when there are multiple choices given, it is set for Bixby to auto-select after learning the user behavior
–	When there is an error, the capsule stops and prompts the user.
Endpoint
C:\7f10fee88b934fd9d9e3a7f94fcf6557
C:\7f10fee88b934fd9d9e3a7f94fcf6557
•	Action-endpoint is assigned with the action model
•	Accepted-inputs are the inputs stated in the action model
•	Local-endpoint is the javascript file.
•	When an external hosting service such as AWS is used, remote-endpoint also can be stated in this object.
JavaScript Code
C:\625f6930df03646048dbe7f3016f6ac7
C:\625f6930df03646048dbe7f3016f6ac7
•	In the background, external api requests are made and returns the objects declared in Weather model.
Training
C:\1392cec3a024902ed7775f73c660a445
C:\1392cec3a024902ed7775f73c660a445
•	Natural language training is done in this file.
•	Goal(Output model) is given.
•	A word or a phrase can be linked to an input model(City)
•	Only when the capsule has been published(privately/publicly), the Natural Language command can be used.
Capsule Model
C:\798f44521b480470c566222d639acd6d
C:\798f44521b480470c566222d639acd6d
•	In a capsule model, one can change the version of the capsule before publishing
•	Also one can import libraries
Dialog
C:\e8cf1503e55ff25b35091d8845d7d992
C:\e8cf1503e55ff25b35091d8845d7d992
•	With Dialog files, one can define what Bixby says to the users.
Layout
C:\c2c54878124763d3cfcfefb0aadb9b11
C:\c2c54878124763d3cfcfefb0aadb9b11
•	With Layout files, one can make the Capsule prettier.
•	Here, by using a library called "Common," Card view is used with Hero Text and the image from the external Api call.
•	With the conditional statements, one can make sure all of the information need are in fact there or prompt the user something is wrong.
Simulator
C:\8309abe19acb431e17a61d4dabff48b5
C:\8309abe19acb431e17a61d4dabff48b5
References
•	Please refer to Bixby Development Environment
Source Code
•	Download, unzip and open from IDE by selecting "open existing" button from the settings page.
*Please note that Bixby Capsule is still in beta phase, and there will be many changes before it is available to the general public.
Building A Bixby Capsule
•	Setup Developing Environment
•	Create a New Capsule
•	Various Factors Building the Capsule 
o	Concept Models:
o	Action Model
o	Endpoint
o	JavaScript Code
o	Training
o	Capsule Model
o	Dialog
o	Layout
o	Simulator
•	References
•	Source Code 
o	*Please note that Bixby Capsule is still in beta phase, and there will be many changes before it is available to the general public.
Setup Developing Environment
________________________________________
•	Please refer to Bixby Development Environment
Create a New Capsule
________________________________________
•	Click settings button on the bottom left
•	Click "create new" button to create a new capsule
•	Name the capsule with "organization name.capule name" format
Various Factors Building the Capsule
________________________________________
 
•	There are various factors which play roles in a capsule. 
o	Concept models: It is a type of Sixtree(.6t) structure which defines the objects used in the capsule.
o	Action models: It is also a type of Sixtree(.6t) structure which defines the type of action, inputs/outputs and if the objects are required or not.
o	Endpoints: It is also a type of Sixtree(.6t) structure which defines the action endpoints, accepted inputs, local endpoints(Javascript files) and authorizations if required.
o	Javascript code: This is where the developer codes the necessary steps taken in the background.
o	Training: Developer can train the capsule to use natural languages
o	Capsule model: It defines the name, version format of the capsule also the language and imported libraries.
o	Vocabularies: It can be used to define synonyms for objects stated in certain types of models.
o	Layouts: Html format which defines how the outcome is presented to the end-users.
o	Dialog: Developer can write a custom reply for each outcomes.
Concept Models:
 
 
•	The Weather concept model has other objects inside because Weather object is an output(Goal) of the GetWeather action model below.
Action Model
 
•	In this action model: 
o	Input is city (which is "required" and only one can be given.)
o	Output is Weather (which outputs city, forecast, and temperature,and the picture of the city's landmark)
o	Also, when there are multiple choices given, it is set for Bixby to auto-select after learning the user behavior
o	When there is an error, the capsule stops and prompts the user.
Endpoint
 
•	Action-endpoint is assigned with the action model
•	Accepted-inputs are the inputs stated in the action model
•	Local-endpoint is the javascript file.
•	When an external hosting service such as AWS is used, remote-endpoint also can be stated in this object.
JavaScript Code
 
•	In the background, external api requests are made and returns the objects declared in Weather model.
Training
 
•	Natural language training is done in this file.
•	Goal(Output model) is given.
•	A word or a phrase can be linked to an input model(City)
•	Only when the capsule has been published(privately/publicly), the Natural Language command can be used.
Capsule Model
 
•	In a capsule model, one can change the version of the capsule before publishing
•	Also one can import libraries
Dialog
 
•	With Dialog files, one can define what Bixby says to the users.
Layout
 
•	With Layout files, one can make the Capsule prettier.
•	Here, by using a library called "Common," Card view is used with Hero Text and the image from the external Api call.
•	With the conditional statements, one can make sure all of the information need are in fact there or prompt the user something is wrong.
Simulator
 

References
________________________________________
•	Please refer to Bixby Development Environment
Source Code

________________________________________
•	Download, unzip and open from IDE by selecting "open existing" button from the settings page.
*Please note that Bixby Capsule is still in beta phase, and there will be many changes before it is available to the general public.

