

import { useState, useEffect } from "react";
function App() {

const [dark,setDark]=useState(false);

useEffect(()=>{document.body.style.background=dark?"#222":"#fff"},[dark ]);
return (
<div style={styles.card}>
<button style={styles.btn} onClick={() => setDark(!dark)}>
                  Switch to {dark ? "Light" : "Dark"} mode
</button>
</div>
);
}
const styles = {
card: { fontFamily: "system-ui", maxWidth: 320, margin: "40px auto", padding: 24,
borderRadius: 16, textAlign: "center", boxShadow: "0 4px 20px rgba(0,0,0,.15)" },
btn: { padding: "10px 18px", border: "none", borderRadius: 8, background: "#5352ed",
color: "white", cursor: "pointer" },
};

export default App
