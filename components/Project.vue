<template>
    <div class="mb-12 d-flex flex-column flex-md-row">
        <div class="d-flex flex-column w-50">
            <p class="project-title mb-2">{{ projectDetail.name }}</p>
            <img
                :src="image"
                alt="picture"
                class="mb-2 project-picture" 
            />
            <div class="mb-2">
                <span>Type: </span>
                <v-chip-group>
                    <v-chip
                        v-for="(type, typeIndex) in projectDetail.project_type"
                        :key="typeIndex"
                    >
                        {{ type.name }}
                    </v-chip>
                </v-chip-group>
            </div>
            <div class="mb-2">
                <span>Tools: </span>
                <v-chip-group>
                    <v-chip
                        v-for="(tool, toolIndex) in projectDetail.project_tools"
                        :key="toolIndex"
                    >
                        {{ tool.name }}
                    </v-chip>
                </v-chip-group>
            </div>
            <p class="mb-2">{{ projectDetail.description }}</p>
        </div>
        <div class="mb-2 my-md-12 d-flex flex-column w-50">
            <p class="mb-2">Process</p>
            <ul class="ma-4">
                <li
                    v-for="(pro, proIndex) in projectDetail.process"
                    :key="proIndex"
                >
                    {{ pro.name }}
                </li>
            </ul>
            <p class="mb-2">Key Findings:</p>
            <ol class="ma-4">
                <li
                    v-for="(key, keyIndex) in projectDetail.key_findings"
                    :key="keyIndex"
                >
                    {{ key.name }}
                </li>
            </ol>
            <p class="mb-2">Recommendation</p>
            <ul class="ma-4">
                <li
                    v-for="(rec, recIndex) in projectDetail.recommendation"
                    :key="recIndex"
                >
                    {{ rec.name }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    projectDetail: any
}>()

const image = computed(() => {
    return `_nuxt/assets/images/${props.projectDetail.project_image}`;
})

</script>

<style scoped lang="scss">
:deep() {
    .project-title {
        font-size: 24px;
    }

    .project-picture {
        max-width: 300px;
        border-radius: 8px;
    }
}
</style>