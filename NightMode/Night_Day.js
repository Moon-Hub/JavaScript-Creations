// ========================================
//                  READ ME
// ========================================
// SCRIPT REQUIRES JQUERY LIB - https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js
// SCRIPT REQUIRES JavaScript.Cookie.js - https://github.com/js-cookie/js-cookie

$(function() { 

    // ODR (On Document Ready) -- CHECK COOKIE VALUE
    if(Cookies.get("state") == 1) {

        // CALL FUNCTION NIGHTMODE & SET STATE = 1 (ON)
        nightMode();
        var state = 1;  

    } else { 

        // COOKIE WAS NOT SET TO 1 (ON) - SET IT TO 0 (OFF)
        var state = 0; 
    }

    $("#nightswtch").on("click", function() {
        
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
        
        // EXAMPLE
        $('#nightswtch').prop('checked', true);
        $("body").addClass("darkSwitch-body");
       
        Cookies.set('state', 1, { expires: 7 });


}

function dayMode() {

        // DAYMODE FUNCTION - REMOVE NIGHT CLASSES & SET COOKIE 
        
        // EXAMPLE
        $("body").removeClass("darkSwitch-body");

        Cookies.set('state', 0, { expires: 7 });

}
