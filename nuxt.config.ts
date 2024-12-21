// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxt/ui','@nuxtjs/tailwindcss'],
  runtimeConfig: {
    mySecret: process.env.MY_SECRET,
    public:{
      thirdwebClientId: '',
      contractAddress: '',
      paymentContractAddress: '',
      buyContractAddress: '',
    }
  },

})