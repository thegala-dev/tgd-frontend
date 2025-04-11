<template>
  <footer class="border-t border-iron/20 bg-dark/70 text-iron text-sm mt-16">
    <div class="max-w-7xl mx-auto px-4 py-10 space-y-12">
      <!-- Row 1 -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Col 1: Progetto -->
        <div>
          <h3 class="text-lg font-semibold text-pcb mb-4">thegala.dev</h3>
          <UiFlex direction="col" :gap="8">
            <ul class="space-y-2">
              <li><NuxtLink to="/privacy" class="nav-link">Privacy</NuxtLink></li>
              <li><NuxtLink to="/cookies" class="nav-link">Cookie Policy</NuxtLink></li>
            </ul>
            <ul class="space-y-2 mt-8">
              <li><NuxtLink to="/the-articles/perche-questo-blog" class="nav-link">Perché questo blog</NuxtLink></li>
              <li><NuxtLink to="/the-articles/g-sharp" class="nav-link">Le avventure di G#</NuxtLink></li>
            </ul>
          </UiFlex>
        </div>

        <!-- Col 2: Ultimi articoli -->
        <div>
          <h3 class="text-lg font-semibold text-pcb mb-4">Ultimi articoli</h3>
          <ul class="space-y-2">
            <li v-for="article in latestArticles" :key="article.slug">
              <NuxtLink :to="`/the-articles/${article.slug}`" class="block p-2 border border-iron/20 rounded hover:border-pcb">
                {{ article.title }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <div>
          <h3 class="text-lg font-semibold text-pcb mb-4">Disclaimer</h3>
          <!-- Col 3: Disclaimer -->
          <UiFlex direction="col" :gap="4">
            <p class="text-sm">
              Nessuna AI è stata maltrattata per la realizzazione del progetto,<br />
              anzi è co-founder del blog.
            </p>

            <NuxtLink to="/support" class="text-cyan underline hover:text-lime">Supporta il progetto</NuxtLink>
          </UiFlex>
        </div>
      </div>

      <!-- Row 2 -->
      <div class="flex flex-col md:flex-row items-center justify-between gap-4 pt-6 border-t border-iron/10 text-xs">
        <p>
          &copy; 2025 thegala.dev – Da un'idea
          <a href="https://www.linkedin.com/in/filippogalante/" target="_blank" class="underline hover:text-pcb">del Gala</a>
          alla realtà
        </p>
        <div class="flex gap-4">
          <a href="https://github.com/ilgala" target="_blank" class="hover:text-lime">
            <Icon name="mdi:github" size="20" />
          </a>
          <a href="https://t.me/ilgala" target="_blank" class="hover:text-lime">
            <Icon name="mdi:telegram" size="20" />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import UiFlex from "~/components/ui/UiFlex.vue";

const latestArticles = [
  { title: 'Perché questo blog', slug: 'perche-questo-blog' },
  { title: 'Spatie o non Spatie?', slug: 'spatie-o-non-spatie' },
  { title: 'CI/CD per umani', slug: 'ci-cd-per-umani' },
  { title: 'Laravel oltre il codice', slug: 'laravel-oltre-codice' },
  { title: 'Debugging: arte o scienza?', slug: 'debugging-arte-o-scienza' }
]
</script>

<style scoped>
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