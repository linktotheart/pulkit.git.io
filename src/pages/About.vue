<template>
	<Layout>
		<div
			style="background: var(--)"
			class="page-title bg-light py-5"
		>
			<div class="container mt-4">
				<div class="row align-items-center flex-column-reverse flex-lg-row ">
					<div class="col-lg-7">
						<div class=" text-center text-lg-left">
							<h1 class="text-dark font-weight-bolder">About Me</h1>
							<p class="lead">
								{{settings.about_header}}
							</p>
						</div>
					</div>
					<div class="col-lg-5 px-4 px-lg-3 d-flex justify-content-center">
						<g-image
							width="360"
							class="img-fluid mb-4 mb-lg-0 rounded- shadow-sm border"
							alt="Pulkit Singh "
							src="~/assets/img/pulkit.png"
						> </g-image>
					</div>
				</div>
			</div>
		</div>
		<div class="container mt-5">
			<div
				style="max-height: 20rem; width: 100%"
				class="overflow-hidden page-img mb-3"
			>
				<g-image
					alt="New Indigo Background Illustration"
					src="https://images.unsplash.com/photo-1569172122301-bc5008bc09c5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
				/>
			</div>

			<div class="container mt-5 ">
				<article class="row">
					<div class="col-lg-6 mb-4 mb-lg-0">
						<h3 class="title text-dark text-capitalize">A story of hardwork and perseverance.</h3>
						<p>
							{{settings.about_me}}
						</p>
					</div>

					<div class="col-lg-6">
						<div class="card bg-secondary    ">
              <div class="card-body">
                <h3 class="card-title text-capitalize">
                  Personal Experience
                </h3>
                <p class="card-text">
                  Starting out at the age of 13 I never stopped learning new programming skills and languages. Early I started creating websites for friends and just for fun as well. Besides web development I also explored Python and other non-web-only languages like C# with Unity3D. This passion has since lasted and lead to my decision of working as a freelance web developer and consultant. The success and fun I have in this job is immense and really keeps that passion burningly alive.
                </p>
              </div>
            </div>
					</div>
				</article>
			</div>
		</div>
	</Layout>
</template>

<script>
export default {
	metaInfo: {
		title: "About Me"
	},
	data() {
		return {
			settings: require("../../data/theme.json")
		};
	}
};
</script>
