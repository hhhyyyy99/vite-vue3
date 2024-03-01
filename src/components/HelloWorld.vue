<template>
    <div>hello-world</div>
    <div v-if="loading">Loading...</div>
    <div v-else-if="error">{{ error.message }}</div>
    <span v-else>responseData: {{ reponse }}</span>
</template>
<script setup lang="ts">
import {useRequest} from 'alova';
import {alovaInstance} from '@/utils/alova';
// 使用alova实例创建method并传给useRequest即可发送请求
const {
    loading,
    data: reponse,
    error, update
} = useRequest(alovaInstance.Get('/todos/1'));
setTimeout(() => {
    update({data: {b: 2}})
}, 3000)

</script>
