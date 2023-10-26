import { useState } from "react";

type Props = {
    onNewValue?: (value: number) => void;
}

export default function ChildComponent({ onNewValue }: Props) {

    const [count, setCount] = useState(0);

    function handleClick() {
        const newCount = count + 1;
        setCount(newCount);
        if (onNewValue) {
            onNewValue(newCount);
        }
    }

    return (
        <div style={{ border: "1px solid red", padding: "10px" }}>
            {count}
            <button onClick={handleClick} >OK</button>
        </div>
    );
}