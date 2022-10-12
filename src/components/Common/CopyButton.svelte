<script lang="ts">
  let show = false;
  function copyText() {
    show = true;
    setTimeout(() => {
      show = false;
    }, 1000);
  }
</script>

<button class="npm-command" on:click="{copyText}">
  <kbd
    >npm i svelte-form-builder-community <span class="copy"
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

{#if show}
  <span>Copied!</span>
{/if}
