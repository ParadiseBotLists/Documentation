module.exports = {
  someSidebar: [
    "quick-start",
    {
      type: "category",
      label: "API Documentation",
      items: [
        "paradise-api/overview",
        "paradise-api/reference",
        {
          Modules: [
            "paradise-api/librarys/overview",
             {
              JavaScript: [
                "paradise-api/librarys/javascript/paradiseapi.js",
              ],
            },
            {
              Python: [
                "paradise-api/librarys/javascript/paradiseapi.py",
              ],
            },
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Community Documentation",
      items: [
        "community/overview",
      ],
    },
    {
      type: "category",
      label: "Resource Documentation",
      items: [
        "resources/overview",
      ],
    },
    {
      type: "category",
      label: "Common Topics",
      items: [
        "topics/overview",
      ],
    },
  ],
};
