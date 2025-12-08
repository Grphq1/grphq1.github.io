<template>
  <nav
    class="container mx-auto flex flex-row-reverse items-center justify-between gap-sp-2 font-bold md:justify-start lg:gap-sp-3"
  >
    <div
      class="color-base-secondary flex flex-row-reverse gap-sp-1 lg:gap-sp-1"
    >
      <ThemeToggle class="hover:color-base transition-colors" />
      <a href="https://github.com/grphq1" class="p-sp-1" target="_blink">
        <div
          class="i-ri-github-line hover:color-base text-xl transition-colors"
        />
      </a>
    </div>
    <div class="flex flex-row-reverse items-center gap-sp-2 lg:gap-sp-3">
      <RouterLink
        class="hover:color-base color-base-secondary transition-colors"
        to="/"
      >
        Home
      </RouterLink>
      <RouterLink
        class="hover:color-base color-base-secondary transition-colors"
        to="/articles"
      >
        Blog
      </RouterLink>
      <RouterLink
        class="hover:color-base color-base-secondary transition-colors"
        to="/thoughts"
      >
        Thoughts
      </RouterLink>
    </div>
  </nav>
</template>
