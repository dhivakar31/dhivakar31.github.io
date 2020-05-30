# dhivakar31.github.io
Please use Internet Explorer(Microsoft Edge) for good performance of ajax.
Please read this file completely though it is large, it is helpful. 


Topic selected: 3rd 
Topic Name: Student Skill prediction.

The index page consists of two buttons.
(i) go to the form.
(ii) go to the website.

(i)go to the form:

In this page choose the tests the student had attended and choose the learning videos the student had watched.
After choosing,click enter.

if you selected practice test,then select the kind of questions the student attended in the practice test.
if you selected assessment test,then select the kind of questions the student attended in the assessment test.


Next,enter the details regarding to the test the student had attended.
For mcq,it asks for total number of questions,number of questions answered correctly and how many times he changed the answer.
For fill-up,it asks for total number of questions,number of questions answered correctly and how many times he changed the answer.
For programming,it asks for total number of questions,number of questions answered correctly, how many times he compiled the answer and which programming language used to solve.

The same steps to be followed for the practice and assessment test.

Finally you have to enter the time taken by the student to complete the test and average time taken by other students.
Enter the time in seconds.

Then click show skill button,the skill rating of the student is displayed.

As it is a dynamic webpage you can check the skill by completing the test step by step.
For example,
first watch the learning videos without selecting the practice and assessment test.
then check your skill after go to the test page from that page you are right now by clicking the go to test page button and select the practice test alone and after finishin it check your skill
And then again go to the test page and complete the assessment test and finally check your skill.

The go to test page option is available in all pages.Whenever you want you can select the test and learning video.

(ii)go to the webpage:

Filling forms is a bore thing,so i built a webpage to calculate the skill based on the things said above by visualizing and experiencing a webpage.

First click Start test.
if the test is started you will be notified that the test has started.
after starting the test you are not able to click the start test button.If you click that you will be notified the test is already started.

Then select the tests or learning video available in the right hand side.
There available a sample of 3 MCQs, 3 Fill-up and 3 Programs for each test.
You can access any question of any test at any time through the next and back button because the page is a dynamic webpage.

For MCQ,select the option and check if the answer is right then you will notified as correct answer with how many attempts you tried.
For Fill-up,type the answer and check if the answer is right then you will notified as correct answer with how many attempts you tried.
For Programming,first select the language without selecting the language if you try to compile you will be notified to select a language,after selecting compile.

In this,how many times you are checking and compiling is monitored and which language you choosed is also considered.

Finally click the end test button,you will be displayed the time duration.
and click the calculate skill button,the skill is displayed.

As it is a dynamic webpage you can check the skill by completing the test step by step.
For example,
first watch the learning videos without selecting the practice and assessment test.
then click calculate skill and check your skill
then select practice test and check your skill after that select assessment test and check your skill.


Algorithm for calculating the skill:

There is a rating process.
the overall rating of a student is 10.
For MCQ 3 rating
For Fill-up 3 rating
For programming 4 rating.

MCQ:

if the student watched the mcq learning video he will get 1 rating.
if the student attended the mcq in practice test he will get the rating out of 1 based on the performance in that test.
if the student attended the mcq in assessment test he will get the rating out of 1 based on the performance in that test.

Difficulty point:

For easy question:1 point
For medium question:5 point
For hard question:10 point


for practice and assessment test, the MCQ rating is calculated by

mcq rating = (number of mcq correct * difficulty point) - (number of times he changed the answer * 0.5)

from this formula mcq rating for each difficulty category is calculated and add the rating of each category.

overall rating by each difficulty= mcq rating(easy) + mcq rating(medium) + mcq rating(hard).
maximum rating of mcq= (number of questions in easy * difficulty point(easy)) + (number of questions in easy * difficulty point(medium)) + (number of questions in easy * difficulty point(hard))


if mcq learning video watched,learningvideo=1
practice mcq test rating= overall mcq rating for practice test / maximum mcq rating for practice test.
assessment mcq test rating= overall mcq rating for assessment test / maximum mcq rating for assessment test.
 
final mcq rating=>learningvideo + practice mcq rating + assessment mcq rating


Fill-up:

if the student watched the fill-up learning video he will get 1 rating.
if the student attended the fill-up in practice test he will get the rating out of 1 based on the performance in that test.
if the student attended the fill-up in assessment test he will get the rating out of 1 based on the performance in that test.

Difficulty point:

For easy question:5 point
For medium question:10 point
For hard question:15 point


for practice and assessment test, the fill-up rating is calculated by

fill-up rating = (number of fill-up correct * difficulty point) - (number of times he changed the answer * 0.5)

from this formula fill-up rating for each difficulty category is calculated and add the rating of each category.

overall rating by each difficulty= fill-up rating(easy) + fill-up rating(medium) + fill-up rating(hard).
maximum rating of fill-up= (number of questions in easy * difficulty point(easy)) + (number of questions in easy * difficulty point(medium)) + (number of questions in easy * difficulty point(hard))


if fill-up learning video watched,learningvideo=1
practice fill-up test rating= overall fill-up rating for practice test / maximum fill-up rating for practice test.
assessment fill-up test rating= overall fill-up rating for assessment test / maximum fill-up rating for assessment test.
 
final fill-up rating=>learningvideo + practice fill-up rating + assessment fill-up rating

Programming:

if the student watched the any of the Programming learning videos he will get 1 rating.
if the student attended the Programming in practice test he will get the rating out of 1 based on the performance in that test.
if the student attended the Programming in assessment test he will get the rating out of 2 based on the performance in that test.

Difficulty point:

For easy question:10 point
For medium question:20 point
For hard question:30 point


for practice and assessment test, the Programming rating is calculated by

Programming rating = (number of fill-up correct * difficulty point) - (number of times he compiled the answer * 0.25)

from this formula Programming rating for each difficulty category is calculated and add the rating of each category.

overall rating by each difficulty= Programming rating(easy) + Programming rating(medium) + Programming rating(hard).
maximum rating of Programming= (number of questions in easy * difficulty point(easy)) + (number of questions in easy * difficulty point(medium)) + (number of questions in easy * difficulty point(hard))


if Programming learning video watched,learningvideo=1
practice Programming test rating= overall fill-up rating for practice test / maximum fill-up rating for practice test.
assessment Programming test rating= 2 * (overall fill-up rating for assessment test / maximum fill-up rating for assessment test).
 
final Programming rating=>learningvideo + practice Programming + assessment Programming rating

also here we check the skill in individual language also.

Easy-1 point
MEdium-2 point
Hard-3 point

if a student select a particular language based on the difficulty of the question the point is given to that language

language rating= particular language learning video + (used in the tests * difficulty point)

Overall student rating:

The normal time taken to complete the test is 3 minutes.
if the student take more than 3 minutes.for each 3 minutes he lack 0.125 point for the overall rating.
time delay=0
if(time taken>180)
{
time delay = time delay+1
time taken =time taken -180
}
overall student rating= (final mcq rating + final fill-up rating + final programming rating) - (timedelay * 0.125)

And finally displaying 
The MCQ rating ,fill-up rating ,programming rating, individual language rating and overall student rating.

Overall student rating:


Input:

(i)go to form
Practice MCQ Test:

Total number of Questions: n number of question
Number of Questions answered: may be n or less than n
Number of times the answer changed:must be less than n

if the number of times answers changed is high the rating must be zero.

Practice Fill-up Test:

Total number of Questions: n number of question
Number of Questions answered: may be n or less than n
Number of times the answer changed:must be less than n

if the number of times answers changed is high the rating must be zero. 

Practice Programming Test:

Total number of Questions: n number of question
Number of Questions answered: may be n or less than n
Number of times the answer compiled:must be less than n
Which language used? c,c++,java,python(anyone)

if the number of times answers compiled is high the rating must be zero.
Assessment MCQ Test:

Total number of Questions: n number of question
Number of Questions answered: may be n or less than n
Number of times the answer changed:must be less than n

if the number of times answers changed is high the rating must be zero.

Assessment Fill-up Test:

Total number of Questions: n number of question
Number of Questions answered: may be n or less than n
Number of times the answer changed:must be less than n

if the number of times answers changed is high the rating must be zero. 

Assessment Programming Test:

Total number of Questions: n number of question
Number of Questions answered: may be n or less than n
Number of times the answer compiled:must be less than n
Which language used? c,c++,java,python(anyone)

if the number of times answers compiled is high the rating must be zero.

Time taken to complete the test: time in seconds


(ii)go to webpage

Practice MCQ test:

1) a option
2) c option
3) b option

Practice fill-up test:

1) dir
2) track
3) textarea

Practice programming test:

simply select language and click compile button.

Assessment MCQ test:

1) a option
2) b option
3) c option

Assessment fill-up test:

1) accumulator
2) assembler
3) software

Assessment programming test:

simply select language and click compile button.
