app.controller('CreateTaskCtrl', ['$scope', '$filter', function($scope, $filter) {
    // $scope.name;
    // $scope.description;
    $scope.tasks = [
        { 'name': 'Révisions', 'description': 'Se remettre à Angular' },
        { 'name': 'Test', 'description': 'Une autre tâche juste pour voir ce que ça donne' }
    ];

    $scope.addTask = function() {
        var toAdd = { name: $scope.name, description: $scope.description };
        console.log("task to add!: "+ $filter('json')(toAdd));
        $scope.tasks.push(toAdd);
    };
}]);
