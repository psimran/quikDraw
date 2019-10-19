define({ 

 onNavigate : function(){
   this.init();
 },
  init : function(){
    this.applyBindings();
  },
  applyBindings : function(){
    this.view.postShow = this.navToAddbank;
  },
  navToAddbank : function(){
    new kony.mvc.Navigation("frmAddAcInitialscreen").navigate();
  }

 });