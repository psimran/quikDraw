define({ 

  //Type your controller code here 
  onNavigate : function(context){
    var scope = this;
    if(context)
    {
    }
    else
    {
      context = {preform:""}; 
    }
    this.view.preShow = function(){
      scope.preshowss(context);
    };
  },
  preshowss : function(context)
  {
    this.initactions(context);

  },
  initactions:function(context)
  {
    var scope = this;  
    this.view.txtFld1.text = "";
    this.view.lblInstructions.text = "Re Enter 4 digit code to create a secure password";
    scope.view.btnWithdraw.setEnabled(false);
    this.view.txtFld1.onTextChange = function()
    {
      if(scope.view.txtFld1.text.length<4)
      {
        scope.view.btnWithdraw.setEnabled(false);
      }
      else
      {
        if( scope.view.txtFld1.text === context.password1)
        {
          scope.view.btnWithdraw.setEnabled(true);
         
          //                 var nextForm = new kony.mvc.Navigation("frmRenterPassword");
          //                var myObj = {password1:password}; 
          //                nextForm.navigate(myObj);
        }
        else
        {
         scope.view.lblInstructions.text = "Code mismatch";
        }
      }
    };
    this.view.btnWithdraw.onClick = function(){
      var password = scope.view.txtFld1.text;
       if(context.preform )
          {
            if(  context.preform === "frmCreatePasswordHome" )
             kony.store.setItem("autnmode", "pin");
             kony.store.setItem("pin", scope.view.txtFld1.text);
          }
          var nextForm = new kony.mvc.Navigation("frmSelectAmount");
          nextForm.navigate();
      //       var nextForm = new kony.mvc.Navigation("frmRenterPassword");
      //        var myObj = {password1:password}; 
      //        nextForm.navigate(myObj);
    };


    //     else
    //       {
    //        this.view.headerButtonLeft.isVisible = false;
    //             this.view.btnWithdraw.onClick = function(){
    //       var nextForm = new kony.mvc.Navigation(context.preform);
    //       nextForm.navigate();
    //     };
    //       }
    this.view.headerButtonLeft.onClick = function(){
      var nextForm = new kony.mvc.Navigation("frmCreatePassword");
      var myObj = {preform:"frmCreatePasswordHome"}; 
      nextForm.navigate(myObj);

    };

  },

});