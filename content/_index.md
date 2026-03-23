---
description: "Portfolio and personal site"
---

<style>
.hero {
  text-align: center;
  padding: 3rem 1rem;
}

.hero h1 {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
}

.hero p {
  font-size: 1.2rem;
  color: #666;
}

.highlight {
  color: #00bcd4;
  font-weight: 600;
}

.section {
  margin-top: 3rem;
}

.card {
  padding: 1.2rem;
  border-radius: 12px;
  background: #111;
  color: #eee;
  margin-bottom: 1rem;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0,0,0,0.3);
}

.links a {
  margin-right: 1rem;
  text-decoration: none;
  color: #00bcd4;
}

.quote {
  text-align: center;
  margin-top: 2rem;
  font-style: italic;
  color: #888;
}
</style>

<div class="hero">
  <h1>Hello, I'm Prasanna V Balaji 👋</h1>
  <p>
    Cyber Security <span id="role" class="highlight">Specialist</span>
      <p style="font-size:0.95rem; color:#aaa;">
    🛡 800+ Professionals Trained • 🐞 CVEs Reserved • 🧪 Multiple Vulnerability Disclosures
    <p>
    Threat Hunting • SIEM • Incident Response • Red Teaming • Vulnerability Management • TTX
    </p>
  </p>
</div>

<script>
(() => {
  const words = ["Specialist","Analyst","Consultant","Engineer","Researcher","Evangelist"];
  let i = 0;
  const el = document.getElementById('role');
  if (!el) return;
  setInterval(() => {
    i = (i + 1) % words.length;
    el.textContent = words[i];
  }, 2000);
})();
</script>

---

## 🚀 What I Do

<div class="card">🌐 Discover and disclose real-world vulnerabilities</div>
<div class="card">🔐 Simulate attacks & strengthen enterprise defenses</div>
<div class="card">🧩 Design and execute Threat Hunting & TTX exercises</div>

---
## 🎓 Certifications

<style>
.cert-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
  text-align: center;
}

.cert-item img {
  width: 70px;
  height: 70px;
  object-fit: contain;
  margin-bottom: 0.5rem;
  transition: transform 0.2s ease;
}

.cert-item img:hover {
  transform: scale(1.1);
}

.cert-name {
  font-size: 0.85rem;
  color: #ccc;
}
</style>

<div class="cert-grid">
  <!-- OffSec -->
  <a class="cert-item" href="https://credentials.offsec.com/e59cdbab-42ee-4552-b394-2cbe95518344#acc.EQlex6Pt" target="_blank">
    <img src="https://api.accredible.com/v1/frontend/credential_website_embed_image/badge/176645659">
    <div class="cert-name">OSIR</div>
  </a>

  <a class="cert-item" href="https://credentials.offsec.com/36e130be-97b7-4dd9-a641-683ad574b6db##acc.y3kD7YIK" target="_blank">
    <img src="https://api.accredible.com/v1/frontend/credential_website_embed_image/badge/173436472">
    <div class="cert-name">OSTH</div>
  </a>

  <a class="cert-item" href="https://credentials.offsec.com/ccc72839-54a1-4fa8-bdd2-b6171e476587##acc.MOWm1ABU" target="_blank">
    <img src="https://api.accredible.com/v1/frontend/credential_website_embed_image/badge/174459860">
    <div class="cert-name">OSWP</div>
  </a>

  <a class="cert-item" href="https://credentials.offsec.com/b9496311-bf16-4e87-83d3-c9b7ff5e64fc##acc.HWjwJpSY" target="_blank">
    <img src="https://api.accredible.com/v1/frontend/credential_website_embed_image/badge/172036315">
    <div class="cert-name">OSCC</div>
  </a>

  <a class="cert-item" href="https://credentials.offsec.com/6d20cb22-6d28-4132-94c9-2911c4ce5337##acc.hCprIHQ8" target="_blank">
    <img src="https://api.accredible.com/v1/frontend/credential_website_embed_image/badge/171995347">
    <div class="cert-name">KLCP</div>
  </a>

  <!-- EC-Council -->
  <a class="cert-item" href="https://aspen.eccouncil.org/VerifyBadge?type=certification&a=QOb+PZyIHUmG5cBymy1E01njoEu0iD2Ov6brRKi1N1I=" target="_blank">
    <img src="/images/certs/CISO.webp">
    <div class="cert-name">C|CISO</div>
  </a>

  <a class="cert-item" href="https://aspen.eccouncil.org/VerifyBadge?type=certification&a=H+uvGg3f1u+SxDBpucsWAvK0wMK/QARWNuCC6BjJ/Gw=" target="_blank">
    <img src="/images/certs/ceh.webp">
    <div class="cert-name">CEH Master</div>
  </a>

  <a class="cert-item" href="https://aspen.eccouncil.org/VerifyBadge?type=certification&a=HUIuz777Vo7bn+YectPcwfSuGjJv5l9Byz8vzOWTzj0=" target="_blank">
    <img src="/images/certs/chfi.webp">
    <div class="cert-name">CHFI</div>
  </a>

  <!-- INE -->
  <a class="cert-item" href="https://certs.ine.com/85dbbb0a-6d1f-47b1-bde7-b79345cf4067##acc.Rk7VOUMx" target="_blank">
    <img src="/images/certs/ecppt.svg">
    <div class="cert-name">eCPPT</div>
  </a>

  <a class="cert-item" href="https://certs.ine.com/f374ec64-9aca-440a-8b15-dab5a7ef257d#acc.HGbxEweK" target="_blank">
    <img src="/images/certs/ewptx.svg">
    <div class="cert-name">eWPTX</div>
  </a>

  <!-- CCSK -->
  <a class="cert-item" href="https://www.credly.com/badges/e319a7c6-2cfa-40cc-a30a-e65de87543b9/linked_in_profile" target="_blank">
    <img src="/images/certs/ccsk.png">
    <div class="cert-name">CCSK</div>
  </a>

  <!-- CEI -->
  <a class="cert-item" href="https://aspen.eccouncil.org/VerifyBadge?type=certification&a=ZaHqVPs7HNncXxwRS25I1r998S1Vyc5Qcrw4dYPWzRU=" target="_blank">
    <img src="/images/certs/CEI.webp">
    <div class="cert-name">CEI</div>
  </a>

  <!-- HTB Xen -->
  <a class="cert-item" href="" target="_blank">
    <img src="/images/certs/xen.webp">
    <div class="cert-name">XEN Pro Labs</div>
  </a>

  <!-- OSCP+ -->
  <a class="cert-item" href="" target="_blank">
    <img src="/images/certs/oscp.png">
    <div class="cert-name">OSCP+ (In Progress)</div>
  </a>

  <!-- OSDA -->
  <a class="cert-item" href="" target="_blank">
    <img src="/images/certs/OSDA.svg">
    <div class="cert-name">OSDA (In Progress)</div>
  </a>

  <!-- CISSP -->
  <a class="cert-item" href="" target="_blank">
    <img src="/images/certs/cissp.png">
    <div class="cert-name">CISSP (In Progress)</div>
  </a>

</div>

---

## 🏆 Recognition & Impact

<div class="card" style="border-left: 4px solid #00bcd4;">
  <strong>🎓 EC-Council Instructor</strong><br/>
  Certified instructor delivering CSCU, CEH Master, and CHFI training to <span class="highlight">800+ professionals</span><br/>
  across CDOT, Comcast India, and KL University.<br/>
  🏅 <span class="highlight">Best EC-Council Instructor Award</span><br/>
  <a href="https://www.eccouncil.org/ec-council-in-news/ec-council-unveils-award-winning-cybersecurity-programs-and-instructors-from-2020/" target="_blank">
    View Award →
  </a>
</div>

<div class="card" style="border-left: 4px solid #4caf50;">
  <strong>🛡 Patchstack Researcher</strong><br/>
  Public vulnerability disclosures contributing to WordPress ecosystem security.<br/>
  <a href="https://patchstack.com/database/researchers/749f2e1d-43ee-4906-8e67-5676b999c89e" target="_blank">
    View Profile →
  </a>
</div>

<div class="card" style="border-left: 4px solid #ff9800;">
  <strong>🚨 Wordfence Recognition</strong><br/>
  Credited researcher in multiple vulnerability findings and threat intelligence reports.<br/>
  <a href="https://www.wordfence.com/threat-intel/vulnerabilities/researchers/prasanna-v-balaji?sortby=cvss_score&sort=desc" target="_blank">
    View Research →
  </a>
</div>

## 🧪 Featured Projects

<div class="card">
  <strong>Project RTFM</strong><br/>
  Cybersecurity knowledge platform covering threat hunting, offensive security, and methodologies.<br/>
  <span class="highlight">Built with Hugo • Structured for real-world use</span>
</div>

<div class="card">
  <strong>Project Mayai</strong><br/>
  Secret recipie in development ;)
</div>

<div class="card">
  <strong>Project Arch Linux</strong><br/>
  Building custom arch linux configuration and desktop.
</div>

---

## 🔗 Explore More

<div class="links">
  <a href="/docs/01_methodology/threat-hunting/01-threat-hunting-essentials/">📘 Notes</a>
  <a href="/docs/02_platforms/lab_tracker.html">🧪 Labs</a>
  <a href="https://github.com/Karma47">💻 GitHub</a>
</div>

## 📺 Latest Videos

<iframe width="600" height="315" src="https://www.youtube.com/embed/WGidtNRHpko?si=q1QoplpL_wkl2qug" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

- [Vulnhub - kioptrix 4](https://www.youtube.com/watch?v=LNsNu7bksE0)
- [Vulnhub - Kioptrix 3](https://www.youtube.com/watch?v=ImiwQj6UGfM)
- [Vulnhub - kioptrix 2](https://www.youtube.com/watch?v=Q9S2-l4l8XA)
- [Vulnhub - kioptrix1](https://www.youtube.com/watch?v=0btoEoHwIwE)
- [Windows Terminal Pen-Testing](https://www.youtube.com/watch?v=8sowYFeD5P0)

➡️ [More videos...](https://www.youtube.com/channel/UCi60vin3uAsSPP3UsNnXHqg)

---

## 🖥️ Arch Linux Setup

<img src="https://gitlab.com/blankdash/arch-dot-files/-/raw/master/qtile/qtile/screenshots/desktop_full.png" style="border-radius:12px; margin-top:1rem;" />

<div class="card" style="text-align:center;">
  <strong>🚀 Let's Work Together</strong><br/>
  Open to cybersecurity roles, consulting, and collaborations.
<div class="quote">
  "Crafting solutions, one exploit at a time."
</div>
  <br/><br/>
  <a href="mailto:prasannavbalaji@proton.me">📩 Contact Me</a>
</div>