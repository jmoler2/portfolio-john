---
layout: doc
---

<script setup>
  import {data as pages} from './assignment5/frontend.data';
  import { withBase } from 'vitepress';
</script>

# Assignment 5

<ul v-if="pages.length > 0">
  <li v-for="page of pages">
    <a :href="withBase(page.url)">{{ page.frontmatter.title }}</a>
  </li>
</ul>
<p v-else>
  Nothing here yet!
</p>