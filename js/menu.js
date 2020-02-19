button.onclick = function (){
  var className = informer.className;
  if( className.indexOf(' expanded') == -1 ){
      className += ' expanded';
      document.getElementById("firstMenu").className += " delete";
      document.getElementById("secondMenu").className =
   document.getElementById("secondMenu").className.replace
      ( /(?:^|\s)delete(?!\S)/g , '' )
  }
  else {
      className = className.replace(' expanded', '');
      document.getElementById("secondMenu").className += " delete";
      document.getElementById("firstMenu").className =
   document.getElementById("firstMenu").className.replace
      ( /(?:^|\s)delete(?!\S)/g , '' )
  }
  informer.className = className;
  return false;
}
button2.onclick = function (){
//  document.getElementById("three-stick").classList.add('krest');
  var className = informer.className;
  if( className.indexOf(' expanded') == -1 ){
      className += ' expanded';
      document.getElementById("firstMenu2").className += " delete";
      document.getElementById("favourite").className += " delete";
      document.getElementById("secondMenu2").className =
      document.getElementById("secondMenu2").className.replace
      ( /(?:^|\s)delete(?!\S)/g , '' );
      document.getElementById("header").className += " noShadow";
  }
  else {
      className = className.replace(' expanded', '');
      document.getElementById("secondMenu2").className += " delete";
      document.getElementById("firstMenu2").className =
      document.getElementById("firstMenu2").className.replace
      ( /(?:^|\s)delete(?!\S)/g , '' );
      document.getElementById("header").className =
      document.getElementById("header").className.replace
      ( /(?:^|\s)noShadow(?!\S)/g , '' );
      document.getElementById("favourite").className =
      document.getElementById("favourite").className.replace
      ( /(?:^|\s)delete(?!\S)/g , '' );
  }
  informer.className = className;
  return false;

};
