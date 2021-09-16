import { Divider, Button } from '@material-ui/core';
import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { motion } from 'framer-motion';
import Fade from 'react-reveal/Fade';

class SelectionInfo extends Component {

    render() {
        return (
            <Fade>
            <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',color:'white'}}>
                <div style={{margin:'10px',fontWeight:'bolder',fontSize:'30px'}}>Algorithms Visualizer</div>

                <Divider style={{height:'2px',width:'80%',margin:'10px',backgroundColor:'white'}}/>
                <div style={{margin:'10px',fontWeight:'bolder',fontSize:'18px'}}>Selection Sort</div>
                <div style={{width:'60%',display:'flex',justifyContent:'space-around',flexWrap:'wrap',alignItems:'center',marginTop:'30px'}}>
                {
                    <p>
                        The selection sort algorithm sorts an array by repeatedly finding the minimum element (considering ascending order) from unsorted part and putting it at the beginning. The algorithm maintains two subarrays in a given array.<br/>
                        1) The subarray which is already sorted.&nbsp;<br/>
                        2) Remaining subarray which is unsorted.<br/>
                        In every iteration of selection sort, the minimum element (considering ascending order) from the unsorted subarray is picked and moved to the sorted subarray.&nbsp;<br/>
                        <br/>
                        Following example explains the above steps:&nbsp;<br/>
                        
                            arr[ ] = 64 25 12 22 11<br/><br/>

                            Find the minimum element in arr[0...4]<br/>
                            and place it at beginning<br/>
                            <strong>11 </strong>25 12 22 64<br/><br/>

                            Find the minimum element in arr[1...4]<br/>
                            and place it at beginning of arr[1...4]<br/>
                            11 <strong>12 </strong>25 22 64<br/><br/>

                            Find the minimum element in arr[2...4]<br/>
                            and place it at beginning of arr[2...4]<br/>
                            11 12 <strong>22 </strong>25 64<br/><br/>

                            Find the minimum element in arr[3...4]<br/>
                            and place it at beginning of arr[3...4]<br/>
                            11 12 22 <strong>25 </strong>64<br/><br/><br/>
                            <strong>Time Complexity: </strong>O(n<sup>2</sup>)
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
                <Button variant="contained" href="/Algorithm-Visualizer/selection-sort" style={{
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

export default SelectionInfo;