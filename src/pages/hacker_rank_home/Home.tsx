import { Box, Button, Divider, Stack, Typography } from "@mui/material"
import homeStyles from "./Home.Styles"
import Header from "../../components/header/Header"
import DataUsageOutlinedIcon from '@mui/icons-material/DataUsageOutlined';

const Home = () => {


    return (
        <>
            <Header />
            <Box sx={homeStyles.dividerContainer}>
                <Box sx={homeStyles.prepareDashboardContainer}>
                    <Typography>prepare</Typography>
                    <Typography>Dashboard</Typography>
                </Box>
            </Box>
            <Box sx={homeStyles.bodyContainer}>
                <Box sx={homeStyles.preperationContainer}>
                    <Typography>Your preparation</Typography>
                    <Box sx={homeStyles.preperationCardsContainer}>
                        <Box sx={homeStyles.preperationCard}>
                            <Stack direction={'column'} gap={'10px'}>
                                <Typography>Your preparation</Typography>
                                <Typography>Your preparation</Typography>
                                <Typography>Your preparation</Typography>
                                <Button variant="contained" sx={homeStyles.viewAllBtn}>View all Kits</Button>
                            </Stack>
                        </Box>
                        <Box sx={homeStyles.preperationCard}>
                            <Stack direction={'column'} gap={'10px'}>
                                <Typography>Your preparation</Typography>
                                <Typography>Your preparation</Typography>
                                <Typography>Your preparation</Typography>
                                <Button variant="contained" sx={homeStyles.viewAllBtn}>View all Kits</Button>
                            </Stack>
                        </Box>
                    </Box>
                </Box>
                <Box sx={homeStyles.certificationContainer}>
                    <Typography>Certification</Typography>
                    <Box sx={homeStyles.certificationCardsContainer}>
                        <Box sx={homeStyles.certificationCard}>
                            <Stack direction={'column'} gap={'10px'}>
                                <Typography>Problem Solving (Basic)</Typography>
                                <Typography>i</Typography>
                                <Button variant="contained" sx={homeStyles.viewAllBtn}>Get Certified</Button>
                            </Stack>
                        </Box>
                        <Box sx={homeStyles.certificationCard}>
                            <Stack direction={'column'} gap={'10px'}>
                                <Typography>Problem Solving (Basic)</Typography>
                                <Typography>i</Typography>
                                <Button variant="contained" sx={homeStyles.viewAllBtn}>Get Certified</Button>
                            </Stack>
                        </Box>
                        <Box sx={homeStyles.certificationCard}>
                            <Stack direction={'column'} gap={'10px'}>
                                <Typography>Problem Solving (Basic)</Typography>
                                <Typography>i</Typography>
                                <Button variant="contained" sx={homeStyles.viewAllBtn}>Get Certified</Button>
                            </Stack>
                        </Box>
                    </Box>
                </Box>
                <Box sx={homeStyles.prepareByTopContainer}>
                    <Typography>Prepare By Topics</Typography>
                    <Box sx={homeStyles.allTopicsContainer}>
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map(ele =>
                            <Box key={ele} sx={homeStyles.topicIconCard}>
                                <DataUsageOutlinedIcon />
                                <Typography>Algorithms</Typography>
                            </Box>
                        )}
                    </Box>
                    <Box sx={homeStyles.allTopicsLargeContainer}>
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map(ele =>
                            <>
                                <Box key={ele} sx={{ ...homeStyles.topicIconCard, borderRight: "1px solid black" }}>
                                    <DataUsageOutlinedIcon />
                                    <Typography>Algorithms</Typography>
                                </Box>
                            </>
                        )}
                    </Box>
                </Box>
                <Box sx={homeStyles.preperationKitsContainer}>
                    <Typography>Preparation Kits</Typography>
                    <Box sx={homeStyles.preperationKitsCardsContainer}>
                        <Box sx={homeStyles.certificationCard}>
                            <Stack direction={'column'} gap={'10px'}>
                                <Typography>Problem Solving (Basic)</Typography>
                                <Typography>i</Typography>
                                <Button variant="contained" sx={homeStyles.viewAllBtn}>Get Certified</Button>
                            </Stack>
                        </Box>
                        <Box sx={homeStyles.certificationCard}>
                            <Stack direction={'column'} gap={'10px'}>
                                <Typography>Problem Solving (Basic)</Typography>
                                <Typography>i</Typography>
                                <Button variant="contained" sx={homeStyles.viewAllBtn}>Get Certified</Button>
                            </Stack>
                        </Box>
                    </Box>
                </Box>
                <Box sx={homeStyles.footerContainer}>
                    <Box sx={homeStyles.footerChildContainer}>
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(ele => <Typography key={ele} sx={homeStyles.footerText}>Blog</Typography>)}
                    </Box>
                </Box>
            </Box>
        </>
    )
}


export default Home