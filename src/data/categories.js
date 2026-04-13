export const categories = {
  men: [
    {
      type: "link",
      label: "All",
      path: "/shop",
      gender: "men",
      category: null,
    },
    {
      type: "link",
      label: "New Arrivals",
      path: "/shop",
      gender: "men",
      category: "new",
    },

    {
      type: "accordion",
      label: "Tops",
      items: [
        {
          label: "T-Shirts",
          path: "/shop",
          gender: "men",
          category: "tshirts",
        },
        { label: "Polos", path: "/shop", gender: "men", category: "polos" },
      ],
    },
    {
      type: "accordion",
      label: "Bottoms",
      items: [
        { label: "Jeans", path: "/shop", gender: "men", category: "jeans" },
        { label: "Shorts", path: "/shop", gender: "men", category: "shorts" },
        { label: "Pants", path: "/shop", gender: "men", category: "pants" },
      ],
    },
  ],

  women: [
    {
      type: "link",
      label: "All",
      path: "/shop",
      gender: "women",
      category: null,
    },
    {
      type: "link",
      label: "New Arrivals",
      path: "/shop",
      gender: "women",
      category: "new",
    },
  ],
};
