/*
initializeMFService.js contains the functions to connect to MF and environment details.
*/

client = null;
integrationClient=null;
isClientInitiated = false;

// Environment connection key details start
//DEV
gblEnvironment = "INDUATBAR3";
var appkey = "609e94c4fd18d3252e7d9d47d62df8e3";
var appSecret ="c9651cd966dd67cf3a6d01f2a38b0a0b";
var serviceUrl = "https://100023941.auth.konycloud.com/appconfig";
//var gblClientId = "w2fy7dck5qyc7rb4y28kzfnt";

//UAT
/*gblEnvironment = "INDUATBAR3";
var appkey = "b09652dc0f261f4e49733d5aecc9838";
var appSecret ="73f8fe35116e8a663fdbf9e652e8d982";
var serviceUrl = "https://100020316.auth.konycloud.com/appconfig";
var gblClientId = "w2fy7dck5qyc7rb4y28kzfnt";*/

// Environment connection key details end

function getServiceParameters()
{
  // The below parameters for DB Network 
  var serviceParams = {appkey : appkey,
                       appsecret : appSecret,
                       service_url : serviceUrl}; 

  return serviceParams;
}

function initializeKonyMobileFabricClient(serviceName, operationName, headers, inputParams, successCallBack,failureCall){   
  try{
    if(!isClientInitiated){
      kony.print("initializing server variables");
      var appkey;
      var appsecret;
      var service_url;
      var serviceParams = getServiceParameters();
      isClientAuthenticationRequired = false;
      appkey = serviceParams.appkey;
      appsecret = serviceParams.appsecret;
      service_url = serviceParams.service_url;
      client = new kony.sdk();
      kony.print("client initializeKonyMobileFabricClient "+JSON.stringify(client));
      client.init(appkey, appsecret, service_url, function(response){
        initMBSuccess(response,serviceName, operationName, headers, inputParams, successCallBack,failureCall);		
      }, initMBFailure);  
    }
  }catch(exception){
    kony.print("Exception" + exception.message);
  }    
}

function initMBSuccess(result,serviceName, operationName, headers, inputParams, successCallBack,failureCall){
  kony.print("In intiMB success callback");
  isClientInitiated = true;
  if(serviceName !== "" && serviceName !== null)
    commonServiceInvoker(serviceName, operationName, headers, inputParams, successCallBack,failureCall);    
}

function initMBFailure(response){
  try{
    kony.print("In InitMB failure callback");
    checkHttpStatus(response);
  }catch(e){
    kony.print("Exception is : "+e);
  }	
}

function commonServiceInvoker(serviceName, operationName, headers, inputParams, successCallBack,failureCall){
  try{
    kony.print("In commonServiceInvoker service");
    kony.print("initial serviceName is "+serviceName);
    //if(serviceName !== "ConfigServiceINDUATBAR3")
    //serviceName = serviceName+gblEnvironment;
    kony.print("final serviceName is "+serviceName);
    kony.print("operationName is "+operationName);
    kony.print("headers is "+JSON.stringify(headers));
    kony.print("inputParams is "+JSON.stringify(inputParams));
    var integrationClient = null;
    integrationClient = client.getIntegrationService(serviceName);
    integrationClient.invokeOperation(operationName, headers, inputParams, successCallBack, failureCall);
  }catch(e){
    kony.print("exception is Service:"+e);
  }
}

function commonServiceInvokerIdentity(serviceName, operationName, headers, inputParams, successCallBack,failureCall){
  try{
    kony.print("In commonServiceInvokerIdentity service");
    kony.print("initial serviceName is "+serviceName);
    serviceName = serviceName+gblEnvironment;
    kony.print("final serviceName is "+serviceName);
    kony.print("operationName is "+operationName);
    kony.print("headers is "+JSON.stringify(headers));
    kony.print("inputParams is "+JSON.stringify(inputParams));
    var integrationClient = null;
    integrationClient = client.getIdentityService(serviceName);
    integrationClient.invokeOperation(operationName, headers, inputParams, successCallBack, failureCall);
  }catch(e){
    kony.print("exception is Service:"+e);
  }
}

function commonServiceInvokerHandler(serviceName, operationName, headers, inputParams, successCallBack,failureCall){
  try{
    if(isNetworkAvailable()){
      if(!isClientInitiated){ //checking if the client is already authenticated
        kony.print("client is not initiated. Calling MF initialization");
        initializeKonyMobileFabricClient(serviceName, operationName, headers, inputParams, successCallBack,failureCall); //calling MF initialization, if not authenticated.
        kony.print("After IF condition");			
      }else{
        kony.print("calling common service invoker");
        commonServiceInvoker(serviceName, operationName, headers, inputParams, successCallBack,failureCall); //calling service invoker directly

      }
    }else{
      dismissLoadingIndicator();
      kony.print("gblModule.gblCurrFrmAlert = "+gblModule.gblCurrFrmAlert);
      gblModule.gblCurrFrmAlert.flxAlertPopup.setVisibility(true);
      var currForm = kony.application.getCurrentForm().id;
      if(currForm === "frmVideo"){
        kony.print("showpopup in video form");
        //gblModule.gblCurrFrmAlert.showPopup();
        gblModule.gblCurrFrmAlert.lblAlertMessage.text = geti18Value("amway_login_error3");
        gblModule.gblCurrFrmAlert.btnOk.text = geti18Value("amway_alert_Ok");
        return;
      }
      gblModule.gblCurrFrmAlert.infoPopup.showPopup();
      gblModule.gblCurrFrmAlert.infoPopup.setAlertMessage(geti18Value("amway_login_error3"));
      gblModule.gblCurrFrmAlert.infoPopup.setBtnMessage(geti18Value("amway_alert_Ok"));
    }
  }catch(e){
    kony.print("Exception is "+e);
  }
}

function commonServiceInvokerHandlerIdentity(serviceName, operationName, headers, inputParams, successCallBack,failureCall){
  try{
    if(isNetworkAvailable()){
      if(!isClientInitiated){ //checking if the client is already authenticated
        kony.print("client is not initiated. Calling MF initialization");
        initializeKonyMobileFabricClient(serviceName, operationName, headers, inputParams, successCallBack,failureCall); //calling MF initialization, if not authenticated.
        kony.print("After IF condition");			
      }else{
        kony.print("calling common service invoker");
        commonServiceInvokerIdentity(serviceName, operationName, headers, inputParams, successCallBack,failureCall); //calling service invoker directly

      }
    }else{
      dismissLoadingIndicator();
      gblModule.gblCurrFrmAlert.flxAlertPopup.setVisibility(true);
      gblModule.gblCurrFrmAlert.infoPopup.showPopup();
      gblModule.gblCurrFrmAlert.infoPopup.setAlertMessage(geti18Value("amway_login_error3"));
      gblModule.gblCurrFrmAlert.infoPopup.setBtnMessage(geti18Value("amway_alert_Ok"));
    }
  }catch(e){
    kony.print("exception is "+e);
  }
}


function checkHttpStatus(result){
  try{
    if(!isNetworkAvailable()){
      gblModule.gblCurrFrmAlert.information.textMsg = geti18Value("amway_login_error3");
      gblModule.gblCurrFrmAlert.information.textHeader = geti18Value("amway_internet_offline");
      gblModule.gblCurrFrmAlert.information.textButton = geti18Value("amway_infopopup_btnok");
      gblModule.gblCurrFrmAlert.information.onClickTryAgain = function(){kony.application.exit();};
      gblModule.gblCurrFrmAlert.flxInfoAlert.setVisibility(true);
      return false;
    }
    kony.print("In checkhttpstatus function::"+JSON.stringify(result));
    dismissLoadingIndicator();
    var opstatus = result.opstatus;
    if(opstatus !== 0){
      gblModule.gblCurrFrmAlert.information.textMsg = geti18Value("amway_login_error3");
      gblModule.gblCurrFrmAlert.information.textHeader = geti18Value("amway_internet_offline");
      gblModule.gblCurrFrmAlert.information.textButton = geti18Value("amway_infopopup_btnok");
      gblModule.gblCurrFrmAlert.information.onClickTryAgain = function(){kony.application.exit();};
      gblModule.gblCurrFrmAlert.flxInfoAlert.setVisibility(true);
      /*gblModule.gblCurrFrmAlert.flxAlertPopup.setVisibility(true);
      gblModule.gblCurrFrmAlert.infoPopup.showPopup();
      gblModule.gblCurrFrmAlert.infoPopup.setAlertMessage(geti18Value("amway_application_serviceerror"));
      gblModule.gblCurrFrmAlert.infoPopup.setBtnMessage(geti18Value("amway_alert_Ok"));*/
      return false;
    }
    kony.print("opstatus is "+opstatus);
    return true;
  }catch(e){
    kony.print("exception is "+e);
  }
}

function isNetworkAvailable() {
  return kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY);
}
