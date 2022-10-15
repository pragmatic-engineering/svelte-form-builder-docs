<script lang="ts">
  import { onMount } from "svelte";
  import { theme } from "./store";

  let currentTheme: any = undefined;

  onMount(() => {
    currentTheme = getCurrentTheme();
    $theme = currentTheme;
  });

  function getCurrentTheme() {
    if (import.meta.env.SSR) {
      return undefined;
    }
    if (typeof localStorage !== undefined && localStorage.getItem("theme")) {
      return localStorage.getItem("theme");
    }
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }
    return "light";
  }

  function changeTheme() {
    const root = document.documentElement;
    if (currentTheme === "light") {
      currentTheme = "dark";
      root.classList.add("theme-dark");
    } else if (currentTheme === "dark") {
      currentTheme = "light";
      root.classList.remove("theme-dark");
    }
    if (currentTheme) {
      localStorage.setItem("theme", currentTheme);
      $theme = currentTheme;
    }

    getCurrentTheme();
  }

  $: themeChangeTitle = `Use ${currentTheme == "light" ? "dark" : "light"} theme}`;
</script>

<div class="theme-toggle" title="{themeChangeTitle}" aria-label="{themeChangeTitle}">
  <button on:click="{changeTheme}">
    {#if currentTheme == "light"}
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-brightness-high" viewBox="0 0 16 16">
        <path
          d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"
        ></path>
      </svg>
    {:else if currentTheme == "dark"}
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
        <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
      </svg>
    {/if}
  </button>
</div>

<style>
  button {
    text-size-adjust: 100%;
    word-wrap: break-word;
    box-sizing: border-box;
    background: none;
    border: none;
    color: inherit;
    cursor: pointer;
    font-family: inherit;
    padding: 1;
    margin-right: 4px;
    align-items: center;
    border-radius: 50%;
    display: flex;
    height: 100%;
    justify-content: center;
    /* width: 100%; */
    background-color: var(--theme-bg);
  }

  button:hover {
    background-color: var(--theme-bg-hover);
  }
</style>
