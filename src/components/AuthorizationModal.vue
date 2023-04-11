<template>
    <form class="reg">
        <div class="reg__title modal__title">
            Авторизация
        </div>
        <the-input
        :modelValue="logEmail"
        :placeholder="'Почта'"
        :type="'text'"
        @update:modelValue="(item) => {this.logEmail = item}"
        />
        <the-input
        :modelValue="logPass"
        :placeholder="'Пароль'"
        :type="'password'"
        @update:modelValue="(item) => {this.logPass = item}"
        />
        <TheBtn class="log__btn"
        @click="$event.preventDefault(); authorization()"
        >
            Авторизоваться
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
        data() {
            return {
                logEmail: 'artem.zimin02@gmail.com',
                logPass: '',
                message: '',
                messageModalIsActive: false,
            }
        },
        computed: {
        },
        methods: {
            validation() {
                if(!this.validateEmail(this.logEmail)) {
                    this.alertMessage('Введите действительную почту')
                    return false
                }
                if(!this.logPass.length) {
                    this.alertMessage('Введите пароль')
                    return false
                }
                if(this.validateEmail(this.logEmail) && this.logPass.length) {
                    this.alertMessage('Вы успешно авторизовались')
                    this.changeActiveModal()
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
            authorization() {
                if(this.validation()) {
                    localStorage.login = this.logEmail
                    this.cheackiSAuthorized()
                }
            },
            cheackiSAuthorized() {
                if(localStorage.getItem('login')!==null) {
                    this.$store.commit('IsAuthorizedToTrue')
                    console.log('nice')
                } else {
                    this.$store.commit('IsAuthorizedToFalse')
                }
            },
            changeActiveModal() {
                this.$emit('update:isActive', false)
            }
        },


    }
</script>

<style lang="scss" scoped>
.__btn {
    margin: 0 auto;
}
</style>