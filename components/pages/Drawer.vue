<template>
  <!-- Desktop layout -->
  <aside class="hidden lg:block w-full shrink-0 sticky top-12 self-start space-y-8 bg-dark/70 text-iron rounde-sm p-8">
    <!-- Intestazione -->
    <section>
      <h2 class="font-semibold text-pcb mb-1">In questa pagina</h2>
      <!-- Navigazione interna (auto highlight su scroll: WIP) -->
      <nav class="space-y-1">
        <a href="#section-1" class="block hover:text-lime-400"># Introduzione</a>
        <a href="#section-2" class="block hover:text-lime-400"># Contenuto principale</a>
        <a href="#section-3" class="block hover:text-lime-400"># Conclusioni</a>
      </nav>
    </section>

    <!-- TL;DR; -->
    <section>
      <h2 class="font-semibold text-pcb mb-1">TL;DR;</h2>
      <p>
        Riassunto breve dell'articolo per chi ha fretta o vuole un recap prima di approfondire.
      </p>
    </section>

    <!-- Share -->
    <section>
      <h2 class="font-semibold text-pcb mb-1">Condividi</h2>
      <div class="flex space-x-4">
        <button class="hover:text-cyan-400">
          <Icon name="lucide:twitter" class="w-4 h-4" />
        </button>
        <button class="hover:text-cyan-400">
          <Icon name="lucide:linkedin" class="w-4 h-4" />
        </button>
        <button class="hover:text-cyan-400">
          <Icon name="lucide:link" class="w-4 h-4" />
        </button>
      </div>
    </section>

    <!-- Support -->
    <section>
      <h2 class="font-semibold text-pcb mb-1">Supporta il progetto</h2>
      <p class="mb-2">Se ti piace questo contenuto, puoi supportare thegala.dev su Patreon:</p>
      <NuxtLink to="/support" class="inline-block px-3 py-1 bg-pcb/30 hover:bg-pcb/40 text-tech rounded text-sm font-medium hover:brightness-125">
        Vai alla pagina Support
      </NuxtLink>
    </section>

    <!-- Metadati -->
    <section class="border-t border-pcb pt-4">
      <p class="text-xs text-tech">
        Scritto da <span class="text-iron">Filippo Galante</span><br />
        Ultima revisione: <span class="text-iron">Aprile 2025</span>
      </p>
    </section>
  </aside>

  <!-- Mobile layout -->

  <!-- Pulsante drawer mobile -->
  <button
      class="lg:hidden fixed bottom-6 right-6 bg-pcb text-dark font-bold px-4 py-2 rounded-full shadow-lg z-50"
      @click="showDrawer = !showDrawer"
  >
    Menu
  </button>

  <Transition name="slide-in">
    <div
        v-if="open"
        class="fixed top-0 right-0 w-full h-full sm:max-w-xs bg-dark text-iron p-6 shadow-xl z-50 overflow-y-auto lg:hidden space-y-8 text-sm"
    >
      <!-- Riutilizzo gli stessi blocchi del layout desktop -->
      <section>
        <h2 class="font-semibold text-pcb mb-1">In questa pagina</h2>
        <nav class="space-y-1">
          <a href="#section-1" class="block hover:text-lime-400"># Introduzione</a>
          <a href="#section-2" class="block hover:text-lime-400"># Contenuto principale</a>
          <a href="#section-3" class="block hover:text-lime-400"># Conclusioni</a>
        </nav>
      </section>

      <section>
        <h2 class="font-semibold text-pcb mb-1">TL;DR;</h2>
        <p>
          Riassunto breve dell'articolo per chi ha fretta o vuole un recap prima di approfondire.
        </p>
      </section>

      <section>
        <h2 class="font-semibold text-pcb mb-1">Condividi</h2>
        <div class="flex space-x-4">
          <button class="hover:text-cyan-400">
            <Icon name="lucide:twitter" class="w-4 h-4" />
          </button>
          <button class="hover:text-cyan-400">
            <Icon name="lucide:linkedin" class="w-4 h-4" />
          </button>
          <button class="hover:text-cyan-400">
            <Icon name="lucide:link" class="w-4 h-4" />
          </button>
        </div>
      </section>

      <section>
        <h2 class="font-semibold text-pcb mb-1">Supporta il progetto</h2>
        <p class="mb-2">Se ti piace questo contenuto, puoi supportare thegala.dev su Patreon:</p>
        <NuxtLink to="/support" class="inline-block px-3 py-1 bg-pcb/30 hover:bg-pcb/40 text-tech rounded text-sm font-medium hover:brightness-125">
          Vai alla pagina Support
        </NuxtLink>
      </section>

      <section class="border-t border-pcb pt-4">
        <p class="text-xs text-tech">
          Scritto da <span class="text-iron">Filippo Galante</span><br />
          Ultima revisione: <span class="text-iron">Aprile 2025</span>
        </p>
      </section>
    </div>
  </Transition>
</template>

<script setup>
import { ref } from 'vue'
import Drawer from '@/components/pages/Drawer.vue'

const props = defineProps({
  open: { type: Boolean, required: true }
})
const showDrawer = ref(props.open)
</script>

<style scoped>
.slide-in-enter-active,
.slide-in-leave-active {
  transition: all 0.3s ease;
}
.slide-in-enter-from,
.slide-in-leave-to {
  transform: translateX(100%);
  opacity: 0;
}
.slide-in-enter-to,
.slide-in-leave-from {
  transform: translateX(0);
  opacity: 1;
}
</style>
