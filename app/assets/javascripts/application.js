//= require jquery
//= require jquery_ujs
//= require bootstrap
//= require underscore

var handleLinksWithJS = function () {
  // Handle left nav links using javascript (fixes guided mode issue on iPad)
  var a=$('a[href]:not([href^="\\#"])');

  for(var i=0;i<a.length;i++)
  {
    a[i].onclick=function()
    {
      window.location=this.getAttribute("href");
      return false;
    }
  }
}

$(function() {
  handleLinksWithJS();
  document.csrf = $('meta[name="csrf-token"]')[0].content;
});
