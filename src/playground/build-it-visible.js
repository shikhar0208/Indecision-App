class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
    this.state = {
      visibility: false
    }
  }

  handleToggleVisibility() {
    this.setState((prevState) => {
      return {
        visibility: !prevState.visibility
      }
    })
  }

  render() {
    return (
      <div>
      <h1>Visibility Toggle</h1>
      <button onClick={this.handleToggleVisibility}>{this.state.visibility ? 'Hide details' : 'Show details'}</button>
      <p>{this.state.visibility ? 'Hey. These are some details you can see now' : undefined}</p>
    </div>
    )
  } 
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'))



// let visibility = false;

// const toggleVisibility = () => {
//     visibility = !visibility;
//     render();
// }

// const render = () => {
//   const template = (
//     <div id="app">
//       <h1>Visibility Toggle</h1>
//       <button onClick= {toggleVisibility}>
//         { (visibility) ? 'Hide details' : 'Show details'}
//       </button>
//       <p>{(visibility) ? 'Hey. These are some details you can see now' : undefined}</p>
//     </div>
//   );
//   ReactDOM.render(template, appRoot);
// };

// render();
