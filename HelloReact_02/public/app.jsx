var GreeterMessage = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Some Header</h1>
        <p>Some Header</p>
      </div>
    )
  }
});

var Greeter = React.createClass({

  getDefaultProps: function () {
    return {
      name: 'React',
      message: 'Hey I\'m a default message'
    };
  },

  getInitialState: function () {
    return {
      name: this.props.name
    }
  },

  onButtonClick: function (e) {
    e.preventDefault();

    var name = this.refs.name.value;

    this.refs.name.value = '';

    if (typeof name === 'string' && name.length > 0) {
      this.setState({
        name: name
      });
    }
    
  },

  render: function () { 
    var name = this.state.name;

    return (
      <div>
        <h1>Hello {name}!</h1>
        <p>{this.props.message + '!!'}</p>

        <GreeterMessage/>

        <form onSubmit={this.onButtonClick}>
          <input type='text' ref='name'/>
          <button>Set Name</button>
        </form>

        <GreeterForm/>

      </div>
    )
  }

});

var firstName = 'Steve';

ReactDOM.render(
  <Greeter name={firstName} message='A message from prop' />,
  document.getElementById('app')
);