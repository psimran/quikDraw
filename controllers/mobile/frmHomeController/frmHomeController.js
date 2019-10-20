define({ 

  onNavigate : function(){
    this.init();
  },
  init : function(){
    this.applyBindings();
  },
  applyBindings : function(){
    this.view.postShow = this.navToAddbank;
    this.view.btnWithdraw.onClick = this.navToTrans;
  },
  navToAddbank : function(){
    if(!kony.store.getItem("firstTimeUser") || kony.store.getItem("firstTimeUser") !== true){
      kony.store.setItem("firstTimeUser", true);
      new kony.mvc.Navigation("frmAddAcInitialscreen").navigate();
    }else{
      this.fetchUserDetails();
    }
  },
  navToTrans : function(){
    new kony.mvc.Navigation("frmMyTransactions").navigate();
  },
  fetchUserDetails : function(){
    var inputParams = {};
    var headers = {};
    var serviceName = "UserAccounts";
    var operationId = "getCustomerDetails";
    inputParams = {};
    headers = {
      "apikey" : "gZ8PeGprpa1jORBL14qYqKx18qauapRH"
    };
    kony.application.showLoadingScreen("Loading...", "", constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, true, null);
    commonServiceInvokerHandler(serviceName, operationId, headers, inputParams, this.getCustomerDetailsSuccess ,this.getCustomerDetailsError);
  },
  getCustomerDetailsSuccess : function(success){
    kony.print("Transaction Details Success::"+JSON.stringify(success));
    this.setTransData(success);
  },
  getCustomerDetailsError : function(error){
    kony.application.dismissLoadingScreen();
    kony.print("Transaction Details Error::"+JSON.stringify(error));
  },
});