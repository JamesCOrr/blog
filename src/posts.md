---
title: Posts
layout: layout.html
date: 2025-07-19
---

<h2>Posts</h2>
{% for post in collections.post %}
    <div class="post-preview">
        <h3><a href="{{ post.url }}">{{ post.data.title }}</a></h3>
        <div class="content-preview">{{ post.content }}</div>
    </div>
{% endfor %}