(function(root) {
  'use strict';

  root.Search = React.createClass({

    render: function(){
      return(
        <div className="search">
          <Index/>
          <Map/>
        </div>
      )
    }
  })
}(this));
