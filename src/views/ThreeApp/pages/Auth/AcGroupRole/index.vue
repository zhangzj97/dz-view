<script setup lang="ts">
import { useService } from '@/hooks/useService';
const { dispatch } = useService();

const moduleState = reactive({
  name: 'Auth/AcGroupRole',
});

const Find = () => dispatch(`${moduleState.name}.Find`, {});
const FindDraft = () => dispatch(`${moduleState.name}.FindDraft`, {});
const FindRecycle = () => dispatch(`${moduleState.name}.FindRecycle`, {});
const Select = () => dispatch(`${moduleState.name}.Select`, {});
const SelectRecycle = () => dispatch(`${moduleState.name}.SelectRecycle`, {});
const Create = () => dispatch(`${moduleState.name}.Create`, {});
const CreateDraft = () => dispatch(`${moduleState.name}.CreateDraft`, {});
const Update = () => dispatch(`${moduleState.name}.Update`, {});
const Delete = () => dispatch(`${moduleState.name}.Delete`, {});
const Restore = () => dispatch(`${moduleState.name}.Restore`, {});
const DeleteHard = () => dispatch(`${moduleState.name}.DeleteHard`, {});
const Option = () => dispatch(`${moduleState.name}.Option`, {});
</script>

<template>
  <dz-view col size="h-grow w-full">
    <dz-font lg>{{ moduleState.name }}</dz-font>
    <dz-view row wrapper-class="gap-1 ">
      <dz-button @click="Find" title="Find" />
      <dz-button @click="FindDraft" title="FindDraft" />
      <dz-button @click="FindRecycle" title="FindRecycle" />
      <dz-button @click="Select" title="Select" />
      <dz-button @click="SelectRecycle" title="SelectRecycle" />
      <dz-button @click="Create" title="Create" />
      <dz-button @click="CreateDraft" title="CreateDraft" />
      <dz-button @click="Update" title="Update" />
      <dz-button @click="Delete" title="Delete" />
      <dz-button @click="Restore" title="Restore" />
      <dz-button @click="DeleteHard" title="DeleteHard" />
      <dz-button @click="Option" title="Option" />
    </dz-view>
    <dz-view row wrapper-class="gap-1 ">
      <dz-button @click="Find" title="Find" />
      <dz-button @click="FindDraft" title="FindDraft" />
      <dz-button @click="FindRecycle" title="FindRecycle" />
      <dz-button @click="Select" title="Select" />
      <dz-button @click="SelectRecycle" title="SelectRecycle" />
      <dz-button @click="Create" title="Create" />
      <dz-button @click="CreateDraft" title="CreateDraft" />
      <dz-button @click="Update" title="Update" />
      <dz-button @click="Delete" title="Delete" />
      <dz-button @click="Restore" title="Restore" />
      <dz-button @click="DeleteHard" title="DeleteHard" />
      <dz-button @click="Option" title="Option" />
    </dz-view>
    <dz-view row wrapper-class="gap-1 ">
      <dz-button @click="Find" title="Find" />
      <dz-button @click="FindDraft" title="FindDraft" />
      <dz-button @click="FindRecycle" title="FindRecycle" />
      <dz-button @click="Select" title="Select" />
      <dz-button @click="SelectRecycle" title="SelectRecycle" />
      <dz-button @click="Create" title="Create" />
      <dz-button @click="CreateDraft" title="CreateDraft" />
      <dz-button @click="Update" title="Update" />
      <dz-button @click="Delete" title="Delete" />
      <dz-button @click="Restore" title="Restore" />
      <dz-button @click="DeleteHard" title="DeleteHard" />
      <dz-button @click="Option" title="Option" />
    </dz-view>
    <dz-view row wrapper-class="gap-1 ">
      <dz-button @click="Find" title="Find" />
      <dz-button @click="FindDraft" title="FindDraft" />
      <dz-button @click="FindRecycle" title="FindRecycle" />
      <dz-button @click="Select" title="Select" />
      <dz-button @click="SelectRecycle" title="SelectRecycle" />
      <dz-button @click="Create" title="Create" />
      <dz-button @click="CreateDraft" title="CreateDraft" />
      <dz-button @click="Update" title="Update" />
      <dz-button @click="Delete" title="Delete" />
      <dz-button @click="Restore" title="Restore" />
      <dz-button @click="DeleteHard" title="DeleteHard" />
      <dz-button @click="Option" title="Option" />
    </dz-view>
    <dz-view row wrapper-class="gap-1 ">
      <dz-button @click="Find" title="Find" />
      <dz-button @click="FindDraft" title="FindDraft" />
      <dz-button @click="FindRecycle" title="FindRecycle" />
      <dz-button @click="Select" title="Select" />
      <dz-button @click="SelectRecycle" title="SelectRecycle" />
      <dz-button @click="Create" title="Create" />
      <dz-button @click="CreateDraft" title="CreateDraft" />
      <dz-button @click="Update" title="Update" />
      <dz-button @click="Delete" title="Delete" />
      <dz-button @click="Restore" title="Restore" />
      <dz-button @click="DeleteHard" title="DeleteHard" />
      <dz-button @click="Option" title="Option" />
    </dz-view>
    <dz-view row wrapper-class="gap-1 ">
      <dz-button @click="Find" title="Find" />
      <dz-button @click="FindDraft" title="FindDraft" />
      <dz-button @click="FindRecycle" title="FindRecycle" />
      <dz-button @click="Select" title="Select" />
      <dz-button @click="SelectRecycle" title="SelectRecycle" />
      <dz-button @click="Create" title="Create" />
      <dz-button @click="CreateDraft" title="CreateDraft" />
      <dz-button @click="Update" title="Update" />
      <dz-button @click="Delete" title="Delete" />
      <dz-button @click="Restore" title="Restore" />
      <dz-button @click="DeleteHard" title="DeleteHard" />
      <dz-button @click="Option" title="Option" />
    </dz-view>
    <dz-view row wrapper-class="gap-1 ">
      <dz-button @click="Find" title="Find" />
      <dz-button @click="FindDraft" title="FindDraft" />
      <dz-button @click="FindRecycle" title="FindRecycle" />
      <dz-button @click="Select" title="Select" />
      <dz-button @click="SelectRecycle" title="SelectRecycle" />
      <dz-button @click="Create" title="Create" />
      <dz-button @click="CreateDraft" title="CreateDraft" />
      <dz-button @click="Update" title="Update" />
      <dz-button @click="Delete" title="Delete" />
      <dz-button @click="Restore" title="Restore" />
      <dz-button @click="DeleteHard" title="DeleteHard" />
      <dz-button @click="Option" title="Option" />
    </dz-view>
    <dz-view row wrapper-class="gap-1 ">
      <dz-button @click="Find" title="Find" />
      <dz-button @click="FindDraft" title="FindDraft" />
      <dz-button @click="FindRecycle" title="FindRecycle" />
      <dz-button @click="Select" title="Select" />
      <dz-button @click="SelectRecycle" title="SelectRecycle" />
      <dz-button @click="Create" title="Create" />
      <dz-button @click="CreateDraft" title="CreateDraft" />
      <dz-button @click="Update" title="Update" />
      <dz-button @click="Delete" title="Delete" />
      <dz-button @click="Restore" title="Restore" />
      <dz-button @click="DeleteHard" title="DeleteHard" />
      <dz-button @click="Option" title="Option" />
    </dz-view>
    <dz-view row wrapper-class="gap-1 ">
      <dz-button @click="Find" title="Find" />
      <dz-button @click="FindDraft" title="FindDraft" />
      <dz-button @click="FindRecycle" title="FindRecycle" />
      <dz-button @click="Select" title="Select" />
      <dz-button @click="SelectRecycle" title="SelectRecycle" />
      <dz-button @click="Create" title="Create" />
      <dz-button @click="CreateDraft" title="CreateDraft" />
      <dz-button @click="Update" title="Update" />
      <dz-button @click="Delete" title="Delete" />
      <dz-button @click="Restore" title="Restore" />
      <dz-button @click="DeleteHard" title="DeleteHard" />
      <dz-button @click="Option" title="Option" />
    </dz-view>
    <dz-view row wrapper-class="gap-1 ">
      <dz-button @click="Find" title="Find" />
      <dz-button @click="FindDraft" title="FindDraft" />
      <dz-button @click="FindRecycle" title="FindRecycle" />
      <dz-button @click="Select" title="Select" />
      <dz-button @click="SelectRecycle" title="SelectRecycle" />
      <dz-button @click="Create" title="Create" />
      <dz-button @click="CreateDraft" title="CreateDraft" />
      <dz-button @click="Update" title="Update" />
      <dz-button @click="Delete" title="Delete" />
      <dz-button @click="Restore" title="Restore" />
      <dz-button @click="DeleteHard" title="DeleteHard" />
      <dz-button @click="Option" title="Option" />
    </dz-view>
    <dz-view row wrapper-class="gap-1 ">
      <dz-button @click="Find" title="Find" />
      <dz-button @click="FindDraft" title="FindDraft" />
      <dz-button @click="FindRecycle" title="FindRecycle" />
      <dz-button @click="Select" title="Select" />
      <dz-button @click="SelectRecycle" title="SelectRecycle" />
      <dz-button @click="Create" title="Create" />
      <dz-button @click="CreateDraft" title="CreateDraft" />
      <dz-button @click="Update" title="Update" />
      <dz-button @click="Delete" title="Delete" />
      <dz-button @click="Restore" title="Restore" />
      <dz-button @click="DeleteHard" title="DeleteHard" />
      <dz-button @click="Option" title="Option" />
    </dz-view>
  </dz-view>
</template>
