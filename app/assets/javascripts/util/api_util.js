(function(root) {
  'use strict';

  root.ApiUtil = {
    fetchBenches: function(qString){
      $.ajax({
        url: "api/bench",
        type: "GET",
        dataType: "json",
        data: qString,
        success: function(response){
          ApiActions.receiveAll(response)
        }
      })
    }
  }
}(this));
