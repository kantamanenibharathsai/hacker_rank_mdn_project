const homeStyles = {
  topContaner: {
    bgcolor: "#313131",
    height: "70px",
    textAlign: "center",
    display: { xs: "none", md: "flex" },
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
  },

  bodyContainer: {
    mt: "61px",
    display: "flex",
    flexDirection: { xs: "column" },
    border: "2px solid white",
  },

  topContentContainer: {
    bgcolor: "#040404",
    py: "30px",
    display: "grid",
    placeItems: "center",
  },

  widthContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "60px",
    width: { xs: "95%", sm: "90%", md: "80%", lg: "70%", xl: "50%" },
    justifyContent: "center",
    alignItems: "center",
  },

  colorText: {
    color: "#ffffff",
  },

  inputEl: {
    height: "60px",
    border: "1px solid #ffffff",
    borderRadius: "50px",
    width: "100%",
  },

  middleContainer: {
    bgcolor: "#1b1b1b",
    py: "40px",
    display: "grid",
    placeItems: "center",
  },

  middleChildContainer: {
    width: { xs: "95%", sm: "90%", md: "80%", lg: "70%", xl: "50%" },
    display: "flex",
    flexDirection: "column",
    gap: "25px",
  },

  featuredArticlesContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },

  featuredArticlesCardsContainer: {
    display: "grid",
    gridTemplateColumns: {
      xs: "repeat(auto-fit, minmax(280px, 1fr))",
      sm: "repeat(auto-fit, minmax(400px, 1fr))",
      md: "repeat(auto-fit, minmax(300px, 1fr))",
    },
    gap: "20px",
  },

  featuredArticlesCard: {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    border: "1px solid white",
    borderRadius: "10px",
    padding: "15px",
  },

  latestNewsContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "18px",
  },

  unorderedList: {
    listStyleType: "none",
    display: "flex",
    flexDirection: "column",
    gap: "4px",
  },

  listItem: {
    display: "flex",
    flexDirection: { xs: "column", md: "row" },
    alignItems: { xs: "flex-start", md: "center" },
    justifyContent: "space-between",
    bgcolor: "#313131",
    padding: "10px",
    borderRadius: "6px",
  },

  contentContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },

  bottomDarkContainer: {
    bgcolor: "#040404",
    py: { xs: "50px", md: "30px" },
    display: "grid",
    placeItems: "center",
  },

  bottomDarkChildContainer: {
    display: "flex",
    flexDirection: { xs: "column", md: "row" },
    justifyContent: { xs: "center", md: "space-between" },
    alignItems: "center",
  },

  bottomDarkLeftContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    width: { xs: "100%", md: "55%" },
    textAlign: { xs: "center", md: "left" },
  },

  mozillaImg: {
    width: "120px",
    height: "120px",
  },

  footerContainer: {
    bgcolor: "#313131",
    py: "40px",
    border: "4px solid white",
  },

  footerChildContainer: {
    width: { xs: "90%", lg: "80%", xl: "75%" },
    // border: "2px solid red",
    margin: "auto",
    display: "flex",
    flexDirection: "column",
    gap: "27px",
  },

  footerChildTopContainer: {
    display: "grid",
    gridTemplateColumns: {
      xs: "repeat(1, 1fr)",
      md: "200px repeat(auto-fit, minmax(100px, 1fr))",
      lg: "280px repeat(auto-fit, minmax(100px, 1fr))",
    },
    // border: "2px solid yellow",
    // justifyItems: "space-between",
    gap: "20px",
  },

  mdnTextContainer: {
    // border: "2px solid pink",
    width: "160px",
  },

  iconsContainer: {
    display: "flex",
    alignItems: "center",
    gap: "13px",
    mt: "10px",
  },

  footerContentContainer: {
    display: "grid",
    gridTemplateColumns: {
      xs: "repeat(1, 1fr)",
      sm: "repeat(2, 1fr)",
      md: "repeat(auto-fit, minmax(100px, 1fr))",
    },
    gap: { xs: "20px", md: "50px" },
    // border: "1px solid black",
  },

  divider: {
    border: "1px solid #1b1b1b",
    width: "100%",
  },

  footerChildBottomContainer : {

  },

  mozillaLinksContainer : {
    display: "flex",
    flexDirection: {xs: "column", md: "row"},
    gap: "20px"
  },

  linksContainer : {
    display: "flex",
    flexWrap: "wrap",
    gap: "10px"
  }
};

export default homeStyles;
