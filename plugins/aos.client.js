import AOS from "aos"; 
import "aos/dist/aos.css";
 
export default defineNuxtPlugin(nuxtApp => {
  const aos = AOS.init({
    once: false
  })

  nuxtApp.vueApp.use(aos)
})