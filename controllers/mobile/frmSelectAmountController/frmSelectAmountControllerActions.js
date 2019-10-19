define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for btn50 **/
    AS_Button_g9bd18f02abb4062a70bfec841ea5cde: function AS_Button_g9bd18f02abb4062a70bfec841ea5cde(eventobject) {
        var self = this;
        if (self.view.btn50.skin == btnAmtSelected) {
            if (kony.theme.getCurrentTheme() != "default") {
                kony.theme.setCurrentTheme("default", function() {
                    self.view.btn50.skin = "btnAmtNotSelected";
                }, null);
            } else {
                (function() {
                    self.view.btn50.skin = "btnAmtNotSelected";
                })();
            }
        } else {
            if (kony.theme.getCurrentTheme() != "default") {
                kony.theme.setCurrentTheme("default", function() {
                    self.view.btn50.skin = "btnAmtSelected";
                }, null);
            } else {
                (function() {
                    self.view.btn50.skin = "btnAmtSelected";
                })();
            }
            if (kony.theme.getCurrentTheme() != "default") {
                kony.theme.setCurrentTheme("default", function() {
                    self.view.btn100.skin = "btnAmtNotSelected";
                }, null);
            } else {
                (function() {
                    self.view.btn100.skin = "btnAmtNotSelected";
                })();
            }
        }
    },
    /** onClick defined for btn100 **/
    AS_Button_d677f6dea68547f182e8feba93009ae2: function AS_Button_d677f6dea68547f182e8feba93009ae2(eventobject) {
        var self = this;
        if (self.view.btn100.skin == btnAmtSelected) {
            if (kony.theme.getCurrentTheme() != "default") {
                kony.theme.setCurrentTheme("default", function() {
                    self.view.btn100.skin = "btnAmtNotSelected";
                }, null);
            } else {
                (function() {
                    self.view.btn100.skin = "btnAmtNotSelected";
                })();
            }
        } else {
            if (kony.theme.getCurrentTheme() != "default") {
                kony.theme.setCurrentTheme("default", function() {
                    self.view.btn50.skin = "btnAmtNotSelected";
                }, null);
            } else {
                (function() {
                    self.view.btn50.skin = "btnAmtNotSelected";
                })();
            }
            if (kony.theme.getCurrentTheme() != "default") {
                kony.theme.setCurrentTheme("default", function() {
                    self.view.btn100.skin = "btnAmtSelected";
                }, null);
            } else {
                (function() {
                    self.view.btn100.skin = "btnAmtSelected";
                })();
            }
        }
    },
    /** onClick defined for btnWithdraw **/
    AS_Button_e3d2a2f7bbac4cc3bdc9e19f8c45ce65: function AS_Button_e3d2a2f7bbac4cc3bdc9e19f8c45ce65(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmLocateMerchant");
        ntf.navigate();
    }
});