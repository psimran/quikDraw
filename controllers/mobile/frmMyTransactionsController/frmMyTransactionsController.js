define({ 

  onNavigate : function(){
    this.navigateToDetails();
  },
  navigateToDetails : function(){
    this.view.segBanksList.removeAll();
    var inputParams = {};
    var headers = {};
    var serviceName = "UserAccounts";
    var operationId = "getTransactions";
    inputParams = {};
    headers = {
      "apikey" : "gZ8PeGprpa1jORBL14qYqKx18qauapRH"
    };
    kony.application.showLoadingScreen("Loading...", "", constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, true, null);
    commonServiceInvokerHandler(serviceName, operationId, headers, inputParams, this.TransactionSuccess ,this.TransactionDetailsError);
  },
  TransactionSuccess : function(success){
    kony.print("Transaction Details Success::"+JSON.stringify(success));
    this.setTransData(success);
  },
  TransactionDetailsError : function(error){
    kony.application.dismissLoadingScreen();
    kony.print("Transaction Details Error::"+JSON.stringify(error));
  },
  setTransData : function(success){
    var segData = [];
    for(var i=0 ; i<success.body.length ; i++){
      var tempRecord = {
        "GoogleWallet" : "",
        "lblName" : success.body[i].remittanceInformation,//transactionReference,
        "lbl2" : success.body[i].amount,
        "CopylblName0c36d697d5f8d43" : success.body[i].valueDate
      };
      segData.push(tempRecord);
    }
    this.view.segBanksList.setData(segData);
    kony.application.dismissLoadingScreen();
  }

});