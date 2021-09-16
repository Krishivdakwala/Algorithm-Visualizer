import { Divider, Button } from '@material-ui/core';
import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { motion } from 'framer-motion';
import Fade from 'react-reveal/Fade';

class HomeSort extends Component {

    constructor(props) {
        super(props);
        this.state={
            sorting_algo:[
                {
                    title:"Bubble Sort",
                    theory:"Bubble sort, sometimes referred to as sinking sort, is a simple sorting algorithm that repeatedly steps through the list,  ....",
                    path:"/Algorithm-Visualizer/bubble-sort",
                    path2:"/Algorithm-Visualizer/bubble-sort-info"
                },
                {
                    title:"Selection Sort",
                    theory:"Bubble sort, sometimes referred to as sinking sort, is a simple sorting algorithm that repeatedly steps through the list,  ....",
                    path:"/Algorithm-Visualizer/selection-sort",
                    path2:"/Algorithm-Visualizer/selection-sort-info"
                },
                {
                    title:"Insertion Sort",
                    theory:"Bubble sort, sometimes referred to as sinking sort, is a simple sorting algorithm that repeatedly steps through the list,  ....",
                    path:"/Algorithm-Visualizer/insertion-sort",
                    path2:"/Algorithm-Visualizer/insertion-sort-info"
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
                <div style={{margin:'10px',fontWeight:'bolder',fontSize:'18px'}}>Sorting Algorithms</div>
                <div style={{width:'60%',display:'flex',justifyContent:'space-around',flexWrap:'wrap',alignItems:'center',marginTop:'30px'}}>
                {
                    this.state.sorting_algo.map((item,index)=>{
                        return(
                            <motion.div
                                
                                key={index}
                                initial={{backgroundColor:'#00182E',color:'#fff',borderRadius:'5px',cursor:'pointer',margin:'10px',width:'300px',height:'350px',display:'flex',justifyContent:'space-between',alignItems:'center',flexDirection:'column'}}
                                whileHover={{boxShadow:'3px 2px 2px  aqua',scale:'1.1',transition:'transform 6s cubic-bezier(0.075, 0.82, 0.165, 1)'}}
                                
                                >
                                <div style={{width:'300px',height:'175px',display:'flex',alignItems:'flex-end',justifyContent:'center',backgroundColor:'#54BD68'}}>
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
                                <div style={{display:'flex',justifyContent:'space-between',width:'270px',margin:'5px'}}>
                                        <Link to={item.path} style={{textDecoration:'none',color:'#C51162',margin:'5px'}}>Visualization</Link>
                                        <Link to={item.path2} style={{textDecoration:'none',color:'#303F9F',margin:'5px'}}>Learn more</Link>
                                </div>
                                
                                {/* <Link style={{textDecoration:'none',color:'#fff',width:'100%',height:'100%',display:'flex',justifyContent:'center',alignItems:'center'}} to="/bubble-sort"> */}
                                    {/* <div style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
                                        <h1>{item.title}</h1>
                                        <h2>Sort</h2>
                                    </div> */}
                                    
                                {/* </Link> */}
                            </motion.div>
                        )
                    })
                }
                </div>
                <Divider style={{height:'2px',width:'80%',margin:'10px',backgroundColor:'white',marginTop:'30px'}}/>
                <div style={{margin:'10px',fontWeight:'bolder',fontSize:'18px'}}>
                <Button variant="contained" href="/Algorithm-Visualizer" style={{
                                                borderRadius: 35,
                                                backgroundColor: "#00182E",
                                                padding: "18px 36px",
                                                fontSize: "18px",
                                                color: "#ffff"
                                            }}>Home Page</Button>
                </div>
            </div>
            </Fade>
        );
    }
}

export default HomeSort;