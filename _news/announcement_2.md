---
layout: post
title: I presented a poster on long-range machine-learned interatomic potentials at the DPG Spring Meeting 2025 in Regensburg, Germany!
seo_title: "DPG 2025 Poster: Long-Range MLIPs | Tulga-Erdene Sodjargal"
description: "Poster walk-through from the DPG Spring Meeting 2025: adding long-range electrostatics to machine-learned interatomic potentials with torch-pme and metatrain."
date: 2025-03-17 16:11:00-0400
inline: false
related_posts: false
---

In March 2025, I went to Regensburg for the DPG Spring Meeting (DPG-Frühjahrstagung), the big annual meeting of the German Physical Society. I presented a poster on what I had been working on at the COSMO lab. You can find the poster [here](/assets/pdf/dpg2025_poster.pdf), and below is a short walk-through of it.

## The problem: MLIPs are nearsighted

MLIPs rely on the so-called "locality ansatz", by which the atomic energies (which are used to calculate the total energy) are calculated as a function of their neigbourhood within some cutoff. This is completely valid for most cases, as most of the interactions are short-range. But a lot of the interesting cases concern long-range interactions, such as electrostatics and dispersion. One way of mediating is message passing, which extends the effective cutoff, but it struggles in atomistic ML cases as long-range interactions die off really slowly as the distance increases, as well as difficulties in using it in PBC. 

## What we did: add long-range to existing models

There are already models designed specifically for long-range interactions, but we wanted something modular: take an existing short-range architecture and add long-range physics to it without redesigning the whole thing. The recipe is basically:

1. The usual atomic neural network predicts a short-range energy $$E_{\mathrm{SR},i}$$ for each atom, plus a learned charge $$q_i$$.
2. [torch-pme](https://github.com/lab-cosmo/torch-pme) takes all the charges and computes the potential $$V_i$$ they create at each atom across the whole system. It uses Ewald, PME, or P3M summation, so it scales nicely with system size.
3. The long-range energy is then $$E_{\mathrm{LR},i} \propto q_i V_i$$, and the total is $$E_i = E_{\mathrm{SR},i} + E_{\mathrm{LR},i}$$.

Everything is differentiable, so forces come out for free. We wired this into [metatrain](https://github.com/metatensor/metatrain), so you can train long-range versions of SOAP-BPNN and nanoPET (SOAP-LR and nanoPET-LR) straight from the command line.

## How it did

We tested on three datasets that are known to need long-range physics: NaCl clusters, a carbon chain, and an Au dimer on MgO surface. We compared against two long-range models, 4G-HDNNP and CACE-LR. nanoPET-LR ended up competitive with them in both energy and force errors. It also ran a stable 100 ps MD simulation of the Au dimer on MgO, which is a nice sanity check that the model doesn't just do well on a test set but also behaves physically when you actually run dynamics with it.

## What came next

These were still preliminary results, and the "what's next" list on the poster was basically: improve the architectures, figure out a robust training protocol, and get better datasets for long-range models. One limitation of this setup is that each atom only gets a single scalar charge, which can't carry any directional information. That's what we went after next in [LOREM](/news/announcement_5/), where the charges themselves become equivariant.
