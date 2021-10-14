<template>
  <ul class="dwc-menu" :class="{ [mode]: true }">
    <slot></slot>
  </ul>
</template>
<script lang="ts">
import { InjectionKey, provide, ref, Ref, computed, readonly } from "vue";

export const DWCMenuParentKey: InjectionKey<string | number> = Symbol(
  "DWCMenuParentKey"
);
export const DWCMenuRelationship: InjectionKey<Ref<
  Map<string | number, string | number>
>> = Symbol("DWCMenuRelationship");
export const DWCMenuMode: InjectionKey<Ref<string>> = Symbol("DWCMenuMode");
export const DWCMenuSelectedKey: InjectionKey<Ref<string | number>> = Symbol(
  "DWCMenuSelectedKey"
);
export const DWCMenuOpenKeys: InjectionKey<Ref<
  Array<string | number>
>> = Symbol("DWCMenuOpenKeys");

export const DWCMenuSetRelationship: InjectionKey<(
  key: string | number,
  parentKey: string | number
) => void> = Symbol("DWCMenuSetRelationship");
export const DWCMenuSetSelectedKey: InjectionKey<(
  key: string | number
) => void> = Symbol("DWCMenuSetSelectedKey");
export const DWCMenuEnableOpenKey: InjectionKey<(
  key: string | number,
  enabled: boolean
) => void> = Symbol("DWCMenuEnableOpenKey");

export default {
  name: "dwc-menu",
  props: {
    defaultSelectedKey: [String, Number],
    defaultOpenKeys: Array,
    mode: {
      type: String,
      default: "vertical",
      validator<String>(val: string) {
        return ["vertical", "horizontal"].includes(val);
      },
    },
    openKeys: Array,
    selectedKey: [String, Number],
  },
  setup(props, context) {
    const menuMode = computed(() => props.mode);

    const selected = ref<string | number>(props.defaultSelectedKey);
    const opened = ref<Array<string | number>>(
      (props.defaultOpenKeys as Array<string | number>) || []
    );

    const menuSelectedKey = computed(() => {
      if (props.selectedKey !== undefined) {
        return props.selectedKey;
      }

      return selected.value;
    });
    const menuOpenKeys = computed(() => {
      if (props.openKeys !== undefined) {
        return props.openKeys as Array<string | number>;
      }

      return opened.value;
    });

    const relationship = ref(new Map<string | number, string | number>());

    const setRelationship = (
      key: string | number,
      parentKey: string | number
    ) => {
      relationship.value.set(key, parentKey);
    };

    const setSelectedKey = (key: string | number) => {
      selected.value = key;
      context.emit("update:selected-key", key);
      context.emit("select", menuSelectedKey.value);

      if (props.mode === "horizontal" && menuOpenKeys.value.length) {
        opened.value = [];

        context.emit("update:open-keys", []);
        context.emit("open-change", []);
      }
    };
    const enableOpenKey = (key: string | number, enabled: boolean) => {
      if (enabled) {
        if (opened.value.indexOf(key) === -1) {
          opened.value.push(key);
        }
      } else {
        opened.value = opened.value.filter((i) => i !== key);
      }

      context.emit("update:open-keys", [...menuOpenKeys.value]);
      context.emit("open-change", [...menuOpenKeys.value]);
    };

    provide(DWCMenuParentKey, "dwc-menu-root");
    provide(DWCMenuRelationship, relationship);
    provide(DWCMenuMode, readonly(menuMode));
    provide(DWCMenuSelectedKey, menuSelectedKey);
    provide(DWCMenuOpenKeys, menuOpenKeys);

    provide(DWCMenuSetRelationship, setRelationship);
    provide(DWCMenuSetSelectedKey, setSelectedKey);
    provide(DWCMenuEnableOpenKey, enableOpenKey);
  },
};
</script>
<style lang="scss">
.dwc-menu {
  list-style: none;
  margin-bottom: 0;
  font-size: 14px;

  &.horizontal {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border-right: none;
  }
}
</style>