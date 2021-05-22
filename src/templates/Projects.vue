<template>
	<Layout>
		<div class="project">

			<div class="page-header bg-light">
				<div class="container">
					<div class="row">
						<div class="col-xl-8 col-lg-9 col-md-11 mx-auto">
							<div class="article-header text-center mb-5">
								<span class="category ls-1 font-weight-bold text-uppercase text-muted">
									#{{ $page.post.categories[0] }}
								</span>
								<h1
									class="article-title title mb-3"
									v-html="$page.post.title"
								/>
								<p class="lead font-style-normal">{{ $page.post.excerpt }}</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div class="container mt-n6">
				<div class="thumbnail">
					<g-image
						class="img-fluid"
						fill="cover"
						:alt="$page.post.title"
						:src="$page.post.thumbnail.src"
					/>
				</div>

				<div class="article-meta flex-wrap flex-lg-nowrap align-items-center py-4 px-2">
					

					<div class="date d-flex align-items-center">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							fill="currentColor"
							class="bi mr-2 bi-calendar2-event"
							viewBox="0 0 16 16"
						>
							<path d="M11 7.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z" />
							<path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H2z" />
							<path d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V4z" />
						</svg>
						<span
							class="muted"
							v-html="$page.post.date"
						/>
					</div>

					<div class="btn-group flex-grow-1 flex-md-grow-0 order-3 order-md-0 mt-3 mt-md-0">
						<a v-if="$page.post.github_link" :href="$page.post.github_link"  class="btn px-3 d-flex align-items-center btn-light">
								<svg width="16" height="16" fill="currentColor" class="bi mr-2 bi-github" viewBox="0 0 16 16">
  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
</svg> View On Github
						</a>
						<a v-if="$page.post.live_link" :href="$page.post.live_link"  class="btn px-3 d-flex align-items-center btn-primary">
							<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi mr-2 bi-box-arrow-up-right" viewBox="0 0 16 16">
							<path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/>
							<path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/>
							</svg>
							Live Demo 
						</a>
					</div>

					<div v-if="$page.post.client" class="client">
						Client: {{$page.post.client}}
					</div>
				</div>

				<div class="row">
					<div class="border-bottom col-xl-8 col-lg-9 col-md-11 mx-auto">
						<article
							v-html="$page.post.content"
							class="article-content project-inner mb-5 mt-5"
						/>
					</div>
				</div>
			</div>
		</div>
	</Layout>
</template>

<page-query>
query projects ($path: String!) {
  post: projects (path: $path) {
    title
    date (format: "DD, MMM YYYY")
    content
    excerpt
    thumbnail (quality: 75)
    categories
    path
	github_link
	live_link
	client
  }
}
</page-query>

<script>
export default {
	metaInfo() {
		return {
			title: this.$page.post.title,
			name: this.$page.post.excerpt,
			description: this.$page.post.excerpt
		};
	}
};
</script>

<style scoped>
.nes-balloon {
	text-decoration: none;
}
</style>