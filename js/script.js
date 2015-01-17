( function() {
    var app = angular.module('Cart', []);

    //app.directive( 'myDirective', function() {
    //    var linkFn;
    //    linkFn = function( scope, element, attrs ) {
    //
    //        angular.element( '#page' ).removeClass( 'hide' );
    //        angular.element( 'a' ).addClass( 'hide' );
    //    };
    //
    //    return {
    //        restrict: 'C',
    //        link: linkFn
    //    }
    //});

    app.filter('removeComma', function() {
        return function(input) {
            return input.replace(/,/g, '');
        };
    });

    app.controller('itemsAndPrice', ['$scope', '$rootScope' ,function($scope, $rootScope){
        $scope.item1Price = parseFloat(695);
        $scope.item2Price = parseFloat(347);

        $scope.item1Quantity = parseInt(1);
        $scope.item2Quantity = parseInt(1);

        $rootScope.rabatt = 'None';

        $scope.discount = false;
        $rootScope.discount = false;
        $scope.$watch('item1Quantity', function(){
            if($scope.discount == true) {
                if(parseInt($scope.item1Quantity)) {
                    $scope.item1Quantity = parseFloat($scope.item1Quantity);
                    $scope.item1Total = $scope.item1Price * $scope.item1Quantity;

                    $scope.subtotal = $scope.item1Total + $scope.item2Total;
                    $scope.moms = parseFloat(($scope.subtotal / 5).toFixed(2));

                    $scope.totalsumnumber = $scope.subtotal + 29;
                    $scope.totalmoms = $scope.moms + 6;
                    $scope.totalsumnumber = parseFloat((($scope.totalsumnumber)*=0.8).toFixed(2));
                    $scope.totalmoms = parseFloat((($scope.totalmoms)*=0.8).toFixed(2));

                    $rootScope.subtotal = $scope.item1Total + $scope.item2Total;
                    $rootScope.moms = parseFloat(($scope.subtotal / 5).toFixed(2));

                    $rootScope.totalsumnumber = $scope.totalsumnumber;
                    $rootScope.totalmoms = $scope.totalmoms;


                } else {
                    alert('Please, enter an numeric value.');
                    $scope.item1Quantity = 0;
                    $scope.item1Total = 0;

                    $scope.subtotal = $scope.item1Total + $scope.item2Total;
                    $scope.moms = parseFloat(($scope.subtotal / 5).toFixed(2));

                    $scope.totalsumnumber = $scope.subtotal + 29;
                    $scope.totalmoms = $scope.moms + 6;
                    $scope.totalsumnumber =  parseFloat((($scope.totalsumnumber)*=0.8).toFixed(2));
                    $scope.totalmoms = parseFloat((($scope.totalmoms)*=0.8).toFixed(2));

                    $rootScope.subtotal = $scope.item1Total + $scope.item2Total;
                    $rootScope.moms = parseFloat(($scope.subtotal / 5).toFixed(2));

                    $rootScope.totalsumnumber = $scope.totalsumnumber;
                    $rootScope.totalmoms = $scope.totalmoms;

                }
            } else {
                if(parseInt($scope.item1Quantity)) {
                    $scope.item1Quantity = parseFloat($scope.item1Quantity);
                    $scope.item1Total = $scope.item1Price * $scope.item1Quantity;

                    $scope.subtotal = $scope.item1Total + $scope.item2Total;
                    $scope.moms = parseFloat(($scope.subtotal / 5).toFixed(2));

                    $scope.totalsumnumber = $scope.subtotal + 29;
                    $scope.totalmoms = $scope.moms + 6;

                    $rootScope.subtotal = $scope.item1Total + $scope.item2Total;
                    $rootScope.moms = parseFloat(($scope.subtotal / 5).toFixed(2));
                    //
                    $rootScope.totalsumnumber = $scope.subtotal + 29;
                    $rootScope.totalmoms = $scope.moms + 6;

                } else {
                    alert('Please, enter an numeric value.');
                    $scope.item1Quantity = 0;
                    $scope.item1Total = 0;

                    $scope.subtotal = $scope.item1Total + $scope.item2Total;
                    $scope.moms = parseFloat(($scope.subtotal / 5).toFixed(2));

                    $scope.totalsumnumber = $scope.subtotal + 29;
                    $scope.totalmoms = $scope.moms + 6;

                    $rootScope.subtotal = $scope.item1Total + $scope.item2Total;
                    $rootScope.moms = parseFloat(($scope.subtotal / 5).toFixed(2));

                    $rootScope.totalsumnumber = $scope.subtotal + 29;
                    $rootScope.totalmoms = $scope.moms + 6;
                }
            }

        });


        $scope.$watch('item2Quantity', function(){
            if($scope.discount == true) {
                if(parseInt($scope.item2Quantity)) {
                    $scope.item2Quantity = parseFloat($scope.item2Quantity);
                    $scope.item2Total = $scope.item2Price * $scope.item2Quantity;

                    $scope.subtotal = $scope.item1Total + $scope.item2Total;
                    $scope.moms = parseFloat(($scope.subtotal / 5).toFixed(2));

                    $scope.totalsumnumber = $scope.subtotal + 29;
                    $scope.totalmoms = $scope.moms + 6;
                    $scope.totalsumnumber =  parseFloat((($scope.totalsumnumber)*=0.8).toFixed(2));
                    $scope.totalmoms = parseFloat((($scope.totalmoms)*=0.8).toFixed(2));

                    $rootScope.subtotal = $scope.item1Total + $scope.item2Total;
                    $rootScope.moms = parseFloat(($scope.subtotal / 5).toFixed(2));

                    $rootScope.totalsumnumber = $scope.totalsumnumber;
                    $rootScope.totalmoms = $scope.totalmoms;



                } else {
                    alert('Please, enter an numeric value.');
                    $scope.item2Quantity = 0;
                    $scope.item2Total = 0;

                    $scope.subtotal = $scope.item1Total + $scope.item2Total;
                    $scope.moms = parseFloat(($scope.subtotal / 5).toFixed(2));

                    $scope.totalsumnumber = $scope.subtotal + 29;
                    $scope.totalmoms = $scope.moms + 6;
                    $scope.totalsumnumber = Math.round(($scope.totalsumnumber)*=0.8);
                    $scope.totalmoms = (($scope.totalmoms)*=0.8).toFixed(2);

                    $rootScope.subtotal = $scope.item1Total + $scope.item2Total;
                    $rootScope.moms = parseFloat(($scope.subtotal / 5).toFixed(2));

                    $rootScope.totalsumnumber = $scope.totalsumnumber;
                    $rootScope.totalmoms = $scope.totalmoms;

                }
            } else {
                if(parseInt($scope.item2Quantity)) {
                    $scope.item2Quantity = parseFloat($scope.item2Quantity);
                    $scope.item2Total = $scope.item2Price * $scope.item2Quantity;

                    $scope.subtotal = $scope.item1Total + $scope.item2Total;
                    $scope.moms = parseFloat(($scope.subtotal / 5).toFixed(2));

                    $scope.totalsumnumber = $scope.subtotal + 29;
                    $scope.totalmoms = $scope.moms + 6;

                    $rootScope.subtotal = $scope.item1Total + $scope.item2Total;
                    $rootScope.moms = parseFloat(($scope.subtotal / 5).toFixed(2));

                    $rootScope.totalsumnumber = $scope.subtotal + 29;
                    $rootScope.totalmoms = $scope.moms + 6;


                } else {
                    alert('Please, enter an numeric value.');
                    $scope.item2Quantity = 0;
                    $scope.item2Total = 0;

                    $scope.subtotal = $scope.item1Total + $scope.item2Total;
                    $scope.moms = parseFloat(($scope.subtotal / 5).toFixed(2));

                    $scope.totalsumnumber = $scope.subtotal + 29;
                    $scope.totalmoms = $scope.moms + 6;

                    $rootScope.subtotal = $scope.item1Total + $scope.item2Total;
                    $rootScope.moms = parseFloat(($scope.subtotal / 5).toFixed(2));

                    $rootScope.totalsumnumber = $scope.subtotal + 29;
                    $rootScope.totalmoms = $scope.moms + 6;
                }
            }


        });


        $scope.decrease1 = function(){
            if ($scope.item1Quantity > 0) {
                $scope.item1Quantity -= 1;
                if ($scope.item1Quantity == 0) {(angular.element(event.target)).addClass('zero');}
            }
            else {
                $scope.item1Quantity -= 0;
            }
        };
        $scope.increase1 = function(){
            $scope.item1Quantity += 1;
            (angular.element(event.target)).parent().find('a').removeClass('zero');



        };

        $scope.decrease2 = function(){
            if ($scope.item2Quantity > 0) {
                $scope.item2Quantity -= 1;
                if ($scope.item2Quantity == 0) {(angular.element(event.target)).addClass('zero');}
            }
            else {
                $scope.item2Quantity -= 0;
            }
        };

        $scope.increase2 = function(){
            $scope.item2Quantity += 1;
            (angular.element(event.target)).parent().find('a').removeClass('zero');
        };

        $scope.rabatt = function(){
            if ($scope.rabattkod == '20prcntrabatt') {
                $rootScope.rabatt = '20%';
                $scope.discount = true;
                $rootScope.discount = true;
                $scope.rabattHide = false;
                $scope.rabattText = "You've got a 20% discount!";

                $rootScope.totalsumnumber = ($scope.totalsumnumber)*=0.8;
                $rootScope.totalmoms = ($scope.totalmoms)*=0.8;

            } else {
                $rootScope.rabatt = 'None';
                $scope.rabattHide = false;
                $scope.rabattText = 'You typed wrong discount code';
            }

        };
        $rootScope.subAddress = false;
        $rootScope.subtlebutton = function(){
            $rootScope.subAddress = true;
        };

    }]);

    app.controller('valjLand', ['$scope', '$rootScope', function($scope, $rootScope){
        $scope.selectLand = function() {
            var target = angular.element(event.target);
        };

        $scope.$watch('land', function(){
            if ($scope.land == 'Danmark'){
                $scope.payMethod = 'Kortbetalning';
                if($scope.bankCardTypeTempDk) {
                    $scope.bankCardType = $scope.bankCardTypeTempDk;
                    $rootScope.bankCardType = $scope.bankCardType;
                } else {
                    $scope.bankCardType = null;
                    $rootScope.bankCardType = $scope.bankCardType;
                }
            }
            else {
                $scope.payMethod = $rootScope.payMethodTemp;
                $rootScope.payMethod = $rootScope.payMethodTemp;
                if($scope.bankCardTypeTempSv) {
                    $scope.bankCardType = $scope.bankCardTypeTempSv;
                    $rootScope.bankCardType = $scope.bankCardType;
                } else {
                    $scope.bankCardType = null;
                    $rootScope.bankCardType = $scope.bankCardType;
                }
            }
            $rootScope.land = $scope.land;
        });

        $scope.$watch('payMethod', function(){
            if ($scope.land == 'Sverige') {
                $rootScope.payMethodTemp = $scope.payMethod;
                $rootScope.bankCardType = $scope.bankCardTypeTempSv;
            }
            else {
                $rootScope.bankCardType = $scope.bankCardTypeTempDk;
            }
            $rootScope.payMethod = $scope.payMethod;
        });

        $scope.$watch('bankCardType', function(){
            if ($scope.land == 'Danmark'){
                $scope.bankCardTypeTempDk = $scope.bankCardType;
                $rootScope.bankCardType = $scope.bankCardType;
            }
            else {
                $scope.bankCardTypeTempSv = $scope.bankCardType;
                $rootScope.bankCardType = $scope.bankCardType;
            }
        });

        $scope.$watch('selectPayTimeType', function(){
            $rootScope.selectPayTimeType = $scope.selectPayTimeType;
        })






    }]);

    app.controller('customerInfo', ['$scope', '$rootScope', function($scope, $rootScope) {
        $rootScope.customerName = $scope.customerName;

        $scope.$watch('customerName', function(){$rootScope.customerName = $scope.customerName;});
        $scope.$watch('customerSureName', function(){$rootScope.customerSureName = $scope.customerSureName;});
        $scope.$watch('customerAddress', function(){$rootScope.customerAddress = $scope.customerAddress;});
        $scope.$watch('extraAddress', function(){$rootScope.extraAddress = $scope.extraAddress;});
        $scope.$watch('postCode', function(){$rootScope.postCode = $scope.postCode;});
        $scope.$watch('ort', function(){$rootScope.ort = $scope.ort;});
        $scope.$watch('email', function(){$rootScope.email = $scope.email;});
        $scope.$watch('emailConfirmation', function(){$rootScope.emailConfirmation = $scope.emailConfirmation;});
        $scope.$watch('mobilenumber', function(){$rootScope.mobilenumber = $scope.mobilenumber;});


    }]);

    app.controller('bill', ['$scope', '$rootScope', function($scope, $rootScope){
        $rootScope.arr = [];
        $rootScope.confirm = function(){
            if($rootScope.email != $rootScope.emailConfirmation) {
                alert('Check e-mail typing correctly.')
            }
            else {
                alert('Have a look at console. (Push F12 key, and choose "Console", The info array there!)');
                console.log("Total sum: "+parseFloat(($rootScope.totalsumnumber).toFixed(2))+" kr.; Total moms: "+parseFloat(($rootScope.moms).toFixed(2))+" kr.; Land: "+$rootScope.land+"; Paymethod: "+$rootScope.payMethod+"; Bank Card: "+$rootScope.bankCardType+"; Pay time type: "+$rootScope.selectPayTimeType+"; Delivery: Paket 2-5 dagar; Name: "
                +$rootScope.customerName+"; Surename: "+$rootScope.customerSureName+"; Address: "+$rootScope.customerAddress+"; Extra Address: "+$rootScope.extraAddress+"; Postcode: "+$rootScope.postCode+"; Ort: "+$rootScope.ort+"; E-mail: "+$rootScope.email+"; Discount: "+$rootScope.rabatt);
            }
        }
    }])




})();
