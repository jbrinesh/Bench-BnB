(function(root) {
  'use strict';
  var _benches = [];

  var resetBenches = function(benches){
    _benches = benches;
  }

  root.BenchStore = $.extend({}, EventEmitter.prototype, {

    all: function(){
      return _benches.slice();
    },

    addChangeHandler: function(handler){
      BenchStore.on(BenchConstants.CHANGE_EVENT, handler);
    },

    removeChangeHandler: function(handler){
      BenchStore.removeListener(BenchConstants.CHANGE_EVENT, handler);
    },

    DispatcherID: AppDispatcher.register(function(payload){
      switch (payload.actionType){
        case BenchConstants.RECIVED_BENCHES:
        resetBenches(payload.benches);
        BenchStore.emit(BenchConstants.CHANGE_EVENT);
        break;
      }
    })

  });


}(this));
