import { Box, Typography } from "@mui/material"
import Header from "../../components/large_device_header/LargeDeviceHeader"
import homeStyles from "./MdnHome.Styles"






const Home = () => {


    return (
        <>
            <Box sx={homeStyles.topContaner}>Get real-time assistance with your coding queries. Try AI Help now!</Box>
            <Header />
            <Box sx={homeStyles.bodyContainer}>
                <Box sx={homeStyles.topContentContainer}>
                    <Box sx={homeStyles.widthContainer}>
                        <Typography sx={homeStyles.colorText}>Resources for Developers,
                            by Developers</Typography>
                        <Typography sx={homeStyles.colorText}>Documenting web technologies, including CSS, HTML, and JavaScript, since 2005.</Typography>
                        <Box component="input" sx={homeStyles.inputEl} />
                    </Box>
                </Box>
                <Box sx={homeStyles.middleContainer}>
                    <Box sx={homeStyles.middleChildContainer}>
                        <Box sx={homeStyles.featuredArticlesContainer}>
                            <Typography sx={homeStyles.colorText}>Featured articles</Typography>
                            <Box sx={homeStyles.featuredArticlesCardsContainer}>
                                <Box sx={homeStyles.featuredArticlesCard}>
                                    <Typography sx={homeStyles.colorText}>New reference pages on MDN for javascript regular expressions</Typography>
                                    <Typography sx={homeStyles.colorText}>See the latest updates to the MDN reference pages about Javascript regular expressions, including new sections on sub-features.</Typography>
                                </Box>
                                <Box sx={homeStyles.featuredArticlesCard}>
                                    <Typography sx={homeStyles.colorText}>New reference pages on MDN for javascript regular expressions</Typography>
                                    <Typography sx={homeStyles.colorText}>See the latest updates to the MDN reference pages about Javascript regular expressions, including new sections on sub-features.</Typography>
                                </Box>
                                <Box sx={homeStyles.featuredArticlesCard}>
                                    <Typography sx={homeStyles.colorText}>New reference pages on MDN for javascript regular expressions</Typography>
                                    <Typography sx={homeStyles.colorText}>See the latest updates to the MDN reference pages about Javascript regular expressions, including new sections on sub-features.</Typography>
                                </Box>
                                <Box sx={homeStyles.featuredArticlesCard}>
                                    <Typography sx={homeStyles.colorText}>New reference pages on MDN for javascript regular expressions</Typography>
                                    <Typography sx={homeStyles.colorText}>See the latest updates to the MDN reference pages about Javascript regular expressions, including new sections on sub-features.</Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    )
}


export default Home