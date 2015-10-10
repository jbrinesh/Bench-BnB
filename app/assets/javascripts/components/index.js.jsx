(function(root) {
  'use strict';

  root.Index = React.createClass({

    getInitialState: function(){
      return {benches: BenchStore.all()};
    },

    componentDidMount: function(){
      BenchStore.addChangeHandler(this._benchesChanged);
    },

    _benchesChanged: function(){
      this.setState({benches: BenchStore.all()});
    },


    render: function(){
      return (
        <ul className="bench-index">

          {
            this.state.benches.map(function(bench, idx){
              return <li key={idx}>{bench.description}</li>
            })

          }
        </ul>
      )
    }
  })
}(this));
