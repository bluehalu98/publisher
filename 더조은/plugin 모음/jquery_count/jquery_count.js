function Jquery_count(obj, digit, intervalDelay) {
  this.obj = $(obj)
  var obj = $(obj)
  var digit = digit
  var cnt = ""
  var c
  var c_output
  var t
  var gap
  obj.each(function () {
    $(this).attr("data-cnt-value", $(this).text())
    $(this).attr("data-cnt-current", "0")
    $(this).attr("data-cnt-target", "0")
    cnt = ""
    for (i = 1; i <= 3; i++) {
      cnt += "0"
    }
    $(this).text(cnt)
  })//each

  setInterval(function () {
    obj.each(function () {
      c = parseFloat(parseFloat($(this).attr("data-cnt-current")).toFixed(3))
      t = parseFloat($(this).attr("data-cnt-target"))
      c += (t - c) * 0.2

      $(this).attr("data-cnt-current", c)
      c_output = String(Math.round(c))
      gap = digit - c_output.length
      for (i = 1; i <= gap; i++) {
        c_output = "0" + c_output
      }
      $(this).text(c_output)
    })//each
  }, intervalDelay)
}//fn

Jquery_count.prototype.start = function () {
  var t
  this.obj.each(function () {
    t = $(this).attr("data-cnt-value")
    $(this).attr("data-cnt-target", t)
  })
}

Jquery_count.prototype.reverse = function () {
  this.obj.each(function () {
    $(this).attr("data-cnt-target", 0)
  })
}