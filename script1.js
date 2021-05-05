function showanswer() {
    var t1 = $("#txt1").val();
    var t2 = $("#txt1").val();
    var t3 = $("#txt1").val();
    var t4 = $("#txt1").val();
    var t5 = $("#txt1").val();
    var ans = parseInt(t1) + parseInt(t2) + parseInt(t3) + parseInt(t4) + parseInt(t5);

    $("#txt6").val(ans);
  }

  function cleartxt() {
    $("#txt1").val("");
    $("#txt2").val("");
    $("#txt3").val("");
    $("#txt4").val("");
    $("#txt5").val("");
  }