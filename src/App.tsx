import Arrow from './Arrow.tsx';
import Title from "./Title.tsx";
import './App.css';
import { useState } from 'react';

function App() {
    const [direction, setDirection] = useState<'left' | 'right'>('left');

    function toggleDirection(): void {
        setDirection( prevDirection => (prevDirection === 'left' ? 'right' : 'left' ));
    }

    return (
        <div>
            <button id="btn_switch" onClick={toggleDirection}>Switch</button>
            <Title />
            <Arrow direction={direction} />
        </div>
    )
}

export default App
