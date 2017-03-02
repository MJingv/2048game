function getPosTop(i,j) {
	return 20+120*i;
}

function getPosLeft(i,j) {
	return 20+120*j;
}

function getNumberBackgroundColor(number) {
	switch(number){
		case 2:return '#FCD6BC';break;
		case 4:return '#F8A1B2';break;
		case 8:return '#EF4E88';break;
		case 16:return '#FBD75E';break;
		case 32:return '#A8C065';break;
		case 64:return '#76A2B5';break;
		case 128:return '#47183E';break;
		case 256:return '#1C4150';break;
		case 512:return '#88CAD0';break;
		case 1024:return '#405DAD';break;
		case 2048:return '#C7C47B';break;
		case 4096:return '#008080';break;
		case 8192:return '#FF0000';break;
	}
	return "black";
	

}

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

function getNumberColor(number){
	if (number<=4) 
		return '#776e65';
	return 'white';
}



function nospace(board){
	for(var i=0;i<4;i++)
		for(var j=0;j<4;j++){
			if(board[i][j]==0){
				return false;
			}else{
				return true;
			}
		}
}

function nomove(board){
	if(canMoveLeft(board)||canMoveRight(board)||canMoveUp(board)||canMoveDown(board)){
		return false;
	}else {
		return true;
	}

}

function canMoveLeft(board){
	for(var i=0;i<4;i++)
		for(var j=1;j<4;j++){
			if(board[i][j]!=0){
				if(board[i][j-1]==0||board[i][j-1]==board[i][j]){
					return true;
				}
			}

		}
	return false;

}

function canMoveRight(board){
	for(var i=0;i<4;i++)
		for(var j=2;j>=0;j--){
			if(board[i][j]!=0){
				if(board[i][j+1]==0||board[i][j+1]==board[i][j]){
					return true;
				}
			}

		}
	return false;

}

function canMoveUp(board){
	for(var j=0;j<4;j++)
		for(var i=1;i<4;i++){
			if(board[i][j]!=0){
				if(board[i-1][j]==0||board[i-1][j]==board[i][j]){
					return true;
				}
			}

		}
	return false;

}

function canMoveDown(board){
	for(var j=0;j<4;j++)
		for(var i=2;i>=0;i--){
			if(board[i][j]!=0){
				if(board[i+1][j]==0||board[i+1][j]==board[i][j]){
					return true;
				}
			}

		}
	return false;

}

function noBlockHorizontal(row,col1,col2,board){
	for(var i=col1+1;i<col2;i++ ){
		if(board[row][i]!=0){
			return false;
		}
	}
	return true;

}

function noBlockVertical(col,row1,row2,board){
	for(var i=row1+1;i<row2;i++ ){
		if(board[i][col]!=0){
			return false;
		}
	}
	return true;

}





