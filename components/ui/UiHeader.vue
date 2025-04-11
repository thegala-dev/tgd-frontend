// components/ui/UiHeader.vue
<template>
  <header :class="['sticky top-0 z-50 w-full border-b border-iron/20 bg-dark/70 text-iron backdrop-blur transition-all duration-300', isScrolled ? 'py-2' : 'py-6']">
    <div class="max-w-7xl mx-auto px-4 flex items-center justify-between">
      <!-- Logo + testo -->
      <div :class="['flex items-center transition-all duration-300 gap-2', isScrolled ? 'scale-90' : 'scale-100']">
        <NuxtLink to="/">
          <img src="/assets/img/logo.png" alt="logo" :class="isScrolled ? 'w-6 h-6' : 'w-10 h-10'" />
        </NuxtLink>
        <span :class="['font-bold text-pcb transition-all duration-300', isScrolled ? 'text-lg' : 'text-2xl']">
          thegala.dev
        </span>
      </div>

      <!-- Voci menu desktop -->
      <nav :class="['hidden md:flex transition-all duration-300 font-mono text-sm', isScrolled ? 'gap-10' : 'gap-6']">
        <NuxtLink to="/" class="nav-link">Home</NuxtLink>
        <UiDropdown>
          <template #button>The Project</template>
          <NuxtLink to="/the-project/the-gala" class="block px-4 py-2 hover:text-pcb">Chi sono</NuxtLink>
          <NuxtLink to="/the-project/github-repository" class="block px-4 py-2 hover:text-pcb">Repository</NuxtLink>
        </UiDropdown>
        <NuxtLink to="/the-articles" class="nav-link">Articles</NuxtLink>
        <NuxtLink to="/support" class="nav-link">Support</NuxtLink>
        <NuxtLink to="/contact" class="nav-link">Contact</NuxtLink>
      </nav>

      <!-- Hamburger mobile -->
      <button class="md:hidden" @click="menuOpen = !menuOpen">
        <Icon name="mdi:menu" class="text-2xl hover:text-lime" />
      </button>
    </div>

    <!-- Mobile nav dropdown -->
    <Transition name="menu">
      <div v-if="menuOpen" class="md:hidden px-4 pt-4 pb-2 space-y-4 text-base font-mono overflow-hidden">
        <NuxtLink to="/" class="block nav-link text-xl" @click="menuOpen = false">Home</NuxtLink>
        <UiDropdownMobile label="The Project" to="/the-project">
          <UiFlex direction="col" gap="4" class="ps-2 py-4">
            <NuxtLink to="/the-project" class="nav-link">thegala.dev</NuxtLink>
            <NuxtLink to="/the-project/the-gala" class="nav-link">Chi sono</NuxtLink>
            <NuxtLink to="/the-project/github-repository" class="nav-link">Repository</NuxtLink>
          </UiFlex>
        </UiDropdownMobile>
        <NuxtLink to="/the-articles" class="block nav-link text-xl" @click="menuOpen = false">Articles</NuxtLink>
        <NuxtLink to="/support" class="block nav-link text-xl" @click="menuOpen = false">Support</NuxtLink>
        <NuxtLink to="/contact" class="block nav-link text-xl" @click="menuOpen = false">Contact</NuxtLink>
      </div>
    </Transition>
  </header>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const menuOpen = ref(false)
const isScrolled = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 10
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.menu-enter-active,
.menu-leave-active {
  transition: all 300ms ease;
}
.menu-enter-from,
.menu-leave-to {
  opacity: 0;
  transform: translateY(-10px);
  max-height: 0;
}
.menu-enter-to,
.menu-leave-from {
  opacity: 1;
  transform: translateY(0);
  max-height: 500px;
}

.nav-link {
  position: relative;
  padding-bottom: 2px;
  transition: color 0.3s;
}

.nav-link::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 0%;
  height: 1px;
  background-color: var(--color-pcb, #00ff95);
  transition: width 0.3s ease-in-out;
}

.nav-link:hover::after {
  width: 100%;
}
</style>