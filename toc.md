---
layout: toc
title: Table of Contents
permalink: /toc/
---

## Editorial Note


<div class="link" style="background-image: url('/img/logos/logo-cpcj.jpg');">

<a href="/ednote">Creative Publishing and Critical Journalism</a>

<p>A critical overview of contemporary media from The New School</p>

</div>


## The IRL Feature
<div class="link" style="background-image: url('/img/logos/logo-thenewrepublic.jpg');">

<a href="/irl">The (New) New Republic</a>

<p>A live conversation with the editorial team behind the New Republic</p>

</div>

## Interviews


{% for interview in site.interviews %}

<div class="link" style="background-image: url('/img/{{ interview.img }}');">

<a href="{{ interview.url }}">{{ interview.title }}</a>

<p>{{ interview.subtitle }}</p>

</div>

{% endfor %}

<div class="spacing"></div>
