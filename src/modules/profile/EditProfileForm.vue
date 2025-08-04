<script setup>
import { onMounted, ref } from 'vue';
import api from '@/plugins/axios';
import { useRouter } from 'vue-router';

const router = useRouter();
const form = ref({
    fullName: '',
    email: '',
});
onMounted(() => getUserInfor());
const getUserInfor = async () => {
    const response = await api.get('/auth/me');
    console.log(response.data);

    form.value.email = response.data.email;
    form.value.fullName = response.data.full_name;
};
const submitForm = async () => {
    try {
        const payload = {
            full_name: form.value.fullName,
            email: form.value.email,
        };
        const response = await api.put('/auth/me', payload);
        console.log(response);
        alert('update success');
        router.push('/dashboard');
    } catch (error) {
        console.error('Error: ', error);
        alert('Failed update profile');
    }
};
</script>
<template>
    <form class="edit-profile-form" @submit.prevent="submitForm">
        <div class="edit-form__field">
            <label class="edit-form__label">Email</label>
            <input class="edit-form__input" v-model="form.email" />
        </div>
        <div class="edit-form__field">
            <label class="edit-form__label">Full name</label>
            <input class="edit-form__input" v-model="form.fullName" />
        </div>
        <button class="edit-form__submit" type="submit">Submit</button>
    </form>
</template>
<style>
.edit-profile-form {
    width: 100%;
}
.edit-form__field {
    margin: 20px 0px;
    border-radius: 10px;
    padding: 10px;
    display: flex;
    background-color: rgba(255, 226, 187, 0.421);
}
.edit-form__label {
    display: block;
    color: #3b4151;
    font-family: sans-serif;
    font-size: 16px;
    font-weight: bold;
    width: 20%;
}
.edit-form__input {
    width: 35%;
    background-color: #ffffff;
    border-radius: 10px;
    font-family: sans-serif;
    padding-left: 2%;
}
.edit-form__submit {
    background-color: #2a7dd1;
    color: wheat;
    padding: 5px 15px;
    border-radius: 15px;
    font-weight: bold;
}
</style>
