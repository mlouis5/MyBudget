$.ajax({
    type: "GET",
    url: "http://localhost:8080/BudgetServices/user",
    //data: "firstName=Aidy&lastName=F", // the data in form-encoded format, ie as it would appear on a querystring
    //contentType: "application/x-www-form-urlencoded; charset=UTF-8", // if you are using form encoding, this is default so you don't need to supply it
    dataType: "json", // the data type we want back, so text.  The data will come wrapped in xml
    success: function (data) {
        console.log(data);
        //$("#searchresultsA").html(data); // show the string that was returned, this will be the data inside the xml wrapper
    }
});


var myBudgetApp = angular.module('myBudgetApp', []);


myBudgetApp.controller('MyBudgetCtrl', function ($scope) {
    $scope.user = {
        userFname: "MacDerson",
        userLname: "Louis",
        bills: [
            {
                billDueDate: 22,
                billGracePeriod: 10,
                billId: "13CCAB2B845847A1B14CA16CA9D74F1E",
                billInterestRate: 1.99,
                billIsRevolving: false,
                billIsSatisfied: false,
                billLateFeeAmount: 35,
                billName: "Car Payment",
                billNumPayments: 8,
                billSitePwd: "Notorious1982",
                billSiteUserId: "macdersonlouis@gmail.com",
                billSource: "honda financial services",
                billType: "Auto Loan",
                billWebsite: "www.hondafinancialservices.com",
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
                    }
                ]
            },
            {
                billDueDate: 1,
                billGracePeriod: 10,
                billId: "13CCAB2B845847A1B14CA16CA9D74F1F",
                billInterestRate: 1.99,
                billIsRevolving: false,
                billIsSatisfied: false,
                billLateFeeAmount: 35,
                billName: "Rent",
                billNumPayments: 12,
                billSitePwd: "",
                billSiteUserId: "macdersonlouis@gmail.com",
                billSource: "DL",
                billType: "Rent",
                billWebsite: "",
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
                    }
                ]
            },
            {
                billDueDate: 22,
                billGracePeriod: 10,
                billId: "13CCAB2B845847A1B14CA16CA9D74F1G",
                billInterestRate: 1.99,
                billIsRevolving: false,
                billIsSatisfied: false,
                billLateFeeAmount: 35,
                billName: "Car Payment",
                billNumPayments: 8,
                billSitePwd: "Notorious1982",
                billSiteUserId: "macdersonlouis@gmail.com",
                billSource: "honda financial services",
                billType: "Auto Loan",
                billWebsite: "www.hondafinancialservices.com",
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
                    }
                ]
            },
            {
                billDueDate: 22,
                billGracePeriod: 10,
                billId: "13CCAB2B845847A1B14CA16CA9D74F1H",
                billInterestRate: 1.99,
                billIsRevolving: false,
                billIsSatisfied: false,
                billLateFeeAmount: 35,
                billName: "Car Payment",
                billNumPayments: 8,
                billSitePwd: "Notorious1982",
                billSiteUserId: "macdersonlouis@gmail.com",
                billSource: "honda financial services",
                billType: "Auto Loan",
                billWebsite: "www.hondafinancialservices.com",
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
                    }
                ]
            }
        ]
    };

    
    $scope.currentBill = $scope.user.bills[0];
    $scope.billIdentifer = $scope.currentBill.billId;
    
    $scope.displayLimit = 10;

    $scope.minPaymentIndex = 0;

    $scope.currentPayments = $scope.currentBill.payments
            .slice($scope.minPaymentIndex);

    $scope.currentPayment = $scope.currentPayments[0];

    $scope.sortProp = 'paymentId';
    
    $scope.reverse = true;

    $scope.sortBy = function (property) {
        $scope.reverse = !$scope.reverse;
        $scope.sortProp = property;
    };

    $scope.$watch('billIdentifer', function (value) {
        for (var i = 0; i < $scope.user.bills.length; i++) {
            if ($scope.user.bills[i].billId === value) {
                $scope.minPaymentIndex = 0;
                $scope.currentBill = $scope.user.bills[i];
                $scope.currentPayments = $scope.currentBill.payments.slice($scope.minPaymentIndex);
                $scope.currentPayment = $scope.currentPayments[$scope.minPaymentIndex];
                break;
            }
        }
    });

    $scope.pageUp = function () {
        $scope.minPaymentIndex = $scope.minPaymentIndex + $scope.displayLimit
                < $scope.currentPayments.length ? ($scope.minPaymentIndex + $scope.displayLimit)
                : $scope.minPaymentIndex;

        $scope.setPayments();
    };

    $scope.pageDown = function () {
        $scope.minPaymentIndex = $scope.minPaymentIndex - $scope.displayLimit
                >= 0 ? ($scope.minPaymentIndex - $scope.displayLimit)
                : 0;

        $scope.setPayments();
    };

    $scope.setPayments = function () {
        $scope.currentPayments = $scope.currentBill.payments
                .slice($scope.minPaymentIndex);
    };

});
