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

    $scope.menuState = false;
    $scope.handleMenu = function (id) {
        if (!$scope.menuState) {
            $(id).animate({
                height: '500px'
            }, 500);
            $(id + " .accordion").animate({
                height: '450px'
            }, 500);
            $(id + " .accordion div").hide(1);
            $scope.menuState = true;
        } else {
            $(id).animate({
                height: '50px'
            }, 500);
            $(id + " .accordion").animate({
                height: '0px'
            }, 500);
            $scope.menuState = false;
        }
    };

    $scope.openAccordion = function (className, id) {
        if ($scope.menuState) {
            $(className).each(function (index, element) {
                var elem = $(element);
                console.log(elem.children());
                if (elem.children().attr("id") === id) {
                    elem.animate({
                        width: "740px",
                        'fontSize': '20px'
                    }, 500);
                    $(elem.find("div")).show(1);
                } else {
                    elem.animate({
                        width: "50px",
                        fontSize: '8px'
                    }, 500);
                    $(elem.find("div")).hide(1);
                }
            });
        }
    };

    $scope.bill = {
        billId: "testidueodjcmvnhdjdfk",
        billName: "test bill",
        billSource: "test source",
        billType: "test type",
        billDueDate: 27,
        billIsRevolving: true,
        billNumPayments: 8,
        billAmount: 400.00,
        billLateFeeAmount: 12,
        billInterestRate: 1.99,
        billGracePeriod: 10,
        billWebsite: "http://www.test.com",
        billSiteUserId: "testUserId",
        billSitePwd: "testPwd",
        billIsSatisfied: true,
        billMailAddress: {
            addressId: 1,
            addressLine1: "14 ibeck court",
            addressCity: "new city",
            addressState: "NY",
            addressZipcode: "08086"
        },
        billOwner: {
            userId: "testuserid",
            userFname: "macderson",
            userLname: "louis",
            userPhone: "6095094605",
            userEmail: "macdersonlouis@gmail.com",
            userPreferredContact: "TEXT"
                    //incomeList: [],
                    //billList: [],
                    //paymentList: [],
                    //userAddress: [],
                    //paycheckList: []
        }//,
        //paymentList: []
    };

    $scope.draftSocket;
    $scope.isInit = false;

    $scope.submitBill = function () {
        console.log("Submitting bill");

        if ($scope.isInit === false) {
            initSockets();
        }else{
            $scope.draftSocket.send("testing");
        }
        
        function initSockets() {
            var socketLink = "ws://" + document.location.host + document.location.pathname + "budget/mac";
            console.log(socketLink);
            $scope.draftSocket = new WebSocket(socketLink);
            $scope.draftSocket.onopen = function (evt) {
                console.log(evt.data);
            };
            $scope.draftSocket.onmessage = function (evt) {
                console.log(evt.data);
            };
            $scope.draftSocket.onerror = function (evt) {
                console.log(evt.data);
            };
            $scope.draftSocket.onclose = function (evt) {
                //onMessage(evt.data);
            };
            $scope.isInit = true;
        }

//        $.ajax({
//            type: "POST",
//            url: "http://localhost:8080/bills/bill",
//            data: JSON.stringify($scope.bill),
//            contentType: 'text/plain',
//            //dataType: 'text',
//            success: function (data) {
//                console.log(data);
//                //$("#searchresultsA").html(data); // show the string that was returned, this will be the data inside the xml wrapper
//            },
//            error: function(xhr, status, errorThrown){
//                console.log(status);
//                console.log(errorThrown);
//            }
//        });
    };
});
