<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import logoImage from '@/assets/logo.png'

const isMobileMenuOpen = ref(false)


const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}
</script>

<template>
  <nav class="bg-white shadow-sm sticky top-0 z-50">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        
        <div class="shrink-0 flex items-center">
          <RouterLink to="/">
            <img
              class="block h-25 w-30"
              :src="logoImage"
              alt="Seateraft"
            />
          </RouterLink>
        </div>

        <div class="hidden sm:ml-6 sm:flex sm:space-x-8">
          <RouterLink
            to="/"
            class="text-gray-700 hover:text-gray-900 inline-flex items-center px-1 pt-1 text-sm font-medium"
            active-class="border-b-2 border-gray-900 text-gray-900"
          >
            Home
          </RouterLink>
          <RouterLink
            to="/shop"
            class="text-red-600 hover:text-gray-900 inline-flex items-center px-1 pt-1 text-sm font-medium"
            active-class="border-b-2 border-gray-900 text-gray-900"
          >
            Shop
          </RouterLink>
          <RouterLink
            to="/about"
            class="text-gray-700 hover:text-gray-900 inline-flex items-center px-1 pt-1 text-sm font-medium"
            active-class="border-b-2 border-gray-900 text-gray-900"
          >
            About Us
          </RouterLink>
          <RouterLink
            to="/contact"
            class="text-gray-700 hover:text-gray-900 inline-flex items-center px-1 pt-1 text-sm font-medium"
            active-class="border-b-2 border-gray-900 text-gray-900"
          >
            Contact Us
          </RouterLink>
        </div>

        <div class="hidden sm:ml-6 sm:flex sm:items-center sm:space-x-4">
          <RouterLink to="/cart" class="relative p-1 text-gray-600 hover:text-gray-900 rounded-full">
            <span class="sr-only">View cart</span>
            <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
            </svg>
            <span class="absolute -top-2 -right-2 bg-gray-800 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
              3
            </span>
          </RouterLink>

          <RouterLink to="/profile" class="p-1 text-gray-600 hover:text-gray-900 rounded-full">
            <span class="sr-only">View profile</span>
            <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
            </svg>
          </RouterLink>

          <button type="button" class="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-md text-sm font-medium">
            Sign Up
          </button>
          
          <button type="button" class="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
            Sign In
          </button>
        </div>

        <div class="flex items-center sm:hidden">
          <button
            @click="toggleMobileMenu"
            type="button"
            class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500"
            aria-controls="mobile-menu"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg v-if="!isMobileMenuOpen" class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
            <svg v-else class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

      </div>
    </div>

    <div v-if="isMobileMenuOpen" class="sm:hidden" id="mobile-menu">
      <div class="pt-2 pb-3 space-y-1">
        <RouterLink to="/" @click="toggleMobileMenu" class="text-gray-700 hover:bg-gray-50 hover:text-gray-900 block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium" active-class="bg-gray-50 border-gray-800 text-gray-900">Home</RouterLink>
        <RouterLink to="/shop" @click="toggleMobileMenu" class="text-gray-700 hover:bg-gray-50 hover:text-gray-900 block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium" active-class="bg-gray-50 border-gray-800 text-gray-900">Shop</RouterLink>
        <RouterLink to="/about" @click="toggleMobileMenu" class="text-gray-700 hover:bg-gray-50 hover:text-gray-900 block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium" active-class="bg-gray-50 border-gray-800 text-gray-900">About Us</RouterLink>
        <RouterLink to="/contact" @click="toggleMobileMenu" class="text-gray-700 hover:bg-gray-50 hover:text-gray-900 block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium" active-class="bg-gray-50 border-gray-800 text-gray-900">Contact Us</RouterLink>
      </div>
      <div class="pt-4 pb-3 border-t border-gray-200">
        <div class="flex items-center px-4 space-x-4">
          <RouterLink to="/cart" @click="toggleMobileMenu" class="relative p-1 text-gray-600 hover:text-gray-900 rounded-full">
            <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
            </svg>
            <span class="absolute -top-2 -right-2 bg-gray-800 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">3</span>
          </RouterLink>
          <RouterLink to="/profile" @click="toggleMobileMenu" class="p-1 text-gray-600 hover:text-gray-900 rounded-full">
            <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
            </svg>
          </RouterLink>
        </div>
        <div class="mt-3 px-2 space-y-2">
            <button type="button" class="w-full text-left bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-md text-sm font-medium">
              Sign Up
            </button>
            <button type="button" class="w-full text-left text-gray-700 hover:text-gray-900 px-4 py-2 rounded-md text-sm font-medium">
              Sign In
            </button>
        </div>
      </div>
    </div>
  </nav>
</template>