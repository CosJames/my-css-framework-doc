document.addEventListener("DOMContentLoaded", init());


function init() {
    applied();
    core();
}

function applied() {
    let opt = document.getElementsByClassName("navbar-option");

    opt[0].addEventListener("click", function() {
        window.location.href = "#!";
    })


    navbar.bottomBorderOnScroll(50, "navbar", "navbar flat")
}


function core() {
    let pageNo = 0;
    let app = angular.module("home",["ngRoute"]);

    app.config(function($routeProvider) {
        $routeProvider
        .when("/", {
            templateUrl : "Home.html"
        })
        .when("/Guide", {
            templateUrl : "Guide.html"
        })
    });

    app.controller("homeCtrl",["$scope", "$document",
        function($scope, $document){
  
            $scope.reloadNav = function() {
                let opt = document.getElementsByClassName("navbar-option");
                for(let i = 0; i < opt.length; i++) {
                    if(pageNo == i) {
                        opt[i].className = "navbar-option selected";
                    } else {
                        opt[i].className = "navbar-option";
                    }
                }
            }

            $scope.getStarted = function() {
                window.location.href = "#!Guide";
            }
            // Page Loads
            $scope.HomePage = function() {
                pageNo = 0;
                $scope.reloadNav(); 
            }

            $scope.GuidePage = function() {
                let sp = angular.element($document[0].querySelector("#snippets-pretzel"));
                let cj = angular.element($document[0].querySelector("#snippets-creativJS"));
                sp.val(`<link rel="stylesheet href="https://creaton.netlify.com/pretzelstyle/v0.0.1/pretzelstyle.min.css>`)
                cj.val(`<script src="https://creaton.netlify.com/creativJS/v0.0.1/creativJS.min.js"></script>`)
                pageNo = 0;
                $scope.reloadNav(); 


            }
            
        }
    ]);

}