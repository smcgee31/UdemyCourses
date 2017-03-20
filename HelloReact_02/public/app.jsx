var GreeterMessage = React.createClass({                      // This component is a presentational component. It simply
  render: function() {                                        // takes a couple of props passed to it from it's parent and
    var name = this.props.name;                               // renders them in the JSX of the return.
    var message = this.props.message;

    return (
      <div>
        <h1>Hello {name}!</h1>
        <p>{message}</p>
      </div>
    );
  }
});

var GreeterForm = React.createClass({                         // This is also a presentational component, but has a little bit 
  onFormSubmit: function (e) {                                // more functionality. It takes a prop from a parent, checks it's
    e.preventDefault();                                       // length (which just checks to see that it exists) and then clears
                                                              // the input field. Then calls the function that exists in the parent
    var name = this.refs.name.value;                          // 'onNewName' that takes one parameter. onNewName itself calls the
    if (name.length > 0) {                                     // 'handleNewName' function that uses setState()
      this.refs.name.value = '';
      this.props.onNewName(name);
    }
  },

  render: function () {                                       // Then renders the form with the functionality set up for it.
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input type='text' ref='name'/>
          <button>Set Name</button>
        </form>
      </div>
    );
  }
});

var Greeter = React.createClass({                             // Classic 'container' component as it ONLY renders the children
                                                              // and holds state. It also holds default props in case props are
  getDefaultProps: function () {                              // not set elsewhere and you'd end up getting nothing where you
    return {                                                  // thought you'd get something. (default props are valuable like
      name: 'React',                                          // default values in variables in raw javascript.)
      message: 'Hey I\'m a default message'
    };
  },

  getInitialState: function () {
    return {
      name: this.props.name,
      message: this.props.message
    }
  },

  handleNewName: function (name) {                            // Always remember that setState() does not set the state like you 
    this.setState({                                           // might think. It creates a pending state transition. Treat it like 
        name: <name></name>                                   // it is immutable. "There is no guarantee of synchronous operation calls
      });                                                     // to setState and calls may be batched for performance gains." per React docs.
    
  },

  render: function () { 
    var name = this.state.name;
    var message = this.props.message;

    return (
      <div>

        <GreeterMessage name={name} message={message}/>

        <GreeterForm onNewName={this.handleNewName}/>

      </div>
    );
  }

}); 

var firstName = 'Steve';

ReactDOM.render(
  <Greeter name={firstName} message='A message from prop' />,
  document.getElementById('app')
);