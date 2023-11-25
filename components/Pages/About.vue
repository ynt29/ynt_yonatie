<template>
  <ScrollFade>
    <div class="d-flex flex-column w-full bg-timberwolf pa-4 pa-md-12">
      <article class="mb-7">
        <p class="mb-4 subtitle">About Me</p>
        <div class="paragraph">
          <p class="mb-2">
            My experience in frontend development has equipped me with creating
            user-friendly interfaces, the result of user-oriented analytics and
            attention to detail.
            <br />
            I intend to use my coding skills and problem-solving abilities to
            extract and transform meaningful insights from datasets into
            actionable plans.
          </p>
          <p class="mb-2">
            Outside of work, I’ve utilized data analytics skills such as
            spreadsheets and data visualization for personal financial planning.
            This includes tracking transactions, categorizing spending and finding
            important expense insights to identify expense category for potential
            cutbacks.
            <br />
            Data-Driven Decision Making has helped me plan spending precisely and
            align it with real-life needs.
          </p>
          <p>
            I believe that determination for learning new things and adapting to
            new challenges are traits that have shaped me into who I am today.
            <br />
            I graduated from Political Science at Ramkhamhaeng University in 2020,
            which has nothing to do with programming at all. However, my
            commitment to learning unfamiliar things like frontend development and
            not giving up even when it’s difficult has led to success in embarking
            on this journey. and I confident that these qualities will enable me
            to excel in the field of data analytics.
          </p>
        </div>
      </article>
    </div>
  </ScrollFade>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
:deep() {
  .bg-timberwolf {
    background-color: #d3d3d3;
  }

  @media (max-width: 960px) {

    .subtitle {
      font-size: 34px;
    }

    .paragraph p {
      line-height: 30px;
    }
  }

  @media (min-width: 961px) {
    .subtitle {
      font-size: 48px;
    }

    .paragraph p {
      line-height: 34px;
      font-size: 20px;
    }
  }

}
</style>