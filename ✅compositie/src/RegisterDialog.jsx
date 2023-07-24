import Dialog from "./Dialog";
import { useState } from "react";

export default function WelcomeDialog() {

    const [input, setInput] = useState('');

    return (
        <Dialog 
            title="Register" 
            subtitle="Registering is easy and fast" 
            color="green">
               <div>
                    Naam: 
                    <input 
                        value={input} 
                        onChange={(e) => setInput(e.target.value)} 
                        type="text"
                    />
                    {input.length && 
                    <button> 
                        Registreer als {input} &raquo;
                    </button>}
                </div>
        </Dialog>
    )
}
