<template>
  <div class="container">
    <section class="nes-container is-rounded">
      <section class="message-list">
        <section class="message -left mb-3">
          <i class="nes-mario"></i>
          <!-- Balloon -->
          <div class="nes-balloon from-left nes-pointer">
            <p>Click here make Kirby talk</p>
          </div>
        </section>

        <section class="message -right">
          <!-- Balloon -->
          <div class="nes-balloon from-right">
            <p>{{ quotes.quote[Math.floor(Math.random() * quotes.length)] }}</p>
          </div>
          <i class="nes-kirby"></i>
        </section>
      </section>
    </section>
  </div>
</template>
<script>
export default {
  name: "Quotes",
  data() {
    return {
      quotes: require("../../quotes/quote.json"),
    };
  },
};
</script>



<style lang="scss">
section.message-list {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.message-list > .message {
  display: flex;
  margin-top: 2rem;
}

.message-list > .message.-left {
  align-self: flex-start;
}
.message-list > .message.-left i {
  margin-right: 2rem;
}
.message-list > .message i {
  align-self: flex-end;
}
.nes-container > :last-child {
  margin-bottom: 0;
}
.message-list > .message > .nes-balloon {
  max-width: 750px;
}
.message-list > .message.-right i {
  margin-left: 2rem;
}
</style>