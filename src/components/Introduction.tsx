import React from 'react';
import { Container, Fab, makeStyles, Paper, Typography } from '@material-ui/core';
import Image from 'material-ui-image';
import { Twitter } from '@material-ui/icons';

export const Introduction = ()=>{
  const classes = useStyles();
  return (
    <Container maxWidth="sm" className={classes.root}>

      <Paper elevation={4} >

        <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
          <Typography variant="h4" component="h1" style={{display:"block", fontWeight:"bold", paddingTop:"20px"}}>
                プロフィール
          </Typography>
        
          <img 
            src={`/profile-icon.jpeg`}
            style={{width:"200px", height:"200px", marginRight:"auto", marginLeft:"auto", paddingTop:"20px"}}
          />
          <div style={{marginLeft:"auto", marginRight:"auto", width:"60%", paddingTop:"20px"}}>
            <Typography variant="body1">
            学生やりながらエンジニアのアルバイトしています。
            </Typography>
            <Typography variant="body1">
            好きな言語はTypeScriptとGoです。
            </Typography>
            <Typography variant="body1">
            フレームワークだと最近はReactにめちゃくちゃハマってます。
            </Typography>
            <Typography variant="body1">
            バックエンドも好きですが、フロントエンドの
            どうやってもごちゃごちゃしてしまうところを綺麗にしようという雰囲気がとても好きです。
            (このブログのコードは死ぬほど汚い)
            </Typography>
            <Typography variant="body1">
            コンサルっぽいSEとして労働することになってます。
            </Typography>

          </div>
          <div style={{paddingTop:"20px"}}>
            <Typography variant="h6">良ければTwitterもフォーローしてください。</Typography>
          </div>
          <div style={{marginRight:"auto", marginLeft:"auto", paddingTop:"20px", paddingBottom:"20px"}}>
            <a href="https://twitter.com/tottemoganbaru">
              <Fab size="medium"  color="primary" >
                <Twitter style={{color:"#fff"}}></Twitter>
              </Fab>
            </a>
          </div>
        </div>
      </Paper>
    </Container>
  );
}; 

const useStyles = makeStyles( theme=>({
  root:{
    margin: theme.spacing(4, 'auto'),
  }
})
);