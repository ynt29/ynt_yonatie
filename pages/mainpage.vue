<template>
  <div>
    <div class="d-flex flex-column w-full ma-4 text-white">
        <article class="d-flex flex-column align-center mb-4">
            <img
                src="@/assets/images/mypic.png"
                alt="mypic"
                class="mypic mb-2"
            />
            <h1 class="name-title text-center">
                Yossakorn 
                <br />
                "Tie" 
                <br />
                Napeang
            </h1>
        </article>
        <article class="mb-7">
            <p class="mb-2">I’m a Junior Frontend Developer 
                from Bangkok, Thailand, with a passionate interest in the world of data analytics.
            </p>
            <p class=" mb-2">My experience in frontend development has equipped me with creating user-friendly interfaces, 
                the result of user-oriented analytics and attention to detail. 
                <br/>
                I intend to use my coding skills and problem-solving abilities to 
                extract and transform meaningful insights from datasets into actionable plans.
            </p>
            <p class="mb-2">
                Outside of work, 
                I’ve utilized data analytics skills such as spreadsheets and data visualization for personal financial planning. 
                This includes tracking transactions, categorizing spending and finding important expense insights to identify expense category for potential cutbacks.
                <br />
                Data-Driven Decision Making has helped me plan spending precisely and align it with real-life needs. 
            </p>
            <p>
                I believe that determination for learning new things 
                and adapting to new challenges are traits that have shaped me into who I am today. 
                <br/>
                I graduated from Political Science at Ramkhamhaeng University in 2020, which has nothing to do with programming at all. 
                However, my commitment to learning unfamiliar things like frontend development and not giving up even when it’s difficult has led to success 
                in embarking on this journey. and I confident that these qualities will enable me to excel in the field of data analytics.
            </p>
        </article>
        <article class="mb-7">
            <p class="mb-4 subtitle">Job Experience</p>
            <p class="mb-1">Junior Frontend Developer at Looloo Technology</p>
            <p class="">Feb 2022 - Current</p>
            <ul class="ma-4">
                <li>Collaborated with cross-functional teams, 
                    including UX/UI designers and backend developers to implement responsive and visually appealing web applicationsusing the Vue.JS Framework.
                </li>
                <li>Contributed to the development of an Enterprise Resource Planning (ERP) website for a fertilizer brand, improving user experience through the design of responsive interfaces.
                </li>
                <li>Contributed to the development of a student mentoring website for a university, improving the user interface for a more user-friendly website, 
                    proactively debugging user issues related to UI promptly to maintain efficient usability.
                </li>
                <li>Demonstrated a commitment to continuous learning of new developer frameworks, libraries and tools such as CSS Frameworks (Bootstrap, Tailwind, Vuetify) 
                    and JavaScript Framework (Vue.JS, Nuxt.JS)
                </li>
            </ul>
        </article>
        <article class="mb-7">
            <p class="mb-4 subtitle">Skills</p>
            <p class="mb-1">Data Analytics</p>
            <ul class="ma-4">
                <li                 
                    v-for="(da, daIndex) in dataAnalyticSkills"
                    :key="daIndex"
                >
                    {{ da.name }}
                </li>
            </ul>
            <p class="mb-1">Frontend Developer</p>
            <ul class="ma-4">
                <li                 
                    v-for="(fe, feIndex) in frontendSkills"
                    :key="feIndex"
                >
                    {{ fe.name }}
                </li>
            </ul>
            <p class="mb-1">General Skills</p>
            <ul class="ma-4">
                <li                 
                    v-for="(ge, geIndex) in generalSkills"
                    :key="geIndex"
                >
                    {{ ge.name }}
                </li>
            </ul>
        </article>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
    layout: 'main'
})

const dataAnalyticSkills = ref([
    { name: "Spreadsheets (Google Sheets & Microsoft Excel)" },
    { name: "SQL" },
    { name: "Data visualization tools (Looker Studio (Google Data Studio), Tableau Public & PowerBI)" },
    { name: "Python (Beginner)" },
    { name: "R (Beginner)" } 
])

const frontendSkills = ref([
    { name: "HTML" },
    { name: "CSS (with frameworks e.g. Bootstrap 5, Tailwind & Vuetify)" },
    { name: "JavaScript" },
    { name: "Vue.JS (with frameworks e.g. Nuxt.JS)" },
    { name: "Version Control (Github & Gitlab)" }
])

const generalSkills = ref([
    { name: "English (average)" },
    { name: "Learn quickly in new things" },
    { name: "Data-driven Planning" },
    { name: "Data-driven decision making" },
    { name: "Collaboration" }
])

</script>

<style scoped lang="scss">
:deep() {
    .mypic {
        object-fit: cover;
        border-radius: 8px;
        height: 300px;
    }

    .name-title {
        font-size: 34px;
    }

    .subtitle {
        font-size: 24px;
    }
}

</style>