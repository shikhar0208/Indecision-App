
// Class based component
class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
    this.handlePick = this.handlePick.bind(this)
    this.handleAddOption = this.handleAddOption.bind(this)
    this.handleDeleteOption = this.handleDeleteOption.bind(this)
    this.state = {
      options: []
    };
  } 

  // Lifecycle Method - only used with class based components

  componentDidMount() {   
    try {
      const json = localStorage.getItem('options')
      const options = JSON.parse(json)
  
      if(options) {
        this.setState(() => ({options}))  //shortHand syntax
      }
  
    } catch (e) {
      // Do nothing at all
    }
  }

  componentDidUpdate(prevProps, prevState) {    // it fires after any component data get changed.
    // prevProps -> to access previous props
    // prevState -> to access previous state
    if(prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json)
    }
  }

  componentWillUnmount() {    // this fires when a component goes away.
    console.log("conmponent will unmount")
  }

  handlePick() {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    alert(option)
  }

  handleAddOption(option) {
    if(!option) {
      return 'Enter valid value to add item';
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option is alredy exists';
    }
    this.setState((prevState) => ({options: prevState.options.concat(option)}))  //this is also correct
    // options: prevState.options.concat([option])   
    //concat is a method which merge two individual arrays and form another without changing any old one.
  }

  // For deleteAll
  handleDeleteOptions() {
    this.setState(() => ({ options: [] }));     // implicitly returning an object
  }

  // For delete singular
  handleDeleteOption(optionToRemove) {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => {
        return optionToRemove !== option;
      })
    }));
  } 

  render() {
    const subtitle = 'Put your life in the hands of a computer'
    return (
      <div>
        <Header subtitle={subtitle} />
        <Action 
          hasOptions={this.state.options.length > 0} 
          handlePick={this.handlePick}
        />
        <Options 
          options={this.state.options} 
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOption={this.handleDeleteOption}
        />
        <AddOption 
          handleAddOption={this.handleAddOption}
        />
      </div>
    )
  }
}

// Stateless functional component
const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.subtitle && <h2>{props.subtitle}</h2>}
    </div>
  );
}



// Default value to header's object
Header.defaultProps = {
  title: 'Indecision'
};

// Stateless functional component
const Action = (props) => {
  return (
    <div>
      <button 
        onClick={props.handlePick}
        disabled={!props.hasOptions} 
      >
        What should I do?
      </button>
    </div>
  );
}

// Stateless functional component
const Options = (props) => {
  return (
    <div>
      <button onClick={props.handleDeleteOptions}>Remove All</button>
      {props.options.length === 0 && <p>Please and an option to get started!</p>}
      {
        props.options.map((option) => (
          <Option key={option} 
            optionText = {option}
            handleDeleteOption = {props.handleDeleteOption}
          />
        ))
      }
    </div>
  );
} 

// Stateless functional component
const Option = (props) => {
  return (
    <div>
      {props.optionText}
      <button 
        onClick={(e) => {
          props.handleDeleteOption(props.optionText);
        }}
      >
        remove
      </button>
    </div>
  )
}


// Class based component
class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this)
    this.state = {
      error: undefined
    };
  }

  handleAddOption(e){   //this handleAddOption is method of AddOption class
    e.preventDefault();

    const option = (e.target.elements.option.value).trim();     // it stores value on submitting the form
    const error = this.props.handleAddOption(option)    // this handleAddOption is method of parent class IndecisionApp.
    
    this.setState(() => ({error})) // shorthand syntax
    
    if(!error) {
      e.target.elements.option.value = ''
    }
  }

  render() {
    return (
      <div>
        {/*<p>{this.state.error}</p>*/}   {/* also correct */}
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option" />
          <button>Add Option</button>
        </form>
      </div>
    )
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));


// Stateless functional components or presentational components

// const User = (props) => {
//   return (
//     <div>
//       <p>Name: {props.name}</p>
//       <p>Age: {props.age}</p>
//     </div>
//   )
// }
// ReactDOM.render(<User name='Shikhar' age={20} />, document.getElementById('app'));
