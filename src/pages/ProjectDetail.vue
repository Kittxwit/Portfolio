<template>
  <div
    class="min-h-screen font-sans transition-colors duration-400"
    :style="{
      backgroundColor: 'var(--bg-primary)',
      color: 'var(--text-primary)',
    }"
  >
    <!-- ─── Navbar ─── -->
    <nav
      class="fixed inset-x-0 top-0 z-50 backdrop-blur-xl transition-colors duration-400"
      :style="{
        backgroundColor: 'var(--bg-nav)',
        borderBottom: '1px solid var(--border-color)',
      }"
    >
      <div class="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <router-link to="/" class="text-lg font-bold tracking-tight" :style="{ color: 'var(--text-primary)' }">{{ t.portfolio.toUpperCase() }}</router-link>

        <div class="flex items-center gap-6">
          <!-- Language Toggle Button -->
          <button
            id="language-toggle"
            @click="toggleLanguage"
            class="flex h-10 w-10 items-center justify-center rounded-full text-xs font-bold tracking-wider transition-all duration-300 border border-transparent shadow-sm"
            :style="{
              backgroundColor: 'var(--toggle-bg)',
              color: 'var(--text-muted)',
            }"
            @mouseenter="onToggleHover"
            @mouseleave="onToggleLeave"
            :title="currentLang === 'en' ? 'เปลี่ยนเป็นภาษาไทย' : 'Switch to English'"
          >
            <span>{{ currentLang.toUpperCase() }}</span>
          </button>

          <!-- Theme Toggle Button -->
          <button
            id="theme-toggle"
            @click="toggleTheme"
            class="flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300"
            :style="{
              backgroundColor: 'var(--toggle-bg)',
              color: 'var(--text-muted)',
            }"
            @mouseenter="onToggleHover"
            @mouseleave="onToggleLeave"
            :title="isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'"
          >
            <!-- Sun icon (shown in dark mode) -->
            <svg
              v-if="isDark"
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <circle cx="12" cy="12" r="5" />
              <line x1="12" y1="1" x2="12" y2="3" />
              <line x1="12" y1="21" x2="12" y2="23" />
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
              <line x1="1" y1="12" x2="3" y2="12" />
              <line x1="21" y1="12" x2="23" y2="12" />
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
            </svg>
            <!-- Moon icon (shown in light mode) -->
            <svg
              v-else
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          </button>
        </div>
      </div>
    </nav>

    <main class="pt-32">
      <div class="mx-auto max-w-3xl px-6 py-12">
        <!-- Back Button -->
        <a
          href="#"
          @click.prevent="goBack"
          class="mb-8 back-btn inline-flex items-center gap-2 text-sm font-medium rounded-lg px-4 py-2 transition-all duration-300"
          @mouseenter="onBackHover"
          @mouseleave="onBackLeave"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
          {{ t.backToHome }}
        </a>

        <!-- Loading State -->
        <div v-if="loading" class="flex items-center justify-center py-12">
          <div class="text-center">
            <p :style="{ color: 'var(--text-muted)' }">{{ t.loadingProject }}</p>
          </div>
        </div>

        <!-- Error State -->
        <div v-else-if="error" class="rounded-2xl p-8 text-center" :style="{ backgroundColor: 'var(--section-alt-bg)', border: '1px solid var(--border-color)' }">
          <p class="text-lg font-semibold" :style="{ color: 'var(--text-primary)' }">{{ error }}</p>
          <a href="#" @click.prevent="goBack" class="mt-4 inline-block rounded-lg px-6 py-2 font-medium transition-all" :style="{ backgroundColor: 'var(--accent)', color: 'var(--btn-primary-text)' }">
            {{ t.backToHome }}
          </a>
        </div>

        <!-- Project Details -->
        <div v-else-if="project" class="space-y-8">
          <!-- Header (Banner / Gallery Grid) -->
          <div>
            <!-- Main Featured Image -->
            <div
              class="group relative mb-4 flex h-64 md:h-96 items-center justify-center rounded-2xl overflow-hidden cursor-pointer"
              :style="{
                backgroundColor: 'var(--section-alt-bg)',
                border: '1px solid var(--border-color)',
              }"
              @click="openLightbox(0)"
            >
              <img
                v-if="projectImages.length > 0"
                :src="getImageUrl(projectImages[0])"
                :alt="project.title"
                class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span v-else class="text-6xl font-bold" :style="{ color: 'var(--accent)' }">{{ project.title.charAt(0) }}</span>
              
              <!-- Hover Overlay with Zoom Icon -->
              <div v-if="projectImages.length > 0" class="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div class="flex items-center gap-2 rounded-full bg-white/20 backdrop-blur-md px-5 py-2.5 text-white text-sm font-semibold shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>
                  {{ t.viewAlbum }}
                </div>
              </div>
            </div>

            <!-- Thumbnail Grid (Only shown if more than 1 image) -->
            <div v-if="projectImages.length > 1" class="mb-6 grid grid-cols-4 gap-3">
              <div
                v-for="(img, idx) in projectImages"
                :key="idx"
                class="group relative h-20 md:h-28 overflow-hidden rounded-xl cursor-pointer border transition-all duration-300 hover:scale-[1.02]"
                :style="{
                  borderColor: 'var(--border-color)',
                }"
                @click="openLightbox(idx)"
              >
                <img :src="getImageUrl(img)" class="h-full w-full object-cover" />
                <div class="absolute inset-0 bg-black/25 opacity-0 transition-opacity group-hover:opacity-100"></div>
              </div>
            </div>
            <h1 class="mb-4 text-4xl font-bold md:text-5xl">{{ project.title }}</h1>
            <p
              class="text-lg leading-relaxed"
              :style="{ color: 'var(--text-secondary)' }"
            >
              {{ project.description }}
            </p>
          </div>

          <!-- Tech Stack -->
          <div>
            <h2 class="mb-4 text-2xl font-bold">{{ t.techUsed }}</h2>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="tech in project.tech"
                :key="tech"
                class="rounded-lg px-4 py-2 font-medium"
                :style="{
                  backgroundColor: 'var(--accent)',
                  color: 'var(--btn-primary-text)',
                }"
              >
                {{ tech }}
              </span>
            </div>
          </div>

          <!-- Full Description -->
          <div
            class="rounded-2xl p-8"
            :style="{
              backgroundColor: 'var(--bg-card)',
              border: '1px solid var(--border-color)',
            }"
          >
            <h2 class="mb-4 text-2xl font-bold">{{ t.projectDetail }}</h2>
            <div
              class="space-y-4 leading-relaxed"
              :style="{ color: 'var(--text-secondary)' }"
            >
              <p v-for="(paragraph, index) in formattedDescription" :key="index">
                {{ paragraph }}
              </p>
            </div>
          </div>

          <!-- Project Links -->
          <div class="flex flex-wrap gap-4">
            <a
              v-if="project.link"
              :href="project.link"
              target="_blank"
              rel="noreferrer"
              class="inline-flex items-center gap-2 rounded-lg px-6 py-3 font-semibold transition-all duration-300"
              :style="{
                backgroundColor: 'var(--accent)',
                color: 'var(--btn-primary-text)',
              }"
              @mouseenter="onLinkHover"
              @mouseleave="onLinkLeave"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
              {{ t.viewProject }}
            </a>
            <a
              href="#"
              @click.prevent="goBack"
              class="inline-flex items-center gap-2 rounded-lg px-6 py-3 font-semibold transition-all duration-300"
              :style="{
                backgroundColor: 'var(--btn-secondary-bg)',
                border: '1px solid var(--btn-secondary-border)',
                color: 'var(--text-primary)',
              }"
              @mouseenter="onSecondaryHover"
              @mouseleave="onSecondaryLeave"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
              {{ t.backToPortfolio }}
            </a>
          </div>
        </div>
      </div>

      <!-- Footer -->
      <footer
        class="mt-20 border-t py-8 text-center text-sm transition-colors duration-400"
        :style="{
          borderColor: 'var(--border-color)',
          color: 'var(--text-muted)',
        }"
      >
        {{ t.builtWith }}
      </footer>

      <!-- Lightbox Modal -->
      <div
        v-if="lightboxOpen"
        class="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black/95 backdrop-blur-md transition-all duration-300"
        tabindex="0"
        @click.self="closeLightbox"
      >
        <!-- Close Button -->
        <button
          @click="closeLightbox"
          class="absolute top-6 right-6 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-all hover:bg-white/20 hover:scale-105"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>

        <!-- Navigation Arrows -->
        <button
          v-if="projectImages.length > 1"
          @click="prevImage"
          class="absolute left-6 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-all hover:bg-white/20 hover:scale-105"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
        </button>

        <button
          v-if="projectImages.length > 1"
          @click="nextImage"
          class="absolute right-6 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-all hover:bg-white/20 hover:scale-105"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
        </button>

        <!-- Image Display -->
        <div class="relative max-h-[70vh] max-w-[90vw] overflow-hidden rounded-xl">
          <img
            :src="getImageUrl(projectImages[currentImageIndex])"
            :alt="project.title"
            class="max-h-[70vh] max-w-[90vw] object-contain transition-all duration-300"
          />
        </div>

        <!-- Image Counter and Title -->
        <div class="mt-6 text-center text-white">
          <p class="text-xl font-bold">{{ project.title }}</p>
          <p class="text-sm text-gray-400 mt-1">{{ t.imageOf.replace('{current}', currentImageIndex + 1).replace('{total}', projectImages.length) }}</p>
        </div>

        <!-- Thumbnail slide bar in lightbox -->
        <div v-if="projectImages.length > 1" class="mt-6 flex gap-3 overflow-x-auto max-w-[80vw] px-4 pb-2">
          <button
            v-for="(img, idx) in projectImages"
            :key="idx"
            @click="currentImageIndex = idx"
            class="h-14 w-20 flex-shrink-0 overflow-hidden rounded-lg border-2 transition-all"
            :class="currentImageIndex === idx ? 'border-white scale-105 shadow-md' : 'border-transparent opacity-50 hover:opacity-100'"
          >
            <img :src="getImageUrl(img)" class="h-full w-full object-cover" />
          </button>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import { currentLang, toggleLang, translations } from '../utils/language.js';
import { getLocalizedProject } from '../data/data.js';

export default {
  data() {
    return {
      currentLang,
      isDark: true,
      project: null,
      loading: true,
      error: null,
      lightboxOpen: false,
      currentImageIndex: 0,
    };
  },

  computed: {
    t() {
      return translations[this.currentLang];
    },
    formattedDescription() {
      if (!this.project || !this.project.fullDescription) return [];
      return this.project.fullDescription
        .split('\n')
        .map(line => line.trim())
        .filter(line => line.length > 0);
    },
    projectImages() {
      if (!this.project) return [];
      if (this.project.images && Array.isArray(this.project.images)) {
        return this.project.images;
      }
      return this.project.image ? [this.project.image] : [];
    },
  },

  async created() {
    // Restore saved theme
    const saved = localStorage.getItem('theme');
    if (saved === 'light') {
      this.isDark = false;
      document.documentElement.classList.remove('dark');
    } else {
      this.isDark = true;
      document.documentElement.classList.add('dark');
    }

    await this.fetchProject();
  },

  mounted() {
    document.addEventListener('theme-changed', this.onThemeChanged);
  },

  watch: {
    lightboxOpen(isOpen) {
      if (isOpen) {
        window.addEventListener('keydown', this.handleKeyDown);
        document.body.style.overflow = 'hidden';
      } else {
        window.removeEventListener('keydown', this.handleKeyDown);
        document.body.style.overflow = '';
      }
    },
    currentLang() {
      this.fetchProject();
    },
  },

  beforeUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
    document.removeEventListener('theme-changed', this.onThemeChanged);
    document.body.style.overflow = '';
  },

  methods: {
    openLightbox(index) {
      this.currentImageIndex = index;
      this.lightboxOpen = true;
    },
    closeLightbox() {
      this.lightboxOpen = false;
    },
    prevImage() {
      if (this.projectImages.length === 0) return;
      this.currentImageIndex = (this.currentImageIndex - 1 + this.projectImages.length) % this.projectImages.length;
    },
    nextImage() {
      if (this.projectImages.length === 0) return;
      this.currentImageIndex = (this.currentImageIndex + 1) % this.projectImages.length;
    },
    handleKeyDown(e) {
      if (e.key === 'Escape') this.closeLightbox();
      if (e.key === 'ArrowRight' || e.key === 'Right') this.nextImage();
      if (e.key === 'ArrowLeft' || e.key === 'Left') this.prevImage();
    },

    goBack() {
      const from = this.$route.query.from || 'home';
      const query = {};
      if (['resume', 'design', 'activity'].includes(from)) query.resumeExpanded = '1';
      // preserve project id so the home page can restore scroll/visibility
      const pid = this.$route.query.projectId || (this.project && this.project.id);
      if (pid) query.projectId = pid;
      this.$router.push({ path: '/', query }).then(() => {
        setTimeout(() => {
          const el = document.getElementById(from);
          if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          else window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 60);
      }).catch(() => {});
    },

    getImageUrl(imageName) {
      if (!imageName) return '';
      if (typeof imageName === 'string' && (imageName.startsWith('http') || imageName.startsWith('/'))) return imageName;
      const fileName = imageName.includes('.') ? imageName : `${imageName}.jpg`;
      try {
        return new URL(`../assets/${fileName}`, import.meta.url).href;
      } catch (e) {
        console.error(e);
        return '';
      }
    },

    fetchProject() {
      try {
        const id = parseInt(this.$route.params.id, 10);
        this.project = getLocalizedProject(id, this.currentLang);
        if (!this.project) {
          this.error = this.t.projectNotFound;
          this.loading = false;
          return;
        }
        this.loading = false;
      } catch (err) {
        this.error = this.t.failedToLoadProject;
        this.loading = false;
        console.error(err);
      }
    },

    toggleLanguage() {
      toggleLang();
    },

    onThemeChanged(e) {
      try {
        if (e && e.detail && typeof e.detail.isDark === 'boolean') this.isDark = e.detail.isDark;
        const saved = localStorage.getItem('theme');
        if (saved === 'light') {
          document.documentElement.classList.remove('dark');
        } else if (saved === 'dark') {
          document.documentElement.classList.add('dark');
        }
      } catch (err) {}
    },

    syncThemeFromStorage() {
      try {
        const saved = localStorage.getItem('theme');
        if (saved === 'light') {
          this.isDark = false;
          document.documentElement.classList.remove('dark');
        } else if (saved === 'dark') {
          this.isDark = true;
          document.documentElement.classList.add('dark');
        }
      } catch (e) {}
    },

    toggleTheme() {
      this.isDark = !this.isDark;
      if (this.isDark) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
      try { document.dispatchEvent(new CustomEvent('theme-changed', { detail: { isDark: this.isDark } })); } catch (e) {}
    },

    onBackHover(e) {
      e.currentTarget.style.transform = 'translateX(-4px)';
    },
    onBackLeave(e) {
      e.currentTarget.style.transform = 'translateX(0)';
    },

    onToggleHover(e) {
      e.currentTarget.style.backgroundColor = 'var(--accent)';
      e.currentTarget.style.color = 'var(--btn-primary-text)';
    },
    onToggleLeave(e) {
      e.currentTarget.style.backgroundColor = 'var(--toggle-bg)';
      e.currentTarget.style.color = 'var(--text-muted)';
    },

    onLinkHover(e) {
      e.currentTarget.style.transform = 'translateY(-2px)';
      e.currentTarget.style.opacity = '0.9';
    },
    onLinkLeave(e) {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.opacity = '1';
    },

    onSecondaryHover(e) {
      e.currentTarget.style.borderColor = 'var(--card-hover-border)';
      e.currentTarget.style.transform = 'translateY(-2px)';
    },
    onSecondaryLeave(e) {
      e.currentTarget.style.borderColor = 'var(--btn-secondary-border)';
      e.currentTarget.style.transform = 'translateY(0)';
    },
  },
};
</script>

<style scoped>
main {
  min-height: calc(100vh - 80px);
}

.back-btn {
  padding: 0.35rem 0.9rem;
  border-radius: 10px;
  background: var(--btn-secondary-bg);
  color: var(--text-primary);
  border: 1px solid var(--btn-secondary-border);
  align-items: center;
  transition: all 0.22s ease;
}
.back-btn svg {
  opacity: 0.9;
}
.back-btn:hover {
  transform: translateX(-4px);
  border-color: var(--card-hover-border);
}
</style>
