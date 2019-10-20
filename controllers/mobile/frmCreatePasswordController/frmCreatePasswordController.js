define({ 

  //Type your controller code here 
  onNavigate : function(context){
        if(context)
      {
      }
    else
      {
     context = {preform:""}; 
      }
    this._init(context);
  },
  _init : function(context){
    this.applyBindings(context);
  },
  applyBindings : function(context){
    var scope = this;
    this.view.preShow =  this.preshowss.bind(this,context);
    //scope.preshowss(context);
  },
  preshowss : function(context)
  {
    this.initactions(context);

  },
  initactions:function(context)
  {
    var scope = this;
    this.view.txtFld1.text = "";
        this.view.lblInstructions.text = "Enter 4 digit code to create a secure password";

    scope.view.btnWithdraw.setEnabled(false);
      this.view.txtFld1.onTextChange = function()
      {
        if(scope.view.txtFld1.text.length<=3)
        {
          scope.view.btnWithdraw.setEnabled(false);
        }
        else
        { 
          scope.view.btnWithdraw.setEnabled(true);
        }
      };
    if(context.preform === "frmCreatePasswordHome")
    {

      this.view.headerButtonLeft.isVisible = true; 
    
      this.view.btnWithdraw.onClick = function(){
        var password = scope.view.txtFld1.text;
        var nextForm = new kony.mvc.Navigation("frmRenterPassword");
        var myObj = {password1:password}; 
        nextForm.navigate(myObj);
      };
    }
    else
    {
      this.view.headerButtonLeft.isVisible = false;
      var pin = kony.store.getItem("pin");
     
        {
           this.view.btnWithdraw.onClick = function(){
              if (pin ===scope.view.txtFld1.text)
                {
        var nextForm = new kony.mvc.Navigation("frmSelectAmount");
      nextForm.navigate();
                }
             else
               {
                  this.view.lblInstructions.text = "incorrectpin";
               }
      };
        }
     
    }
    this.view.headerButtonLeft.onClick = function(){
      var nextForm = new kony.mvc.Navigation(context.preform);
      nextForm.navigate();
    };

  },

});