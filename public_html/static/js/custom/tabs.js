$(document).ready(function () {
    'use strict';
    
    var tabs = [];
        $('#resourceTabs a').each(function(index, element){
            tabs.push($(this));
        });
        
        $('#collectiveTabs a').each(function(index, element){
            tabs.push($(this));
        });
    
    function init() {
        $("#resourceContent div").hide(); // Initially hide all content
        $("#resourceTabs li:first").attr("id", "current"); // Activate first tab
        $("#resourceContent div:first").fadeIn(); // Show first tab content
        $('#resourceTabs a').click(function (e) {
            e.preventDefault();
            var index = $(this).index();
            $("#resourceContent div").hide(); //Hide all content
            $("#resourceTabs li").attr("id", ""); //Reset id's           
            $(this).parent().attr("id", "current"); // Activate this           
            $('#' + $(this).attr('title')).fadeIn(); // Show content for current tab
            
            $("#collectiveContent div").hide(); //Hide all content
            $("#collectiveTabs li").attr("id", ""); //Reset id's
            $('#collectiveTabs a:nth-child(' + index + ')' ).parent().attr("id", "current");
            $($('#collectiveTabs a:nth-child(' + index + ')').attr('title')).fadeIn(); // Show content for current tab
        });



        $("#collectiveContent div").hide(); // Initially hide all content
        $("#collectiveTabs li:first").attr("id", "current"); // Activate first tab
        $("#collectiveContent div:first").fadeIn(); // Show first tab content
        $('#collectiveTabs a').click(function (e) {
            e.preventDefault();
            $("#collectiveContent div").hide(); //Hide all content
            $("#collectiveTabs li").attr("id", ""); //Reset id's
            $('#' + $(this).attr('title')).fadeIn(); // Show content for current tab
            
            $("#resourceContent div").hide(); //Hide all content
            $("#resourceTabs li").attr("id", ""); //Reset id's
            $('#resourceTabs a:nth-child(' + index + ')' ).parent().attr("id", "current");
            $($('#resourceTabs a:nth-child(' + index + ')').attr('title')).fadeIn(); // Show content for current tab
        });
    }
    
    init();
});