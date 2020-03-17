// Class Based Components

class IndecisionApp extends React.Component {
    constructor(props) {
      super(props);
      this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
      this.handlePick = this.handlePick.bind(this)
      this.handleAddOption = this.handleAddOption.bind(this)
      this.state = {
        options: []
      };
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
  
      this.setState((prevState) => {
        return{
          // options: prevState.options.concat([option])   //concat is a method which merge two individual arrays and form another without changing any old one.
          options: prevState.options.concat(option)   //this is also correct
        }
      })
    }
  
    handleDeleteOptions() {
      this.setState(() => {
        return{
          options: []
        };
      })
    }
  
    render() {
      const title = 'Indecision'
      const subtitle = 'Put your life in the hands of a computer'
      return (
        <div>
          <Header title={title} subtitle={subtitle} />
          <Action 
            hasOptions={this.state.options.length > 0} 
            handlePick={this.handlePick}
          />
          <Options 
            options={this.state.options} 
            handleDeleteOptions={this.handleDeleteOptions}
          />
          <AddOption 
            handleAddOption={this.handleAddOption}
          />
        </div>
      )
    }
  }
  
  class Header extends React.Component {
    render() {
      return (
        <div>
          <h1>{this.props.title}</h1>
          <h2>{this.props.subtitle}</h2>
        </div>
      );
    }
  }
  
  // Stateless functional component
//   const Action = (props) => {
//     return (
//       <div>
//         <button 
//           onClick={props.handlePick}
//           disabled={!props.hasOptions} 
//         >
//           What should I do?
//         </button>
//       </div>
//     );
//   }
  
  class Action extends React.Component {
    render() {
      return (
        <div>
          <button 
            onClick={this.props.handlePick}
            disabled={!this.props.hasOptions} 
          >
            What should I do?
          </button>
        </div>
      );
    }
  }
  
  class Options extends React.Component {
  
    render() {
      return (
        <div>
          <button onClick={this.props.handleDeleteOptions}>Remove All</button>
          {
            this.props.options.map((option) => <Option key={option} optionText = {option} />)
          }
          <Option />
        </div>
      );
    }
  }
  
  class Option extends React.Component {
    render() {
      return (
        <div>
          <p>{this.props.optionText}</p>
        </div>
      )
    }
  }
  
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
      e.target.elements.option.value = ''
      
      const error = this.props.handleAddOption(option)    // this handleAddOption is method of parent class IndecisionApp.
      
      this.setState(() => {
        return {
          error   // shortHand technique
        }
      })
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
  