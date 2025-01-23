import React from "react";
import { Box, Typography, IconButton, Stack } from "@mui/material";
import { Facebook, Twitter, LinkedIn, YouTube } from "@mui/icons-material";
const Footer = () => {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                py: 4,
                backgroundColor: "#f9f9f9",
                borderTop: "1px solid #ddd",
            }}
        >
            <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
                <IconButton
                    aria-label="facebook"
                    sx={{
                        border: "1px solid #000",
                        borderRadius: "50%",
                        width: 48,
                        height: 48,
                    }}
                >
                    <Facebook fontSize="small" />
                </IconButton>
                <IconButton
                    aria-label="twitter"
                    sx={{
                        border: "1px solid #000",
                        borderRadius: "50%",
                        width: 48,
                        height: 48,
                    }}
                >
                    <Twitter fontSize="small" />
                </IconButton>
                <IconButton
                    aria-label="linkedin"
                    sx={{
                        border: "1px solid #000",
                        borderRadius: "50%",
                        width: 48,
                        height: 48,
                    }}
                >
                    <LinkedIn fontSize="small" />
                </IconButton>
                <IconButton
                    aria-label="youtube"
                    sx={{
                        border: "1px solid #000",
                        borderRadius: "50%",
                        width: 48,
                        height: 48,
                    }}
                >
                    <YouTube fontSize="small" />
                </IconButton>
            </Stack>
            <Typography variant="body2" sx={{ mb: 1 }}>
                Example@email.com
            </Typography>
            <Typography variant="caption" color="text.secondary">
                Copyright © 2020 Name. All rights reserved.
            </Typography>
        </Box>
    );
};
export default Footer;
