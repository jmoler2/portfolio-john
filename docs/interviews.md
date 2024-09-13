---
layout: doc
---

<script setup>
  import {data as interviews} from './interviews/interview.data';
  import { withBase } from 'vitepress';
</script>

# Interviews

<ul v-if="interviews.length > 0">
  <li v-for="interview of interviws">
    <a :href="withBase(interview.url)">{{ interviews.frontmatter.title }}</a>
  </li>
</ul>
<p v-else>
  Nothing here yet!
</p>