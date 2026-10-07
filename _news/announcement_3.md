---
layout: post
title: Our preprint on scicode-widgets, a Python package for building interactive teaching notebooks, is out on arXiv!
seo_title: "scicode-widgets Preprint on arXiv | Tulga-Erdene Sodjargal"
description: "scicode-widgets is a Python package that turns Jupyter notebooks into interactive computational-science exercises with instant checks and easy grading."
date: 2025-07-08 16:11:00-0400
inline: false
related_posts: false
---

Our preprint on [scicode-widgets](https://github.com/osscar-org/scicode-widgets) is out on arXiv! scicode-widgets (released as `scwidgets`) is a Python package for turning Jupyter notebooks into interactive exercises for computational science courses. I was involved in the project as sort of a side hustle during my time at EPFL.

One problem non-tech-savvy students face is the amount of boilerplate code that scares them away (been there, done that xD). Even if the actual exercise is a few lines ("implement this function"), but it's buried under a pile of data-processing, plotting, and slider code that you're told to just run and not touch. And every time you change a parameter, you need to rerun several cells in the right order. All of this distracts students from the thing they're actually supposed to learn and scares them away.

Using `scicode-widgets`, the instructor writes the boilerplate once and hides it behind a widget. The student only sees three things:

- a code box where they implement the function (the signature and docstring are fixed),
- a panel of sliders for the parameters of the "computational experiment",
- the output, e.g., a plot generated from their own code.

On top of that, the teacher can add unit-test-like checks (type, shape, numerical closeness, or custom ones like "is your sine function periodic?"), so students get instant feedback. Since the reference answers have to live inside the notebook, you can pass them through a one-way "fingerprint" function (e.g., only compare the sum of the outputs), so students can't just read the answer off. Also, coloured bars show which parts are outdated, i.e., you changed the code or a parameter but haven't rerun or rechecked yet, which saves a lot of "why is my plot not changing" confusion. Student answers (code and parameters) are saved to JSON, so they can be loaded into the relevant notebook by the grader, easing the grading task as well.

It has been used in MSE-305 at EPFL with almost 100 students so far, and I was involved with rewriting the materials for that course from the older packages. The [course notebooks](https://github.com/ceriottm/iam-notebooks) are public if you want to see what it looks like in practice.

So please check it out and save your students' sanity by only showing them the relevant stuff :)

- Paper: [arXiv](https://arxiv.org/abs/2507.05734)
- Code: [Github](https://github.com/osscar-org/scicode-widgets)
