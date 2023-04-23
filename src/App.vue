<template>
  <the-header
  @openReg="regIsActive=true"
  @openLog="logIsActive=true"
  />
  <the-modal
  :isActive="regIsActive"
  @update:isActive="this.regIsActive = false"
  >
    <RegistrationModal
    @update:isActive="this.regIsActive = false"
    @alertMessage="showMessage"
    />
  </the-modal>
  <the-modal
  :isActive="logIsActive"
  @update:isActive="this.logIsActive = false"
  >
    <AuthorizationModal
    @update:isActive="this.logIsActive = false"
    @alertMessage="showMessage"
    />
  </the-modal>
  <TheModal
    :isActive="messageModalIsActive"
    @update:isActive="this.messageModalIsActive = false"
    >
      <AlertMessage
      :message="message"
      />
  </TheModal>
  <TheTable/>
  <router-view/>
</template>

<script>
import TheHeader from '@/components/TheHeader.vue'
import TheModal from '@/components/TheModal.vue';
import RegistrationModal from '@/components/RegistrationModal.vue';
import AuthorizationModal from '@/components/AuthorizationModal.vue';
import AlertMessage from '@/components/AlertMessage.vue';
import TheTable from '@/components/table/TheTable.vue';


export default {
  components: {
    TheHeader,TheModal,RegistrationModal,
    AuthorizationModal,AlertMessage,TheTable
  },
  data() {
    return {
      regIsActive: false,
      logIsActive: false,
      messageModalIsActive: false,
      message: '',
    }
  },
  methods: {
    cheackiSAuthorized() {
      if(localStorage.getItem('login')!==null) {
          this.$store.commit('IsAuthorizedToTrue')
      } else {
          this.$store.commit('IsAuthorizedToFalse')
      }
    },
    showMessage(letter) {
      this.messageModalIsActive = true
      this.message = letter
    }
  },
  mounted() {
    this.cheackiSAuthorized()
  }
}
</script>

<style lang="scss">
@import '@/assets/reset.css';
@import '@/assets/style.scss';

</style>
