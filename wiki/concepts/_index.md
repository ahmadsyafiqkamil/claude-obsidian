---
type: meta
title: "Concepts Index"
updated: 2026-04-07
tags:
  - meta
  - index
  - concept
domain: knowledge-management
status: evergreen
related:
  - "[[index]]"
  - "[[dashboard]]"
  - "[[Wiki Map]]"
  - "[[Hot Cache]]"
  - "[[LLM Wiki Pattern]]"
  - "[[Compounding Knowledge]]"
  - "[[LLM Wiki Pattern]]"
  - "[[Hot Cache]]"
  - "[[Compounding Knowledge]]"
---

# Concepts Index

Navigation: [[index]] | [[entities/_index|Entities]] | [[sources/_index|Sources]]

All concept pages — ideas, patterns, and frameworks extracted from sources.

---

## Knowledge Management

- [[LLM Wiki Pattern]] — the core architecture for persistent, compounding knowledge bases
- [[Hot Cache]] — ~500-word session context file, updated after every ingest
- [[Compounding Knowledge]] — why the wiki grows more valuable over time, unlike RAG
- [[DragonScale Memory]] — memory-layer spec: fold operator, deterministic page addresses, semantic tiling, boundary-first autoresearch (status: shipped v0.4, all four mechanisms opt-in)
- [[Persistent Wiki Artifact]]: durable Markdown page as the LLM's memory object (developing)
- [[Source-First Synthesis]]: provenance discipline for LLM wiki layers (developing)
- [[Query-Time Retrieval]]: query synthesis with citations, complementary to Obsidian search (developing)

---

## Deep Learning

- [[Deep Learning]] — definisi, sejarah (1943-2012), hubungan dengan ML, tantangan (status: developing)
- [[Artificial Neural Networks]] — model matematis multi-layer, prinsip backpropagation (status: developing)
- [[Deep Learning Architecture]] — struktur Input→Hidden→Output, jenis-jenis layer (status: developing)
- [[Neural Network Layers]] — referensi 7 jenis hidden layer: Dense, Conv, BN, RNN, Dropout, Pooling, Flatten (status: developing)
- [[Convolutional Neural Network]] — ekstraksi fitur hierarkis untuk gambar dan visual (status: developing)
- [[Recurrent Neural Network]] — loop rekursif untuk data berurutan, vanishing gradient (status: developing)
- [[Long Short-Term Memory]] — gate mechanism untuk konteks jangka panjang (status: developing)
- [[Generative Adversarial Network]] — generator vs diskriminator, data sintetis (status: developing)
- [[Transformer Architecture]] — self-attention, fondasi LLM modern (status: developing)
- [[Forward Propagation]] — proses menghitung output NN dari input (status: developing)
- [[Backpropagation]] — optimasi bobot via chain rule + gradient descent (status: developing)
- [[LeNet]] — arsitektur CNN pertama (Yann LeCun, 1998) (status: developing)
- [[AlexNet]] — CNN pemenang ImageNet 2012, titik balik DL (status: developing)
- [[CNN 5-Step Pipeline]] — patches → small NN → array → downsampling → prediksi (status: developing)
- [[Weights Sharing in CNN]] — filter identik untuk semua patch, translation invariance (status: developing)
- [[MNIST]] — benchmark dataset digit tulisan tangan (status: developing)
- [[RNN Input-Output Types]] — one-to-one, one-to-many, many-to-one, many-to-many (status: developing)
- [[Vanilla RNN]] — bentuk dasar RNN dengan recurrent loop (status: developing)
- [[Data Preprocessing Deep Learning]] — 4 tahapan: array → split → normalize → train/test (status: developing)
- [[Image Augmentation]] — rescale, rotation, flip, shear untuk data gambar (status: developing)
- [[Text Tokenization and Padding]] — tokenizer + oov_token + pad_sequences (status: developing)

---

## Backend Engineering

- [[Django DRF Backend Pattern]] — Django 5 + DRF + MySQL 8.0 stack (status: developing)
- [[NextAuth JWT Bridge]] — NextAuth v5 ↔ DRF simplejwt via httpOnly cookies (status: developing)
- [[Docker Compose Multi-Service]] — pola multi-container dev/prod (status: developing)
- [[Export Pipeline DOCX PDF]] — template Word → python-docx → LibreOffice PDF (status: developing)

---

## Web3 & Blockchain

- [[Verifiable Provenance]] — Wikipedia model on trustless infrastructure (status: developing)
- [[Walrus Blob Storage]] — immutable content-addressed storage di Sui (status: developing)
- [[Sui Move Coordination Layer]] — on-chain pointer + identity + relationships (status: developing)
- [[Multi-Agent Wiki]] — Agent A (ingest) + Agent B (lint/dispute) co-curation (status: developing)
- [[Dispute Layer]] — ketidaksepakatan sebagai first-class on-chain record (status: developing)
- [[Content-Addressed Knowledge Base]] — artefak diidentifikasi oleh hash, bukan lokasi (status: developing)
- [[On-Chain Confidence Score]] — unique source count per claim (status: developing)
- [[Decentralized Voting System]] — transparansi + immutability voting on-chain (status: developing)
- [[Smart Contract Voting]] — Solidity + Foundry voting contract pattern (status: developing)
- [[RainbowKit Wagmi Web3 Pattern]] — RainbowKit + Wagmi + Viem di Next.js (status: developing)

---

## Government & Data

- [[Indonesian Government HR System]] — absensi, cuti, lembur, SPPD untuk KJRI (status: developing)
- [[PODES Village Data Pipeline]] — 4 DBF → ~337k × 793 → pickle + analisis (status: developing)
- [[IDM Village Classification]] — Indeks Desa Membangun 2025, 5 tier (status: developing)
- [[DBF Data Processing]] — dbfread + multi-encoding fallback + sparse union (status: developing)
- [[MoSCoW Prioritization]] — framework prioritisasi M/S/C/W oleh Dai Clegg, Oracle (status: current)
- [[Google Agent Development Kit]] — framework agent dari Google, digunakan di Chatbot KJRI Dubai (status: developing)
- [[MCP Toolbox]] — bridge SQL database untuk AI agent via protokol MCP (status: developing)
- [[pgvector Semantic Search]] — pencarian semantik berbasis embedding di PostgreSQL (status: developing)
- [[CodeIgniter 3]] — PHP MVC framework ringan, digunakan di PROTKONS (status: current)
- [[Consular Service Management]] — pola domain untuk sistem informasi layanan konsuler KBRI/KJRI (status: developing)
- [[Tanda Tangan Elektronik]] — integrasi TTE untuk penandatanganan dokumen resmi pemerintah (status: developing)
