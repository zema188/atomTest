<template>
    <header class="header container">
        <div class="header__content">
            <div class="header__list">
                <TheBtn class="haeder__item"
                v-if="!$store.getters.isAuthorized"
                @click="openReg"
                >
                    Регистрация
                </TheBtn>
                <TheBtn class="haeder__item"
                v-if="!$store.getters.isAuthorized"
                @click="openLog"
                >
                Авторизация
                </TheBtn>
                <TheBtn class="haeder__item"
                v-if="$store.getters.isAuthorized"
                @click="logout"
                >
                Выход
                </TheBtn>
            </div>
        </div>
    </header>
</template>

<script>
import TheBtn from './TheBtn.vue';
    export default {
        components: {
            TheBtn,
        },
        data() {
            return {
            }
        },
        methods: {
            checkLogin() {
                if(localStorage.getItem('login')!==null) {
                    return true
                } else {
                    return false
                }
            },
            openReg() {
                this.$emit('openReg')
            },
            openLog() {
                this.$emit('openLog')
            },
            logout() {
                this.$store.commit('IsAuthorizedToFalse')
                localStorage.removeItem('login')
            }
        },
        mounted() {
            this.checkLogin()
            // if(true) {
            //     this.resetLoginLocalStorage()
            // }
        },
    }
</script>

<style lang="scss" scoped>
.header {

&__content {
    display: flex;
    justify-content: flex-end;
}

&__list {
    display: flex;
    gap: 10px;
}
}
.container {
}
.hader {

&__item {
}
}

</style>