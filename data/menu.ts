import { MenuCourse } from "@/types";

export const MENU: MenuCourse[] = [
  {
    course: "Starters",
    items: [
      {
        name: "Burrata & Peach Carpaccio",
        description: "Aged Modena balsamic pearls, wild arugula, toasted pine nuts.",
        dietary: "V",
      },
      {
        name: "Maine Lobster Bisque",
        description: "Cognac infusion, fresh tarragon, lemon crème fraîche.",
      },
    ],
  },
  {
    course: "Main Entrées",
    items: [
      {
        name: "Pan-Seared Chilean Sea Bass",
        description: "Saffron risotto, braised fennel, champagne beurre blanc.",
      },
      {
        name: "Herb-Crusted Prime Filet Mignon",
        description: "Truffle pomme purée, wild chanterelles, Cabernet Franc jus.",
      },
      {
        name: "Wild Forest Mushroom Ravioli",
        description: "Handmade pasta, shaved winter truffles, brown butter sage.",
        dietary: "V",
      },
    ],
  },
  {
    course: "Dessert",
    items: [
      {
        name: "Tahitian Vanilla & Lemon Raspberry Cake",
        description: "Artisan layered sponge, buttercream, fresh berry coulis.",
        dietary: "V",
      },
    ],
  },
];
