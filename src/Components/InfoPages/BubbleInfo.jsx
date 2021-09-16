import { Divider, Button } from '@material-ui/core';
import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { motion } from 'framer-motion';
import Fade from 'react-reveal/Fade';

class BubbleInfo extends Component {

    render() {
        return (
            <Fade>
            <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',color:'white'}}>
                <div style={{margin:'10px',fontWeight:'bolder',fontSize:'30px'}}>Algorithms Visualizer</div>

                <Divider style={{height:'2px',width:'80%',margin:'10px',backgroundColor:'white'}}/>
                <div style={{margin:'10px',fontWeight:'bolder',fontSize:'18px'}}>Bubble Sort</div>
                <div style={{width:'60%',display:'flex',justifyContent:'space-around',flexWrap:'wrap',alignItems:'center',marginTop:'30px'}}>
                {
                    <p>
                        Bubble Sort is the simplest sorting algorithm that works by repeatedly swapping the adjacent elements if they are in wrong order.<br/><br/>
                        <strong>Example:</strong>&nbsp;<br/>
                        <strong>First Pass:</strong>&nbsp;<br/>
                        ( <strong>5</strong> <strong>1</strong> 4 2 8 ) &#8211;&gt; ( <strong>1</strong> <strong>5</strong> 4 2 8 ), Here, algorithm compares the first two elements, and swaps since 5 &gt; 1.&nbsp;<br/>
                        ( 1 <strong>5</strong> <strong>4</strong> 2 8 ) &#8211;&gt;&nbsp; ( 1 <strong>4</strong> <strong>5</strong> 2 8 ), Swap since 5 &gt; 4&nbsp;<br/>
                        ( 1 4 <strong>5</strong> <strong>2</strong> 8 ) &#8211;&gt;&nbsp; ( 1 4 <strong>2</strong> <strong>5</strong> 8 ), Swap since 5 &gt; 2&nbsp;<br/>
                        ( 1 4 2 <strong>5</strong> <strong>8</strong> ) &#8211;&gt; ( 1 4 2 <strong>5</strong> <strong>8</strong> ), Now, since these elements are already in order (8 &gt; 5), algorithm does not swap them.<br/>
                        <strong>Second Pass:</strong>&nbsp;<br/>
                        ( <strong>1</strong> <strong>4</strong> 2 5 8 ) &#8211;&gt; ( <strong>1</strong> <strong>4</strong> 2 5 8 )&nbsp;<br/>
                        ( 1 <strong>4</strong> <strong>2</strong> 5 8 ) &#8211;&gt; ( 1 <strong>2</strong> <strong>4</strong> 5 8 ), Swap since 4 &gt; 2&nbsp;<br/>
                        ( 1 2 <strong>4</strong> <strong>5</strong> 8 ) &#8211;&gt; ( 1 2 <strong>4</strong> <strong>5</strong> 8 )&nbsp;<br/>
                        ( 1 2 4 <strong>5</strong> <strong>8</strong> ) &#8211;&gt;&nbsp; ( 1 2 4 <strong>5</strong> <strong>8</strong> )&nbsp;<br/>
                        Now, the array is already sorted, but our algorithm does not know if it is completed. The algorithm needs one <strong>whole</strong> pass without <strong>any</strong> swap to know it is sorted.<br/>
                        <strong>Third Pass:</strong>&nbsp;<br />
                        ( <strong>1</strong> <strong>2</strong> 4 5 8 ) &#8211;&gt; ( <strong>1</strong> <strong>2</strong> 4 5 8 )&nbsp;<br/>
                        ( 1 <strong>2</strong> <strong>4</strong> 5 8 ) &#8211;&gt; ( 1 <strong>2</strong> <strong>4</strong> 5 8 )&nbsp;<br/>
                        ( 1 2 <strong>4</strong> <strong>5</strong> 8 ) &#8211;&gt; ( 1 2 <strong>4</strong> <strong>5</strong> 8 )&nbsp;<br/>
                        ( 1 2 4 <strong>5</strong> <strong>8</strong> ) &#8211;&gt; ( 1 2 4 <strong>5</strong> <strong>8</strong> )&nbsp;<br/><br/><br/>
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
                <Button variant="contained" href="/Algorithm-Visualizer/bubble-sort" style={{
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

export default BubbleInfo;