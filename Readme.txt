####Here are the common questions which pops up while we try to set up a Test Automation Framework:

Cucumber Or Simple TestNG or Both?
How will I manage Driver, where should I keep it?
Should I use Dependency Injection Frameworks in my Framework?
What should I do for Reporting?
What should I do for logging?
How will I achieve parallel execution?
How will I load Configuration files?
How will I be able to perform Cross Browser Test Execution.
How will I be able to update Test Status in Test Management Tool like XRay.
Now, Here are my proposals:
Use Existing Libraries and do not try to write your own logic. Also, do not try to solve the problems people have already solved. 
Here are the few libraries I am using my Test Framework Template:

Lombok for getter, Setters, Builders, Log4j statement injection etc
Owner API for Configuration Loading and Mapping
Google Guice/cucumber-picocontainer for Dependency Injection
AssertJ library for Assertions
Extent Report-Grasshoper Cucumber 6 Adapter for Reporting
Use Cucumber rather standalone Test NG: BDD is hot (Even though projects are not really BDD). You can still have your tests written in Gherkin. 
Its just simpler and easier to read then Tests written in Code. So, My proposal, move out of simple TestNG based tests.

Use Cucumber+TestNG instead of Cucumber+Junit: Cucumber+TestNG allows you to execute your "Scenarios" in parallel.
Cucumber+Junit, allow you to run the "Features" files in parallel and not Scenarios. 
Cucumber+TestNG will always be faster compared to the Cucumber+Junit approach. 
Here is the official Link: https://cucumber.io/docs/guides/parallel-execution/

Dependency Injection: Always use DI framework. 
Cucumber supports and encourages the use of Dependency Injection frameworks like Pico-Cucumber, 
Guice, Spring. The "template" which I am proposing below uses Google Guice DI framework. 
Here are the some links: https://cucumber.io/docs/cucumber/state/ and http://www.thinkcode.se/blog/2017/04/01/sharing-state-between-steps-in-cucumberjvm-using-picocontainer and http://www.thinkcode.se/blog/2017/08/16/sharing-state-between-steps-in-cucumberjvm-using-guice

Owner API: This is a very good library for managing the config.properties file. 
Yes you can use Properties class in java to load and read the properties. 
But owner api has much more to offer, which is what I am using in the "Template" framework.
 Fore more details on it check here: http://owner.aeonbits.org/docs/welcome/

Reporting: Use Extent Report Cucumber Adapter 6. 
This is a library and is being offered by Grasshopper and supported by Extent report. 
What it really does is automatically fetch the cucumber steps and generates the report with out you having to write a single extent statements. 
Moreover, for writing more information in the report and for attaching the screen shots, all you have to do is to make use of native "Scenario" object in cucumber and make use of its "log" and "attach" method for logging and attaching screen shots. Check the framework on how I am using it. For more details check this link: https://grasshopper.tech/2098/

Logging: Its always good to have logging in the framework and always use open lib for the same. I have seen people try to write then own logger methods of some sort. Stop! Its just an overkill and not usefull. Use log4j2. Check the usage in the "Template" framework I proposed.

Assertions: There are many open source libraries for assertions. My favourite is AssertJ. 
You can also use TestNG assertion lib but its just not as rich as AssertJ. 
In case if you are using rest assured then you have to use Hamcrest assertion lib which is as good as AssertJ.
 AssertJ Link: https://assertj.github.io/doc/

Parallel Execution: This is an absolute necessity. 
I have already proposed in the 2nd point to make use of TestNG with Cucumber for this. 
Cucumber does not have any inherent parallel execution capability and relies on either TestNG or maven sure fire/fail safe plugin to do it.
 I am using TestNG+Cucumber+maven sure fire to execute the tests in parallel. 
 Refer these links for more details on the topic: https://maven.apache.org/surefire/maven-surefire-plugin/examples/fork-options-and-parallel-execution.html

In case your are using Cucumber+Junit, use this code to execute your feature files in parallel. There is a video link as well in this GitHub readme where I am explaining the code: https://github.com/YantraQA/code-tutorial-execute-cucumber-test-in-parallel
How to manage the Cross Browser Test Execution: Now this can be achieved by Selenium Grid. I am going to show how you can set it up locally to execute your tesrts in parallel. But in a more enterprise level set up Selenium Docker Grid has to be orchestrated on kubernetes.

Selenium Grid 4 offers dockerized grid which is just awesome. If you do not know what Docker is it's about time you get on to it ASAP. It's the future and you need to learn it faster else you will just miss the bus. Refer this link for docker: https://docker-curriculum.com/

For selenium Grid refer this: https://github.com/SeleniumHQ/docker-selenium

Enough talk, lets get in to code now. This is the repo where I have kept the Source code of the Framework. Also, providing the link to the you tube video where I am explaining the code.

