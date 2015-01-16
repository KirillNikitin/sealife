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


    app.controller('itemsAndPrice', ['$scope', '$rootScope' ,function($scope, $rootScope){
        $scope.item1Price = parseFloat(695);
        $scope.item2Price = parseFloat(347);

        $scope.item1Quantity = parseInt(1);
        $scope.item2Quantity = parseInt(1);

        $rootScope.ite = 5;

        $scope.discount = false;
        $rootScope.discount = false;
        $scope.$watch('item1Quantity', function(){
            if($scope.discount == true) {
                $rootScope.rabatt = ''
                if(parseInt($scope.item1Quantity)) {
                    $scope.item1Quantity = parseFloat($scope.item1Quantity);
                    $scope.item1Total = $scope.item1Price * $scope.item1Quantity;

                    $scope.subtotal = $scope.item1Total + $scope.item2Total;
                    $scope.moms = parseFloat(($scope.subtotal / 5).toFixed(2));

                    $scope.totalsumnumber = $scope.subtotal + 29;
                    $scope.totalmoms = $scope.moms + 6;
                    $scope.totalsumnumber = Math.round(($scope.totalsumnumber)*=0.8);
                    $scope.totalmoms = (($scope.totalmoms)*=0.8).toFixed(2);

                    $rootScope.subtotal = $scope.item1Total + $scope.item2Total;
                    $rootScope.moms = parseFloat(($scope.subtotal / 5).toFixed(2));

                    $rootScope.totalsumnumber = $scope.subtotal + 29;
                    $rootScope.totalmoms = $scope.moms + 6;
                    $rootScope.totalsumnumber = Math.round(($scope.totalsumnumber)*=0.8);
                    $rootScope.totalmoms = (($scope.totalmoms)*=0.8).toFixed(2);

                } else {
                    alert('Please, enter an numeric value.');
                    $scope.item1Quantity = 0;
                    $scope.item1Total = 0;

                    $scope.subtotal = $scope.item1Total + $scope.item2Total;
                    $scope.moms = parseFloat(($scope.subtotal / 5).toFixed(2));

                    $scope.totalsumnumber = $scope.subtotal + 29;
                    $scope.totalmoms = $scope.moms + 6;
                    $scope.totalsumnumber = Math.round(($scope.totalsumnumber)*=0.8);
                    $scope.totalmoms = (($scope.totalmoms)*=0.8).toFixed(2);

                    $rootScope.subtotal = $scope.item1Total + $scope.item2Total;
                    $rootScope.moms = parseFloat(($scope.subtotal / 5).toFixed(2));

                    $rootScope.totalsumnumber = $scope.subtotal + 29;
                    $rootScope.totalmoms = $scope.moms + 6;
                    $rootScope.totalsumnumber = Math.round(($scope.totalsumnumber)*=0.8);
                    $rootScope.totalmoms = (($scope.totalmoms)*=0.8).toFixed(2);
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
                    $scope.totalsumnumber = Math.round(($scope.totalsumnumber)*=0.8);
                    $scope.totalmoms = (($scope.totalmoms)*=0.8).toFixed(2);

                    $rootScope.subtotal = $scope.item1Total + $scope.item2Total;
                    $rootScope.moms = parseFloat(($scope.subtotal / 5).toFixed(2));

                    $rootScope.totalsumnumber = $scope.subtotal + 29;
                    $rootScope.totalmoms = $scope.moms + 6;
                    $rootScope.totalsumnumber = Math.round(($scope.totalsumnumber)*=0.8);
                    $rootScope.totalmoms = (($scope.totalmoms)*=0.8).toFixed(2);


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

                    $rootScope.totalsumnumber = $scope.subtotal + 29;
                    $rootScope.totalmoms = $scope.moms + 6;
                    $rootScope.totalsumnumber = Math.round(($scope.totalsumnumber)*=0.8);
                    $rootScope.totalmoms = (($scope.totalmoms)*=0.8).toFixed(2);
                }
            } else {
                if(parseInt($scope.item2Quantity)) {
                    $scope.item2Quantity = parseFloat($scope.item2Quantity);
                    $scope.item2Total = $scope.item2Price * $scope.item2Quantity;

                    $scope.subtotal = $scope.item1Total + $scope.item2Total;
                    $scope.moms = parseFloat(($scope.subtotal / 5).toFixed(2));;

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
                $scope.discount = true;
                $rootScope.discount = true;
                $scope.totalsumnumber = Math.round(($scope.totalsumnumber)*=0.8);
                $scope.totalmoms = parseFloat((($scope.totalmoms)*=0.8).toFixed(2));
                $scope.rabattHide = false;
                $scope.rabattText = "You've got a 20% discount!";

                $rootScope.totalsumnumber = Math.round(($scope.totalsumnumber)*=0.8);
                $rootScope.totalmoms = parseFloat((($scope.totalmoms)*=0.8).toFixed(2));

            } else {
                $scope.rabattHide = false;
                $scope.rabattText = 'You typed wrong discount code';
            }

        };
        $rootScope.subAddress = false;
        $rootScope.subtlebutton = function(){
            $rootScope.subAddress = true;
        };
        //$scope.$watch('rabattkod', function(){
        //    if ($scope.rabattkod != '20prcntrabatt') {
        //        $scope.discount = false;
        //        $scope.totalsumnumber = $scope.subtotal + 29;
        //        $scope.totalmoms = $scope.moms + 6;
        //    }
        //});
        //$scope.rabattkod

    }]);

    app.controller('valjLand', ['$scope', function($scope){
        $scope.selectLand = function() {
            console.log($scope.land);
            var target = angular.element(event.target);
           // event.target.parent().addClass('asd');
            console.log(target);
            console.log(event.target);
            //var label = angular.element((event.target).parentNode);
            //label.toggleClass('asd');
        };

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

        $scope.fuh = function(){
            console.log($scope.customerName);
        };

    }]);

    app.controller('bill', ['$scope', '$rootScope', function($scope, $rootScope){
        console.log($rootScope.totalsumnumber);
        console.log($rootScope.moms);

        $rootScope.confirm = function(){
            console.log("Total sum: "+$rootScope.totalsumnumber+" kr.; Total moms: "+$rootScope.moms+" kr.; Name: "+$rootScope.customerName+"; Surename: "+
            $rootScope.customerSureName+"; Address: "+$rootScope.customerAddress+"; Extra Address: "+$rootScope.extraAddress+"; Postcode: "+$rootScope.postCode+"; Ort: "+$rootScope.ort+"; E-mail: "+$rootScope.email+"; Discount: "+ );

            }

    }])




})();
