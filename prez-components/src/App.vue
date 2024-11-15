<script setup lang="ts">
import SpecialButton from "./components/SpecialButton.vue";
import Parent from "./components/Parent.vue";
</script>

<template>
    <div>
        Componeny library
        <SpecialButton>Slot content</SpecialButton>
        <Parent />
    </div>
</template>

