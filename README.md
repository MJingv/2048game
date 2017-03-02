这个根据imooc课程编写的2048小游戏。
与原版本相比，我主要增加了一下几点的思考：

1.源视频教程score设置的是全局变量，new game之后还是显示原来的分数
  我增加了一个函数用于清零分数
  
  function clearscore(){
	score=0;
	$("#score").text(score);
}

2.讲数字展示转换为文字，增加函数来实现

function getNumberContent(number){
	switch(number){
		case 2:return "小白";break;
		case 4:return "实习生";break;
		case 8:return  "程序猿";break;
		case 16:return "项目经理";break;
		case 32:return "构架师";break;
		case 64:return "技术经理";break;
		case 128:return "高级经理";break;
		case 256:return "技术总监";break;
		case 512:return "副总裁";break;
		case 1024:return "CTO";break;
		case 2048:return "总裁";break;
	}
	return "无业游民";
	//console.log('number');
}

3.增加喜欢的渐变背景

#background {
    position:fixed;
    top:0;
    left:0;
    z-index:-10;
    width:100%;
    height:100%;
    background: #ffa5a5;
    background: -moz-linear-gradient(top, #ffa5a5 20%, #fff 100%);
    background: -webkit-gradient(linear, left top, left bottom, color-stop(20%,#ffa5a5), color-stop(100%,#fff));
    background: -webkit-linear-gradient(top, #ffa5a5 20%,#fff 100%);
    background: linear-gradient(top, #ffa5a5 20%,#fff 100%);
}
