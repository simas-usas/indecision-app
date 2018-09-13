class ToggleVisibility extends React.Component {
    constructor(props){
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visibility: false
        }
    }
    handleToggleVisibility(){
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            };
        });
    }
    render() {
        return (
            <div>
            <button onClick={this.handleToggleVisibility}>{this.state.visibility ? 'Hide details' : 'Show details'}</button>
            {this.state.visibility && (
                <div>
                    <p>These are the details. They are pretty details.</p>
                </div>
            )}
            </div>
        )
    }
}

ReactDOM.render(<ToggleVisibility/>, document.getElementById('app'));

/*
const app = {
    title: 'Visibility Toggle',
    subtitle: 'It is a pretty app...',
    options: []
}

let visibility = false;
const toggleVisibility = () => {
    visibility = !visibility;
    render();
}

const render = () => {
    const template = (

    );
    ReactDOM.render(template, appRoot);
}

const appRoot = document.getElementById('app');
render();
*/