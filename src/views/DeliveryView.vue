<script setup>

</script>

<template>
    <div class="container">
        <div class="container__content">
            <div class="back">
                <span class="material-symbols-outlined">arrow_back</span>
                <p>Back to cart</p>
            </div>
            <div class="container__heading">
                <h2 class="heading heading__two">Delivery Details</h2>
                <div class="container__checkbox">
                    <input type="checkbox" id="checkbox" v-model="checked">
                    <label for="checkbox" class="form__checkbox">Send as dropshipper</label>
                </div>

            </div>
            <div class="form">
                <div class="form form--data">
                    <input class="form__input" />
                    <input class="form__input" />
                    <input class="form__input form__input--textarea" />
                </div>
                <div class="form form--data">
                    <input class="form__input" />
                    <input class="form__input" />
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.back {
    display: inline-flex;
    gap: 10px;
    align-items: center;
    height: 18px;
}

.container {
    display: flex;
    width: 100%;
    padding-right: 30px;
}

.container__content {
    display: flex;
    flex-direction: column;
    width: 100%;

}

.container__heading {
    display: flex;
    justify-content: space-between;
    align-content: center;
    padding-top: 24px;
    padding-bottom: 36px;
}

.container__checkbox {
    display: flex;
    gap: 10px;
}

.form__checkbox {
    display: inline-flex;
    color: #2D2A40;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    align-items: center;
}

.heading {
    color: #FF8A00;
    font-family: 'Montserrat', sans-serif;
}

.heading__two {
    font-size: 36px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
}


.form {
    display: flex;
    flex-direction: row;
    gap: 30px;
    width: 100%;
}

.form--data{
    flex-direction: column;
}
.form__input {
    display: flex;
    width: 100%;
    max-width: 400px;
    height: 60px;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    border: 1px solid #CCC;
    background: #FFF;
    margin-bottom: 10px;
}

.form__input--textarea {
    height: 120px;
}
</style>