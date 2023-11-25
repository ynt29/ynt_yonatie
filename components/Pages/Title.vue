<template>
  <ScrollFade>
    <div class="d-flex flex-column w-full text-white pa-4 pa-md-12 title-div">
      <article class="d-flex flex-column flex-md-row align-start align-md-center mb-7">
        <div class="w-100 d-flex flex-column">
          <span class="hello">Hi, I'm</span>
          <h1 class="name-title">Yossakorn Napeang</h1>
          <p class="mb-2 description">
            A Junior Frontend Developer from Bangkok, Thailand.
            <br />
            with a passionate interest in the world of data analytics.
          </p>
        </div>
        <img src="@/assets/images/img_placeholder.png" alt="mypic" class="mypic mb-2" />
        <!-- <img src="@/assets/images/mypic.png" alt="mypic" class="mypic mb-2" /> -->
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

  .mypic {
    object-fit: cover;
    border-radius: 8px;
    height: 100%;
    width: 100%;
    border-radius: 8px;
  }

  @media (max-width: 960px) { 
    .mypic {
      max-height: 380px;
      max-width: 320px;
    }

    .name-title {
      font-size: 34px;
    }

    .description {
      font-size: 20px;
    }

    .hello {
      font-size: 28px;
    }
  }

  @media (min-width: 961px) {
    .mypic {
      width: 480px;
    }

    .hello {
      font-size: 48px;
    }

    .name-title {
      font-size: 72px;
    }

    .description {
      font-size: 28px;
    }

  }
}
</style>