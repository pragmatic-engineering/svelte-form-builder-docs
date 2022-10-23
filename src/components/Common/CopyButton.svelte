<script lang="ts">
  import tippy from "tippy.js";
  import "tippy.js/dist/tippy.css";
  import "tippy.js/themes/material.css";
  import { hideAll } from "tippy.js";

  import { onDestroy, onMount } from "svelte";
  export let text: string;
  export let kbd: boolean = false;
  export let hideCopyButton: boolean = false;

  let tippyInstance: any;
  onMount(() => {
    tippyInstance = tippy(".tooltip-target", {
      content: "Copied!",
      trigger: "click",
      arrow: true,
      theme: "material",
    });
  });

  onDestroy(() => {
    if (tippyInstance) {
      tippyInstance.destroy();
    }
  });

  function copyText() {
    copyToClipboard(text);
    setTimeout(() => {
      hideAll();
    }, 1000);
  }

  //https://stackoverflow.com/questions/400212/how-do-i-copy-to-the-clipboard-in-javascript
  function copyToClipboard(text: string) {
    if (window.clipboardData && window.clipboardData.setData) {
      // Internet Explorer-specific code path to prevent textarea being shown while dialog is visible.
      return window.clipboardData.setData("Text", text);
    } else if (document.queryCommandSupported && document.queryCommandSupported("copy")) {
      var textarea = document.createElement("textarea");
      textarea.textContent = text;
      textarea.style.position = "fixed"; // Prevent scrolling to bottom of page in Microsoft Edge.
      document.body.appendChild(textarea);
      textarea.select();
      try {
        return document.execCommand("copy"); // Security exception may be thrown by some browsers.
      } catch (ex) {
        console.warn("Copy to clipboard failed.", ex);
        return prompt("Copy to clipboard: Ctrl+C, Enter", text);
      } finally {
        document.body.removeChild(textarea);
      }
    }
  }
</script>

<input type="hidden" id="copy-text" value="{text}" />

<!-- Small one liner keyboard copy -->
{#if kbd}
  <button on:click="{copyText}" data-clipboard-target="#copy-text">
    <kbd>
      <span
        ><svg width="10" fill="orange" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"
          ><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path
            d="M342.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L274.7 256 105.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"></path></svg
        ></span
      >
      {text}
      <span class="tooltip-target"
        ><svg viewBox="0 0 24 24" aria-hidden="true" width="22" height="22"
          ><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"
            ><path stroke-linejoin="round" d="M15.5 4H18a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2.5"></path><path
              stroke-linejoin="round"
              d="M8.621 3.515A2 2 0 0 1 10.561 2h2.877a2 2 0 0 1 1.94 1.515L16 6H8l.621-2.485z"></path><path d="M9 12h6M9 16h6"></path></g
          ></svg
        ></span
      ></kbd
    >
  </button>
{/if}

<!-- Large code snippet -->
{#if !kbd}
  <div class="large-snippet">
    {#if !hideCopyButton}
      <button style="margin:7px" on:click="{copyText}" class="tooltip-target" data-clipboard-target="#copy-text">
        <span class="tooltip-target"
          ><svg viewBox="0 0 24 24" aria-hidden="true" width="22" height="22"
            ><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"
              ><path stroke-linejoin="round" d="M15.5 4H18a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2.5"></path><path
                stroke-linejoin="round"
                d="M8.621 3.515A2 2 0 0 1 10.561 2h2.877a2 2 0 0 1 1.94 1.515L16 6H8l.621-2.485z"></path><path d="M9 12h6M9 16h6"></path></g
            ></svg
          ></span
        >
      </button>
    {/if}

    <slot />
  </div>
{/if}

<style>
  .large-snippet {
    display: flex;
    flex-direction: column;
  }
  .large-snippet > button {
    justify-content: center;
    cursor: pointer;
    padding: 2px;
  }
  button {
    background-color: rgb(75, 72, 72);
    border-radius: 4px;
    color: white;
  }
  kbd {
    display: flex;
    gap: 15px;
    align-items: center;
  }

  svg {
    max-width: unset !important;
  }
</style>
