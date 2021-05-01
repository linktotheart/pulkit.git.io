<template>
    <Layout>
        <div class="d-flex px-4 flex-column pt-6 pb-5 mb-n5 align-items-center justify-content-center" style="background: var(--green)">
            <h1  class="text-dark mb-4">
                <strong>ERROR 404!</strong> Page not Found
            </h1>
            <div class="img mb-n6 mx-n4 d-flex flex-column">
                <g-image width="720" class="img-fluid " background="#fff" blur="25" alt="404" src="~/assets/img/error404.png" />
            </div>
            <g-link class="btn btn-dark" to="/"> Go Back Home </g-link>
        </div>
    </Layout>
</template>