<template>
  <nav
    class="container mx-auto flex flex-row-reverse items-center justify-between gap-sp-2 font-bold md:justify-start lg:gap-sp-3"
  >
    <div
      class="flex flex-row-reverse gap-sp-1 color-base-secondary lg:gap-sp-1"
    >
      <ThemeToggle class="transition-colors hover:color-base" />
      <a href="https://github.com/grphq1" class="p-sp-1" target="_blink">
        <div
          class="i-ri-github-line text-xl transition-colors hover:color-base"
        />
      </a>
    </div>
    <div class="flex flex-row-reverse items-center gap-sp-2 lg:gap-sp-3">
      <RouterLink
        class="color-base-secondary transition-colors hover:color-base"
        to="/"
      >
        Home
      </RouterLink>
      <RouterLink
        class="color-base-secondary transition-colors hover:color-base"
        to="/articles"
      >
        Blog
      </RouterLink>
      <RouterLink
        class="color-base-secondary transition-colors hover:color-base"
        to="/thoughts"
      >
        Thoughts
      </RouterLink>
    </div>
  </nav>
</template>
