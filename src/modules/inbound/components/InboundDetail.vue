<script setup>
import api from '@/plugins/axios';
import { onMounted, ref } from 'vue';
import {
    ExportStatusValueMap,
    ProductTypeValueMap,
    SupplierCdValueMap,
} from '@/constants/enums';

const props = defineProps({
    id: Number,
});

const formData = ref({
    invoice: '',
    productType: '',
    supplierCd: '',
    receiveDate: '',
    orderStatus: '',
    quantity: '',
});

const fetchDetail = async () => {
    try {
        const { data } = await api.get(`/inbound/${props.id}`);
        formData.value.invoice = data.invoice;
        formData.value.productType = data.product_type;
        formData.value.supplierCd = data.supplier_cd;
        const date = new Date(data.receive_date);
        formData.value.receiveDate = date.toISOString().slice(0, 16);
        formData.value.orderStatus = data.order_status;
        formData.value.quantity = data.quantity;

        console.log(data);
    } catch (error) {
        console.error(error);
    }
};

const updateInbound = async () => {
    try {
        const payload = {
            invoice: formData.value.invoice,
            productType: ProductTypeValueMap[formData.value.productType],
            supplierCd: SupplierCdValueMap[formData.value.supplierCd],
            receiveDate: formData.value.receiveDate,
            orderStatus: ExportStatusValueMap[formData.value.orderStatus],
            quantity: formData.value.quantity,
        };
        await api.put(`/inbound/${props.id}`, payload);
        console.log(payload);
        alert('Update thành công');
    } catch (error) {
        console.error(error);
    }
};

onMounted(fetchDetail);
</script>

<template>
    <form class="inbound-form" @submit.prevent="updateInbound">
        <div class="inbound-form__field">
            <label class="inbound-form__label">Invoice (9)</label>
            <input
                class="inbound-form__input"
                maxlength="9"
                pattern="\d{9}"
                v-model="formData.invoice"
            />
        </div>

        <div class="inbound-form__field">
            <label class="inbound-form__label">Product Type</label>
            <select
                class="inbound-form__input"
                v-model="formData.productType"
                required
            >
                <option value="AIRCON">Aircon</option>
                <option value="SPARE_PART">Spare part</option>
            </select>
        </div>

        <div class="inbound-form__field">
            <label class="inbound-form__label">Supplier Code</label>
            <select
                class="inbound-form__input"
                v-model="formData.supplierCd"
                required
            >
                <option value="VIET_NAM">Viet Nam: VN</option>
                <option value="THAILAND">Thái Lan: TH</option>
                <option value="MALAYSIA">Malaysia: MY</option>
                <option value="INDONESIA">Indonesia: ID</option>
                <option value="SINGAPORE">Singapore: SG</option>
                <option value="PHILIPPINES">Philippines: PH</option>
                <option value="LAOS">Lào: LA</option>
                <option value="MYANMAR">Myanmar: MM</option>
                <option value="DONGTIMOR">Đông Timor: TL</option>
            </select>
        </div>

        <div class="inbound-form__field">
            <label class="inbound-form__label">Receive Date</label>
            <input
                class="inbound-form__input"
                type="datetime-local"
                v-model="formData.receiveDate"
            />
        </div>

        <div class="inbound-form__field">
            <label class="inbound-form__label">Order Status</label>
            <select
                class="inbound-form__input"
                v-model="formData.orderStatus"
                required
            >
                <option value="NOT_EXPORTED">Not exported</option>
                <option value="PARTIALLY_EXPORTED">Partially exported</option>
                <option value="FULLY_EXPORTED">Fully exported</option>
            </select>
        </div>

        <div class="inbound-form__field">
            <label class="inbound-form__label">Quantity</label>
            <input
                class="inbound-form__input"
                type="number"
                v-model="formData.quantity"
            />
        </div>

        <div class="inbound-form__field">
            <label class="inbound-form__label">Attachments</label>
            <input class="inbound-form__input" type="file" />

            <button type="button" @click="downloadFile">+</button>
        </div>

        <button class="inbound-form__submit" type="submit">Update</button>
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
.inbound-form__field button {
    padding: 0 10px;
    margin-left: 20px;
    background-color: #00468c;
    color: white;
    border-radius: 10px;
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
