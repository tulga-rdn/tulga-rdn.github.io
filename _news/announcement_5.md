---
layout: post
title: Our paper on LOREM, a long-range equivariant machine-learned interatomic potential, is out in TMLR!
seo_title: "LOREM Paper Published in TMLR | Tulga-Erdene Sodjargal"
description: "LOREM, a long-range equivariant machine-learned interatomic potential, is out in TMLR. Why scalar charges fall short and how equivariant messages help."
date: 2026-04-06 16:11:00-0400
inline: false
related_posts: false
---

Our paper, [Learning Long-Range Representations with Equivariant Messages](https://openreview.net/forum?id=pZI9e4SW9P), is now published in Transactions on Machine Learning Research (TMLR)! This is the project I contributed to during my time at the COSMO lab at EPFL. In it, we introduce LOREM, a machine-learned interatomic potential built around long-range, equivariant message passing.

MLIPs rely on the so-called "locality ansatz", by which the atomic energies (which are used to calculate the total energy) are calculated as a function of their neigbourhood within some cutoff. This is completely valid for most cases, as most of the interactions are short-range. But a lot of the interesting cases concern long-range interactions, such as electrostatics and dispersion. One way of mediating is message passing, which extends the effective cutoff, but it struggles in atomistic ML cases as long-range interactions die off really slowly as the distance increases, as well as difficulties in using it in PBC. 

One fix inspired by "traditional" computational chemistry (and what we did in the [DPG poster](/news/announcement_2/)) is to give each atom a scalar "charge" that encodes relevant atomic information, which is then summed up using Ewald summation. That helps, but a scalar charge is just a number. It can't carry any information about direction or geometry, which a lot of long-range physics depends on. LOREM's trick is to sum up not scalars, but equivariant tensors. Instead of one number per atom, each atom carries tensor-like "charges" that rotate along with the system.

- Paper: [OpenReview](https://openreview.net/forum?id=pZI9e4SW9P)