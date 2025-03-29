const Storage = {
    open: false,
  
    openStore() {
      if (typeof localStorage === "undefined") {
        console.warn("LocalStorage not available");
        return false;
      }
      this.open = true;
      return true;
    },
  
    get(key) {
      if (!this.open) return null;
      return localStorage.getItem(key);
    },
  
    set(key, value) {
      if (!this.open) return;
      localStorage.setItem(key, value);
    },
  
    remove(key) {
      if (this.open) {
        localStorage.removeItem(key);
      }
    },
  
    clear() {
      localStorage.clear();
      this.open = false;
    },
  };
  
  export default Storage;
  