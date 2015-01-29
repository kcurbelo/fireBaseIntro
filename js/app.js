var instructorApp = angular.module('instructorApp', ["firebase"]);

instructorApp.controller('InstructorController', function($scope, $firebase) {
    var ref = new Firebase("https://vivid-torch-6234.firebaseio.com//instructors");
    // create an AngularFire reference to the data
    var sync = $firebase(ref);
    // download the data into a local object
       $scope.instructors = sync.$asArray();

       // $scope.instructors.$add({name:'GOB Bluth', hobby:'Illusions'});

       $scope.addInstructor = function(){
           $scope.instructors.$add({name: $scope.newInstructor, hobby: "Hanging"});
       }

      $scope.anonymizeName = function(i){
          $scope.instructors[i].name = "anonymous";
          $scope.instructors.$save($scope.instructors[i]);
      }

    // $scope.instructors = [
    //   {name:'Blaise', hobby:"Surfing"},
    //   {name:'Zach', hobby:"Comedy"},
    //   {name:'Meredith', hobby:'Hanging with wilson cat'},
    //   {name:'Lorin', hobby:'Javascript'},
    //   {name:'Ira', hobby:'Vollyball'}
    // ];
  });