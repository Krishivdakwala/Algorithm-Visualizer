import { Button, Divider, Slider } from '@material-ui/core';
import React, { Component } from 'react';
import Bar from './Bar';
import {sleep} from '../helper';
import _ from 'lodash';
import { motion } from 'framer-motion';
import {Link} from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';


const MySlider = withStyles({
    markLabel:{
      color:"#fff",
      fontSize:'13px',
      
    },

  })(Slider);
  
  const marks = [
    {
      value: 1,
      label: '1X',
    },
    {
      value: 2,
      label: '2X',
    },
    {
      value: 3,
      label: '3X',
    },
  ];

class LinearSearch extends Component {
    
    constructor(props) {
        super(props);
        this.state={
            arraySize:20,
            arr:[],
            width:30,
            stop:true,
            speed:1,
            search: 0,
        }

        
    }

    valuetext = (value)=> {
        return `${value-1}X`;
    }

    componentDidMount(){
        this.changeWidth();
        this.generateNewArray();
        
    }

    changeWidth = ()=>{
        const {arraySize} = this.state;

        if(arraySize<=35){
            this.setState({width:30})
        }
        else if(arraySize>35 && arraySize<=50){
            this.setState({width:20})
        }
        else{
            this.setState({width:5})
        }
    }

    handleChangeSlider=(event,val)=>{
        this.setState({arraySize:val})
        this.changeWidth();
        this.generateNewArray();
    }

    handleChangeSpeedSlider = (event,val)=>{
        this.setState({speed:val});
    }

    generateNewArray=()=>{
        this.changeWidth();
        let arr = [];
        let min = 1,max = 500;
        for(let i=0;i<this.state.arraySize;i++){
            let rand = min + Math.random() * (max - min);
            arr = [...arr,{val:Math.floor(rand),x:0,index:i,color:'#00FFFF'}];
        }
        this.setState({arr});
    }

    startAnimation= async ()=>{

        this.setState({stop:false})
        await sleep(100);

        const {width,stop} = this.state;        

        let arr = this.state.arr;
        let temp_arr = _.clone(arr);
        let n = this.state.arraySize;
        let ms = 500;
        let outerms,innerms;
        let flag = false;

        if(this.state.speed===1){
            outerms=500;
            innerms=1000;
        }
        else if(this.state.speed===2){
            outerms=200;
            innerms=500;
        }
        else{
            outerms=10;
            innerms=10;
        }
        
        for(let i=0;i<n;i++){
            arr[temp_arr[i].index].color = '#303F9F'
            await sleep(innerms);
            this.setState({arr});

            if(temp_arr[i].val == this.state.search){
                arr[temp_arr[i].index].color = '#ff0000'
                this.setState({arr});
                break;
            }

            else{
                arr[temp_arr[i].index].color = '#00FFFF'
            }

            setTimeout(() => {
                    
                this.setState({arr});
            }, innerms);

            
        }
    }

    stopAnimation = ()=>{
        this.setState({stop:true});
    }

    disableInput = ()=>{
        this.setState({disabled:true});
    }

    enableInput = ()=>{
        this.setState({disabled:false});
    }
    
    render() {
        return (
            <div style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
                <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',height:'100px',width:'100%'}}>
                    <div style={{display:'flex'}}>
                        <motion.div 
                        
                        initial={{height:'70px',width:'150px',backgroundColor:'#4CAF50',color:'white',borderRadius:'5px',padding:'5px',boxShadow:'0px 2px green',marginTop:'-25px'}}
                        whileHover={{cursor:'pointer'}}
                        >
                            <Link  to="/Algorithm-Visualizer/" style={{height:'70px',width:'150px',textDecoration:'none',color:'white',display:'flex',justifyContent:'center'}}>
                                <p style={{height:'70px',width:'150px',display:'flex',justifyContent:'center'}}>Algorithm Visualizer</p>
                            </Link>
                        </motion.div>

                        <Button onClick={this.generateNewArray} style={{margin:'10px'}} color="primary" variant="contained">Generate New Array</Button>
                    </div>
                    
                    <Slider
                        style={{width:'300px',margin:'10px'}}
                        value={this.state.arraySize}
                        onChange={this.handleChangeSlider}
                        defaultValue={8}
                        min={1}
                        max={100}
                        valueLabelDisplay="auto"
                    />
                </div>
                <Divider style={{height:'2px',width:'100%',margin:'10px 10px 0px 10px',backgroundColor:'white'}}/>
                <div style={{width:'100%',display:'flex',justifyContent:'flex-end'}}>
                    <div style={{width:'250px',backgroundColor:'#15314B',display:'flex',justifyContent:'center',marginRight:'5px'}}>
                        <div style={{width:150,display:'flex',justifyContent:'center',alignItems:'center'}}>
                        <MySlider
                            defaultValue={1}
                            getAriaValueText={this.valuetext}
                            aria-labelledby="discrete-slider"
                            valueLabelDisplay="auto"
                            step={1}
                            disabled={!this.state.stop}
                            onChange={this.handleChangeSpeedSlider}
                            marks = {marks}
                            min={1}
                            max={3}
                            
                        />
                        </div>
                    </div>
                    
                </div>
                

                <div style={{display:'flex',justifyContent:'center',alignItems:'flex-end'}}>
                    {
                        this.state.arr.map((item,index)=>(
                            <div key={index}>
                            <Bar
                                value={item.val}
                                x = {item.x}
                                color={item.color}
                                width={this.state.width}
                            />
                            </div>
                        ))
                    }
                </div>
                <div style={{display:'flex'}}>
                    <TextField id="standard-basic" 
                                InputProps={{
                                        style: {
                                            background: 'rgb(232, 241, 250)',
                                            width: '90%',
                                            paddingBottom: 0,
                                            marginTop: 25,
                                            fontWeight: 500,
                                        }
                                    }}
                                label="Search" disabled={this.state.disabled} placeholder={this.state.search.toString()} onChange={(e) => { this.setState({search: e.target.value}) }}/>  
                    <Button onClick={() => {this.startAnimation(); this.disableInput()}} style={{width:'200px', margin:'20px'}} color="secondary" variant="contained">Start</Button>
                    {/* <Button onClick={this.stopAnimation} style={{width:'200px', margin:'20px'}} href="/Algorithm-Visualizer/linear-search" color="secondary" variant="contained">Stop</Button> */}
                </div>
                
                <Divider style={{height:'2px',width:'100%',margin:'10px',backgroundColor:'white'}}/>
            </div>
        );
    }
}

export default LinearSearch;