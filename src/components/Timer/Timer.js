import React from 'react';
import './Timer.css';

class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            labelClass: true,
            diasSemana: ['lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado', 'domingo'],
            numeroDiaMes: new Date().getDate(),
            numeroMes: new Date().getMonth() + 1,
            anio: new Date().getFullYear(),
            time: new Date().toLocaleTimeString(),
            date: true,
        };
    }
    changeHour() {
        setInterval(() => {
            this.setState({
                time: new Date().toLocaleTimeString(),
            });
        }, 1000);
    }

    changeMonth() {
        switch (this.state.numeroMes) {
            case 1:
                this.setState({
                    numeroMes: 'Enero',
                });
                break;
            case 2:
                this.setState({
                    numeroMes: 'Febrero',
                });
                break;
            case 3:
                this.setState({
                    numeroMes: 'Marzo',
                });
                break;
            case 4:
                this.setState({
                    numeroMes: 'Abril',
                });
                break;
            case 5:
                this.setState({
                    numeroMes: 'Mayo',
                });
                break;
            case 6:
                this.setState({
                    numeroMes: 'Junio',
                });
                break;
            case 7:
                this.setState({
                    numeroMes: 'Julio',
                });
                break;
            case 8:
                this.setState({
                    numeroMes: 'Agosto',
                });
                break;
            case 9:
                this.setState({
                    numeroMes: 'Septiembre',
                });
                break;
            case 10:
                this.setState({
                    numeroMes: 'Octubre',
                });
                break;
            case 11:
                this.setState({
                    numeroMes: 'Noviembre',
                });
                break;
            case 12:
                this.setState({
                    numeroMes: 'Diciembre',
                });
                break;

            default:
                break;
        }
    }

    showDate() {
        this.setState({
            labelClass: !this.state.labelClass,
            date: !this.state.date,
        });
    }

    render() {
        setInterval(this.changeHour(), 1000);
        this.changeMonth();
        return (
            <div className="container">
                <div className="button-container">
                    <input type="checkbox" value="on" className="input-switch" id="toggle" onChange={() => this.showDate()} />
                    <label className={this.state.labelClass === true ? 'label-switch-off' : 'label-switch-on'} for="toggle"></label>
                </div>
                <div className="timer-container">
                    <h2 className="timer">{this.state.time}</h2>
                    <h2 className={this.state.date === true ? 'date-off' : 'date'}>
                        {this.state.numeroDiaMes} de {this.state.numeroMes} de {this.state.anio}
                    </h2>
                </div>
            </div>
        );
    }
}

export default Timer;
