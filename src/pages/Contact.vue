<template>
  <Layout>
    <div class="contact">
        <div class="page-header py-6" style="background: #ffcbcb">
          <div class="container">
            <div class="col-xl-9 col-lg-10 mx-auto">
              <h1 class="title display-4 mb-3">Contact</h1>
              <p class="detail lead mb-0">
                {{ settings.contact_text }}
              </p>
            </div>
          </div>
        </div>

        <div class="container">
          <div class="row">
            <div class="col-xl-8 col-lg-9 mx-auto mt-5 contact-form">
              <form action="#" @submit.prevent="handleForm">
                <div class="form-group">
                  <label for="name_field">Your name</label>
                  <input
                    v-model="name"
                    type="text"
                    id="name_field is-dark"
                    class="form-control form-control-lg"
                    :class="{ 'is-invalid': submitted && $v.name.$error }"
                  />
                  <small
                    v-if="submitted && !$v.name.required"
                    class="text-danger"
                    >Please Enter your name
                  </small>
                </div>

                <div class="form-group mb-3">
                  <label for="name_field">Your Email</label>
                  <input
                    type="email"
                    id="name_field is-dark"
                    class="form-control form-control-lg"
                    v-model="email"
                    :class="{ 'is-invalid': submitted && $v.name.$error }"
                  />
                  <small
                    v-if="submitted && !$v.email.required"
                    class="text-danger"
                    >Please Enter your email</small
                  >
                  <small v-if="submitted && !$v.email.email" class="text-danger"
                    >Please Enter a valid email</small
                  >
                </div>

                <label for="default_select">Subject</label>
                <div
                  class="form-group mb-3"
                  :class="{ 'is-error': submitted && $v.subject.$error }"
                >
                  <select
                    class="custom-select custom-select-lg  "
                    :class="{ 'is-invalid': submitted && $v.subject.$error }"
                    id="default_select"
                    v-model="subject"
                  >
                    <option value="" disabled selected hidden>Select...</option>
                    <option value="Work together">Work together</option>
                    <option value="Discuss a project">Discuss a project</option>
                    <option value="Book appointment">Book appointment</option>
                  </select>

                  <small
                    v-if="submitted && !$v.message.required"
                    class="text-danger"
                    >Please choose a subject</small
                  >
                </div>

                <div class="form-group mb-3">
                  <label for="#message">Your Message here</label>
                  <textarea
                    v-model="message"
                    name="message"
                    id="name-field"
                    rows="4"
                    class="form-control form-control-lg"
                    :class="{ 'is-invalid': submitted && $v.message.$error }"
                  ></textarea>
                  <small
                    v-if="submitted && !$v.message.required"
                    class="text-danger"
                    >Please Enter your message</small
                  >
                </div>

                <p class="text-muted">
                  <small
                    >Your personal details will be completely secured.</small
                  >
                </p>
                <button class="btn-primary btn btn-lg px- col-md-6 col-xl-4" type="submit">
                  &nbsp; Send &nbsp;
                </button>
              </form>
            </div>
            <!-- ./form-->
          </div>
        </div>
      </div>
  </Layout>
</template>

<script>
import Vue from "vue";
import Vuelidate from "vuelidate";
import { required, email, minLength } from "vuelidate/lib/validators";

Vue.use(Vuelidate);

export default {
  metaInfo: {
    title: "Contact",
  },
  data() {
    return {
      settings: require("../../data/theme.json"),
      errors: [],
      name: "",
      email: "",
      message: "",
      subject: "",
      submitted: false,
    };
  },
  validations: {
    name: { required, minLength: minLength(3) },
    email: { required, email },
    subject: { required },
    message: { required },
  },
  methods: {
    handleForm(e) {
      (this.submitted = true),
        /// stop here if form is invalid
        this.$v.$touch();
      if (this.$v.invalid) {
        return;
      }
    },
  },
};
</script>
