---
layout: doc
---

<script setup>
  import {data as interviews} from './Design/design.data';
  import { withBase } from 'vitepress';
</script>

# Design Stages

<ul v-if="interviews.length > 0">
  <li v-for="interview of interviews">
    <a :href="withBase(interview.url)">{{ interview.frontmatter.title }}</a>
  </li>
</ul>
<p v-else>
  Nothing here yet!
</p>