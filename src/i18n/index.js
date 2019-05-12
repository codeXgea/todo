import Vue from 'vue'
import VueI18n from 'vue-i18n'
import zh from '@/i18n/zh'
import en from '@/i18n/en'


Vue.use(VueI18n)

const message = {
    zh,en
}


export default new VueI18n({
    locale:'zh',
    fallbackLocale:'zh',
    message
})

