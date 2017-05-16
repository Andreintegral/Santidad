var min=16;
var max=28;
function increaseFontSize() {

   var p = document.getElementsByTagName('article');
   for(i=0;i<p.length;i++) {

      if(p[i].style.fontSize) {
         var s = parseInt(p[i].style.fontSize.replace("px",""));
      } else {

         var s = 18;
      }
      if(s!=max) {

         s += 1;
      }
      p[i].style.fontSize = s+"px"

   }
}
function decreaseFontSize() {
   var p = document.getElementsByTagName('article');
   for(i=0;i<p.length;i++) {

      if(p[i].style.fontSize) {
         var s = parseInt(p[i].style.fontSize.replace("px",""));
      } else {

         var s = 16;
      }
      if(s!=min) {

         s -= 1;
      }
      p[i].style.fontSize = s+"px"

   }
}