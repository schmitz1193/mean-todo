import _ from 'lodash';
import angular from 'angular';

const todoFactory = angular.module('app.todoFactory', [])

.factory('todoFactory', ($http) => {
    //fetch all the tasks fromt he db
    function getTasks($scope) {
        $http.get('/todos').success(response => {
            $scope.todos = response.todos;
        });
    }

    function createTask($scope, params) {
        //prevents a blank task from being created
        if (!$scope.createTaskInput) { return; }

        $http.post('/todos', {
            task: $scope.createTaskInput,
            isCompleted: false,
            isEditing: false
        }).success(response => {
            //re-get all the tasks in db and relace scope.todos with items in the db
            getTasks($scope);
            $scope.createTaskInput = '';
            console.log(response);
        });

        // params.createHasInput = false;
        // $scope.createTaskInput = '';
    }

    function updateTask($scope,todo) {
        //create a string with variables in it using ticks
        $http.put(`/todos/${todo._id}`, { task: todo.updatedTask }).success(response => {
            getTasks($scope);
            todo.isEditing = false;
        });

        // todo.task = todo.updatedTask;
        // todo.isEditing = false;
    }

    function deleteTask($scope, todoToDelete) {
        $http.delete(`/todos/${todoToDelete._id}`).success(response => {
            getTasks($scope);
        });

    //     _.remove($scope.todos, todo => todo.task === todoToDelete.task);
    }

    function watchCreateTaskInput(params, $scope, val) {
        const createHasInput = params.createHasInput;

        if (!val && createHasInput) {
            $scope.todos.pop();
            params.createHasInput = false;
        } else if (val && !createHasInput) {
            $scope.todos.push({ task: val, isCompleted: false });
            params.createHasInput = true;
        } else if (val && createHasInput) {
            $scope.todos[$scope.todos.length - 1].task = val;
        }
    }

    return {
        getTasks,
        createTask,
        updateTask,
        deleteTask,
        watchCreateTaskInput
    };
});

export default todoFactory;
