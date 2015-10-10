(function(root) {
  'use strict';
  root.ApiActions = {
    receiveAll: function(benches){
      var action = {
        actionType: BenchConstants.RECIVED_BENCHES,
        benches: benches
      }
      AppDispatcher.dispatch(action);
    }
  }

}(this));
