const homeStyles = {
  homeContainer: {},

  dividerContainer: {
    py: "30px",
    borderBottom: "1px solid grey",
    mt: "50px",
  },

  prepareDashboardContainer: {
    width: { xs: "90%", lg: "80%", xl: "66%" },
    margin: "auto",
  },

  bodyContainer: {
    width: { xs: "90%", lg: "80%", xl: "66%" },
    bgcolor: "#c5d3eb",
    minHeight: "calc(100vh - 80px)",
    margin: "auto",
    py: "40px",
    gap: "40px",
    display: "flex",
    flexDirection: "column",
  },

  preperationContainer: {
    display: "grid",
    gap: "20px",
  },

  preperationCardsContainer: {
    gap: "32px",
    display: "grid",
    gridTemplateColumns: {
      xs: "repeat(auto-fit, minmax(280px, 1fr))",
      sm: "repeat(auto-fit, minmax(400px, 1fr))",
    },
  },

  preperationCard: {
    border: "1px solid black",
    borderRadius: "12px",
    padding: "15px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    gap: "12px",
    minWidth: { xs: "100%", md: "400px" },
    height: 300,
  },

  viewAllBtn: {
    alignSelf: "flex-start",
  },

  certificationContainer: {
    display: "grid",
    gap: "20px",
  },

  certificationCardsContainer: {
    display: "grid",
    gridTemplateColumns: {
      //   xs: "repeat(auto-fit, minmax(280px, 1fr))",
      //   sm: "repeat(auto-fit, minmax(400px, 1fr))",
      xs: "repeat(auto-fit, minmax(200px, 1fr))",
    },
    gap: "32px",
  },

  certificationCard: {
    border: "1px solid black",
    borderRadius: "12px",
    padding: "15px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    gap: "12px",
    minWidth: { xs: "100%", md: "100px" },
    height: 200,
  },

  prepareByTopContainer: {
    display: "grid",
    gap: "20px",
  },

  allTopicsContainer: {
    display: { xs: "grid", md: "none" },
    border: "1px solid black",
    borderRadius: "13px",
  },

  topicIconCard: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    padding: "10px 13px",
    borderBottom: "1px solid black",
    "&:last-child": {
      borderBottom: "0px",
    },
  },

  allTopicsLargeContainer: {
    display: { xs: "none", md: "grid" },
    gridTemplateColumns: { md: "repeat(3, 1fr)" },
    borderRadius: "12px",
    border: "1px solid black",
  },

  divider: {
    // border: "1px solid black"
  },

  preperationKitsContainer: {
    display: "grid",
    gap: "20px",
  },

  preperationKitsCardsContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "10px",
  },

  footerContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  footerChildContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    flexWrap: "wrap"
  },

  footerText : {
    borderRight: "1px solid black",
    pr: "10px"
  }
};

export default homeStyles;
