<script setup>
import { ref } from 'vue';
import SlidePanel from '@/components/shared/SlidePanel.vue';
import Cart from '@/components/modules/Cart.vue';
import { generateRandomProduct } from '@/utils/generator';

const cartVisible = ref(false);
const products = ref([]);

const changeCartVisibilityClicked = () => {
  cartVisible.value = !cartVisible.value;
  console.log(cartVisible.value);
};

const addProductToCartClicked = () => {
  const product = generateRandomProduct();

  products.value.push(product);
};

const removeProductFromCartClicked = (index) => {
  products.value.splice(index, 1);
};

const incrementQuantityClicked = (index) => {
  products.value[index].quantity++;
};

const decrementQuantityClicked = (index) => {
  if (products.value[index].quantity === 1) {
    removeProductFromCartClicked(index);
    return;
  }
  
  products.value[index].quantity--;
};

</script>

<template>
  <div class="home">
    <h1>Shopping Cart</h1>
    <button class="btn success"
      @click="addProductToCartClicked()"
    >
      Add to Cart
    </button>
    <button class="btn error ml-1">
      Clear Cart
    </button>
    <button
      class="btn error ml-1" 
      @click="changeCartVisibilityClicked()"
    >
      Open Cart
    </button>

    <SlidePanel
      title ="Cart"
      :visible="cartVisible"
      @update:visible="changeCartVisibilityClicked()"
    >
      <template #content>
        <Cart 
          :products="products"
          @remove:product="removeProductFromCartClicked"
          @increment:quantity="incrementQuantityClicked"
          @decrement:quantity="decrementQuantityClicked"
        />
      </template>
    </SlidePanel>
  </div>
</template>

<style lang="scss" scoped>
.btn {
  &.primary {
    background-color: #98fff6;
    color: #fff;

    &:hover {
      background-color: #fff;
      color: #000;
    }
  }

  &.success {
    background-color: #77ff77;
    color: #000;

    &:hover {
      background-color: #8ef98e;
      color: #000;
    }
  }

  &.error {
    background-color: #ff7777;
    color: #fff;

    &:hover {
      background-color: #fa9b9b;
      color: #000;
    }

    &--outline {
      background-color: transparent;
      color: #ff7777;

      &:hover {
        background-color: #ff7777;
        border: 1px solid #ff7777;
        color: #fff;
      }
    }
  }
}

.ml-1 {
  margin-left: 1rem;
}
</style>