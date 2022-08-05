const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        name: "home",
        path: "",
        component: () => import("pages/IndexPage.vue"),
      },
      {
        name: "about",
        path: "/about",
        component: () => import("pages/aboutEch.vue"),
      },
      {
        name: "rules",
        path: "/rules",
        component: () => import("pages/rules.vue"),
      },
      {
        name: "contact",
        path: "/contact",
        component: () => import("pages/officerCont.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
