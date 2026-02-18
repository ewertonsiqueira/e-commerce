import { ref } from "vue";

const isOpen = ref(false);
const cartItems = ref([]);
const loading = ref(false);

export const useUserCart = () => {
  function open() {
    isOpen.value = true;
  }

  function close() {
    isOpen.value = false;
  }

  function addToCart(product) {
    loading.value = true;

    const index = cartItems.value.findIndex((item) => item.id === product.id);

    if (index >= 0) {
      const productInCart = cartItems.value[index];
      productInCart.quantity += 1;
    } else {
      cartItems.value.push({ ...product, quantity: 1 });
    }

    loading.value = false;
  }

  return {
    isOpen,
    open,
    close,
    addToCart,
    cartItems,
    loading,
  };
};
