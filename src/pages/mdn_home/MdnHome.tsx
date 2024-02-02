import { Box, Divider, Typography } from "@mui/material"
import Header from "../../components/large_device_header/LargeDeviceHeader"
import homeStyles from "./MdnHome.Styles"
import AbcIcon from '@mui/icons-material/Abc';






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
                        <Box sx={homeStyles.latestNewsContainer}>
                            <Typography sx={homeStyles.colorText}>Latest news</Typography>
                            <Box component="ul" sx={homeStyles.unorderedList}>
                                <Box component="li" sx={homeStyles.listItem}>
                                    <Box sx={homeStyles.contentContainer}>
                                        <Typography sx={homeStyles.colorText}>Responsibiliy empowering developers with AI on MDN</Typography>
                                        <Typography sx={homeStyles.colorText}>blog.mozilla.org</Typography>
                                    </Box>
                                    <Typography sx={homeStyles.colorText}>7 months ago</Typography>
                                </Box>
                                <Box component="li" sx={homeStyles.listItem}>
                                    <Box sx={homeStyles.contentContainer}>
                                        <Typography sx={homeStyles.colorText}>Responsibiliy empowering developers with AI on MDN</Typography>
                                        <Typography sx={homeStyles.colorText}>blog.mozilla.org</Typography>
                                    </Box>
                                    <Typography sx={homeStyles.colorText}>7 months ago</Typography>
                                </Box>
                                <Box component="li" sx={homeStyles.listItem}>
                                    <Box sx={homeStyles.contentContainer}>
                                        <Typography sx={homeStyles.colorText}>Responsibiliy empowering developers with AI on MDN</Typography>
                                        <Typography sx={homeStyles.colorText}>blog.mozilla.org</Typography>
                                    </Box>
                                    <Typography sx={homeStyles.colorText}>7 months ago</Typography>
                                </Box>
                            </Box>
                        </Box>
                        <Box sx={homeStyles.latestNewsContainer}>
                            <Typography sx={homeStyles.colorText}>Recent contributions</Typography>
                            <Box component="ul" sx={homeStyles.unorderedList}>
                                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(ele => <Box key={ele} component="li" sx={homeStyles.listItem}>
                                    <Box sx={homeStyles.contentContainer}>
                                        <Typography sx={homeStyles.colorText}>Responsibiliy empowering developers with AI on MDN</Typography>
                                        <Typography sx={homeStyles.colorText}>blog.mozilla.org</Typography>
                                    </Box>
                                    <Typography sx={homeStyles.colorText}>7 months ago</Typography>
                                </Box>)}

                            </Box>
                            <Box sx={homeStyles.bottomDarkContainer}>
                                <Box sx={homeStyles.bottomDarkChildContainer}>
                                    <Box sx={homeStyles.bottomDarkLeftContainer}>
                                        <Typography sx={homeStyles.colorText}>Contributor Spotlight</Typography>
                                        <Typography sx={homeStyles.colorText}>YUJI</Typography>
                                        <Typography sx={homeStyles.colorText}>MDN Web Docs has the most up-to-date and accurate information and the content is presented in an easy-to-understand manner. I also like that it's available in many languages (very important!).</Typography>
                                        <Typography sx={homeStyles.colorText}>Get involved</Typography>
                                    </Box>
                                    <Box>
                                        <Box component={"img"} alt="developer-mozilla" src="https://developer.mozilla.org/assets/mdn_contributor.png" sx={homeStyles.mozillaImg} />
                                    </Box>
                                </Box>
                            </Box>

                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box sx={homeStyles.footerContainer}>
                <Box sx={homeStyles.footerChildContainer}>
                    <Box sx={homeStyles.footerChildTopContainer}>
                        <Box sx={homeStyles.mdnTextContainer}>
                            <Typography sx={homeStyles.colorText}>mdn</Typography>
                            <Typography sx={homeStyles.colorText}>Your blueprint for a better internet.</Typography>
                            <Box sx={homeStyles.iconsContainer}>
                                <AbcIcon sx={homeStyles.colorText} />
                                <AbcIcon sx={homeStyles.colorText} />
                                <AbcIcon sx={homeStyles.colorText} />
                                <AbcIcon sx={homeStyles.colorText} />
                            </Box>
                        </Box>
                        <Box sx={homeStyles.footerContentContainer}>
                            {[1, 2, 3, 4].map(ele => <Box key={ele}>
                                <Typography sx={homeStyles.colorText}>mdn</Typography>
                                <Typography sx={homeStyles.colorText}>About</Typography>
                                <Typography sx={homeStyles.colorText}>Blog</Typography>
                                <Typography sx={homeStyles.colorText}>Careers</Typography>
                                <Typography sx={homeStyles.colorText}>Advertise with us</Typography>
                            </Box>)}
                        </Box>
                    </Box>
                    <Divider sx={homeStyles.divider} />
                    <Box sx={homeStyles.footerChildBottomContainer}>
                        <Box sx={homeStyles.mozillaLinksContainer}>
                            <Typography sx={homeStyles.colorText}>Mozilla</Typography>
                            <Box sx={homeStyles.linksContainer}>
                                <Typography sx={homeStyles.colorText}>Website Privacy Notice</Typography>
                                <Typography sx={homeStyles.colorText}>Cookies</Typography>
                                <Typography sx={homeStyles.colorText}>Legal</Typography>
                                <Typography sx={homeStyles.colorText}>Community Participation Guidelines</Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    )
}


export default Home