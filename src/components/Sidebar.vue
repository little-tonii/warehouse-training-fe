<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useRoute } from 'vue-router';
const router = useRouter();
const route = useRoute();
const isActive = path => route.path.startsWith(path);
const goToInboundList = () => {
    router.push('/inbounds-list');
};
const goToImportInbound = () => router.push('/inbound/import');
const goToStatisticInventory = () => router.push('/statistic/inventory');
const showDropdown = ref(true);
</script>
<template>
    <aside class="sidebar">
        <ul class="menu">
            <li :class="['menu-item', isActive('/dashboard') && 'active']">
                <router-link to="/dashboard">Dashboard</router-link>
            </li>
            <li
                :class="['menu-item', isActive('/inbound') && 'active']"
                @mouseenter="showDropdown = true"
                @mouseleave="showDropdown = false"
            >
                <router-link to="/inbound">Inbounds</router-link>
                <div class="dropdown" v-if="showDropdown">
                    <ul>
                        <li @click="goToInboundList">Update Inbound</li>
                        <li @click="goToImportInbound">Import Inbound</li>
                    </ul>
                </div>
            </li>
            <li :class="['menu-item', isActive('outbound') && 'active']">
                <router-link to="#">Outbounds</router-link>
            </li>
            <li
                :class="['menu-item', isActive('/reports') && 'active']"
                @mouseenter="showDropdown = true"
                @mouseleave="showDropdown = false"
            >
                <router-link to="#">Reports</router-link>
                <div class="dropdown" v-if="showDropdown">
                    <ul>
                        <li @click="goToStatisticInventory">
                            Statistic Inventory
                        </li>
                    </ul>
                </div>
            </li>
        </ul>
    </aside>
</template>
<style scoped>
.menu-item {
    background-color: #01274d;
    color: antiquewhite;
    box-sizing: border-box;
    padding: 20px 40px;
    cursor: pointer;
}
.menu-item:hover {
    font-weight: bold;
    color: antiquewhite;
    background-color: #124f71;
    position: relative;
}
.menu-item.active {
    background-color: #124f71;
    font-weight: bold;
}
.menu {
    height: 100vh;
}

.dropdown {
    position: absolute;
    right: -50%;
    background: #0d355c;
    color: #00468c;
    z-index: 1;
    background-color: #aeddff;
}
.dropdown li {
    padding: 8px 12px;
    cursor: pointer;
}
</style>
