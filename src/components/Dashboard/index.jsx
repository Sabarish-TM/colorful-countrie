import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCountries } from '../../store/countriesSlice';
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    Grid,
    Card,
    CardContent,
    CardMedia,
    Container,
    Tabs,
    Tab, Divider, Box, Stack,
} from '@mui/material';

import Carousel from "react-material-ui-carousel";
import Footer from "./Footer";
const Dashboard = () => {
    const dispatch = useDispatch();
    const [region, setRegion] = useState("All");
    const [visibleCount, setVisibleCount] = useState(12);
    const countriesData = useSelector((state) => state.countries.data);
    const loading = useSelector((state) => state.countries.loading);
    const error = useSelector((state) => state.countries.error);
    const [currentIndex, setCurrentIndex] = useState(0);
    const handleChange = (index) => setCurrentIndex(index);

    useEffect(() => {
        dispatch(fetchCountries());
    }, [dispatch]);

    const filteredCountries =
        region === "All"
            ? countriesData
            : countriesData.filter((country) => country.region === region);
    const handleLoadMore = () => {
        setVisibleCount((prev) => prev + 4);
    };
    if (loading) {
        return <p>Loading...</p>;
    }
    if (error) {
        return <p>Error: {error}</p>;
    }
    return (
        <div>
            <AppBar position="static" sx={{ backgroundColor: 'white', boxShadow: 'none' }}>
                <Toolbar>
                    <Typography variant="h6" sx={{ flexGrow: 1, color: 'black' }} >
                        Countries
                    </Typography>
                    <Tabs
                        value={region}
                        onChange={(e, newValue) => setRegion(newValue)}
                        centered
                    >
                        <Tab label="All" value="All" />
                        <Tab label="Asia" value="Asia" />
                        <Tab label="Europe" value="Europe" />
                    </Tabs>
                </Toolbar>
            </AppBar>
            <Container sx={{ textAlign: "center", marginTop: 3, marginBottom: 4 }}>
                <Divider>
                    <Typography variant="h4" gutterBottom>
                        WELCOME
                    </Typography>
                </Divider>
                <Stack>
                    <Box sx={{ display: "flex", gap: 2, p: 2 }}>
                        <Box sx={{ flex: 2, border: "2px solid #3D3D3D", borderRadius: 2, overflow: "hidden" }}>
                            <Carousel autoPlay={true} onChange={(now) => handleChange(now)} navButtonsAlwaysVisible={true} >
                                {filteredCountries.slice(0, visibleCount).map((country, index) => (
                                    <Card key={index} sx={{ display: "flex", alignItems: "center", p: 2, height: "100%", }}>
                                        <CardMedia
                                            component="img"
                                            image={country.flag}
                                            alt={`${country.name} flag`}
                                            sx={{ objectFit: "contain", height: "100%", }}
                                        />
                                    </Card>
                                ))}
                            </Carousel>
                        </Box>
                        <Box sx={{ flex: 1, border: "2px solid #3D3D3D", borderRadius: 2, overflow: "hidden" }}>
                            {filteredCountries[currentIndex + 1] && (
                                <><Card key={currentIndex} sx={{ display: "flex", alignItems: "center", p: 2 }}>
                                    <CardMedia
                                        component="img"
                                        image={filteredCountries[currentIndex + 1].flag}
                                        alt={`${filteredCountries[currentIndex + 1].name} flag`}
                                        sx={{ objectFit: "contain" }}
                                    />
                                    <CardContent>
                                        <Typography variant="body1">{filteredCountries[currentIndex + 1].name}</Typography>
                                    </CardContent>
                                </Card>
                                    <Typography variant="body1">{filteredCountries[currentIndex + 1].name}</Typography>
                                    <Typography variant="body1">{filteredCountries[currentIndex + 1].region}</Typography>
                                </>
                            )}
                        </Box>
                    </Box>
                    <Grid container spacing={3} sx={{ marginTop: 2 }}>
                        {filteredCountries.slice(0, visibleCount).map((country) => (
                            <Grid item xs={12} sm={6} md={4} lg={6} key={country.name}>
                                <Card sx={{ display: 'flex', border: "2px solid #3D3D3D" }} >
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image={country.flag}
                                        alt={`${country.name} flag`}
                                    />
                                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                        <CardContent sx={{ flex: '1 0 auto' }}>
                                            <Typography variant="h6">{country.name}</Typography>
                                            <Typography variant="body2">{country.region}</Typography>
                                        </CardContent>
                                    </Box>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                    {visibleCount < filteredCountries.length && (
                        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", mt: 4 }}>
                            <Button
                                variant="contained"
                                sx={{
                                    width: "146px",
                                    height: "48px",
                                    borderRadius: 2,
                                    textAlign: "center",
                                    backgroundColor: "#3C3C3C",
                                    "&:hover": {
                                        backgroundColor: "#2E2E2E",
                                    },
                                }}
                                onClick={handleLoadMore}
                            >
                                Load More
                            </Button>
                        </Box>
                    )}
                </Stack>
            </Container>
            <Footer />
        </div >
    );
};
export default Dashboard;