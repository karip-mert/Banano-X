async function cevapAl() {
    const soru = document.getElementById("soru").value;
    const API_KEY = "BURAYA_API_ANAHTARINI_YAZ";
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`;

    document.getElementById("cevap").innerText = "Düşünüyorum...";

    const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ contents: [{ parts: [{ text: soru }] }] })
    });

    const veri = await response.json();
    document.getElementById("cevap").innerText = veri.candidates[0].content.parts[0].text;
}
