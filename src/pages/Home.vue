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
        <router-link
          to="/"
          class="text-lg font-bold tracking-tight"
          :style="{ color: 'var(--text-primary)' }"
          @click="scrollToHomeTop"
        >{{ t.portfolio.toUpperCase() }}</router-link>

        <div class="flex items-center gap-6">
          <div class="hidden gap-6 md:flex">
            <a
              v-for="link in navLinks"
              :key="link.href"
              :href="link.href"
              class="nav-link text-sm font-medium transition-colors duration-300 cursor-pointer"
              :style="{ color: 'var(--text-muted)' }"
              @mouseenter="(e) => (e.target.style.color = 'var(--text-primary)')"
              @mouseleave="(e) => (e.target.style.color = 'var(--text-muted)')"
              @click.prevent="scrollToSection(link.href)"
              >{{ link.label }}</a
            >
          </div>

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

    <main class="pt-20">
      <!-- ─── Hero ─── -->
      <section id="home" class="relative overflow-hidden">
        <div
          class="mx-auto flex min-h-[calc(100vh-80px)] max-w-5xl flex-col justify-center px-6 py-20 lg:flex-row lg:items-center lg:justify-between"
        >
          <div class="max-w-xl space-y-6">
            <div
              class="inline-flex items-center rounded-full px-4 py-2 text-sm font-medium transition-colors duration-400"
              :style="{
                backgroundColor: 'var(--tag-bg)',
                border: '1px solid var(--tag-border)',
                color: 'var(--text-muted)',
              }"
            >
              {{ t.educationTag }}
            </div>

            <h1 class="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight">
              <span>{{ t.greeting }}</span>
              <span class="block md:inline-block md:ml-3 mt-1 md:mt-0">
                {{ t.intro }} <span :style="{ color: 'var(--accent)' }">{{ t.firstName }}</span>
              </span>
            </h1>

            <p
              class="max-w-lg text-lg leading-relaxed md:text-xl"
              :style="{ color: 'var(--text-secondary)' }"
            >
              {{ t.welcome }}
            </p>

            <div class="flex flex-wrap gap-3 pt-2">
              <a
                href="#projects"
                class="btn-primary rounded-xl px-6 py-3 text-sm font-semibold transition-all duration-300"
                :style="{
                  backgroundColor: 'var(--btn-primary-bg)',
                  color: 'var(--btn-primary-text)',
                }"
                @mouseenter="onBtnPrimaryHover"
                @mouseleave="onBtnPrimaryLeave"
                >{{ t.viewProjects }}</a
              >
              <a
                href="#contact"
                class="rounded-xl px-6 py-3 text-sm font-semibold transition-all duration-300"
                :style="{
                  backgroundColor: 'var(--btn-secondary-bg)',
                  border: '1px solid var(--btn-secondary-border)',
                  color: 'var(--text-primary)',
                }"
                @mouseenter="onBtnSecondaryHover"
                @mouseleave="onBtnSecondaryLeave"
                >{{ t.contactMe }}</a
              >
            </div>
          </div>

          <!-- Avatar Card -->
<div class="mt-16 flex justify-center lg:mt-0">
  <div
    class="relative h-72 w-72 overflow-hidden rounded-3xl p-[1px] transition-all duration-300"
    :style="{
      backgroundColor: 'var(--border-color)',
    }"
    @mouseenter="onAvatarHover"
    @mouseleave="onAvatarLeave"
    ref="avatarCard"
  >
    <div
      class="flex h-full w-full flex-col items-center justify-center rounded-3xl text-center transition-colors duration-400"
      :style="{ backgroundColor: 'var(--bg-primary)' }"
    >
      <div
        class="mb-4 h-20 w-20 overflow-hidden rounded-full transition-transform duration-300"
      >
        <img
          src="../assets/Profile.jpg"
          alt="Profile"
          class="h-full w-full object-cover"
        />
      </div>

                <p class="text-lg font-semibold">{{ t.name }}</p>
                <p
                  class="mt-2 text-sm"
                  :style="{ color: 'var(--text-muted)' }"
                >
                  {{ t.roleTag }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ─── About ─── -->
      <section id="about" class="mx-auto max-w-5xl px-6 py-24">
        <div class="grid gap-10 lg:grid-cols-2">
          <div>
            <p
              class="mb-3 text-xs font-semibold uppercase tracking-[0.25em]"
              :style="{ color: 'var(--text-muted)' }"
            >
              {{ t.aboutMe }}
            </p>
            <h2 class="text-3xl font-bold leading-snug md:text-4xl">
              {{ t.committed }}
            </h2>
          </div>
          <div class="space-y-5 leading-relaxed" :style="{ color: 'var(--text-secondary)' }">
            <p>
              {{ t.aboutP1 }}
            </p>
            <p>
              {{ t.aboutP2 }}
            </p>
            <p>
              {{ t.aboutP3 }}
            </p>
            <div class="mt-6 flex justify-center">
              <a
                href="https://drive.google.com/file/d/1Vt3vc0RmfJJT4FiHYMEOrF4mVRTq_9Q1/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                class="rounded-xl px-6 py-3 text-sm font-semibold transition-all duration-300"
                :style="{
                  backgroundColor: 'var(--btn-primary-bg)',
                  color: 'var(--btn-primary-text)',
                }"
              >
                {{ t.viewResume }}
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- ─── Skills ─── -->
      <section
        id="skills"
        class="transition-colors duration-400"
        :style="{
          backgroundColor: 'var(--section-alt-bg)',
          borderTop: '1px solid var(--border-color)',
          borderBottom: '1px solid var(--border-color)',
        }"
      >
        <div class="mx-auto max-w-5xl px-6 py-24">
          <div class="mb-10">
            <p
              class="mb-3 text-xs font-semibold uppercase tracking-[0.25em]"
              :style="{ color: 'var(--text-muted)' }"
            >
              {{ t.skillsTitle }}
            </p>
            <h2 class="text-3xl font-bold md:text-4xl">{{ t.techStack }}</h2>
          </div>

          <div class="flex flex-wrap gap-3">
            <div
              v-for="skill in skills"
              :key="skill"
              class="skill-tag cursor-default rounded-xl px-5 py-3 text-sm font-medium transition-all duration-300"
              :style="{
                backgroundColor: 'var(--tag-bg)',
                border: '1px solid var(--tag-border)',
                color: 'var(--text-secondary)',
              }"
              @mouseenter="onSkillHover"
              @mouseleave="onSkillLeave"
            >
              {{ skill }}
            </div>
          </div>
        </div>
      </section>

      <!-- ─── Projects ─── -->
      <section id="projects" class="mx-auto max-w-5xl px-6 py-24">
        <div class="mb-12">
          <p
            class="mb-3 text-xs font-semibold uppercase tracking-[0.25em]"
            :style="{ color: 'var(--text-muted)' }"
          >
            {{ t.portfolio }}
          </p>
          <h2 class="text-3xl font-bold md:text-4xl">{{ t.featuredProjects }}</h2>
        </div>

        <!-- Desktop: Show all visible projects (based on displayCount) -->
        <div class="hidden gap-6 md:grid md:grid-cols-2 xl:grid-cols-3">
          <div
            v-for="project in visibleProjects"
            :key="project.id"
            :id="`project-${project.id}`"
            class="project-card rounded-2xl p-6 transition-all duration-300 flex flex-col"
            :style="{
              backgroundColor: 'var(--bg-card)',
              border: '1px solid var(--border-color)',
            }"
            @mouseenter="onCardHover"
            @mouseleave="onCardLeave"
          >
            <div
              class="mb-5 flex h-36 items-center justify-center rounded-xl overflow-hidden"
              :style="{
                backgroundColor: 'var(--section-alt-bg)',
                border: '1px solid var(--border-color)',
              }"
            >
              <img
                v-if="project.image"
                :src="getImageUrl(project.image)"
                :alt="project.title"
                class="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
              />
              <span v-else class="text-2xl" :style="{ color: 'var(--accent)' }">{{ project.title.charAt(0) }}</span>
            </div>
            <h3 class="text-xl font-bold">{{ project.title }}</h3>
            <p
              class="mt-3 text-sm leading-relaxed flex-grow"
              :style="{ color: 'var(--text-muted)' }"
            >
              {{ project.description }}
            </p>
            <div class="mt-5 flex flex-wrap gap-2">
              <span
                v-for="item in project.tech"
                :key="item"
                class="rounded-lg px-3 py-1 text-xs font-medium"
                :style="{
                  backgroundColor: 'var(--tag-bg)',
                  border: '1px solid var(--tag-border)',
                  color: 'var(--text-secondary)',
                }"
                >{{ item }}</span
              >
            </div>
            <router-link
              :to="{ path: `/project/${project.id}`, query: { from: 'projects', projectId: project.id } }"
              class="mt-5 inline-block rounded-lg px-4 py-2 text-sm font-medium transition-all duration-300"
              :style="{
                backgroundColor: 'var(--accent)',
                color: 'var(--btn-primary-text)',
              }"
              @mouseenter="onReadMoreHover"
              @mouseleave="onReadMoreLeave"
            >
              {{ t.readMore }}
            </router-link>
          </div>
        </div>

        <!-- Mobile: Show paginated projects (2 per page) -->
        <div class="flex gap-6 md:hidden flex-col">
          <div
            v-for="project in paginatedProjects"
            :key="project.id"
            class="project-card rounded-2xl p-6 transition-all duration-300 flex flex-col"
            :style="{
              backgroundColor: 'var(--bg-card)',
              border: '1px solid var(--border-color)',
            }"
            @mouseenter="onCardHover"
            @mouseleave="onCardLeave"
          >
            <div
              class="mb-5 flex h-36 items-center justify-center rounded-xl overflow-hidden"
              :style="{
                backgroundColor: 'var(--section-alt-bg)',
                border: '1px solid var(--border-color)',
              }"
            >
              <img
                v-if="project.image"
                :src="getImageUrl(project.image)"
                :alt="project.title"
                class="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
              />
              <span v-else class="text-2xl" :style="{ color: 'var(--accent)' }">{{ project.title.charAt(0) }}</span>
            </div>
            <h3 class="text-xl font-bold">{{ project.title }}</h3>
            <p
              class="mt-3 text-sm leading-relaxed flex-grow"
              :style="{ color: 'var(--text-muted)' }"
            >
              {{ project.description }}
            </p>
            <div class="mt-5 flex flex-wrap gap-2">
              <span
                v-for="item in project.tech"
                :key="item"
                class="rounded-lg px-3 py-1 text-xs font-medium"
                :style="{
                  backgroundColor: 'var(--tag-bg)',
                  border: '1px solid var(--tag-border)',
                  color: 'var(--text-secondary)',
                }"
                >{{ item }}</span
              >
            </div>
            <router-link
              :to="{ path: `/project/${project.id}`, query: { from: 'projects', projectId: project.id } }"
              class="mt-5 inline-block rounded-lg px-4 py-2 text-sm font-medium transition-all duration-300"
              :style="{
                backgroundColor: 'var(--accent)',
                color: 'var(--btn-primary-text)',
              }"
              @mouseenter="onReadMoreHover"
              @mouseleave="onReadMoreLeave"
            >
              {{ t.readMore }}
            </router-link>
          </div>
        </div>

        <!-- Desktop: Show More / Show Less buttons -->
        <div class="mt-10 hidden justify-center gap-4 md:flex">
          <button
            v-if="hasMoreProjects"
            @click="loadMoreProjects"
            class="rounded-2xl bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-[var(--btn-primary-text)] transition-all duration-300 hover:opacity-90"
          >
            {{ t.showMoreProjects }}
          </button>
          <button
            v-if="displayCount > 3"
            @click="showLessProjects"
            class="rounded-2xl border-2 px-6 py-3 text-sm font-semibold transition-all duration-300 hover:opacity-90"
            :style="{
              borderColor: 'var(--accent)',
              color: 'var(--accent)',
            }"
          >
            {{ t.showLess }}
          </button>
        </div>

        <!-- Mobile: Carousel pagination < 1 2 3 4 > -->
        <div v-if="projects.length > 0" class="mt-10 flex md:hidden">
          <div class="mx-auto flex items-center gap-3 overflow-x-auto pb-2">
            <!-- Previous button -->
            <button
              @click="changePage(currentPage - 1)"
              :disabled="currentPage === 1"
              class="flex-shrink-0 rounded-lg px-3 py-2 text-sm font-medium transition-all duration-300 disabled:opacity-50"
              :style="{
                backgroundColor: currentPage === 1 ? 'var(--border-color)' : 'var(--accent)',
                color: currentPage === 1 ? 'var(--text-muted)' : 'var(--btn-primary-text)',
              }"
            >
              &lt;
            </button>

            <!-- Page numbers -->
            <div class="flex gap-2">
              <button
                v-for="page in totalPages"
                :key="page"
                @click="setPage(page)"
                :class="{
                  'rounded-lg px-3 py-2 text-sm font-medium transition-all duration-300 flex-shrink-0': true,
                  'opacity-50': page > 3 && page !== currentPage,
                }"
                :style="{
                  backgroundColor: currentPage === page ? 'var(--accent)' : 'var(--bg-card)',
                  color: currentPage === page ? 'var(--btn-primary-text)' : 'var(--text-secondary)',
                  border: currentPage === page ? 'none' : '1px solid var(--border-color)',
                }"
              >
                {{ page > 3 && page !== currentPage && currentPage > 2 ? '4' : page }}
              </button>
            </div>

            <!-- Next button -->
            <button
              @click="changePage(currentPage + 1)"
              :disabled="currentPage === totalPages"
              class="flex-shrink-0 rounded-lg px-3 py-2 text-sm font-medium transition-all duration-300 disabled:opacity-50"
              :style="{
                backgroundColor: currentPage === totalPages ? 'var(--border-color)' : 'var(--accent)',
                color: currentPage === totalPages ? 'var(--text-muted)' : 'var(--btn-primary-text)',
              }"
            >
              &gt;
            </button>
          </div>
        </div>
      </section>

      <!-- ─── Resume ─── -->
      <section
        id="resume"
        class="transition-colors duration-400"
        :style="{
          backgroundColor: 'var(--section-alt-bg)',
          borderTop: '1px solid var(--border-color)',
        }"
      >
        <div class="mx-auto max-w-5xl px-6 py-24">
          <div class="mb-12">
            <p
              class="mb-3 text-xs font-semibold uppercase tracking-[0.25em]"
              :style="{ color: 'var(--text-muted)' }"
            >
              {{ t.resume }}
            </p>
            <h2 class="text-3xl font-bold md:text-4xl">
              {{ t.expEdu }}
            </h2>
          </div>

          <div class="grid gap-10 lg:grid-cols-2">
            <div>
              <h3 class="mb-6 text-xl font-bold">{{ t.workExp }}</h3>
              <p class="mb-5 text-sm" :style="{ color: 'var(--text-muted)' }">
                {{ t.workExpNote }}
              </p>
              <div v-for="(item, idx) in resume.experience" :key="`exp-${idx}`">
                  <router-link
                    :to="{ path: `/experience/${idx + 1}`, query: { from: 'resume' } }"
                  class="block mb-6 rounded-2xl p-6 transition-all duration-300"
                  :style="{
                    backgroundColor: 'var(--bg-card)',
                    border: '1px solid var(--border-color)',
                    color: 'var(--text-secondary)'
                  }"
                  @mouseenter="onCardHover"
                  @mouseleave="onCardLeave"
                >
                  <div class="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <h4 class="text-lg font-semibold">{{ item.role }}</h4>
                      <p class="text-sm" :style="{ color: 'var(--text-muted)' }">
                        {{ item.company }}
                      </p>
                    </div>
                    <p class="text-sm font-medium" :style="{ color: 'var(--text-muted)' }">
                      {{ item.period }}
                    </p>
                  </div>
                  <p
                    class="mt-4 text-sm leading-relaxed"
                    :style="{ color: 'var(--text-secondary)' }"
                  >
                    {{ shortenText(item.details, 120) }}
                  </p>
                  <div class="mt-5 flex items-center justify-between gap-3">
                    <p class="text-sm font-medium" :style="{ color: 'var(--text-muted)' }">
                      {{ t.clickToView }}
                    </p>
                    <span
                      class="rounded-full px-3 py-1 text-xs font-semibold"
                      :style="{
                        backgroundColor: 'var(--accent)',
                        color: 'var(--btn-primary-text)',
                      }"
                    >
                      {{ t.viewDetails }}
                    </span>
                  </div>
                </router-link>
              </div>
            </div>

            <div>
              <h3 class="mb-6 text-xl font-bold">{{ t.education }}</h3>
              <div
                v-for="item in resume.education"
                :key="item.title"
                class="mb-6 rounded-2xl p-6 transition-all duration-300"
                :style="{
                  backgroundColor: 'var(--bg-card)',
                  border: '1px solid var(--border-color)',
                }"
                @mouseenter="onCardHover"
                @mouseleave="onCardLeave"
              >
                <h4 class="text-lg font-semibold">{{ item.title }}</h4>
                <p class="mt-2 text-sm" :style="{ color: 'var(--text-muted)' }">
                  {{ item.institution }}
                </p>
                <p
                  class="mt-4 text-sm leading-relaxed"
                  :style="{ color: 'var(--text-secondary)' }"
                >
                  {{ item.details }}
                </p>
              </div>
            </div>
          </div>

          <div class="mt-10 flex justify-center">
            <button
              @click="toggleResumeMore"
              class="rounded-2xl bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-[var(--btn-primary-text)] transition-all duration-300 hover:opacity-90"
            >
              {{ resumeExpanded ? t.showLessResume : t.showMoreResume }}
            </button>
          </div>

          <div v-if="resumeExpanded" class="mt-8 space-y-8">
            <div>
              <h3 id="design" class="mb-6 text-xl font-bold">{{ t.design }}</h3>
              <div class="grid gap-4 sm:grid-cols-2">
                <div v-for="(item, idx) in resume.design" :key="`design-${idx}`">
                  <router-link
                    :to="{ path: `/design/${idx + 1}`, query: { from: 'design' } }"
                    class="block rounded-2xl border border-[var(--border-color)] bg-[var(--bg-card)] p-5 text-sm transition-all duration-300"
                    :style="{ color: 'var(--text-secondary)' }"
                    @mouseenter="onCardHover"
                    @mouseleave="onCardLeave"
                  >
                    <div class="flex items-center gap-3">
                      <img v-if="item.image" :src="getImageUrl(item.image)" class="h-14 w-20 object-cover rounded-md" />
                      <div>
                        <div class="font-semibold">{{ item.title }}</div>
                        <div class="text-xs" :style="{ color: 'var(--text-muted)' }">{{ item.details }}</div>
                      </div>
                    </div>
                  </router-link>
                </div>
              </div>
            </div>

            <div>
              <h3 id="activity" class="mb-6 text-xl font-bold">{{ t.activity }}</h3>
              <div class="space-y-4">
                <div v-for="(item, idx) in resume.activity" :key="`act-${idx}`">
                  <router-link
                    :to="{ path: `/activity/${idx + 1}`, query: { from: 'activity' } }"
                    class="rounded-2xl border border-[var(--border-color)] bg-[var(--bg-card)] p-5 text-sm transition-all duration-300 flex items-center gap-3"
                    :style="{ color: 'var(--text-secondary)' }"
                    @mouseenter="onCardHover"
                    @mouseleave="onCardLeave"
                  >
                    <img v-if="item.image" :src="getImageUrl(item.image)" class="h-12 w-16 object-cover rounded-md" />
                    <div>
                      <div class="font-semibold">{{ item.title }}</div>
                      <div class="text-xs" :style="{ color: 'var(--text-muted)' }">{{ item.details }}</div>
                    </div>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ─── Contact ─── -->
      <section id="contact" class="mx-auto max-w-3xl px-6 py-24 text-center">
        <p
          class="mb-3 text-xs font-semibold uppercase tracking-[0.25em]"
          :style="{ color: 'var(--text-muted)' }"
        >
          {{ t.contact }}
        </p>
        <h2 class="text-4xl font-extrabold leading-tight md:text-5xl">
          {{ t.readyToBuild }}
        </h2>
        <p
          class="mx-auto mt-6 max-w-xl text-base"
          :style="{ color: 'var(--text-muted)' }"
        >
          {{ t.contactText }}
        </p>
        <div class="mt-10 flex flex-wrap justify-center gap-3">
          <a
            href="mailto:kittawit.ktw@gmail.com"
            class="rounded-xl px-8 py-3.5 text-sm font-semibold transition-all duration-300"
            :style="{
              backgroundColor: 'var(--btn-primary-bg)',
              color: 'var(--btn-primary-text)',
            }"
            @mouseenter="onBtnPrimaryHover"
            @mouseleave="onBtnPrimaryLeave"
            >{{ t.emailMe }}</a
          >
          <a
            href="https://github.com/Kittxwit/"
            target="_blank"
            rel="noreferrer"
            class="rounded-xl px-8 py-3.5 text-sm font-semibold transition-all duration-300"
            :style="{
              backgroundColor: 'var(--btn-secondary-bg)',
              border: '1px solid var(--btn-secondary-border)',
              color: 'var(--text-primary)',
            }"
            @mouseenter="onBtnSecondaryHover"
            @mouseleave="onBtnSecondaryLeave"
            >{{ t.github }}</a
          >
        </div>
        <div class="mt-8 flex flex-wrap justify-center gap-2">
          <a
            href="https://www.facebook.com/kittawit.lakkhum/"
            target="_blank"
            rel="noreferrer"
            class="inline-flex justify-center rounded-xl px-4 py-2.5 text-xs font-semibold transition-all duration-300"
            :style="{
              backgroundColor: 'var(--btn-secondary-bg)',
              border: '1px solid var(--btn-secondary-border)',
              color: 'var(--text-primary)',
            }"
            @mouseenter="onBtnSecondaryHover"
            @mouseleave="onBtnSecondaryLeave"
            >{{ t.facebook }}</a
          >
          <a
            href="https://www.instagram.com/kittxw_it/"
            target="_blank"
            rel="noreferrer"
            class="inline-flex justify-center rounded-xl px-4 py-2.5 text-xs font-semibold transition-all duration-300"
            :style="{
              backgroundColor: 'var(--btn-secondary-bg)',
              border: '1px solid var(--btn-secondary-border)',
              color: 'var(--text-primary)',
            }"
            @mouseenter="onBtnSecondaryHover"
            @mouseleave="onBtnSecondaryLeave"
            >{{ t.instagram }}</a
          >
        </div>
        <div class="mx-auto mt-6 max-w-md space-y-2 text-sm" :style="{ color: 'var(--text-muted)' }">
          <p>{{ t.gmailLabel }}: kittawit.ktw@gmail.com</p>
          <p>{{ t.phoneLabel }}: +66 65 819 2893</p>
        </div>
      </section>

      <!-- ─── Footer ─── -->
      <footer
        class="pb-24 md:pb-8 py-8 text-center text-sm transition-colors duration-400"
        :style="{
          borderTop: '1px solid var(--border-color)',
          color: 'var(--text-muted)',
        }"
      >
        {{ t.builtWith }}
      </footer>
    </main>

    <!-- ─── Mobile Bottom Nav ─── -->
    <nav
      class="mobile-bottom-nav fixed inset-x-0 bottom-0 z-50 md:hidden"
      :style="{
        padding: '0 16px 14px 16px',
      }"
    >
      <div
        class="mobile-nav-inner mx-auto flex max-w-4xl items-center justify-between rounded-3xl px-3 py-3 backdrop-blur-2xl transition-colors duration-400"
        :style="{
          backgroundColor: isDark ? 'rgba(20, 15, 20, 0.94)' : 'rgba(255, 255, 255, 0.94)',
          border: '1px solid var(--border-color)',
          boxShadow: isDark
            ? '0 20px 45px rgba(0, 0, 0, 0.28)'
            : '0 20px 45px rgba(31, 41, 55, 0.08)',
        }"
      >
        <a
          v-for="item in mobileNavItems"
          :key="item.id"
          href="javascript:void(0)"
          class="mobile-nav-item flex flex-col items-center justify-center rounded-2xl px-3 py-2 transition-all duration-300 cursor-pointer"
          :style="{
            color: activeSection === item.id ? 'var(--btn-primary-text)' : 'var(--text-muted)',
            backgroundColor: activeSection === item.id ? 'var(--accent)' : 'transparent',
            minWidth: '56px',
            border: activeSection === item.id ? '1px solid rgba(255,255,255,0.16)' : '1px solid transparent',
          }"
          @click.prevent="onMobileNavClick(item.id)"
        >
          <!-- Home icon -->
          <svg v-if="item.id === 'home'" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
          <!-- About icon (user) -->
          <svg v-else-if="item.id === 'about'" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
          <!-- Skills icon (code) -->
          <svg v-else-if="item.id === 'skills'" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
          <!-- Projects icon (layers) -->
          <svg v-else-if="item.id === 'projects'" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>
          <!-- Resume icon (file-text) -->
          <svg v-else-if="item.id === 'resume'" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
          <!-- Contact icon (mail) -->
          <svg v-else-if="item.id === 'contact'" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>

          <span class="mt-1 text-[10px] font-medium leading-none">{{ item.label }}</span>
        </a>
      </div>
    </nav>
  </div>
</template>

<script>
import { currentLang, toggleLang, translations } from '../utils/language.js';
import { getLocalizedProjects, skills, getLocalizedResume } from '../data/data.js';

export default {
  data() {
    return {
      currentLang,
      isDark: true,
      projects: [],
      displayCount: 3,
      projectsExpanded: false,
      currentPage: 1,
      skills: [],
      resume: {
        experience: [],
        education: [],
        design: [],
        activity: [],
      },
      resumeExpanded: false,
      error: null,
      activeSection: 'home',
    };
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

    await this.fetchData();

    // Respect resumeExpanded and projectsExpanded query when arriving from a detail page
    const q = this.$route.query || {};
    if (q.resumeExpanded === '1' || q.resumeExpanded === 'true') {
      this.resumeExpanded = true;
    }
    if (q.projectsExpanded === '1' || q.projectsExpanded === 'true') {
      this.projectsExpanded = true;
      this.displayCount = this.projects.length;
    }

    // If returning to a specific project, ensure it's visible and scroll to it
    if (q.projectId) {
      this.restoreProjectScroll(q.projectId);
    }
  },

  mounted() {
    this.setupScrollSpy();
    // listen for theme changes from other pages
    document.addEventListener('theme-changed', this.onThemeChanged);
  },

  beforeUnmount() {
    window.removeEventListener('scroll', this._scrollHandler);
    document.removeEventListener('theme-changed', this.onThemeChanged);
  },

  computed: {
    t() {
      return translations[this.currentLang];
    },
    navLinks() {
      return [
        { href: '#about', label: this.t.about },
        { href: '#skills', label: this.t.skills },
        { href: '#projects', label: this.t.projects },
        { href: '#resume', label: this.t.resume },
        { href: '#contact', label: this.t.contact },
      ];
    },
    mobileNavItems() {
      return [
        { href: '#', id: 'home', label: this.t.home },
        { href: '#about', id: 'about', label: this.t.about },
        { href: '#skills', id: 'skills', label: this.t.skills },
        { href: '#projects', id: 'projects', label: this.t.projects },
        { href: '#resume', id: 'resume', label: this.t.resume },
        { href: '#', id: 'contact', label: this.t.contact },
      ];
    },
    visibleProjects() {
      return this.projects.slice(0, this.displayCount);
    },
    hasMoreProjects() {
      return this.displayCount < this.projects.length;
    },
    totalPages() {
      return Math.ceil(this.projects.length / 2);
    },
    paginatedProjects() {
      const start = (this.currentPage - 1) * 2;
      const end = start + 2;
      return this.projects.slice(start, end);
    },
  },

  watch: {
    currentPage(newPage, oldPage) {
      if (newPage !== oldPage) {
        this.scrollToProjectsTop();
      }
    },
    currentLang() {
      this.fetchData();
    },
    '$route.query.projectId'(val) {
      if (val) this.restoreProjectScroll(val);
    },
    '$route.path'(val) {
      if (val === '/') this.syncThemeFromStorage();
    },
  },

  methods: {
    fetchData() {
      try {
        this.projects = getLocalizedProjects(this.currentLang);
        this.skills = skills;
        this.resume = getLocalizedResume(this.currentLang);
      } catch (err) {
        this.error = this.t.errorLoading;
        console.error(err);
      }
    },

    getImageUrl(imageName) {
      if (!imageName) return '';
      // If already an absolute URL or absolute path, return as-is
      if (typeof imageName === 'string' && (imageName.startsWith('http') || imageName.startsWith('/'))) return imageName;
      const fileName = imageName.includes('.') ? imageName : `${imageName}.jpg`;
      try {
        return new URL(`../assets/${fileName}`, import.meta.url).href;
      } catch (e) {
        console.error(e);
        return '';
      }
    },

    setupScrollSpy() {
      const sectionIds = ['contact', 'resume', 'projects', 'skills', 'about'];
      this._scrollHandler = () => {
        const scrollY = window.scrollY + window.innerHeight / 3;
        let found = 'home';
        for (const id of sectionIds) {
          const el = document.getElementById(id);
          if (el && scrollY >= el.offsetTop) {
            found = id;
            break;
          }
        }
        this.activeSection = found;
      };
      window.addEventListener('scroll', this._scrollHandler, { passive: true });
      this._scrollHandler();
    },

    onMobileNavClick(id) {
      this.activeSection = id;
      // Scroll to the target section smoothly
      if (id === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    },

    loadMoreProjects() {
      this.displayCount = Math.min(this.displayCount + 3, this.projects.length);
      // mark expanded state and persist in URL so returning preserves it
      this.projectsExpanded = this.displayCount > 3;
      try {
        const q = { ...this.$route.query };
        if (this.projectsExpanded) q.projectsExpanded = '1';
        else delete q.projectsExpanded;
        this.$router.replace({ path: this.$route.path, query: q }).catch(() => {});
      } catch (e) {}
    },

    showLessProjects() {
      this.displayCount = 3;
      this.projectsExpanded = false;
      this.currentPage = 1;
      try {
        const q = { ...this.$route.query };
        delete q.projectsExpanded;
        this.$router.replace({ path: this.$route.path, query: q }).catch(() => {});
      } catch (e) {}
      this.scrollToProjectsTop();
    },

    toggleResumeMore() {
      this.resumeExpanded = !this.resumeExpanded;
      // reflect state in URL so returning from details can preserve it
      try {
        const q = { ...this.$route.query };
        if (this.resumeExpanded) q.resumeExpanded = '1';
        else delete q.resumeExpanded;
        this.$router.replace({ path: this.$route.path, query: q }).catch(() => {});
      } catch (e) {
        // ignore router errors
      }
    },

    // Ensure a returning project is visible and scroll to it
    restoreProjectScroll(projectId) {
      const id = String(projectId);
      const idx = this.projects.findIndex(p => String(p.id) === id);
      if (idx !== -1) {
        // ensure displayCount includes the project
        this.displayCount = Math.max(this.displayCount, idx + 1, 3);
        if (this.displayCount > 3) this.projectsExpanded = true;
        // scroll after DOM updates
        this.$nextTick(() => {
          setTimeout(() => {
            const el = document.getElementById(`project-${id}`);
            if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
            else this.scrollToProjectsTop();
          }, 80);
        });
      }
    },

    setPage(page) {
      if (page >= 1 && page <= this.totalPages) {
        this.currentPage = page;
      }
    },

    changePage(page) {
      const nextPage = Math.max(1, Math.min(this.totalPages, page));
      this.currentPage = nextPage;
    },

    shortenText(text, maxLength) {
      if (!text) return '';
      return text.length > maxLength ? `${text.slice(0, maxLength).trim()}...` : text;
    },

    scrollToProjectsTop() {
      const section = document.getElementById('projects');
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    },

    scrollToSection(href) {
      if (!href || href === '#') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }
      const sectionId = href.replace('#', '');
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    },

    scrollToHomeTop(event) {
      if (this.$route.path !== '/') {
        this.$router.push('/').catch(() => {});
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },

    toggleLanguage() {
      toggleLang();
    },

    onThemeChanged(e) {
      try {
        if (e && e.detail && typeof e.detail.isDark === 'boolean') this.isDark = e.detail.isDark;
        // ensure document class matches saved value (in case)
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
      // notify other pages/components the theme changed
      try { document.dispatchEvent(new CustomEvent('theme-changed', { detail: { isDark: this.isDark } })); } catch (e) {}
    },

    /* ─── Hover helpers (minimal effects) ─── */
    onCardHover(e) {
      e.currentTarget.style.borderColor = 'var(--card-hover-border)';
      e.currentTarget.style.transform = 'translateY(-4px)';
    },
    onCardLeave(e) {
      e.currentTarget.style.borderColor = 'var(--border-color)';
      e.currentTarget.style.transform = 'translateY(0)';
    },

    onSkillHover(e) {
      e.currentTarget.style.backgroundColor = 'var(--accent)';
      e.currentTarget.style.color = 'var(--btn-primary-text)';
      e.currentTarget.style.borderColor = 'var(--accent)';
      e.currentTarget.style.transform = 'translateY(-2px)';
    },
    onSkillLeave(e) {
      e.currentTarget.style.backgroundColor = 'var(--tag-bg)';
      e.currentTarget.style.color = 'var(--text-secondary)';
      e.currentTarget.style.borderColor = 'var(--tag-border)';
      e.currentTarget.style.transform = 'translateY(0)';
    },

    onBtnPrimaryHover(e) {
      e.currentTarget.style.transform = 'translateY(-2px)';
      e.currentTarget.style.opacity = '0.9';
    },
    onBtnPrimaryLeave(e) {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.opacity = '1';
    },

    onBtnSecondaryHover(e) {
      e.currentTarget.style.borderColor = 'var(--card-hover-border)';
      e.currentTarget.style.transform = 'translateY(-2px)';
    },
    onBtnSecondaryLeave(e) {
      e.currentTarget.style.borderColor = 'var(--btn-secondary-border)';
      e.currentTarget.style.transform = 'translateY(0)';
    },

    onToggleHover(e) {
      e.currentTarget.style.backgroundColor = 'var(--accent)';
      e.currentTarget.style.color = 'var(--btn-primary-text)';
    },
    onToggleLeave(e) {
      e.currentTarget.style.backgroundColor = 'var(--toggle-bg)';
      e.currentTarget.style.color = 'var(--text-muted)';
    },

    onAvatarHover(e) {
      e.currentTarget.style.backgroundColor = 'var(--card-hover-border)';
      e.currentTarget.style.transform = 'translateY(-4px)';
    },
    onAvatarLeave(e) {
      e.currentTarget.style.backgroundColor = 'var(--border-color)';
      e.currentTarget.style.transform = 'translateY(0)';
    },

    onReadMoreHover(e) {
      e.currentTarget.style.transform = 'translateX(4px)';
      e.currentTarget.style.opacity = '0.9';
    },
    onReadMoreLeave(e) {
      e.currentTarget.style.transform = 'translateX(0)';
      e.currentTarget.style.opacity = '1';
    },
  },
};
</script>

<style scoped>
/* Global smooth scroll behavior */
html {
  scroll-behavior: smooth;
}

/* Transition durations using custom values */
.duration-400 {
  transition-duration: 400ms;
}

/* Mobile bottom nav safe area */
@media (max-width: 767px) {
  main {
    padding-bottom: 80px;
  }
}

/* Mobile nav entrance animation */
.mobile-bottom-nav {
  animation: slideUpNav 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

@keyframes slideUpNav {
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.mobile-nav-item {
  -webkit-tap-highlight-color: transparent;
}
</style>
