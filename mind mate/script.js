const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

const quotes = [
  "You are stronger than you think.",
  "One day at a time.",
  "It's okay to not be okay.",
  "Progress, not perfection.",
  "Take a deep breath. You got this!"
];

app.get('/api/quote', (req, res) => {
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  res.json({ quote: randomQuote });
});

app.post('/api/mood', (req, res) => {
  const mood = req.body.mood.trim().toLowerCase();
  let message = "Thank you for sharing your feeling!";

  if (mood.includes("happy")) {
    message = "😊 Glad to hear you’re happy!";
  } else if (mood.includes("sad")) {
    message = "😢 It’s okay to feel sad. Take a deep breath.";
  } else if (mood.includes("anxious")) {
    message = "😰 Feeling anxious? Try the breathing exercise below.";
  } else if (mood.includes("tired")) {
    message = "😴 Let’s take it easy today.";
  } else if (mood.includes("stressed")) {
    message = "😓 Take a deep breath, and know you’ll get through this.";
  } else if (mood.includes("grateful")) {
    message = "🙏 Gratitude can be so powerful. Keep your head high!";
  } else if (mood.includes("excited")) {
    message = "🎉 Exciting times ahead! Stay positive!";
  } else if (mood.includes("confused")) {
    message = "🤔 It’s okay to feel confused. Things will make sense soon.";
  } else {
    message = `You're feeling "${mood}". Take a deep breath and be kind to yourself. 💛`;
  }

  res.json({ message });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
