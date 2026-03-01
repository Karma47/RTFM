---
title: "Home"
description: "Portfolio and personal site"
---

# Hello, I'm [Your Name]

Welcome to my portfolio! I'm a Cyber Security <span id="role">Specialist</span> who specializes in:

<script>
// rotate the word in the #role element every 2 seconds
(() => {
  const words = ["Specialist","Analyst","Consultant","Engineer","Researcher","Expert","Evangelist"];
  let i = 0;
  const el = document.getElementById('role');
  if (!el) return;
  setInterval(() => {
    i = (i + 1) % words.length;
    el.textContent = words[i];
  }, 2000);
})();
</script>

- 🌐 Web development and design
- 🔐 Cybersecurity research
- 🧩 Open-source contributions

## Featured Projects

1. **Project Alpha** – A tool for ...
2. **Project Beta** – An open-source library that ...
3. **Project Gamma** – A blog detailing ...

Feel free to browse through the links below or check out my [notes](/notes/) and [GitHub](https://github.com/yourusername).

> "Crafting solutions, one line at a time."