var bankList = [
  {
    "name" : "BANKOK BANK",
    "img" : "bangkok_bank.png"
  },
  {
    "name" : "BANK OF AMERICA",
    "img" : "bank_of_america.png"
  },
  {
    "name" : "BNP PARIBAS",
    "img" : "bnp_paribas.png"
  },
  {
    "name" : "CIM BANK",
    "img" : "cimb.png"
  },
  {
    "name" : "CITI BANK",
    "img" : "citi.png"
  },
  {
    "name" : "DEUTSCHE BANK",
    "img" : "deutsche_bank.png"
  },
  {
    "name" : "HSBC",
    "img" : "hsbc.png"
  },
  {
    "name" : "IBANK",
    "img" : "ibank.png"
  },
  {
    "name" : "JPMORGAN CHASE",
    "img" : "jpmorgan_chase.png"
  },
  {
    "name" : "KASIKORN BANK",
    "img" : "kasikorn_bank.png"
  },
  {
    "name" : "KRUNG THAI BANK",
    "img" : "krung_thai_bank.png"
  },
  {
    "name" : "MEGA BANK NEPAL",
    "img" : "mega_bank_nepal.png"
  },
  {
    "name" : "MIZUHO BANK",
    "img" : "mizuho_bank.png"
  },
  {
    "name" : "MUFG BANK",
    "img" : "mufg_bank.png"
  },
  {
    "name" : "STANDARD CHARTERED",
    "img" : "standard_chartered.png"
  },
  {
    "name" : "TBANK",
    "img" : "tbank.png"
  },
  {
    "name" : "TMB",
    "img" : "tmb.png"
  },
  {
    "name" : "UNITED OVERSEAS BANK",
    "img" : "united_overseas_bank.png"
  } ,
];
define({ 

  onNavigate : function(){
    this.init();
  },
  init : function(){
    this.applyBindings();
  },
  applyBindings : function(){
    this.view.preShow = this.setListDataInSeg.bind(this);
    this.view.txtFlsSearch.onTextChange = this.textChange.bind(this);
    this.view.segBanksList.onRowClick = this.segRowClick.bind(this);
    this.view.txtFlsSearch.onDone = this.search_onDone.bind(this);
  },
  setListDataInSeg : function(){
    try{
      var segData = [];
      for(var i=0 ; i<bankList.length ; i++){
        var tempRec = {
          "lblName" : bankList[i].name,
          "Image0b34086d23ac24b" : bankList[i].img
        };
        segData.push(tempRec);
      }
      this.view.segBanksList.setData(segData);
    }catch(e){

    }
  },
  segRowClick : function(){
    var rowData = this.view.segBanksList.selectedRowItems[0];
    kony.print("Row details ::"+JSON.stringify(rowData));
    var selectedbank = rowData.lblName;
    new kony.mvc.Navigation("frmAddAccunt").navigate(selectedbank);
  },
  textChange : function(){
    if(this.view.txtFlsSearch.text.length >= 3){
      this.invoke_searchSuggestion();
    }else if(this.view.txtFlsSearch.text.length === 0){
      this.setListDataInSeg();
    }
  },
  invoke_searchSuggestion : function(){
    try{
      var segData = [];
      for(var i=0 ; i<bankList.length ; i++){
        var txtLen = this.view.txtFlsSearch.text.length;
        var name = bankList[i].name.substring(0, txtLen);
        if(name.toLowerCase() === this.view.txtFlsSearch.text.toLowerCase()){
          var tempRec = {
            "lblName" : bankList[i].name,
            "Image0b34086d23ac24b" : bankList[i].img
          };
          segData.push(tempRec);
        }
      }
      this.view.segBanksList.setData(segData);
    }catch(e){

    }
  },
  search_onDone : function(){
    try{
      var segData = [];
      for(var i=0 ; i<bankList.length ; i++){
        var name = bankList[i].name;
        if(name.toLowerCase() === this.view.txtFlsSearch.text.toLowerCase()){
          var tempRec = {
            "lblName" : bankList[i].name,
            "Image0b34086d23ac24b" : bankList[i].img
          };
          segData.push(tempRec);
        }
      }
      this.view.segBanksList.setData(segData);
    }catch(e){

    }
  }

});