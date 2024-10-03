---
layout: doc
---

<script setup>
  import {data as pages} from './assignment4/backend.data';
  import { withBase } from 'vitepress';
</script>

# Assignment 3

<ul v-if="pages.length > 0">
  <li v-for="page of pages">
    <a :href="withBase(page.url)">{{ page.frontmatter.title }}</a>
  </li>
</ul>
<p v-else>
  Nothing here yet!
</p>