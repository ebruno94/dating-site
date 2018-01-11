


$(document).ready(function() {

  var getNewChar = function() {

    var assessString = function(pref) {

      if (typeof(pref) === "undefined") {
        return "";
      } else {
        return pref;
      };
    };

    var newGenderPref = assessString($("#gender").val());
    var newPoliPref = assessString($("#political").val());
    var newAgePref = assessString($("input:radio[name=age]:checked").val());
    var newTypePref = assessString($("input:radio[name=bobr]:checked").val());
    return newCharPref = "." + newGenderPref + "." + newPoliPref + "." + newAgePref + "." + newTypePref;

    console.log(newCharPref);
  };
  
  $("#form").submit(function(event) {

    var newCharPref = getNewChar();
    $(newCharPref).show();
    console.log(newCharPref);
    event.preventDefault();
  });
});
