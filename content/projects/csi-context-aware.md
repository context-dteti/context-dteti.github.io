---
name: "CSI (Channel State Information)-based Context-Aware"
shortDesc: Leveraging Wi-Fi Channel State Information for passive human activity recognition and contextual sensing without cameras.
videoUrl: 
tags: [Wi-Fi Sensing, CSI, Activity Recognition]
funder: ""
categories: [Wi-Fi Sensing, Context-Aware]
people: [1, 20]
---

This research investigates Wi-Fi Channel State Information (CSI) as a ubiquitous, privacy-preserving sensing modality for human activity recognition and environmental context inference.

By analyzing the fine-grained amplitude and phase distortions that human motion imparts on Wi-Fi signals passing through a space, our system can detect presence, recognize activities (walking, sitting, falling, sleeping), estimate respiration rate, and even identify individuals — all **without cameras, wearable sensors, or user cooperation**.

## Processing Pipeline

Our processing pipeline extracts Doppler-frequency features from CSI time series and feeds them into a lightweight convolutional neural network optimized for edge deployment on commodity Wi-Fi routers.

## Results

Current accuracy exceeds **92%** for six-class activity recognition in controlled environments.

## Ongoing Work

Domain adaptation techniques to generalize across different room geometries and furniture layouts.
