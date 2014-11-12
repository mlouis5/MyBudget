
var myBudgetApp = angular.module('myBudgetApp', []);

myBudgetApp.controller('MyBudgetCtrl', function ($scope) {
    $scope.user = {
        bills: [
            {
                billName: 'honda',
                billId: 'af9afoahsdfhoas',
                billSource: 'honda financial',
                dueDate: 27,
                amount: 400.00,
                lateFee: 35.00,
                website: 'www.hondafinancialservices.com'
            },
            {
                billName: 'Rent',
                billId: 'af9afoahsdfhoas',
                billSource: 'honda financial',
                dueDate: 27,
                amount: 400.00,
                lateFee: 35.00,
                website: 'www.hondafinancialservices.com'
            }
        ]
    };
    
    $scope.currentBill = $scope.user.bills[0];
});

$('.nav li').click(function () {
    $(this).addClass('active')
            .siblings()
            .removeClass('active');
});