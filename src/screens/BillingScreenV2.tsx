import React from "react";
import { SafeAreaView, View, StyleSheet } from "react-native";

import BillingHeader from "../components/billing/BillingHeader";
import CategoryTabs from "../components/billing/CategoryTabs";
import MenuGrid from "../components/billing/MenuGrid";
import CartBottomSheet from "../components/billing/CartBottomSheet";
import LoadingOverlay from "../components/billing/LoadingOverlay";

import useBilling from "../hooks/useBilling";

export default function BillingScreenV2() {
  const {
    categories,
    menuItems,
    cart,

    loading,

    customerName,
    customerMobile,

    sendWhatsApp,

    searchText,
    selectedCategory,

    totalAmount,

    setCustomerName,
    setCustomerMobile,

    setSendWhatsApp,

    setSearchText,
    setSelectedCategory,

    addToCart,

    increaseQuantity,
    decreaseQuantity,
    clearCart,

    generateBill,
  } = useBilling();

  return (
    <SafeAreaView style={styles.container}>
      <BillingHeader
        sendWhatsApp={sendWhatsApp}
        setSendWhatsApp={setSendWhatsApp}
        customerName={customerName}
        setCustomerName={setCustomerName}
        customerMobile={customerMobile}
        setCustomerMobile={setCustomerMobile}
        searchText={searchText}
        setSearchText={setSearchText}
      />
      
      <CategoryTabs
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      
      <View style={styles.menuContainer}>
        <MenuGrid
          menuItems={menuItems}
          searchText={searchText}
          selectedCategory={selectedCategory}
          cart={cart}
          addToCart={addToCart}
        />
      </View>

      <CartBottomSheet
        cart={cart}
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
        clearCart={clearCart}
        totalAmount={totalAmount}
        loading={loading}
        generateBill={generateBill}
      />

      <LoadingOverlay visible={loading} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "#F3F4F6",
  },

  menuContainer: {
    flex: 1,
  },
});
