import type { RouterConfig } from '@nuxt/schema'

export default <RouterConfig>{
  scrollBehavior(to, from, savedPosition) {
    // اگر مرورگر حالت ذخیره‌شده (back/forward) داشته باشه، همونو برگردونه
    if (savedPosition) {
      return savedPosition
    }
    // همیشه برگرد بالا
    return { top: 0 }
  }
}
