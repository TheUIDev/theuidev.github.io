<template lang="pug">
v-container(fluid grid-list-xl)
  v-layout(row wrap)
      template(v-for='(blogpost, idx) in active')
        v-flex(xs12, sm6, md6, lg4)
          v-card(:key='idx', :hover="true")
            v-img(:src='blogpost.photo_url', :aspect-ratio='4/3', :srcset="blogpost.photoSrcSet" sizes="(max-width:412px) 400px,  (max-width:768px) 768px, 1040px")
            v-card-title(primary-title)
              .contentCard
                h2.mb-0
                  | {{ blogpost.title }}
                div {{ months[new Date(blogpost.date).getMonth()] }} {{ new Date(blogpost.date).getDate() }}, {{ new Date(blogpost.date).getFullYear() }}
                template(v-for='(tag, tid) in blogpost.tags')
                  v-chip(outline color="primary" :key='tid') {{ tag }}
            v-card-actions
              v-btn(raised, color="primary", @click="goTo(blogpost.href)") Read more
          v-spacer(:key='`space-${idx}`')
      v-flex(xs12, sm6, md6, lg4)
        InfiniteLoading(
          ref="infiniteLoading" 
          @infinite="onInfinite")
            p(slot='no-more') No more blogposts.
            p(slot='no-results') No more blogposts.


</template>
<script>
import InfiniteLoading from 'vue-infinite-loading'
export default {
  layout: 'page',
  components: {
    InfiniteLoading
  },
  methods: {
    goTo(link) {
      this.$router.push(link)
    },
    getRndInteger(min, max) {
      return Math.floor(Math.random() * (max - min)) + min
    },
    onInfinite($state) {
      const t = this.getRndInteger(900, 1000)
      setTimeout(() => {
        this.offset = this.offset + this.limit
        const slice = this.blogposts.slice(
          this.offset,
          this.offset + this.limit
        )
        if (slice.length > 0) {
          this.active = this.active.concat(slice)
          $state.loaded()
        } else {
          $state.complete()
        }
      }, t)
    }
  },
  data() {
    return {
      months: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
      ]
    }
  },
  async asyncData({ app, store }) {
    const data = await app.$axios.$get('/blogposts.json')
    let blogposts = []
    for (const key of Object.keys(data)) {
      const blog = data[key]
      const tmp = key.split('-')
      const date = tmp.slice(0, 3)
      const rest = tmp.slice(3)
      let href = `/blog/${date[0]}/${date[1]}/${date[2]}/${rest.join('-')}`
      href = href.replace('.md', '.html')

      blog.href = href
      blogposts.push(blog)
    }
    blogposts = blogposts.reverse()
    return {
      blogposts,
      active: blogposts.slice(0, 7),
      offset: 0,
      limit: 8
    }
  }
}
</script>
<style lang="scss" scoped>
.contentCard {
  min-height: 84px;
}
</style>
