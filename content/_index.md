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

  <p class="subtitle">
    Cyber Security <span id="role" class="highlight">Specialist</span>
  </p>

  <p class="stats">
    🛡 800+ Professionals Trained • 🐞 CVEs Reserved • 🧪 Multiple Vulnerability Disclosures
  </p>

  <p class="skills">
    Threat Hunting • SIEM • Incident Response • Red Teaming • Vulnerability Management • TTX
  </p>

  <!-- CTA Buttons INSIDE hero -->
  <div class="links">
    <a href="/docs/01_methodology/threat-hunting/01-threat-hunting-essentials/">📘 Notes</a>
    <a href="/docs/02_platforms/lab_tracker.html">🧪 Labs</a>
    <a href="https://github.com/Karma47" target="_blank">💻 GitHub</a>
    <a href="/about/resume.html" target="_blank" rel="noopener">📄 Resume</a>
  </div>
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

<section id="career" style="max-width:1000px;margin:50px auto;padding:32px 24px;background:#0b1120;color:#f8fafc;font-family:Inter,Arial,sans-serif;border:1px solid #1e293b;border-radius:24px;box-sizing:border-box;overflow:hidden;">

  <div style="text-align:center;margin-bottom:35px;">
    <div style="display:inline-block;padding:7px 13px;border:1px solid #334155;border-radius:30px;color:#93c5fd;font-size:11px;letter-spacing:2px;text-transform:uppercase;">My Professional Journey</div>
  </div>

  <div style="width:100%;overflow-x:auto;">
    <svg viewBox="0 0 900 490" width="100%" style="min-width:620px;display:block;" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Career timeline from Infysec in 2019 to AUMOVIO in 2025">
      <defs>
        <linearGradient id="careerGradient" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#818cf8"/>
          <stop offset="50%" stop-color="#38bdf8"/>
          <stop offset="100%" stop-color="#34d399"/>
        </linearGradient>
        <linearGradient id="careerArea" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#38bdf8" stop-opacity=".19"/>
          <stop offset="100%" stop-color="#38bdf8" stop-opacity="0"/>
        </linearGradient>
        <filter id="careerGlow" x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur stdDeviation="6"/>
        </filter>
      </defs>
      <!-- Graph grid -->
      <g stroke="#243047" stroke-width="1">
        <line x1="70" y1="80" x2="70" y2="385"/>
        <line x1="215" y1="80" x2="215" y2="385"/>
        <line x1="360" y1="80" x2="360" y2="385"/>
        <line x1="505" y1="80" x2="505" y2="385"/>
        <line x1="650" y1="80" x2="650" y2="385"/>
        <line x1="795" y1="80" x2="795" y2="385"/>
        <line x1="70" y1="140" x2="825" y2="140" stroke-dasharray="3 7"/>
        <line x1="70" y1="220" x2="825" y2="220" stroke-dasharray="3 7"/>
        <line x1="70" y1="300" x2="825" y2="300" stroke-dasharray="3 7"/>
        <line x1="70" y1="385" x2="825" y2="385"/>
      </g>
      <!-- Area beneath the line -->
      <path d="M100 340 C145 330 185 302 245 285 S340 235 390 220 S485 160 535 150 S635 95 680 90 S750 70 795 65 L795 385 L100 385 Z" fill="url(#careerArea)"/>
      <!-- Career path -->
      <path d="M100 340 C145 330 185 302 245 285 S340 235 390 220 S485 160 535 150 S635 95 680 90 S750 70 795 65"
        fill="none" stroke="url(#careerGradient)" stroke-width="4" stroke-linecap="round"/>
      <!-- Infysec -->
      <a href="https://www.infysec.com/" target="_blank" rel="noopener noreferrer">
        <circle cx="100" cy="340" r="17" fill="#818cf8" opacity=".18" filter="url(#careerGlow)"/>
        <circle cx="100" cy="340" r="8" fill="#a5b4fc" stroke="#eef2ff" stroke-width="2"/>
        <circle cx="100" cy="340" r="15" fill="transparent" stroke="#a5b4fc" stroke-opacity=".45"/>
        <g transform="translate(72 265)">
          <rect width="166" height="57" rx="10" fill="#141e32" stroke="#35425b"/>
          <text x="12" y="21" fill="#a5b4fc" font-size="11" font-weight="600">Cybersecurity Researcher</text>
          <text x="12" y="41" fill="#f1f5f9" font-size="14" font-weight="700">InfySEC</text>
        </g>
      </a>
      <!-- Tata Elxsi -->
      <a href="https://www.tataelxsi.com/" target="_blank" rel="noopener noreferrer">
        <circle cx="315" cy="252" r="17" fill="#38bdf8" opacity=".18" filter="url(#careerGlow)"/>
        <circle cx="315" cy="252" r="8" fill="#38bdf8" stroke="#e0f2fe" stroke-width="2"/>
        <circle cx="315" cy="252" r="15" fill="transparent" stroke="#38bdf8" stroke-opacity=".45"/>
        <g transform="translate(245 163)">
          <rect width="170" height="57" rx="10" fill="#141e32" stroke="#35425b"/>
          <text x="12" y="21" fill="#7dd3fc" font-size="11" font-weight="600">Cybersecurity Engineer</text>
          <text x="12" y="41" fill="#f1f5f9" font-size="14" font-weight="700">Tata Elxsi</text>
        </g>
      </a>
      <!-- Continental -->
      <a href="https://www.continental.com/" target="_blank" rel="noopener noreferrer">
        <circle cx="535" cy="150" r="17" fill="#38bdf8" opacity=".18" filter="url(#careerGlow)"/>
        <circle cx="535" cy="150" r="8" fill="#38bdf8" stroke="#e0f2fe" stroke-width="2"/>
        <circle cx="535" cy="150" r="15" fill="transparent" stroke="#38bdf8" stroke-opacity=".45"/>
        <g transform="translate(453 183)">
          <rect width="192" height="57" rx="10" fill="#141e32" stroke="#35425b"/>
          <text x="12" y="21" fill="#7dd3fc" font-size="11" font-weight="600">Incident Response &amp; Threat Intel</text>
          <text x="12" y="41" fill="#f1f5f9" font-size="14" font-weight="700">Continental</text>
        </g>
      </a>
      <!-- AUMOVIO -->
      <a href="https://www.aumovio.com/" target="_blank" rel="noopener noreferrer">
        <circle cx="795" cy="65" r="24" fill="#34d399" opacity=".18" filter="url(#careerGlow)"/>
        <circle cx="795" cy="65" r="10" fill="#34d399" stroke="#d1fae5" stroke-width="3"/>
        <circle cx="795" cy="65" r="19" fill="transparent" stroke="#34d399" stroke-opacity=".65"/>
        <g transform="translate(660 100)">
          <rect width="166" height="65" rx="11" fill="#102b2b" stroke="#34d399" stroke-width="1.2"/>
          <text x="12" y="20" fill="#6ee7b7" font-size="10" font-weight="700">Incident Response &amp; Threat Intel</text>
          <text x="12" y="41" fill="#ecfdf5" font-size="17" font-weight="700">AUMOVIO</text>
          <text x="12" y="55" fill="#6ee7b7" font-size="10">Aug 2025 – Present</text>
        </g>
      </a>
      <!-- Timeline axis labels -->
      <g fill="#94a3b8" font-size="12" text-anchor="middle">
        <text x="100" y="414">2019</text>
        <text x="245" y="414">2021</text>
        <text x="390" y="414">2023</text>
        <text x="535" y="414">2024</text>
        <text x="680" y="414">2025</text>
        <text x="795" y="414">NOW</text>
      </g>
      <!-- Exact employment dates -->
      <g fill="#64748b" font-size="10" text-anchor="middle">
        <text x="100" y="435">May</text>
        <text x="245" y="435">Mar</text>
        <text x="390" y="435">Jun</text>
        <text x="680" y="435">Aug</text>
      </g>
      <text x="450" y="472" text-anchor="middle" fill="#64748b" font-size="11" letter-spacing="2">CAREER PROGRESSION</text>
    </svg>
  </div>

  <div style="display:flex;justify-content:center;flex-wrap:wrap;gap:10px;margin-top:18px;">
    <span style="padding:9px 13px;border-radius:8px;background:#141e32;border:1px solid #29364d;color:#cbd5e1;font-size:12px;">2019–2021 · Infysec</span>
    <span style="padding:9px 13px;border-radius:8px;background:#141e32;border:1px solid #29364d;color:#cbd5e1;font-size:12px;">2021–2023 · Tata Elxsi</span>
    <span style="padding:9px 13px;border-radius:8px;background:#141e32;border:1px solid #29364d;color:#cbd5e1;font-size:12px;">2023–2025 · Continental</span>
    <span style="padding:9px 13px;border-radius:8px;background:#102b2b;border:1px solid #34d399;color:#6ee7b7;font-size:12px;">2025–Now · AUMOVIO</span>
  </div>
</section>

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

<style>
.links {
  display: flex;
  gap: 1.2rem;
  justify-content: center;
  margin-top: 2rem;
  flex-wrap: wrap;
}

.links a {
  display: inline-block;
  padding: 1rem 1.5rem;
  border-radius: 14px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem;
  color: #fff;
  background: linear-gradient(135deg, #0f172a, #1e293b);
  border: 1px solid rgba(255,255,255,0.1);
  transition: all 0.25s ease;
  box-shadow: 0 4px 15px rgba(0,0,0,0.2);
}

.links a:hover {
  transform: translateY(-6px) scale(1.05);
  box-shadow: 0 10px 25px rgba(0,0,0,0.4);
  background: linear-gradient(135deg, #00c6ff, #0072ff);
}

.links a:active {
  transform: scale(0.98);
}
</style>

## 📺 Latest Videos

<iframe width="580" height="315" src="https://www.youtube.com/embed/WGidtNRHpko?si=q1QoplpL_wkl2qug" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

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