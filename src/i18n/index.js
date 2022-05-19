import { createI18n } from "vue-i18n";
import NE from "./en"
import ZH from "./zh"
const messages = {
    en:{
        ...NE
    },
    zh:{
        ...ZH
    }
}

const getCurrentLanguage = () => {
    const UAlang = navigator.language
    const langCode = UAlang.indexOf('zh') !== -1 ? 'zh' : 'en'
    localStorage.setItem('lang',langCode)
    return langCode
}

const i18n = createI18n({
    legacy:false,
    globalInjection:true,
    locale:getCurrentLanguage() || 'zh',
    messages:messages
})

export default i18n