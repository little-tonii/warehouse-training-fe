<script setup>
import api from '@/plugins/axios';
import { ref } from 'vue';

const fileInput = ref(null);
const handleUploadFile = e => {
    fileInput.value = e.target.files[0];
    if (fileInput.value) onSubmit();
};
const onSubmit = async () => {
    if (!fileInput.value) return;
    try {
        const formData = new FormData();
        formData.append('dataFiles', fileInput.value);
        const res = await api.post('/inbound/import-data', formData);
        console.log('Success: ', res);
        fileInput.value = null;
        alert('Success');
    } catch (error) {
        console.error(error);
        alert(error);
    }
};
</script>
<template>
    <div class="form-center">
        <input class="uploadFile" type="file" @change="handleUploadFile" />
    </div>
</template>
<style>
.form-center {
    width: 100%;
    height: 90%;
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
}
.uploadFile {
    background-color: rgb(187, 187, 187);
    border: 1px solid rgb(87, 87, 87);
    padding: 50px 20px;
    /* transform: translate(0, -30px); */
}
</style>
