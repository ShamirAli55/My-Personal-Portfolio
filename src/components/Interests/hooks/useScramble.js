import { useEffect, useState } from "react";

export default function useScramble(text, start = false, ms = 14) {
  const [out, setOut] = useState("");
  useEffect(() => {
    if (!start) return;
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=";
    let done = 0;
    const chars = Array.from({ length: text.length }).map(() => "");
    const id = setInterval(() => {
      done++;
      for (let i = 0; i < text.length; i++) {
        if (i < done / 3) chars[i] = text[i];
        else chars[i] = letters[Math.floor(Math.random() * letters.length)];
      }
      setOut(chars.join(""));
      if (done / 3 > text.length + 2) {
        setOut(text);
        clearInterval(id);
      }
    }, ms);
    return () => clearInterval(id);
  }, [text, start, ms]);
  return out;
}
