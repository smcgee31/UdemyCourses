var Greeter = React.createClass({

  getDefaultProps: function () {
    return {
      name: 'React',
      message: 'Hey I\'m a default message'
    };
  },

  getInitialState: function () {                            // A component can't update props but it can maintain and update state.
    return {
      name: this.props.name                                 // Even though we have default props above we are going to set the
    }                                                       // initial state to the prop for use in our Hello Name below.
  },

  onButtonClick: function (e) {                             // We just made up this function so serve our needs below!
    e.preventDefault();                                     // This prevents a full brower reload on form submission.

    var name = this.refs.name.value;                        // Here is the 'ref' from below.
                                                            // (interesting that it is plural up here but singular down there).
    this.refs.name.value = '';                              // This resets the input field to blank

    if (typeof name === 'string' && name.length > 0) {      // The if-statement checks that there is actually something in the field.
      this.setState({                                       // When the user updates the state (the name field) setState updates the 
        name: name                                          // state and re-renders the parts of the component that matter.
      });
    }
    
  },

  render: function () { 
    var name = this.state.name;                             // This got changed to this.state from this.props.

    return (
      <div>
        <h1>Hello {name}!</h1>
        <p>{this.props.message + '!!'}</p>

        <form onSubmit={this.onButtonClick}>
          <input type='text' ref='name'/>
          <button>Set Name</button>
        </form>
      </div>
    )
  }

});

var firstName = 'Steve';

ReactDOM.render(
  <Greeter name={firstName} message='A message from prop' />,   // If this message prop wasn't here you would get the default from getDefaultProps
  document.getElementById('app')
);