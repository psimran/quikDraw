define({ 

  onNavigate : function(context){
    if(context)
      {
      }
    else
      {
     context = {preform:""}; 
      }
    kony.store.setItem("preiform", context);
    var scope = this;
    this.view.preShow = function(){
      scope.preshowss(context);
    };
  },
  preshowss : function(context)
  {
    this.initactions(context);
    this.authUsingTouchID();
  },
  initactions:function(context)
  {
     this.view.lblInstructions.text = "Please confirm Touch ID to login to quickDraw App";
    if(context.preform === "frmCreatePasswordHome")
      {
       this.view.headerButtonLeft.isVisible = true; 
      }
    else
      {
       this.view.headerButtonLeft.isVisible = false;        
      }
    this.view.headerButtonLeft.onClick = function(){
      var nextForm = new kony.mvc.Navigation(context.preform);
      nextForm.navigate();

    };
  },
  statusCB:function(status, message) {  
    if(status == 5000)    {   
      

//       kony.ui.Alert({
//         message: "AUTHENTICATION SUCCESSFULL",
//         alertType: constants.ALERT_TYPE_INFO,
//         yesLabel: "Close"
        
//       }, {});   
     var preformm = kony.store.getItem("preiform");
     // alert(preformm);
      if(preformm.preform )
        {
          if(  preformm.preform === "frmCreatePasswordHome" )
        kony.store.setItem("autnmode", "touchid");
        }
           var nextForm = new kony.mvc.Navigation("frmSelectAmount");
      nextForm.navigate();
     
    }  
    else    {  
       var messg;
      

        messg = "Try again or try relanching the application "  ;
           this.view.lblInstructions.text = messg;
        
//       kony.ui.Alert({
//         message: messg,
//         alertType: constants.ALERT_TYPE_INFO,
//         yesLabel: "Close"
//       }, {});  
    }
  },

  authUsingTouchID:function() {  
    var configMap = {
      "promptMessage": "PLEASE AUTHENTICATE USING YOUR TOUCH ID"
    };  
    kony.localAuthentication.authenticate(constants.LOCAL_AUTHENTICATION_MODE_TOUCH_ID, this.statusCB, configMap);
  },
});