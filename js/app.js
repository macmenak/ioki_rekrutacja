(function() {
  var app = angular.module('ioki', []);
  
  app.controller('exercisesController', function(){
    this.exercises = exercisesList;
    this.checkMode = false;
    this.currentExercise = 0;
    
    
    this.checkAnswers = function(){
      
      this.checkMode = !this.checkMode;
	  
    };

    this.nextExersize = function(){
      this.currentExercise++;
      this.checkMode=false;
    }

    this.prevExersize = function(){
      this.currentExercise--;
      this.checkMode=false;
    }

  });

var exercisesList = [{
			title: "Exercise 3 Vocabulary",
			instructions: "Label the weather symbols.",
			type: "label",
			additional: "snowing cloudy  raining  foggy  windy  sunny",
			options: [
				{
				image: "exercise2/1.png",
				answer: "foggy",
				correctAns: "foggy",
				example: true
				},
				{
				image: "exercise2/2.png",
				answer: "",
				correctAns: "raining"
				},
				{
				image: "exercise2/3.png",
				answer: "",
				correctAns: "sunny"
				},
				{
				image: "exercise2/4.png",
				answer: "",
				correctAns: "cloudy"
				},
				{
				image: "exercise2/5.png",
				answer: "",
				correctAns: "windy"
				},
				{
				image: "exercise2/6.png",
				answer: "",
				correctAns: "snowing"
				}

			]


		},
		{
			title: "Exercise 3 Vocabulary",
			instructions: "What school activities do you see on the picture?",
			type: "assign",
			options: [
				{
				image: "exercise1/1.png",
				answer: "2",
				label: "enjoying a field trip",
				correctAns: "2",
				example: true
				},
				{
				image: "exercise1/2.png",
				answer: "",
				label: "working on computers",
				correctAns: "3"
				},
				{
				image: "exercise1/3.png",
				answer: "",
				label: "taking a test",
				correctAns: "4"
				},
				{
				image: "exercise1/4.png",
				answer: "",
				label: "doing a project",
				correctAns: "1"
				},
				{
				image: "exercise1/5.png",
				answer: "",
				label: "giving a presentation",
				correctAns: "5"
				},
				{
				image: "exercise1/6.png",
				answer: "",
				label: "practicing yoga",
				correctAns: "6"
				}

			]


		}
		];






})();