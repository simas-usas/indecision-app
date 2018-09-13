// JSX - JavaScript XML

const app = {
    title: 'This is my app!',
    subtitle: 'It is a pretty app...',
    options: []
}

const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;
    if(option){
        app.options.push(option);
        e.target.elements.option.value = '';
        renderIndecisionApp();
    }
};

const onRemoveButton = () => {
    app.options = [];
    renderIndecisionApp();
};

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    return alert(option);
};

const renderIndecisionApp = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{(app.options && app.options.length > 0) ? 'Here are your options: ' : 'You have no options'}</p>
            <ol>
            {
                app.options.map((option) =>  <li key={option}>{option}</li>)
            }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
            <button onClick={onRemoveButton}>Remove Values</button>
            <button disabled={app.options.length > 0 ? false : true} onClick={onMakeDecision}>What should I do?</button>
        </div>
    );

    ReactDOM.render(template, appRoot);
}

const appRoot = document.getElementById('app');
renderIndecisionApp();
