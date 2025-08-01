<script setup>
import { ref } from 'vue';
import api from '@/plugins/axios';
const form = ref({
    invoice: '',
    productType: '',
    supplierCd: '',
    receiveDate: '',
    orderStatus: '0',
    quantity: null,
    attachments: [],
});

const handleFileChange = event => {
    form.value.attachments = Array.from(event.target.files);
};

const onSubmit = async () => {
    console.log(form.value);
    try {
        const formData = new FormData();
        formData.append('invoice', form.value.invoice);
        formData.append('productType', form.value.productType);
        formData.append('supplierCd', form.value.supplierCd);
        formData.append('receiveDate', form.value.receiveDate);
        formData.append('orderStatus', form.value.orderStatus);
        formData.append('quantity', form.value.quantity.toString());
        console.log(formData);

        for (let i = 0; i < form.value.attachments.length; i++) {
            formData.append('attachments', form.value.attachments[i]);
        }

        const response = await api.post('/inbound', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });

        console.log('Success:', response.data);
        alert('Create inbound success');
        form.value = {
            invoice: '',
            productType: '',
            supplierCd: '',
            receiveDate: '',
            orderStatus: '0',
            quantity: null,
            attachments: [],
        };
    } catch (error) {
        console.error('Error: ', error);
        alert('Failed create inbound');
    }
};
</script>
<template>
    <form class="inbound-form" @submit.prevent="onSubmit">
        <div class="inbound-form__field">
            <label class="inbound-form__label">Invoice (9)</label>
            <input
                class="inbound-form__input"
                v-model="form.invoice"
                maxlength="9"
                pattern="\d{9}"
            />
        </div>

        <div class="inbound-form__field">
            <label class="inbound-form__label">Product Type</label>
            <select
                class="inbound-form__input"
                v-model="form.productType"
                required
            >
                <option value="Aircon">Aircon</option>
                <option value="Spare_part">Spare part</option>
            </select>
        </div>

        <div class="inbound-form__field">
            <label class="inbound-form__label">Supplier Code</label>
            <select
                class="inbound-form__input"
                v-model="form.supplierCd"
                required
            >
                <option value="VN">Viet Nam: VN</option>
                <option value="TH">Thái Lan: TH</option>
                <option value="MY">Malaysia: MY</option>
                <option value="ID">Indonesia: ID</option>
                <option value="SG">Singapore: SG</option>
                <option value="PH">Philippines: PH</option>
                <option value="LA">Lào: LA</option>
                <option value="MM">Myanmar: MM</option>
                <option value="TL">Đông Timor: TL</option>
            </select>
        </div>

        <div class="inbound-form__field">
            <label class="inbound-form__label">Receive Date</label>
            <input
                class="inbound-form__input"
                type="datetime-local"
                v-model="form.receiveDate"
                required
            />
        </div>

        <div class="inbound-form__field">
            <label class="inbound-form__label">Quantity</label>
            <input
                class="inbound-form__input"
                type="number"
                v-model="form.quantity"
            />
        </div>
        <div class="inbound-form__field">
            <label class="inbound-form__label">Attachments</label>
            <input
                class="inbound-form__input"
                type="file"
                multiple
                @change="handleFileChange"
            />
        </div>

        <button class="inbound-form__submit" type="submit">Create</button>
    </form>
</template>
<style lang="css" scoped>
.inbound-form {
    width: 100%;
}
.inbound-form__field {
    margin: 20px 0px;
    border-radius: 10px;
    padding: 10px;
    display: flex;
    background-color: rgba(255, 226, 187, 0.421);
}
.inbound-form__label {
    display: block;
    color: #3b4151;
    font-family: sans-serif;
    font-size: 16px;
    font-weight: bold;
    width: 20%;
}
.inbound-form__input {
    width: 35%;
    background-color: #ffffff;
    border-radius: 10px;
    font-family: sans-serif;
    padding-left: 2%;
}
.inbound-form__submit {
    background-color: #2a7dd1;
    color: wheat;
    padding: 5px 15px;
    border-radius: 15px;
    font-weight: bold;
}
</style>
