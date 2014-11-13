
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
                website: 'www.hondafinancialservices.com',
                payments: [
                    {
                        paymentId: 'payhonda1',
                        paymentDate: '11-27-2014',
                        filingDate: '11-12-2014',
                        notifiedOn: '11-12-2014',
                        paidOn: '11-26-2014'
                    },
                    {
                        paymentId: 'payhonda2',
                        paymentDate: '10-27-2014',
                        filingDate: '10-12-2014',
                        notifiedOn: '10-14-2014',
                        paidOn: '10-25-2014'
                        
                    },
                    {
                        paymentId: 'payhonda3',
                        paymentDate: '09-27-2014',
                        filingDate: '09-12-2014',
                        notifiedOn: '09-16-2014',
                        paidOn: '09-27-2014'
                        
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
                        paymentId: 'payrent1',
                        paymentDate: '11-27-2014',
                        filingDate: '11-12-2014',
                        notifiedOn: '11-12-2014',
                        paidOn: '11-26-2014'
                    },
                    {
                        paymentId: 'payrent2',
                        paymentDate: '10-27-2014',
                        filingDate: '10-12-2014',
                        notifiedOn: '10-14-2014',
                        paidOn: '10-25-2014'
                    },
                    {
                        paymentId: 'payrent3',
                        paymentDate: '09-27-2014',
                        filingDate: '09-12-2014',
                        notifiedOn: '09-16-2014',
                        paidOn: '09-27-2014'
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
                        paymentId: 'paycomcast1',
                        paymentDate: '11-27-2014',
                        filingDate: '11-12-2014',
                        notifiedOn: '11-12-2014',
                        paidOn: '11-26-2014'
                    },
                    {
                        paymentId: 'paycomcast2',
                        paymentDate: '10-27-2014',
                        filingDate: '10-12-2014',
                        notifiedOn: '10-14-2014',
                        paidOn: '10-25-2014'
                    },
                    {
                        paymentId: 'paycomcast3',
                        paymentDate: '09-27-2014',
                        filingDate: '09-12-2014',
                        notifiedOn: '09-16-2014',
                        paidOn: '09-27-2014'
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
                        paymentId: 'paysprint1',
                        paymentDate: '09-22-2014',
                        filingDate: '09-09-2014',
                        notifiedOn: '09-11-2014',
                        paidOn: '09-15-2014'
                    },
                    {
                        paymentId: 'paysprint2',
                        paymentDate: '10-22-2014',
                        filingDate: '10-10-2014',
                        notifiedOn: '10-12-2014',
                        paidOn: '10-22-2014'
                    },
                    {
                        paymentId: 'paysprint3',
                        paymentDate: '09-22-2014',
                        filingDate: '09-09-2014',
                        notifiedOn: '09-11-2014',
                        paidOn: '09-15-2014'
                    }
                ]
            }
        ]
    };

    $scope.currentBill = $scope.user.bills[0];
    
    $scope.currentPayments = $scope.user.bills[0].payments;
    
    $scope.currentPayment = $scope.currentPayments[0];
    
    $scope.setCurrentBill = function (index) {
        if (index >= 0 && index < $scope.user.bills.length) {
            $scope.currentBill = $scope.user.bills[index];
            $scope.currentPayments = $scope.user.bills[index].payments;
            $scope.setCurrentPayment(index);
        }
    };
    
    $scope.setCurrentPayment = function (index) {
        if (index >= 0 && index < $scope.currentPayments.length) {
            $scope.currentPayment = $scope.currentPayments[index];
        }
    };
    
//    $scope.syncTabs = function(tabIndex, tabContainerName, tabName, contentName){//0, "resourceTabs"
//        $("#resourceContent div").hide(); // Initially hide all content
//        $("#resourceTabs li:first").attr("id", "current"); // Activate first tab
//        $("#resourceContent div:first").fadeIn(); // Show first tab content
//        $('#resourceTabs a').click(function (e) {
//            e.preventDefault();
//            $("#resourceContent div").hide(); //Hide all content
//            $("#resourceTabs li").attr("id", ""); //Reset id's
//            $(this).parent().attr("id", "current"); // Activate this
//            $('#' + $(this).attr('title')).fadeIn(); // Show content for current tab
//        });
//    }
});

$(document).ready(function () {
    $('.nav li').click(function () {
        $(this).addClass('active')
                .siblings()
                .removeClass('active');
    });
});
