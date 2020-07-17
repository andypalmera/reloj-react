import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Timer from './components/Timer/Timer';

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <div>
                    <Header />
                    <div className="mt-5">
                        <Timer />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
