import { Divider, Button } from '@material-ui/core';
import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { motion } from 'framer-motion';
import Fade from 'react-reveal/Fade';

class LinearInfo extends Component {

    render() {
        return (
            <Fade>
            <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',color:'white'}}>
                <div style={{margin:'10px',fontWeight:'bolder',fontSize:'30px'}}>Algorithms Visualizer</div>

                <Divider style={{height:'2px',width:'80%',margin:'10px',backgroundColor:'white'}}/>
                <div style={{margin:'10px',fontWeight:'bolder',fontSize:'18px'}}>Linear Search</div>
                <div style={{width:'60%',display:'flex',justifyContent:'space-around',flexWrap:'wrap',alignItems:'center',marginTop:'30px'}}>
                {
                    <p>
                        Linear search is a very simple search algorithm. In this type of search, a sequential search is made over all items one by one. 
                        Every item is checked and if a match is found then that particular item is returned, 
                        otherwise the search continues till the end of the data collection.<br/><br/><br/>
                        
                        The simple steps to perform  a <strong>linear search</strong> are:
                        <ul>
                            <li>Start from the leftmost element of arr[ ] and one by one compare x with each element of arr[ ]</li>
                            <li>If x matches with an element, return the index.</li>
                            <li>If x doesn&#8217;t match with any of elements, return -1.</li>
                        </ul>
                        
                        <br/><br/><br/><strong>Time Complexity: </strong>O(n)

                    </p>
                    
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
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Button variant="contained" href="/Algorithm-Visualizer/linear-search" style={{
                                                borderRadius: 35,
                                                backgroundColor: "#00182E",
                                                padding: "18px 36px",
                                                fontSize: "18px",
                                                color: "#ffff"
                                            }}>Visualize</Button>
                                            
                </div>

            </div>
            
            </Fade>
        );
    }
}

export default LinearInfo;