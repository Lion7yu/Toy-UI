<template>
  <ul class="toy-menu" :class="{ [mode]: true }">
    <slot></slot>
  </ul>
</template>
<script lang="ts">
import { InjectionKey, provide, ref, Ref, computed, readonly } from "vue";

export const TOYMenuParentKey: InjectionKey<string | number> = Symbol(
  "TOYMenuParentKey"
);
export const TOYMenuRelationship: InjectionKey<Ref<
  Map<string | number, string | number>
>> = Symbol("TOYMenuRelationship");
export const TOYMenuMode: InjectionKey<Ref<string>> = Symbol("TOYMenuMode");
export const TOYMenuSelectedKey: InjectionKey<Ref<string | number>> = Symbol(
  "TOYMenuSelectedKey"
);
export const TOYMenuOpenKeys: InjectionKey<Ref<
  Array<string | number>
>> = Symbol("TOYMenuOpenKeys");

export const TOYMenuSetRelationship: InjectionKey<(
  key: string | number,
  parentKey: string | number
) => void> = Symbol("TOYMenuSetRelationship");
export const TOYMenuSetSelectedKey: InjectionKey<(
  key: string | number
) => void> = Symbol("TOYMenuSetSelectedKey");
export const TOYMenuEnableOpenKey: InjectionKey<(
  key: string | number,
  enabled: boolean
) => void> = Symbol("TOYMenuEnableOpenKey");

export default {
  name: "toy-menu",
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

    provide(TOYMenuParentKey, "TOY-menu-root");
    provide(TOYMenuRelationship, relationship);
    provide(TOYMenuMode, readonly(menuMode));
    provide(TOYMenuSelectedKey, menuSelectedKey);
    provide(TOYMenuOpenKeys, menuOpenKeys);

    provide(TOYMenuSetRelationship, setRelationship);
    provide(TOYMenuSetSelectedKey, setSelectedKey);
    provide(TOYMenuEnableOpenKey, enableOpenKey);
  },
};
</script>
<style lang="scss">
@import "../toy.scss";
.toy-menu {
  list-style: none;
  margin-bottom: 0;
  font-size: 14px;
  border-right: 1px solid $toy-border;

  &.horizontal {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border-right: none;
  }
}
</style>