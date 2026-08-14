# SynthLensAI 📸🔍

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Build Status](https://img.shields.io/badge/build-passing-brightgreen.svg)](#)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D18.0.0-blue.svg)](https://nodejs.org/)

**SynthLensAI** is an edge-native, in-browser computer vision and image analysis toolkit. By leveraging WebAssembly and modern browser capabilities, SynthLensAI extracts EXIF metadata, runs local OCR text extraction, and performs real-time Machine Learning inference using ONNX models—**100% on the client side with zero data sent to external servers.**

---

## 📋 Table of Contents

- [Features](#-features)
- [Architecture](#-architecture)
- [Prerequisites](#-prerequisites)
- [Installation](#-installation)
- [Usage & Code Examples](#-usage--code-examples)
  - [1. Metadata & EXIF Extraction](#1-metadata--exif-extraction)
  - [2. In-Browser OCR Extraction](#2-in-browser-ocr-extraction)
  - [3. ONNX Model Inference](#3-onnx-model-inference)
- [Project Structure](#-project-structure)
- [Configuration](#-configuration)
- [Development & Scripts](#-development--scripts)
- [Contributing](#-contributing)
- [License](#-license)

---

## ✨ Features

* **🔒 Privacy-First Processing**: All image transformations, text recognition, and model inference take place locally in the user's web browser.
* **📷 Deep EXIF Parsing**: Retrieve camera hardware details, GPS coordinates, timestamps, color profiles, and shutter metrics using `exifreader`.
* **🔤 Multi-Language OCR**: Powered by `tesseract.js` via WebAssembly (WASM) web workers to prevent UI main-thread blocking.
* **🧠 Hardware-Accelerated ML**: Execute ONNX models locally using `onnxruntime-web` with WebGL, WebGPU, and WASM execution providers.

---

## 🏗️ Architecture

```text
┌─────────────────────────────────────────────────────────────────┐
│                          User Browser                           │
│                                                                 │
│   ┌───────────────┐     ┌──────────────────┐    ┌───────────┐   │
│   │ Raw Image     │ ──> │   SynthLensAI    │ ──> │ Visual    │   │
│   │ Input File    │     │   Core Engine    │    │ Dashboard │   │
│   └───────────────┘     └────────┬─────────┘    └───────────┘   │
│                                  │                              │
│         ┌────────────────────────┼────────────────────────┐     │
│         │                        │                        │     │
│  ┌──────▼──────┐          ┌──────▼──────┐          ┌──────▼──┐  │
│  │ ExifReader  │          │ TesseractJS │          │ ONNX    │  │
│  │ (Metadata)  │          │ (WASM OCR)  │          │ Web     │  │
│  └─────────────┘          └─────────────┘          └─────────┘  │
└─────────────────────────────────────────────────────────────────┘