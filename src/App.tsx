import React from 'react';
import {
    AppBar,
    Box,
    IconButton,
    Toolbar,
    Typography,
    Avatar,
    Container,
    Stack, Grid, Button, Link
} from "@mui/material";
import {Email, Instagram, LinkedIn, Person, PictureAsPdf, Twitter, WhatsApp} from "@mui/icons-material";
import pic from "./img/christabel.jpeg";
import useTheme from "./hooks/useTheme";

function App() {
    const {mode} = useTheme();
    const dark = mode==="dark";
  return (
      <>
        <AppBar variant={"outlined"} position={"sticky"} elevation={0} sx={{
            bgcolor:dark?"common.black":"background.paper"
        }}>
          <Toolbar sx={{justifyContent: "space-between"}}>
            <Link underline={"none"} sx={{color: dark?"gray":"#232323"}} href={"https://www.behance.net/nnajichristabel"} target={"_blank"}>
              <Typography>@nnajichristabel</Typography>
            </Link>
            <IconButton href={"mailto:nnajichristabel54@gmail.com"}>
              <Email/>
            </IconButton>

          </Toolbar>
        </AppBar>

        <Container maxWidth={"sm"} sx={{py: 5}}>
            <Stack direction={"column"} justifyContent={"center"} rowGap={{xs: 3, md: 5}} sx={{
                minHeight: "95vh",
            }}>

                <Stack justifyContent={"center"} alignItems={"center"} direction={"column"} sx={{
                    rowGap: 1
                }}>
                    <Avatar sx={{width: 130, height: 130, border:dark?"solid 2px white":"none"}} src={pic} alt="christabel_nnaji"/>
                    <Typography variant={"h1"} sx={{
                        fontSize: {xs: "h4.fontSize", md: "h3.fontSize"}
                    }} fontWeight={700}>Christabel Nnaji</Typography>
                    <Typography variant={"body2"} color={"grayText"}>UI/UX & Graphics Designer</Typography>

                    <Stack direction={"row"} alignItems={"center"} justifyContent={"center"} gap={.5}>
                        <IconButton href={"https://www.behance.net/nnajichristabel"} target={"_blank"}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className={"behance"}>
                                <path d="M232 237.2c31.8-15.2 48.4-38.2 48.4-74 0-70.6-52.6-87.8-113.3-87.8H0v354.4h171.8c64.4 0 124.9-30.9 124.9-102.9 0-44.5-21.1-77.4-64.7-89.7zM77.9 135.9H151c28.1 0 53.4 7.9 53.4 40.5 0 30.1-19.7 42.2-47.5 42.2h-79v-82.7zm83.3 233.7H77.9V272h84.9c34.3 0 56 14.3 56 50.6 0 35.8-25.9 47-57.6 47zm358.5-240.7H376V94h143.7v34.9zM576 305.2c0-75.9-44.4-139.2-124.9-139.2-78.2 0-131.3 58.8-131.3 135.8 0 79.9 50.3 134.7 131.3 134.7 61.3 0 101-27.6 120.1-86.3H509c-6.7 21.9-34.3 33.5-55.7 33.5-41.3 0-63-24.2-63-65.3h185.1c.3-4.2.6-8.7.6-13.2zM390.4 274c2.3-33.7 24.7-54.8 58.5-54.8 35.4 0 53.2 20.8 56.2 54.8H390.4z"/></svg>
                        </IconButton>
                        <IconButton><Twitter/></IconButton>
                        <IconButton><LinkedIn/></IconButton>
                        <IconButton><Instagram/></IconButton>
                    </Stack>

                </Stack>


                <Stack direction={"column"} alignItems={"center"} justifyContent={"center"} rowGap={2}>
                    <Button variant={"outlined"} target={"_blank"} href={"https://www.behance.net/nnajichristabel"} fullWidth size={"large"} startIcon={<Person/>}>
                        My Portfolio
                    </Button>
                    <Button variant={"outlined"} href={"#"} download fullWidth size={"large"} startIcon={<PictureAsPdf/>}>
                        My Resume
                    </Button>
                    <Button target={"_blank"} href={"https://wa.me/+2348104614410"} variant={"outlined"} fullWidth size={"large"} startIcon={<WhatsApp/>}>
                        Whatsapp
                    </Button>
                    <Box textAlign={"center"}>
                        <Typography sx={{fontSize: "h6.fontSize"}} color={"grayText"}>About me:</Typography>
                        <Typography>
                            Hello, I'm <b>Christabel Nnaji</b> a professional and skilled UI/UX designer, I bring a
                            unique blend of creativity, technical expertise and user-centered design principle to
                            every product I work on. I am proficient in various design and prototyping tools such as:
                            <b>Adobe XD, Figma, and Photoshop</b> which enable me to bring my ideas to life and collaborating
                            effectively with cross-functional teams.
                        </Typography>
                    </Box>
                </Stack>

            </Stack>


        </Container>
          <AppBar component={"footer"} elevation={0} position={"sticky"} sx={{bgcolor: "common.black"}}>
              <Toolbar sx={{justifyContent: "center"}}>
                  <Typography variant={"caption"} sx={{color: "gray"}}>
                      Theme by:&nbsp;<Link underline={"always"} target={"_blank"} sx={{color: "white"}}
                                           href={"https://github.com/NICHOLAS-AGBO"}>NICHOLAS AGBO</Link>&nbsp;
                      &copy; {(new Date()).getFullYear()}
                  </Typography>
              </Toolbar>
          </AppBar>
      </>
  );
}

export default App;
