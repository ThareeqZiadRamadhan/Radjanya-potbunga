<script setup lang="ts">
const price = '20K - 80K'
</script>

<template>
  <div class="inline-block items-center bg-white/20 backdrop-blur-lg rounded-2xl border border-white/30 shadow-lg p-2">
    <div class="flex items-center space-x-6">
      
      <div class="flex items-center space-x-2">
        <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0l.879-.659M12 2.25l.879.659c1.171.879 3.07.879 4.242 0L18 2.25M12 18v.01M6 11.25h12M6 14.25h12M6 17.25h12M6 8.25h12" />
        </svg>
        <div>
          <div class="text-sm font-semibold text-white">Price</div>
          <div class="text-xs text-gray-200">{{ price }}</div>
        </div>
      </div>

      <div class="relative">
        <input 
          type="text" 
          placeholder="Search" 
          class="bg-white/30 rounded-full py-2 pl-10 pr-4 text-white placeholder:text-gray-200 focus:outline-none focus:ring-2 focus:ring-white/50"
        />
        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <svg class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>

    </div>
  </div>
</template>