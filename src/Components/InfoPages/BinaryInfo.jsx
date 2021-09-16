import { Divider, Button } from '@material-ui/core';
import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { motion } from 'framer-motion';
import Fade from 'react-reveal/Fade';

class BinaryInfo extends Component {

    render() {
        return (
            <Fade>
            <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',color:'white'}}>
                <div style={{margin:'10px',fontWeight:'bolder',fontSize:'30px'}}>Algorithms Visualizer</div>

                <Divider style={{height:'2px',width:'80%',margin:'10px',backgroundColor:'white'}}/>
                <div style={{margin:'10px',fontWeight:'bolder',fontSize:'18px'}}>Binary Search</div>
                <div style={{width:'60%',display:'flex',justifyContent:'space-around',flexWrap:'wrap',alignItems:'center',marginTop:'30px'}}>
                {
                    <p>
                        In binary search we search a sorted array by repeatedly dividing the search interval in half. 
                        Begin with an interval covering the whole array. 
                        If the value of the search key is less than the item in the middle of the interval, narrow the interval to the lower half. 
                        Otherwise, narrow it to the upper half. Repeatedly check until the value is found or the interval is empty.<br/><br/><br/>

                        We basically ignore half of the elements just after one comparison.
                        <ol>
                            <li>Compare x with the middle element.</li>
                            <li>If x matches with the middle element, we return the mid index.</li>
                            <li>Else If x is greater than the mid element, then x can only lie in the right half subarray after the mid element.
                                So we recur for the right half.</li>
                            <li>Else (x is smaller) recur for the left half.</li>
                        </ol>


                        <br/><br/><br/><strong>Time Complexity: </strong>O(Log n)

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
                <Button variant="contained" href="/Algorithm-Visualizer/binary-search" style={{
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

export default BinaryInfo;