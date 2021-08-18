<demo>
  常规使用
</demo>
<template>
  <Form>
    <FormItem>
      <FormInput></FormInput>
    </FormItem>
    <FormIten>
      <FormButton>提交</FormButton>
    </FormIten>
  </Form>
</template>
  
  <script lang="ts">
import { Form } from "../../lib/index"
import { FormItem } from "../../lib/index"
import { FormInput } from "../../lib/index"
import { FormButton } from "../../lib/index"
export default {
  components: {
    Form,
    FormItem,
    FormInput,
    FormButton
  }
}
</script>
  
  <style lang="scss" scoped>
</style>