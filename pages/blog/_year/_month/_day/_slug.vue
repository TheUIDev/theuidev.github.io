<template lang="pug">
v-container(fluid grid-list-xl)
  v-layout(row wrap)
    v-flex(xs12, md12)
        h1(v-html="$md.render(blog.title)")
        v-img(:src='blog.photo_url')
        .blogContent(v-html="$md.render(blog.content)")
</template>
<script>
export default {
  async asyncData({ app, params }) {
    const slug = `${params.year}-${params.month}-${params.day}-${params.slug}`
    const blogposts = await app.$axios.$get('/blogposts.json')
    const blog = blogposts[slug]

    blog.content = blog.content.replace('<!--more-->', '')

    return {
      blog
    }
  }
}
</script>
<style lang="scss">
.blogContent {
  margin: 1rem 0;
}
.blogContent > p > img {
  display: block;
  max-width: 100%;
  height: auto;
  margin: 1.5rem 0;
}
.v-image__image--cover {
  display: block;
  margin: 0 0 1rem 0;
}
</style>
