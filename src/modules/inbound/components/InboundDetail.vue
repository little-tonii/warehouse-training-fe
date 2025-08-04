<script setup></script>
<template>
    <form class="inbound-form">
        <div class="inbound-form__field">
            <label class="inbound-form__label">Invoice (9)</label>
            <input class="inbound-form__input" maxlength="9" pattern="\d{9}" />
        </div>

        <div class="inbound-form__field">
            <label class="inbound-form__label">Product Type</label>
            <select class="inbound-form__input" required>
                <option value="Aircon">Aircon</option>
                <option value="Spare_part">Spare part</option>
            </select>
        </div>

        <div class="inbound-form__field">
            <label class="inbound-form__label">Supplier Code</label>
            <select class="inbound-form__input" required>
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
            <input class="inbound-form__input" type="datetime-local" />
        </div>

        <div class="inbound-form__field">
            <label class="inbound-form__label">Quantity</label>
            <input class="inbound-form__input" type="number" />
        </div>

        <div class="inbound-form__field">
            <label class="inbound-form__label">Attachments</label>

            <ul>
                <li
                    v-for="(file, index) in files"
                    :key="index"
                    class="file-item"
                >
                    <span>{{ file.name }}</span>
                    <label class="edit-btn">
                        Sửa
                        <input type="file" class="hidden-input" />
                    </label>
                </li>
            </ul>
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
