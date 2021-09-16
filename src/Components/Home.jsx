import { Divider, Button } from '@material-ui/core';
import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { motion } from 'framer-motion';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';

class Home extends Component {

    constructor(props) {
        super(props);
        this.state={
            sorting_algo:[
                {
                    title:"Sorting Algorithms",
                    theory:"Visualize the sorting process of a randomly generated array",
                    path:"/Algorithm-Visualizer/sorting",
                    bg: '#54BD68',
   
                },
                {
                    title:"Searching Algorithms",
                    theory:"Visualize the searching process of an element from an array",
                    path:"/Algorithm-Visualizer/searching",
                    bg: '#ff00ff',
  
                },
                
            ],
            
        }
    }

    generateNewArray=()=>{
        let arr = [];
        let min = 20,max = 100;
        for(let i=0;i<10;i++){
            let rand = min + Math.random() * (max - min);
            arr=[...arr,rand]
        }
        return arr;
    }
    

    render() {
        return (
            <Fade>
            <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',color:'white'}}>
            
                <div style={{margin:'10px',fontWeight:'bolder',fontSize:'30px'}}>Algorithms Visualizer</div>
            
                <Divider style={{height:'2px',width:'80%',margin:'10px',backgroundColor:'white'}}/>
                <div style={{margin:'10px',fontWeight:'bolder',fontSize:'18px'}}>Select Type</div>
                <div style={{width:'50%',display:'flex',justifyContent:'space-around',flexWrap:'wrap',alignItems:'center',marginTop:'30px'}}>
                {
                    this.state.sorting_algo.map((item,index)=>{
                        let color = item.bg;
                        return(
                            <Link to={item.path} style={{textDecoration:'none',color:'#C51162',margin:'5px'}}>
                                <motion.div
                                    
                                    key={index}
                                    initial={{backgroundColor:'#00182E',color:'#fff',borderRadius:'5px',cursor:'pointer',margin:'10px',width:'300px',height:'350px',display:'flex',justifyContent:'space-between',alignItems:'center',flexDirection:'column'}}
                                    whileHover={{boxShadow:'3px 2px 2px  aqua',scale:'1.1',transition:'transform 6s cubic-bezier(0.075, 0.82, 0.165, 1)'}}
                                    
                                    >
                                    <div style={{width:'300px',height:'175px',display:'flex',alignItems:'flex-end',justifyContent:'center',backgroundColor:color}}>
                                        {
                                                this.generateNewArray().map((it1,itr)=>{
                                                    return(
                                                        <span key={itr} style={{backgroundColor:'white',height:`${it1}px`,width:'20px',margin:'2px',}}>
                                                        </span>
                                                    )
                                                })
                                        }
                                    </div>

                                    <motion.div initial={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',width:'300px'}}
                                        whileHover={{backgroundColor:'#02203C'}}
                                    >
                                        <div style={{width:'270px'}}>
                                            <h2>
                                                {item.title}
                                            </h2>
                                            <p>
                                                {item.theory}
                                            </p>
                                        </div>
                                        
                                    </motion.div>
                                    <div style={{display:'flex',justifyContent:'center',width:'270px',margin:'5px'}}>
                                            <Link to={item.path} style={{textDecoration:'none',color:'#C51162',margin:'5px'}}>Visualization</Link>
                                            
                                    </div>
                                    
                                </motion.div>
                            </Link>
                        )
                    })
                }
                </div>
                <Divider style={{height:'2px',width:'80%',margin:'10px',backgroundColor:'white',marginTop:'30px'}}/>
                <div style={{margin:'10px',fontWeight:'bolder',fontSize:'18px'}}>
                <Button variant="contained" href="https://in.linkedin.com/in/krishiv-dakwala" style={{
                                                borderRadius: 35,
                                                backgroundColor: "#00182E",
                                                padding: "18px 36px",
                                                fontSize: "18px",
                                                color: "#ffff"
                                            }}>About Me</Button>
                </div>
                
            </div>
            </Fade>
        );
    }
}

export default Home;