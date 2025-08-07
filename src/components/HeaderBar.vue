<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();
const showDropdown = ref(false);
const goToProfile = () => {
    router.push('/profile/edit');
};
</script>
<template>
    <header class="header">
        <div class="avatar-wrapper">
            <div
                class="avatar-img"
                @mouseenter="showDropdown = true"
                @mouseleave="showDropdown = false"
            >
                <img class="img" src="../assets/logo.png" />
                <div v-if="showDropdown" class="dropdown">
                    <ul>
                        <li @click="goToProfile">Chỉnh sửa thông tin</li>
                        <li>Đăng xuất</li>
                    </ul>
                </div>
            </div>
        </div>
    </header>
</template>
<style scoped>
.header {
    top: 0;
    position: sticky;
    background-color: #00468c;
    height: 75px;
    align-items: center;
    width: 100%;
}
.avatar-wrapper {
    height: 50px;
    position: absolute;
    right: 50px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
}
.avatar-img {
    position: relative;
}
.img {
    max-height: 50px;
}
.dropdown {
    border-top: 1px grey solid;
    position: absolute;
    width: 180px;
    right: 0;
    background-color: #aeddff;
    box-sizing: border-box;
}
.dropdown li {
    padding: 10px 0px 5px 5px;
    padding-left: 10px;
    border-bottom: 1px solid grey;
    font-family: sans-serif;
    font-weight: bold;
    color: rgb(0, 0, 0);
}
</style>
