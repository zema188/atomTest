<template>
    <form class="reg">
        <div class="reg__title modal__title">
            Регистрация
        </div>
        <the-input
        :modelValue="regEmail"
        :placeholder="'Почта'"
        :type="'text'"
        @update:modelValue="(item) => {this.regEmail = item}"
        />
        <the-input
        :modelValue="regPass"
        :placeholder="'Пароль'"
        :type="'password'"
        @update:modelValue="(item) => {this.regPass = item}"
        />
        <the-input
        :modelValue="regPassReapet"
        :placeholder="'Подтвердите пароль'"
        :type="'password'"
        @update:modelValue="(item) => {this.regPassReapet = item}"
        />
        <TheBtn class="reg__btn"
        @click="$event.preventDefault(); validation()"
        >
            Зарегистрироваться
        </TheBtn>
    </form>
</template>

<script>
import TheInput from '@/components/TheInput.vue';
import TheBtn from '@/components/TheBtn.vue';
    export default {
        name: 'RegistrationModal',
        components: {
            TheInput,TheBtn
        },
        computed: {
        },
        methods: {
            validation() {
                if(!this.validateEmail(this.regEmail)) {
                    this.alertMessage('Введите действительную почту')
                    return false
                }
                if(!this.regPass.length) {
                    this.alertMessage('Введите пароль')
                    return false
                }
                if(this.regPass.length && !this.regPass == this.regPassReapet) {
                    this.alertMessage('Пароли должны совпадать')
                    return false
                }
                if(this.validateEmail(this.regEmail) && this.regPass.length && this.regPass == this.regPassReapet) {
                    this.changeActiveModal()
                    this.alertMessage('Вы успешно зарегистрировались!')
                    return true
                }
            },
            validateEmail(email) {
                let re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
                return re.test(String(email).toLowerCase());
            },
            alertMessage(letter) {
                this.$emit('alertMessage', letter)
            },
            changeActiveModal() {
                this.$emit('update:isActive', false)
            }
        },
        data() {
            return {
                regEmail: 'artem.zimin02@gmail.com',
                regPass: '',
                regPassReapet: '',
                message: '',
                messageModalIsActive: false,
            }
        },
    }
</script>

<style lang="scss" scoped>
.modal__title {
    text-align: center;
}
.reg__btn {
    margin: 0 auto;
}
</style>