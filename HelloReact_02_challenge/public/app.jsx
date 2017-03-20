var GreeterMessage = React.createClass({
  render: function() {
    var name = this.props.name;
    var message = this.props.message;

    return (
      <div>
        <h1>Hello {name}!</h1>
        <p>{message}</p>
      </div>
    );
  }
});

var GreeterForm = React.createClass({ 
  onFormSubmit: function (e) {
    e.preventDefault();

    var updates = {};
    var name = this.refs.name.value;
    var message = this.refs.message.value;

    if (name.length > 0) {
      this.refs.name.value = '';
      updates.name = name;
    }

    if (message.length > 0) {
      this.refs.message.value = '';
      updates.message = message;
    }

    this.props.onNewData(updates);
  },

  render: function () {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <label htmlFor='name'>Name</label><br/>
          <input id='name' type='text' ref='name'/><br/>
          <label htmlFor='message'>Message</label><br/>
          <textarea id='message' type='text' ref='message'/><br/>
          <button>Submit</button>
        </form>
      </div>
    );
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
      name: this.props.name,
      message: this.props.message
    }
  },

  handleNewData: function (updates) {                 // This was originally this.setSate({ name: updates.name, message: updates.message})
    this.setState(updates);                           // but that didn't allow them to change independently it changed both always so if 
  },                                                  // the name was blank and you just changed the message then the message would update but 
                                                      // the name would also get changed to a blank name because nothing was in the name field.
  render: function () { 
    var name = this.state.name;
    var message = this.state.message;

    return (
      <div>
        <GreeterMessage name={name} message={message}/>
        <GreeterForm onNewData={this.handleNewData} onNewMessage={this.handleNewData}/>
      </div>
    );
  }

}); 

var firstName = 'Mr. Default';
var firstMessage = 'Here is your default message';

ReactDOM.render(
  <Greeter name={firstName} message={firstMessage} />,
  document.getElementById('app')
);