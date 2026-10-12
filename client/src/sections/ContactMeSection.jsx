import { useState } from "react";
import * as Box from "@/components/ui/Button";
import { Input as NeoInput } from "@/components/ui/Input";

function ContactMeSection() {
  const [text, setText] = useState("init text");
  const [sent, setSent] = useState("init sent");

  const [col, setCol] = useState("bg-green-500");
  const [flag, setFlag] = useState(false);

  const btnColor = () => {
    if (flag) {
      setCol("bg-green-500");
    } else {
      setCol("bg-red-500");
    }
    setFlag(!flag);
  };

  const handleClick = () => {
    setSent(text);
  };

  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-xl font-semibold mb-2">Contact Me</h2>
      <p>Dont be shy, send me a text!!!</p>
      <div className="flex flex-row gap-3">
        <input
          className="flex w-full rounded-base border-2 border-border bg-secondary-background selection:bg-main selection:text-main-foreground px-3 py-2 text-sm font-base text-foreground file:border-0 file:bg-transparent file:text-sm file:font-heading placeholder:text-foreground/50 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          type="text"
          placeholder="Type your message..."
          value={text}
          onChange={(ilham) => setText(ilham.target.value)}></input>

        <Box.Button
          className={col}
          variant="neutral"
          size="lg"
          onClick={() => {
            btnColor();
            handleClick();
          }}>
          Send
        </Box.Button>
      </div>

      <p>
        {sent != ""
          ? 'this text is sent "' + sent + '".'
          : "No message sent yet."}
      </p>
    </div>
  );
}

export default ContactMeSection;
