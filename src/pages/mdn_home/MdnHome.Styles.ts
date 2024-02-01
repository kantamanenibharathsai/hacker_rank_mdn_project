const homeStyles = {
  topContaner: {
    bgcolor: "#313131",
    height: "70px",
    textAlign: "center",
    display: { xs: "none", md: "flex" },
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    border: "3px solid orange",
  },

  bodyContainer: {
    mt: "61px",
    display: "flex",
    flexDirection: { xs: "column" },
    border: "3px solid red",
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
    border: "3px solid orange",
    display: "grid",
    placeItems: "center"
    

  },

  middleChildContainer: {
    width: { xs: "95%", sm: "90%", md: "80%", lg: "70%", xl: "50%" },
    display: "flex",
    flexDirection: "column",
    gap: "25px",
    border: "3px solid red",
  },

  featuredArticlesContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },

  featuredArticlesCardsContainer: {
    // border: "1px solid white",
    display: "grid",
    gridTemplateColumns: {xs:"repeat(auto-fit, minmax(200px, 1fr))", md:"repeat(auto-fit, minmax(400px, 1fr))"},
    gap: "20px"
    
  },

  featuredArticlesCard : {
    display: 'flex',
    flexDirection: "column",
    gap: "16px",
    border: "1px solid white",
    borderRadius: "10px",
    padding: "15px"

  }
};

export default homeStyles;
