<template>
  <Layout>
    <div class="container">
      <div class="page-inner">
        <div class="page-header">
          <h1 class="title mb-3">Contact</h1>
          <p class="detail mb-0">
            {{ settings.contact_text }}
          </p>
        </div>

        <div class="d-flex">
          <div class="contact-form">
            <div class="nes-container is-rounded mt-3" style="background: #fff">
              <form action="#" @submit.prevent="handleForm">
                <div class="nes-field is-dark mb-3">
                  <label for="name_field">Your name</label>
                  <input
                    v-model="name"
                    type="text"
                    id="name_field is-dark"
                    class="nes-input"
                    :class="{ 'is-error': submitted && $v.name.$error }"
                  />
                  <small
                    v-if="submitted && !$v.name.required"
                    class="nes-text is-error"
                    >Please Enter your name
                  </small>
                </div>

                <div class="nes-field mb-3">
                  <label for="name_field">Your Email</label>
                  <input
                    type="email"
                    id="name_field is-dark"
                    class="nes-input"
                    v-model="email"
                    :class="{ 'is-error': submitted && $v.name.$error }"
                  />
                  <small
                    v-if="submitted && !$v.email.required"
                    class="nes-text is-error"
                    >Please Enter your email</small
                  >
                  <small
                    v-if="submitted && !$v.email.email"
                    class="nes-text is-error"
                    >Please Enter a valid email</small
                  >
                </div>

                <label for="default_select">Subject</label>
                <div
                  class="nes-select mb-3"
                  :class="{ 'is-error': submitted && $v.subject.$error }"
                >
                  <select id="default_select" v-model="subject">
                    <option value="" disabled selected hidden>Select...</option>
                    <option value="Work together">Work together</option>
                    <option value="Discuss a project">Discuss a project</option>
                    <option value="Book appointment">Book appointment</option>
                  </select>

                  <small
                    v-if="submitted && !$v.message.required"
                    class="nes-text is-error"
                    >Please choose a subject</small
                  >
                </div>

                <div class="nes-field mb-3">
                  <label for="#message">Your Message here</label>
                  <textarea
                    v-model="message"
                    name="message"
                    id="name-field"
                    rows="4"
                    class="nes-input"
                    :class="{ 'is-error': submitted && $v.message.$error }"
                  ></textarea>
                  <small
                    v-if="submitted && !$v.message.required"
                    class="nes-text is-error"
                    >Please Enter your message</small
                  >
                </div>
                <div>
                  <p class="nes-text">
                    Did you like this site? <br />
                    <label class="mr-2 mt-2 mb-0">
                      <input
                        type="radio"
                        class="nes-radio"
                        name="answer"
                        checked
                      />
                      <span>Yes</span>
                    </label>

                    <label class="mb-0">
                      <input type="radio" class="nes-radio" name="answer" />
                      <span>No</span>
                    </label>
                  </p>
                </div>
                <p class="nes-text is-disabled">
                  <small
                    >Your personal details will be completely secured.</small
                  >
                </p>
                <button class="nes-btn is-primary" type="submit">
                  &nbsp; Send &nbsp;
                </button>
              </form>
            </div>
            <!-- ./form-->
          </div>
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
