<script setup>
import Sidebar from '@/components/Sidebar.vue';
import MainContent from '@/components/MainContent.vue';
import InboundDetail from '../components/InboundDetail.vue';
</script>
<template>
    <div class="layout">
        <div class="side-bar">
            <Sidebar />
        </div>
        <MainContent>
            <div class="inbound-form-wrapper">
                <label class="label-form">Inbound Detail</label>
                <InboundDetail />
            </div>
        </MainContent>
    </div>
</template>
<style lang="css" scoped>
.layout {
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
.inbound-form-wrapper {
    padding: 15px;
}
.label-form {
    text-align: center;
    display: block;
    font-size: 36px;
    font-weight: bolder;
    color: #01274d;
    background-color: #f0f0f0;
    border-top-left-radius: 25px;
    border-top-right-radius: 25px;
}
</style>
