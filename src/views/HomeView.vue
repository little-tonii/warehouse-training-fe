<script setup>
import Sidebar from '@/components/Sidebar.vue';
import MainContent from '@/components/MainContent.vue';
</script>
<template>
    <div class="home-layout">
        <div class="side-bar">
            <Sidebar />
        </div>
        <MainContent>
            <h1>Welcome to Home</h1>
            <p>This is the main content area.</p>
        </MainContent>
    </div>
</template>
<style lang="css" scoped>
.home-layout {
    display: flex;
    flex-direction: row;
    height: 100vh;
    width: 100vw;
    background-color: #f8f8f8;
}
.side-bar {
    background-color: #01274d;
    padding: 30px 0px;
}
</style>
