define({ 

  //Type your controller code here 
  onNavigate:function()
  {

  },
  preshow:function()
  {
    var scope = this;
    this.view.flxpin.onClick = function(){scope.pinset();};
    this.view.flxtouch.onClick = function(){scope.touchid();};
  },

  pinset:function()
  {
    var nextForm = new kony.mvc.Navigation("frmCreatePassword");
    var myObj = {preform:"frmCreatePasswordHome"}; 
    nextForm.navigate(myObj);
  },
  touchid:function()
  {
     var nextForm = new kony.mvc.Navigation("frmSetTouchID");
     var myObj = {preform:"frmCreatePasswordHome"}; 
   nextForm.navigate(myObj);
  
  },
  istouchidEnabled:function()
  {
    var status = kony.localAuthentication.getStatusForAuthenticationMode(constants.LOCAL_AUTHENTICATION_MODE_TOUCH_ID);
  alert(status);
   if((status == 5000)&&(kony.os.deviceInfo().model !== "iPhone X"))
     {
       this.view.flxtouch.isVisible = true;
     }
    else
      {
       this.view.flxtouch.isVisible = false;        
      }
  }
});