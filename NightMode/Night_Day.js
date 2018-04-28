// ========================================
//                  READ ME
// ========================================
// SCRIPT REQUIRES JQUERY LIB - https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js
// SCRIPT REQUIRES JavaScript.Cookie.js - https://github.com/js-cookie/js-cookie

$(function() { 

    // LOOK FOR THE USERS LOCAL TIME & SET IN VARIABLE
    var dt = new Date();
    var time = dt.getHours() + ":" + dt.getMinutes();

    if(time === "8:00" && Cookies.get("state" == 0)) {

        // IF ITS PAST 8PM AND USER HAS NO COOKIE SET CALL FUNCTION NIGHTMODE
        state = 1;
        nightMode();
    }

    // ODR (On Document Ready) -- CHECK COOKIE VALUE
    if(Cookies.get("state") == 1) {

        // CALL FUNCTION NIGHTMODE & SET STATE = 1 (ON)
        nightMode();
        var state = 1;  

    } else { 

        // COOKIE WAS NOT SET TO 1 (ON) - SET IT TO 0 (OFF)
        var state = 0; 
    }

    $("input[type=checkbox]").on("click", function() {
        
        // OCC (On Checkbox Click)
        if (state == 0) {

        // IF CHECKBOX WAS SET TO 0 (OFF) TURN IT ON (1) & CALL FUNCTION NIGHTMODE
        state = 1;
        nightMode();
    
    } else if (state == 1) {
        
        // IF CHECKBOX WAS SET TO 1 (ON) TURN IT OFF (0) & CALL FUNCTION DAYMODE
        state = 0;  
        dayMode();
    };
  });
});

function nightMode() {

        // NIGHTMODE FUNCTION - CHANGE CHECKBOX TO ON (TRUE/1)
        // NIGHTMODE FUNCTION - ADD NIGHT CLASSES & SET COOKIE 
    
        // EXAMPLES
        $('#nightswtch').prop('checked', true);
        $("body").addClass("darkSwitch-body");
     
        Cookies.set('state', 1, { expires: 7 });

}

function dayMode() {

        // DAYMODE FUNCTION - REMOVE NIGHT CLASSES & SET COOKIE 
        // EXAMPLES
        $("body").removeClass("darkSwitch-body");
        $("#myTopnav").removeClass("darkSwitch-topnav");

        Cookies.set('state', 0, { expires: 7 });

}
