Building A Bixby Capsule
========================

-   [Setup Developing Environment](#BuildingABixbyCapsule-SetupDevelopingEn)

-   [Create a New Capsule](#BuildingABixbyCapsule-CreateaNewCapsule)

-   [Various Factors Building the
    Capsule](#BuildingABixbyCapsule-VariousFactorsBui)

    -   [Concept Models:](#BuildingABixbyCapsule-ConceptModels:)

    -   [Action Model](#BuildingABixbyCapsule-ActionModel)

    -   [Endpoint](#BuildingABixbyCapsule-Endpoint)

    -   [JavaScript Code](#BuildingABixbyCapsule-JavaScriptCode)

    -   [Training](#BuildingABixbyCapsule-Training)

    -   [Capsule Model](#BuildingABixbyCapsule-CapsuleModel)

    -   [Dialog](#BuildingABixbyCapsule-Dialog)

    -   [Layout](#BuildingABixbyCapsule-Layout)

    -   [Simulator](#BuildingABixbyCapsule-Simulator)

-   [References](#BuildingABixbyCapsule-References)

-   [Source Code](#BuildingABixbyCapsule-SourceCode)

    -   [\*Please note that Bixby Capsule is still in beta phase, and there will
        be many changes before it is available to the general
        public.](#BuildingABixbyCapsule-*PleasenotethatBi)

Setup Developing Environment
============================

-   Please refer to [Bixby Development
    Environment](/display/BC/Bixby+Development+Environment)

Create a New Capsule
====================

-   Click settings button on the bottom left

-   Click "create new" button to create a new capsule

-   Name the capsule with "organization name.capule name" format

Various Factors Building the Capsule
====================================

![capsule structure](tecace.weather/Img/capsule structure.PNG)

-   There are various factors which play roles in a capsule.

    -   Concept models: It is a type of Sixtree(.6t) structure which defines the
        objects used in the capsule.

    -   Action models: It is also a type of Sixtree(.6t) structure which defines
        the type of action, inputs/outputs and if the objects are required or
        not.

    -   Endpoints: It is also a type of Sixtree(.6t) structure which defines the
        action endpoints, accepted inputs, local endpoints(Javascript files) and
        authorizations if required.

    -   Javascript code: This is where the developer codes the necessary steps
        taken in the background.

    -   Training: Developer can train the capsule to use natural languages

    -   Capsule model: It defines the name, version format of the capsule also
        the language and imported libraries.

    -   Vocabularies: It can be used to define synonyms for objects stated in
        certain types of models.

    -   Layouts: Html format which defines how the outcome is presented to the
        end-users.

    -   Dialog: Developer can write a custom reply for each outcomes.

Concept Models:
---------------

![C:\\96311b66fadc6be5f6b239873c43a2e8](media/f5beb7b4a3bafeca1349280ee3d2fc74.tmp)

![C:\\d314cadf70b7f1c680c321873c88ee1c](media/858e24486894aa379c4070b00c0d4806.tmp)

-   The Weather concept model has other objects inside because Weather object is
    an output(Goal) of the GetWeather action model below.

Action Model
------------

![C:\\c9b381dc35abb87c94bea879331d233e](media/7f8a94037f7ae9bc797700b2a012e7a0.tmp)

-   In this action model:

    -   Input is city (which is "required" and only one can be given.)

    -   Output is Weather (which outputs city, forecast, and temperature,and the
        picture of the city's landmark)

    -   Also, when there are multiple choices given, it is set for Bixby to
        auto-select after learning the user behavior

    -   When there is an error, the capsule stops and prompts the user.

Endpoint
--------

![C:\\7f10fee88b934fd9d9e3a7f94fcf6557](media/5c7c53376cb590adc0ccec265fee8024.tmp)

-   Action-endpoint is assigned with the action model

-   Accepted-inputs are the inputs stated in the action model

-   Local-endpoint is the javascript file.

-   When an external hosting service such as AWS is used, remote-endpoint also
    can be stated in this object.

JavaScript Code
---------------

![C:\\625f6930df03646048dbe7f3016f6ac7](media/83b0a482a8c1505d35b760192c385998.tmp)

-   In the background, external api requests are made and returns the objects
    declared in Weather model.

Training
--------

![C:\\1392cec3a024902ed7775f73c660a445](media/ac5686e25ecf0cf6722237f446cb50bd.tmp)

-   Natural language training is done in this file.

-   Goal(Output model) is given.

-   A word or a phrase can be linked to an input model(City)

-   Only when the capsule has been published(privately/publicly), the Natural
    Language command can be used.

Capsule Model
-------------

![C:\\798f44521b480470c566222d639acd6d](media/76385a836188445aa9039255c7e35b45.tmp)

-   In a capsule model, one can change the version of the capsule before
    publishing

-   Also one can import libraries

Dialog
------

![C:\\e8cf1503e55ff25b35091d8845d7d992](media/2adfcc3679034da8d7d7c5d04acdca82.tmp)

-   With Dialog files, one can define what Bixby says to the users.

Layout
------

![C:\\c2c54878124763d3cfcfefb0aadb9b11](media/abdbcd3bd56c9b506724143d413f1958.tmp)

-   With Layout files, one can make the Capsule prettier.

-   Here, by using a library called "Common," Card view is used with Hero Text
    and the image from the external Api call.

-   With the conditional statements, one can make sure all of the information
    need are in fact there or prompt the user something is wrong.

Simulator
---------

![C:\\8309abe19acb431e17a61d4dabff48b5](media/fcc9d489b62f4968787bf2f36e503a55.tmp)

References
==========

-   Please refer to [Bixby Development
    Environment](/display/BC/Bixby+Development+Environment)

Source Code
===========

-   [Download](/download/attachments/43746766/tecace.weather.zip?version=1&modificationDate=1536090105000&api=v2),
    unzip and open from IDE by selecting "open existing" button from the
    settings page.

### \*Please note that Bixby Capsule is still in beta phase, and there will be many changes before it is available to the general public.
