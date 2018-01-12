$(document).ready(function() {

  var formGroups = ["#genderGroup", "#politicalGroup", "#ageGroup", "#bobrGroup"];
  var activeGroup = 0;
  var getNewChar = function() {
    var assessString = function(pref) {
      if (typeof(pref) === "undefined" || pref === ".no-matter") {
        return "";
      } else {
        return pref;
      };
    };


    var newGenderPref = assessString($("#gender").val());
    var newPoliPref = assessString($("#political").val());
    var newAgePref = assessString($("input:radio[name=age]:checked").val());
    var newTypePref = assessString($("input:radio[name=bobr]:checked").val());
    return newGenderPref + newPoliPref + newAgePref + newTypePref;
  };

  $("#form").submit(function(event) {

    $(".col-md-3").hide();
    var newCharPref = getNewChar();
    $(newCharPref).show();
    $(formGroups[activeGroup]).hide();
    $(formGroups[activeGroup+1]).show();
    activeGroup += 1;

    event.preventDefault();
  });

  $("#restart").click(function(event) {

    // var activeGroup = 0;
    // newCharPref = "";
    // $(".col-md-3").hide();
    // $(".form-group").hide();
    // $("#genderGroup").show();
    location.reload();
  });
});
