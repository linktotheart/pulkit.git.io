<template>
  <Layout>
    <div style="background: var(--)" class="page-title bg-light py-5">
      <div class="container mt-4">
        <div class="row align-items-center flex-column-reverse flex-lg-row ">
          <div class="col-lg-7">
            <div class=" text-center text-lg-left">
              <h1 class="text-dark font-weight-bolder">About Me</h1>
              <p class="lead">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Voluptatum ullam repudiandae ipsa minima quaerat error, culpa aut
                ex deleniti eligendi ducimus?
              </p>
            </div>
          </div>
          <div class="col-lg-5 px-4 px-lg-3">
            <g-image class="img-fluid mb-4 mb-lg-0 rounded-circle shadow border" alt="Pulkit Singh " src="~/assets/img/pulkit.png"> </g-image>
          </div>
        </div>
      </div>
    </div>
    <div class="container mt-5">
      <div  style="max-height: 20rem; width: 100%" class="overflow-hidden page-img mb-3">
        <g-image
          alt="New Indigo Background Illustration"
             
          src="https://images.unsplash.com/photo-1569172122301-bc5008bc09c5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
        />
      </div>

      <div class="container ">
        <article class="col-xl-9 mx-auto">
          <p class="lead">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
            doloremque omnis animi, eligendi magni a voluptatum, vitae,
            consequuntur rerum illum odit fugit assumenda rem dolores inventore
            iste reprehenderit maxime! Iusto.
          </p>
        </article>
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "About",
  },
};
</script>
