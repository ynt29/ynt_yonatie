<template>
  <ScrollFade>
    <div class="d-flex flex-column w-full bg-timberwolf pa-4 pa-md-12">
      <article class="mb-7">
        <Project
          v-for="(project, index) in projects"
          :key="index"
          :project-detail="project"
        />
      </article>
    </div>
  </ScrollFade>
</template>
    
<script setup lang="ts">
const projects = ref([
  {
    name: "Personal Financial Dashboard",
    project_image: "img_placeholder.png",
    project_type: [{ name: "Data Analyst" }],
    project_tools: [
      { name: "Google Sheets" },
      { name: "Python" },
      { name: "Looker Studio" },
    ],
    description: "My Personal Financial ngaila",
    process: [
      { name: "Scraping" },
      { name: "Pivoting" },
      { name: "Make a Dashboard" },
    ],
    key_findings: [
      { name: "20% of aaaaaaa is bbbbbb" },
      { name: "1% of bbbbb are ccccc" },
      { name: "1% of ssss is nnnnnn" },
    ],
    recommendation: [{ name: "xxxxxxxxxxxxxx" }, { name: "yyyyyyyyyyyyyy" }],
  },
  {
    name: "Personal Financial Dashboard",
    project_image: "img_placeholder.png",
    project_type: [{ name: "Data Analyst" }],
    project_tools: [
      { name: "Google Sheets" },
      { name: "Python" },
      { name: "Looker Studio" },
    ],
    description: "My Personal Financial ngaila",
    process: [
      { name: "Scraping" },
      { name: "Pivoting" },
      { name: "Make a Dashboard" },
    ],
    key_findings: [
      { name: "20% of aaaaaaa is bbbbbb" },
      { name: "1% of bbbbb are ccccc" },
      { name: "1% of ssss is nnnnnn" },
    ],
    recommendation: [{ name: "xxxxxxxxxxxxxx" }, { name: "yyyyyyyyyyyyyy" }],
  },
]);
</script>
    
<style scoped lang="scss">
:deep() {
  .bg-timberwolf {
    background-color: #d3d3d3;
  }

  @media (max-width: 960px) {
    .mypic {
      max-height: 380px;
      max-width: 320px;
    }

    .name-title {
      font-size: 34px;
    }

    .subtitle {
      font-size: 24px;
    }
  }

  @media (min-width: 961px) {
    
  }
}
</style>