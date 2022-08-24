import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import firebase from './firebase';
import './app.css';

class First extends Component {

    constructor(){
        super();
        this.onRate=this.onRate.bind(this);
    }

    onRate(){
        const rate_this_pro=document.getElementById('rate_the_project').value;
        if(rate_this_pro!=null && rate_this_pro!=''){
            if(rate_this_pro<0 || rate_this_pro>5){
                alert("Rate Between 0-5");
                document.getElementById('rate_the_project').value='';
            }
        }
    }

    

    send_me_data(){
        
        const rate_this_pro=document.getElementById('rate_the_project').value;
        const des=document.getElementById('area').value;
        const name=document.getElementById('name').value;

        if(rate_this_pro.trim()!=''&&des.trim()!=''&&name.trim()!=''){

        document.getElementById('full_detail').style.display='none';
        document.getElementById('fucker').style.display='block';
        const final_data={ name : name , review : des , rating : rate_this_pro};

        let count=0;
        const refe=firebase.database().ref("Reviews");

        refe.once("value").then(function(snapshot) {
          count=snapshot.numChildren();
          refe.child("review-"+ (count+1) ).set(final_data);
          document.getElementById('full_detail').style.display='block';
          document.getElementById('fucker').style.display='none';
          document.getElementById('rate_the_project').value=''
          document.getElementById('area').value='';
          document.getElementById('name').value='';
          alert("review sent");
        });

        }else{
            alert("fill all details");
        }
    }
    
    render() { 
        return (

        <div className="text-center" style={{fontSize:'2rem'}}>
            <div id="full_detail">
            <h1>FIRST REACT PROJECT</h1><br></br>
            <h3>Write A Review For This Project Created Using React</h3><br></br>

            <MediaQuery minWidth={416}>
            <table style={{margin : '0 auto',fontSize:'2rem'}} id="tab">
                <tbody>
                <tr>
                    <td>Name : </td>
                    <td><input id="name"></input></td>
                </tr>
                <tr>
                    <td>Your Views : </td>
                    <td><textarea rows={2} cols={23} id="area"></textarea></td>
                </tr>
                <tr>
                    <td>Rate Out-Of Five : </td>
                    <td><input type="number" onChange={this.onRate} id="rate_the_project"></input></td>
                </tr>
                </tbody>
            </table><br></br>
            <button className='btn btn-primary' style={{fontSize:'2rem'}} onClick={this.send_me_data}>Send Review</button><br></br>
            </MediaQuery>

            <MediaQuery maxWidth={416}>
            <table style={{margin : '0 auto',fontSize:'1.3rem'}} id="tab">
                <tbody>
                <tr>
                    <td>Name : </td>
                    <td><input id="name"></input></td>
                </tr>
                <tr>
                    <td>Your Views : </td>
                    <td><textarea rows={2} cols={22} id="area"></textarea></td>
                </tr>
                <tr>
                    <td>Rate Out-Of Five : </td>
                    <td><input type="number" onChange={this.onRate} id="rate_the_project"></input></td>
                </tr>
                </tbody>
            </table><br></br>
            <button className='btn btn-primary' style={{fontSize:'1.5rem'}} onClick={this.send_me_data}>Send Review</button><br></br>
            </MediaQuery>

            <br></br><marquee>created by daksh</marquee>
            </div>
            <div className="loader" id='fucker'
            
            style={{
                display:'none',
                border: '1.6rem solid #f3f3f3',
                borderRadius: '50%',
                borderTop: '1.6rem solid #3498db',
                width: '12rem',
                height: '12rem',
                WebkitAnimation: 'spin 2s linear infinite' ,
                animation: 'spin 2s linear infinite',
                marginLeft:'auto',marginRight:'auto',
            }}
            
            ></div>

        </div>
        );
    }
}
 
export default First;
