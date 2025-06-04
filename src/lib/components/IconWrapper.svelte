<script lang="ts">
  let { Icon } = $props();

  function isFunctionComponent(component: any): component is Function {
    return typeof component === "function";
  }
</script>

<div class="icon-wrapper">
  {#if isFunctionComponent(Icon)}
    <Icon />
  {:else}
    <img src={Icon} alt="Icon" />
  {/if}
  <span></span><span></span><span></span><span></span>
</div>

<style>
  .icon-wrapper {
    width: 24px;
    height: 24px;
    background-color: var(--bg-secondary);
    color: var(--icon-primary);
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    margin-bottom: 0.5rem;
    span:first-of-type {
      position: absolute;
      inset: 0 auto;
      width: 28px;
      height: 1px;
      border-top: 1px solid var(--border-tertiary);
    }

    span:nth-of-type(2) {
      position: absolute;
      inset: auto 0 auto auto;
      width: 1px;
      height: 28px;
      border-left: 1px solid var(--border-tertiary);
    }
    span:nth-of-type(3) {
      position: absolute;
      inset: auto auto 0 auto;
      width: 28px;
      height: 1px;
      border-bottom: 1px solid var(--border-tertiary);
    }
    span:last-of-type {
      position: absolute;
      inset: auto auto auto 0;
      width: 1px;
      height: 28px;
      border-left: 1px solid var(--border-tertiary);
    }
  }
  .icon-wrapper:hover {
    background-color: var(--bg-tertiary);
    color: var(--icon-dark);
    span {
      border-color: var(--icon-secondary);
    }
    span:first-of-type {
      width: 32px;
    }

    span:nth-of-type(2) {
      height: 32px;
    }
    span:nth-of-type(3) {
      width: 32px;
    }
    span:last-of-type {
      height: 32px;
    }
  }
</style>
