---
layout: doc
---

<script setup>
  import {data as interviews} from './assignment3/assign3.data';
  import { withBase } from 'vitepress';
</script>

# Assignment 3

<ul v-if="interviews.length > 0">
  <li v-for="interview of interviews">
    <a :href="withBase(interview.url)">{{ interview.frontmatter.title }}</a>
  </li>
</ul>
<p v-else>
  Nothing here yet!
</p>