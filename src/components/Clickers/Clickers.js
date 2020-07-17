import React from 'react';

class Clickers extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            numbers: 0
        };
    }
    incrementarNumero() {
        let nuevoNumero = this.state.numbers + 1;

        this.setState({
            numbers: nuevoNumero
        });
    }
    decrementarNumero() {
        let nuevoNumero = this.state.numbers - 1;

        this.setState({
            numbers: nuevoNumero
        });
    }
    reiniciarNumero() {
        this.setState({
            numbers: 0
        });
    }
    render() {
        return (
            <div className="container">
                <div className="clicker border border-secondary rounded">
                    <div className="clicker-display d-flex align-items-center bg-light text-secondary">
                        <div className="mx-auto display-1">{this.state.numbers}</div>
                    </div>
                    <div className="clicker-button-panel d-flex flex-row">
                        <button onClick={() => this.incrementarNumero()} className="btn btn-success w-100">
                            <i className="fa fa-plus fa-2x" />
                        </button>
                        <button onClick={() => this.reiniciarNumero()} className="btn btn-warning w-100">
                            <i className="fa fa-refresh fa-2x" />
                        </button>
                        <button onClick={() => this.decrementarNumero()} className="btn btn-danger w-100">
                            <i className="fa fa-minus fa-2x" />
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}
export default Clickers;
