
(function() {
    var Header = React.createClass({
        render: function() {
            return <header>
                <h1>Ca marche !</h1>

            </header>;
        }
    });

    var List = React.createClass({
        displayName: 'Counter',
        getDefaultProps: function(){
            return {initialCount: 0};
        },
        getInitialState: function() {
            return {count: this.props.initialCount}
        },
        propTypes: {initialCount: React.PropTypes.number},
        tick() {
            this.setState({count: this.state.count + 1});
        },
        render() {
            return (
                <div onClick={this.tick}>
                    Clicks: {this.state.count}
                </div>
            );
        }
    });
    var Footer = React.createClass({
        render: function() {
            return (

                <p>Hello</p>
            );
        }
    });

    React.render(<div><Header /><List /><Footer/></div>, document.querySelector('#app'));



})();
