---
layout: doc
---

<script setup>
  import {data as interviews} from './interviews/interview.data';
  import { withBase } from 'vitepress';
</script>

# Interviews

<ul v-if="interviews.length > 0">
  <li v-for="interview of interviews">
    <a :href="withBase(interview.url)">{{ interview.frontmatter.title }}</a>
  </li>
</ul>
<p v-else>
  Nothing here yet!
</p>