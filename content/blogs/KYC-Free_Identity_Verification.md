---
id: 1
title: "KYC-Free Identity Verification with Blockchain and AI Agents"
excerpt: "Discover how to create a decentralized, privacy-preserving identity system using facial movement, voice verification, and smart contracts."
img: "/image/blogs/kyc-blockchain.jpg"
date: "2025-05-28"
readTime: "9 min read"
tags: ["Blockchain", "AI", "Identity", "Web3"]
featured: true
author: {name: "Nipun Bandara", avatar: "", bio: "Tech enthusiast building future-proof AI + Web3 solutions."}
---

<p>Traditional Know Your Customer (KYC) processes are invasive, slow, and centralized. But what if users could prove their humanness and identity using biometrics without handing over sensitive documents? In this blog, we'll build a <strong>KYC-Free Identity Verification System</strong> using AI agents and blockchain smart contracts.</p>

<h2>Why Go KYC-Free?</h2>
<p>In decentralized apps (dApps), verifying users without centralized control is challenging. KYC-free systems enable:</p>
<ul>
  <li>Privacy-preserving identity</li>
  <li>Scam and bot prevention</li>
  <li>Reusable credentials across platforms</li>
</ul>

<h2>How It Works</h2>
<p>The user speaks a random phrase while moving their face. An AI agent verifies both voice and facial movement. If valid, a smart contract issues a non-transferable NFT as proof of humanity.</p>

<h2>Tech Stack</h2>
<ul>
  <li><strong>Frontend:</strong> React + MetaMask Wallet Integration</li>
  <li><strong>Backend:</strong> FastAPI for AI verification</li>
  <li><strong>AI Models:</strong> dlib (facial landmarks), Google Speech API (voice match)</li>
  <li><strong>Blockchain:</strong> Solidity Smart Contract deployed on Sepolia Testnet</li>
</ul>

<h2>Project Structure</h2>
<div style="max-width: 100%; overflow-x: auto; background: #f6f8fa; border-radius: 6px; padding: 1em; margin-bottom: 1em;">
<pre><code>project/
├── backend/            # FastAPI for verification
│   ├── main.py
│   ├── verification.py
│   └── utils/
├── frontend/           # React + Wallet Connect
│   ├── public/
│   └── src/
├── contracts/
│   └── HumanProofSBT.sol
</code></pre>
</div>

<h2>Smart Contract</h2>
<p>The <code>HumanProofSBT</code> contract issues a Soulbound Token (SBT) if verification passes. It prevents duplicate claims and stores user status immutably.</p>

<h2>Voice & Face Verification</h2>
<p>The backend uses:</p>
<ul>
  <li><strong>dlib:</strong> for detecting facial movements</li>
  <li><strong>Google Cloud Speech-to-Text:</strong> for validating spoken phrase</li>
</ul>
<p>
  Errors like <em style="word-break: break-all;">>“Unable to open shape_predictor_68_face_landmarks.dat”</em> indicate missing model files.
  Ensure the <code>.dat</code> file is present in your project and correctly referenced in your code.
  On mobile or small screens, check your file paths and permissions if you encounter this error.
</p>

<h2>Handling CORS & API Errors</h2>
<p>For your React app to communicate with FastAPI, set proper CORS headers:</p>
<div style="max-width: 100%; overflow-x: auto; background: #f6f8fa; border-radius: 6px; padding: 1em; margin-bottom: 1em;">
<pre><code>from fastapi.middleware.cors import CORSMiddleware
app.add_middleware(
  CORSMiddleware,
  allow_origins=["http://localhost:3000"],
  allow_methods=["*"],
  allow_headers=["*"],
)
</code></pre>
</div>

<h2>Final Touch: MetaMask + UI</h2>
<p>Once verified, the user can connect their wallet and claim a proof NFT. If already verified, show a badge and skip re-verification.</p>

<h2>Source Code</h2>
<p>You can explore the full source code and try it yourself via GitHub:</p>
<p><a href="https://github.com/nipunbandara/Identity-Verifier.git" target="_blank">🔗 github.com/nipunbandara/Identity-Verifier</a></p>

<h2>Conclusion</h2>
<p>This KYC-Free identity system proves how AI and blockchain can work together to replace centralized verification. You preserve privacy while offering strong proof of personhood—ideal for Web3 platforms, DAOs, and more.</p>