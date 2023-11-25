<template>
  <ScrollFade>
    <div class="d-flex flex-column w-full text-white pa-4 pa-md-12">
      <article class="mb-7 d-flex flex-column flex-md-row">
        <article class="width-define mb-6">
          <p class="mb-4 subtitle">Job Experience</p>
          <template 
            v-for="(item, index) in experience"
            :key="index"
          >
            <p class="mb-1">{{ item.role }} at {{ item.workplace }}</p>
            <p>{{ item.started_at }} - {{ item.end_at }} {{ `(${item.distance})` }}</p>
            <ul 
              class="ma-4"
            >
              <li
                v-for="(rp, rpIndex) in item.responsibilities"
                :key="rpIndex"
                class="mb-2"
              >
                {{ rp.title }}
              </li>
            </ul>
          </template>
        </article>
        <article class="width-define">
          <p class="mb-4 subtitle">Skills</p>
          <template
            v-for="(item, index) in skills"
            :key="index"
          >
            <p class="mb-1">{{ item.title }}</p>
            <ul class="mx-4 mt-4 mb-7">
              <li
                v-for="(skill, sIndex) in item.lists"
                :key="sIndex"
                class="mb-1"
              >
                {{ skill.name }}
              </li>
            </ul>
          </template>
        </article>
      </article>
    </div>
  </ScrollFade>
</template>
  
<script setup lang="ts">
const experience = ref([
  {
    role: "Junior Frontend Developer",
    workplace: "Looloo Technology",
    started_at: "Feb 2022",
    end_at: "Current",
    distance: "2 Years",
    responsibilities: [
      {
        title: "Collaborated with cross-functional teams, including UX/UI designers and backend developers to implement responsive and visually appealing web applicationsusing the Vue.JS Framework."
      },
      {
        title: "Contributed to the development of an Enterprise Resource Planning (ERP) website for a fertilizer brand, improving user experience through the design of responsive interfaces."
      },
      {
        title: "Contributed to the development of a student mentoring website for a university, improving the user interface for a more user-friendly website, proactively debugging user issues related to UI promptly to maintain efficient usability."
      },
      {
        title: "Demonstrated a commitment to continuous learning of new developer frameworks, libraries and tools such as CSS Frameworks (Bootstrap, Tailwind, Vuetify) and JavaScript Framework (Vue.JS, Nuxt.JS)"
      }
    ]
  }
])

const skills = ref([
  {
    title: "Data Analytics",
    lists: [
      { name: "Spreadsheets (Google Sheets & Microsoft Excel)" },
      { name: "SQL" },
      {
        name: "Data visualization tools (Looker Studio (Google Data Studio), Tableau Public & PowerBI)",
      },
      { name: "Python (Beginner)" },
      { name: "R (Beginner)" },
    ]
  },
  {
    title: "Frontend Developer",
    lists: [
      { name: "HTML" },
      { name: "CSS (with frameworks e.g. Bootstrap 5, Tailwind & Vuetify)" },
      { name: "JavaScript" },
      { name: "Vue.JS (with frameworks e.g. Nuxt.JS)" },
      { name: "Version Control (Github & Gitlab)" },
    ]
  },
  {
    title: "General Skills",
    lists: [
      { name: "English (average)" },
      { name: "Learn quickly in new things" },
      { name: "Data-driven Planning" },
      { name: "Data-driven decision making" },
      { name: "Collaboration" },
    ]
  }
])

</script>
  
  <style scoped lang="scss">
:deep() {
  @media (max-width: 960px) {
    .subtitle {
      font-size: 34px;
    }

    .width-define {
        width: 100%
    }

    ul li {
      line-height: 30px;
    }
  }

  @media (min-width: 961px) {
    .subtitle {
      font-size: 48px;
    }

    ul li {
      line-height: 30px;
      font-size: 16px;
    }

    p {
      font-size: 20px;
    }

  }

}
</style>