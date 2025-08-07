<script setup>
import HeaderBar from './HeaderBar.vue';
</script>
<template>
    <div class="main-content">
        <HeaderBar />
        <main class="content">
            <slot />
        </main>
    </div>
</template>
<style>
.main-content {
    width: 100vw;
    /* display: flex; */
    /* flex-direction: column; */
}
.content {
    margin: 20px 30px 30px 20px;
    border: 1px gray solid;
    border-radius: 15px;
    padding: 5px;
    background-color: rgb(255, 255, 255);
}
</style>
