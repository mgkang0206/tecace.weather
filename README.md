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

![capsule structure](https://github.com/mgkang0206/tecace.weather/blob/master/Img/capsule%20structure.PNG)

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

![concept](https://github.com/mgkang0206/tecace.weather/blob/master/Img/concept.PNG)

![result concept](https://github.com/mgkang0206/tecace.weather/blob/master/Img/result%20concept.PNG)

-   The Weather concept model has other objects inside because Weather object is
    an output(Goal) of the GetWeather action model below.

Action Model
------------

![action concept](https://github.com/mgkang0206/tecace.weather/blob/master/Img/action%20concept.PNG)

-   In this action model:

    -   Input is city (which is "required" and only one can be given.)

    -   Output is Weather (which outputs city, forecast, and temperature,and the
        picture of the city's landmark)

    -   Also, when there are multiple choices given, it is set for Bixby to
        auto-select after learning the user behavior

    -   When there is an error, the capsule stops and prompts the user.

Endpoint
--------

![endpoint](https://github.com/mgkang0206/tecace.weather/blob/master/Img/endpoint.PNG)

-   Action-endpoint is assigned with the action model

-   Accepted-inputs are the inputs stated in the action model

-   Local-endpoint is the javascript file.

-   When an external hosting service such as AWS is used, remote-endpoint also
    can be stated in this object.

JavaScript Code
---------------

![JavaScript](https://github.com/mgkang0206/tecace.weather/blob/master/Img/javascript.PNG)

-   In the background, external api requests are made and returns the objects
    declared in Weather model.

Training
--------

![training](https://github.com/mgkang0206/tecace.weather/blob/master/Img/training.PNG)

-   Natural language training is done in this file.

-   Goal(Output model) is given.

-   A word or a phrase can be linked to an input model(City)

-   Only when the capsule has been published(privately/publicly), the Natural
    Language command can be used.

Capsule Model
-------------

![capsule](https://github.com/mgkang0206/tecace.weather/blob/master/Img/capsule.PNG)

-   In a capsule model, one can change the version of the capsule before
    publishing

-   Also one can import libraries

Dialog
------

![Dialog](https://github.com/mgkang0206/tecace.weather/blob/master/Img/capsule%20structure.PNG)

-   With Dialog files, one can define what Bixby says to the users.

Layout
------

![Layout](https://github.com/mgkang0206/tecace.weather/blob/master/Img/layout.PNG)

-   With Layout files, one can make the Capsule prettier.

-   Here, by using a library called "Common," Card view is used with Hero Text
    and the image from the external Api call.

-   With the conditional statements, one can make sure all of the information
    need are in fact there or prompt the user something is wrong.

Simulator
---------

![Simulator](https://github.com/mgkang0206/tecace.weather/blob/master/Img/Capture.PNG)

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
