import { ref, computed } from "vue";

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

  function removeFromCart(productId) {
    cartItems.value = cartItems.value.filter((item) => item.id !== productId);
  }

  const totalPrice = computed(() => {
    return cartItems.value.reduce((total, item) => {
      const finalPrice = item.promotion || item.price;
      return total + finalPrice * item.quantity;
    }, 0);
  });

  return {
    isOpen,
    open,
    close,
    addToCart,
    cartItems,
    loading,
    removeFromCart,
    totalPrice,
  };
};
