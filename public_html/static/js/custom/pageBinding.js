//$.ajax({
//    type: "GET",
//    url: "http://localhost:8080/BudgetServices/user",
//    //data: "firstName=Aidy&lastName=F", // the data in form-encoded format, ie as it would appear on a querystring
//    //contentType: "application/x-www-form-urlencoded; charset=UTF-8", // if you are using form encoding, this is default so you don't need to supply it
//    dataType: "json", // the data type we want back, so text.  The data will come wrapped in xml
//    success: function (data) {
//        console.log(data);
//        //$("#searchresultsA").html(data); // show the string that was returned, this will be the data inside the xml wrapper
//    }
//});


var myBudgetApp = angular.module('myBudgetApp', []);


myBudgetApp.controller('MyBudgetCtrl', function ($scope) {
    $scope.user = {
        userFname: "MacDerson",
        userLname: "Louis",
        bills: [
            {
                billName: 'honda',
                billId: 'af9afoahsdfhoas',
                billSource: 'honda financial',
                dueDate: 27,
                amount: 400.00,
                lateFee: 35.00,
                website: 'www.hondafinancialservices.com',
                payments: [
                    {
                        paymentId: 'payhonda1',
                        paymentDueDate: '11-27-2014',
                        paymentFilingDate: '11-12-2014',
                        paymentLastNotificationDate: '11-12-2014',
                        paymentPaidDate: '11-26-2014'
                    },
                    {
                        paymentId: 'payhonda2',
                        paymentDueDate: '10-27-2014',
                        paymentFilingDate: '10-12-2014',
                        paymentLastNotificationDate: '10-14-2014',
                        paymentPaidDate: '10-25-2014'

                    },
                    {
                        paymentId: 'payhonda3',
                        paymentDueDate: '09-27-2014',
                        paymentFilingDate: '09-12-2014',
                        paymentLastNotificationDate: '09-16-2014',
                        paymentPaidDate: '09-27-2014'
                    },
                    {
                        paymentId: 'payhonda1',
                        paymentDueDate: '11-27-2014',
                        paymentFilingDate: '11-12-2014',
                        paymentLastNotificationDate: '11-12-2014',
                        paymentPaidDate: '11-26-2014'
                    },
                    {
                        paymentId: 'payhonda2',
                        paymentDueDate: '10-27-2014',
                        paymentFilingDate: '10-12-2014',
                        paymentLastNotificationDate: '10-14-2014',
                        paymentPaidDate: '10-25-2014'

                    },
                    {
                        paymentId: 'payhonda3',
                        paymentDueDate: '09-27-2014',
                        paymentFilingDate: '09-12-2014',
                        paymentLastNotificationDate: '09-16-2014',
                        paymentPaidDate: '09-27-2014'
                    },
                    {
                        paymentId: 'payhonda1',
                        paymentDueDate: '11-27-2014',
                        paymentFilingDate: '11-12-2014',
                        paymentLastNotificationDate: '11-12-2014',
                        paymentPaidDate: '11-26-2014'
                    },
                    {
                        paymentId: 'payhonda2',
                        paymentDueDate: '10-27-2014',
                        paymentFilingDate: '10-12-2014',
                        paymentLastNotificationDate: '10-14-2014',
                        paymentPaidDate: '10-25-2014'

                    },
                    {
                        paymentId: 'payhonda3',
                        paymentDueDate: '09-27-2014',
                        paymentFilingDate: '09-12-2014',
                        paymentLastNotificationDate: '09-16-2014',
                        paymentPaidDate: '09-27-2014'
                    },
                    {
                        paymentId: 'payhonda3',
                        paymentDueDate: '09-27-2014',
                        paymentFilingDate: '09-12-2014',
                        paymentLastNotificationDate: '09-16-2014',
                        paymentPaidDate: '09-27-2014'
                    }
                ]
            },
            {
                billName: 'Rent',
                billId: 'af9afoahsdfasdfis',
                billSource: 'DL',
                dueDate: 1,
                amount: 1475.00,
                lateFee: 0,
                website: '',
                payments: [
                    {
                        paymentId: 'payhonda1',
                        paymentDueDate: '11-27-2014',
                        paymentFilingDate: '11-12-2014',
                        paymentLastNotificationDate: '11-12-2014',
                        paymentPaidDate: '11-26-2014'
                    },
                    {
                        paymentId: 'payhonda2',
                        paymentDueDate: '10-27-2014',
                        paymentFilingDate: '10-12-2014',
                        paymentLastNotificationDate: '10-14-2014',
                        paymentPaidDate: '10-25-2014'

                    },
                    {
                        paymentId: 'payhonda3',
                        paymentDueDate: '09-27-2014',
                        paymentFilingDate: '09-12-2014',
                        paymentLastNotificationDate: '09-16-2014',
                        paymentPaidDate: '09-27-2014'
                    }
                ]
            },
            {
                billName: 'Comcast',
                billId: 'klajfasljflasdlj',
                billSource: 'Comcast',
                dueDate: 22,
                amount: 89.99,
                lateFee: 0,
                website: 'www.comcast.com',
                payments: [
                    {
                        paymentId: 'payhonda1',
                        paymentDueDate: '11-27-2014',
                        paymentFilingDate: '11-12-2014',
                        paymentLastNotificationDate: '11-12-2014',
                        paymentPaidDate: '11-26-2014'
                    },
                    {
                        paymentId: 'payhonda2',
                        paymentDueDate: '10-27-2014',
                        paymentFilingDate: '10-12-2014',
                        paymentLastNotificationDate: '10-14-2014',
                        paymentPaidDate: '10-25-2014'

                    },
                    {
                        paymentId: 'payhonda3',
                        paymentDueDate: '09-27-2014',
                        paymentFilingDate: '09-12-2014',
                        paymentLastNotificationDate: '09-16-2014',
                        paymentPaidDate: '09-27-2014'
                    }
                ]
            },
            {
                billName: 'Sprint',
                billId: 'uewiurhkjvnkds',
                billSource: 'Sprint Cellular',
                dueDate: 15,
                amount: 79.99,
                lateFee: 0,
                website: 'www.sprint.com',
                payments: [
                    {
                        paymentId: 'payhonda1',
                        paymentDueDate: '11-27-2014',
                        paymentFilingDate: '11-12-2014',
                        paymentLastNotificationDate: '11-12-2014',
                        paymentPaidDate: '11-26-2014'
                    },
                    {
                        paymentId: 'payhonda2',
                        paymentDueDate: '10-27-2014',
                        paymentFilingDate: '10-12-2014',
                        paymentLastNotificationDate: '10-14-2014',
                        paymentPaidDate: '10-25-2014'

                    },
                    {
                        paymentId: 'payhonda3',
                        paymentDueDate: '09-27-2014',
                        paymentFilingDate: '09-12-2014',
                        paymentLastNotificationDate: '09-16-2014',
                        paymentPaidDate: '09-27-2014'
                    }
                ]
            }
        ]
    };

    $scope.currentBill = $scope.user.bills[0];

    $scope.currentPayments = $scope.user.bills[0].payments;

    $scope.currentPayment = $scope.currentPayments[0];

    $scope.sortProp = 'paymentPaidDate';

    $scope.displayLimit = 10;

    $scope.reverse = true;

    $scope.sortBy = function (property) {
        $scope.reverse = !$scope.reverse;
        $scope.sortProp = property;
    };

    $scope.$watch('currentBill', function (value) {
        for (var i = 0; i < $scope.user.bills.length; i++) {
            if ($scope.user.bills[i].billId === value) {
                $scope.currentPayments = $scope.user.bills[i].payments;
                $scope.currentPayment = $scope.user.bills[i].payments[0];
                break;
            }
        }
    });



//    $scope.setCurrentBill = function (index) {
//        if (index >= 0 && index < $scope.user.bills.length) {
//            $scope.currentBill = $scope.user.bills[index];
//            $scope.currentPayments = $scope.user.bills[index].payments;
//            $scope.setCurrentPayment(index);
//        }
//    };
//
//    $scope.setCurrentPayment = function (index) {
//        if (index >= 0 && index < $scope.currentPayments.length) {
//            $scope.currentPayment = $scope.currentPayments[index];
//        }
//    };

});
