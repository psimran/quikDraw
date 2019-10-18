define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onScrolling defined for flxMainComp **/
    AS_FlexScrollContainer_i313b3dc14b14045ac411d23ff002493: function AS_FlexScrollContainer_i313b3dc14b14045ac411d23ff002493(eventobject) {
        var self = this;

        function MOVE_ACTION____e1b4a73eba374f1aab91e035593d4fc2_Callback() {}
        self.view.CompHeader.animate(
        kony.ui.createAnimation({
            "100": {
                "top": "0dp",
                "stepConfig": {
                    "timingFunction": kony.anim.EASE
                }
            }
        }), {
            "delay": 0,
            "iterationCount": 1,
            "fillMode": kony.anim.FILL_MODE_FORWARDS,
            "duration": 0.25
        }, {
            "animationEnd": MOVE_ACTION____e1b4a73eba374f1aab91e035593d4fc2_Callback
        });
    }
});