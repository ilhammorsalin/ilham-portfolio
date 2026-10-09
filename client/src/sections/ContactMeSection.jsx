import { useState } from "react";

function ContactMeSection() {

    const [ text, setText ] = useState("");
    return (
        <div>
            <h2 className="text-xl font-semibold mb-2">Contact Me</h2>
            <p>Dont be shy, send me a text!!!</p>
            <input
                className="w-full border border-gray-400 p-3"
                type="text"
                placeholder="Type your message..."
                value={text}
                onChange={(e) => setText(e.target.value)}>
            </input>
            <button>Send</button>
        </div>
    )
}

export default ContactMeSection;
