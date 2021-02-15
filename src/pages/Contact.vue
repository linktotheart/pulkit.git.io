<template>
  <Layout>
    <div class="container">
      <div class="page-title">
        <h1 class="title">Contact</h1>
        <p class="detail">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae
          nesciunt commodi earum impedit doloremque! Esse perspiciatis voluptas
          explicabo suscipit tenetur! Consequatur, laboriosam iusto.
        </p>

        <div class="contact-form is-dark">
          <div class="nes-container is-rounded" style="background: #fff">
            <form netlify action="#" @submit="checkForm">
              <div class="nes-field is-dark mb-3">
                <label for="name_field">Your name</label>
                <input
                  v-model="name"
                  type="text"
                  id="name_field is-dark"
                  class="nes-input"
                  required
                />
              </div>

              <div class="nes-field mb-3">
                <label for="name_field">Your Email</label>
                <input
                  type="email"
                  id="name_field is-dark"
                  class="nes-input"
                  required
                  v-model="email"
                />
              </div>

              <label for="default_select">Subject</label>
              <div class="nes-select mb-3">
                <select required id="default_select" v-model="subject">
                  <option value="" disabled selected hidden>Select...</option>
                  <option value="Work together">Work together</option>
                  <option value="Discuss a project">Discuss a project</option>
                  <option value="Book appointment">Book appointment</option>
                </select>
              </div>

              <div class="nes-field mb-3">
                <label for="#message">Your Message here</label>
                <textarea
                  v-model="message"
                  name="message"
                  id="name-field"
                  rows="4"
                  class="nes-input"
                ></textarea>
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
                      v-model="like"
                    />
                    <span>Yes</span>
                  </label>

                  <label class="mb-0">
                    <input
                      type="radio"
                      class="nes-radio"
                      name="answer"
                      v-model="like"
                    />
                    <span>No</span>
                  </label>
                </p>
              </div>
              <p class="nes-text is-disabled">
                <small>Your personal details will be completely secured.</small>
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
  </Layout>
</template>

<script>
import { Field, Form } from "vee-validate";

export default {
  metaInfo: {
    title: "Contact",
  },
  components: {
    Field,
    Form,
  },
  methods: {
    isRequired(value) {
      return value ? true : "This field is required";
    },
  },
  data: {
    errors: [],
    name: null,
    email: null,
    message: null,
    subject: null,
    like: null,
  },
};
</script>
