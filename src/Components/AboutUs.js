import React from 'react';
import { Divider, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';import { motion } from 'framer-motion';


const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
  });

function ImgCard(props){
    const classes = useStyles();
    return(
        <Card className={classes.root}>
            <CardActionArea style={{backgroundColor: "#00182E", color: "#ffff"}}>
                {/* <CardMedia
                component="img"
                height="140"
                image={props.img}
                /> */}
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {props.name}
                </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary" href={props.link1}>
                LinkedIn
                </Button>
                <Button size="small" color="primary" href={props.link2}>
                GitHub
                </Button>
            </CardActions>
        </Card>
    )
}


export default function AboutUs(props) {



    return (
        <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',color:'white'}}>
            <div style={{margin:'10px',fontWeight:'bolder',fontSize:'18px'}}>About Us</div>
            <Divider style={{height:'2px',width:'80%',margin:'10px',backgroundColor:'white'}}/>
            <div style={{margin:'10px',fontWeight:'bolder',fontSize:'18px'}}>Project Developers:</div>
            <div style={{width:'100%',display:'flex',justifyContent:'space-around',flexWrap:'wrap',alignItems:'center',marginTop:'30px'}}>
                    <ImgCard
                        name = "Krishiv Dakwala"
                        img = "./images/KrishivDakwala"
                        link1 = "https://www.linkedin.com/in/krishiv-dakwala/"
                        link2 = "https://github.com/Krishivdakwala"
                    ></ImgCard>
                    <ImgCard
                        name = "Piyush Deore"
                        img = "./images/KrishivDakwala"
                        
                    ></ImgCard>
                    <ImgCard
                        name = "Pranav Chougule"
                        img = "./images/KrishivDakwala"
                        link1 = "https://www.linkedin.com/in/pranav-chougule-39410119b/"
                        link2 = "https://github.com/Pranavpc39"
                    ></ImgCard>
                    <ImgCard
                        name = "Atharva Dere"
                        img = "./images/KrishivDakwala"
                        
                        link2 = "https://github.com/Atharva1810"
                    ></ImgCard>
                    <ImgCard
                        name = "Swapnil Chhatre"
                        img = "./images/KrishivDakwala"
                        link1 = "https://www.linkedin.com/in/swapnil-chhatre-221159162/"
                        link2 = "https://github.com/cpt-Levi"
                    ></ImgCard>
                    
                    
                    

            </div>

        </div>
    );
}