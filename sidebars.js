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
          Librarys: [
            "paradise-api/librarys/overview",
            "paradise-api/librarys/javascript/paradiseapi.js",
             {
              JavaScript: [
                "paradise-api/paradiseapi.js",
                "paradise-api/paradiseapi.py",
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
