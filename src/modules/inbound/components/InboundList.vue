<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import axios from '@/plugins/axios';

const inbounds = ref([]);
const router = useRouter();

const fetchInbounds = async () => {
    try {
        const response = await axios.get('/inbound', {
            params: {
                page: 1,
                limit: 20,
                direction: 'asc',
            },
        });
        inbounds.value = response.data.inbounds;
    } catch (error) {
        console.error('Error load inbounds:', error);
    }
};

const goToDetail = id => {
    router.push(`/inbounds-list/${id}`);
};

const handleDel = async id => {
    if (!confirm('Sure?')) return;

    try {
        await axios.delete(`/inbound/${id}`);

        inbounds.value = inbounds.value.filter(item => item.id !== id);
        alert('Success');
    } catch (err) {
        console.error('Delete failed:', err);
        alert('Failed');
    }
};
onMounted(fetchInbounds);
</script>

<template>
    <div
        v-for="item in inbounds"
        :key="item.id"
        class="inbound-item"
        @click="goToDetail(item.id)"
    >
        <div class="inbound-content">
            <h3>Invoice: {{ item.invoice }}</h3>
            <p>Loại sản phẩm: {{ item.product_type }}</p>
            <p>Nhà cung cấp: {{ item.supplier_cd }}</p>
            <p>Số lượng: {{ item.quantity }}</p>
            <p>
                Ngày nhận:
                {{ new Date(item.receive_date).toLocaleDateString() }}
            </p>
            <p>Người tạo: {{ item.creator.full_name }}</p>
        </div>
        <div class="delete-btn" @click.stop="handleDel(item.id)">
            <p>Delete</p>
        </div>
    </div>
</template>

<style scoped>
.delete-btn {
    background-color: red;
    text-align: center;
    color: white;
    max-width: 100px;
    padding: 5px;
}
.inbound-list {
    padding: 24px;
    max-width: 800px;
    margin: auto;
}

.inbound-item {
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 16px;
    margin-top: 16px;
    cursor: pointer;
    background: white;
    transition: box-shadow 0.2s ease;
}
.inbound-item:hover {
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}
h3 {
    margin-top: 0;
    color: #01274d;
    font-weight: bold;
}
</style>
