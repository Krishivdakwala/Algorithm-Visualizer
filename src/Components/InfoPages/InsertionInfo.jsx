import { Divider, Button } from '@material-ui/core';
import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { motion } from 'framer-motion';
import Fade from 'react-reveal/Fade';

class InsertionInfo extends Component {

    render() {
        return (
            <Fade>
            <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',color:'white'}}>
                <div style={{margin:'10px',fontWeight:'bolder',fontSize:'30px'}}>Algorithms Visualizer</div>

                <Divider style={{height:'2px',width:'80%',margin:'10px',backgroundColor:'white'}}/>
                <div style={{margin:'10px',fontWeight:'bolder',fontSize:'18px'}}>Insertion Sort</div>
                <div style={{width:'60%',display:'flex',justifyContent:'space-around',flexWrap:'wrap',alignItems:'center',marginTop:'30px'}}>
                {
                    <p>
                        Insertion sort is a simple sorting algorithm that works similar to the way you sort playing cards in your hands. The array is virtually split into a sorted and an unsorted part. Values from the unsorted part are picked and placed at the correct position in the sorted part.<br/>
                        <br/><strong>Algorithm</strong>&nbsp;<br/>
                        To sort an array of size n in ascending order:&nbsp;<br/>
                        1: Iterate from arr[1] to arr[n] over the array.&nbsp;<br/>
                        2: Compare the current element (key) to its predecessor.&nbsp;<br/>
                        3: If the key element is smaller than its predecessor, compare it to the elements before. Move the greater elements one position up to make space for the swapped element.<br/>
                        <br/><strong>Example:&nbsp;</strong><br/>
                        <strong>12</strong>, 11, 13, 5, 6<br/>
                        Let us loop for i = 1 (second element of the array) to 4 (last element of the array)<br/><br/>
                        i = 1. Since 11 is smaller than 12, move 12 and insert 11 before 12&nbsp;<br/>
                        <strong>11, 12</strong>, 13, 5, 6<br/><br/>
                        i = 2. 13 will remain at its position as all elements in A[0..I-1] are smaller than 13&nbsp;<br/>
                        <strong>11, 12, 13</strong>, 5, 6<br/><br/>
                        i = 3. 5 will move to the beginning and all other elements from 11 to 13 will move one position ahead of their current position.&nbsp;<br/>
                        <strong>5, 11, 12, 13</strong>, 6<br/><br/>
                        i = 4. 6 will move to position after 5, and elements from 11 to 13 will move one position ahead of their current position.&nbsp;<br/>
                        <strong>5, 6, 11, 12, 13&nbsp;</strong><br/><br/><br/>
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
                <Button variant="contained" href="/Algorithm-Visualizer/insertion-sort" style={{
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

export default InsertionInfo;