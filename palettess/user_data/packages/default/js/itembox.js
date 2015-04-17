function itemOn(nGoodsID,itemNum) {
    var arrColor = new Array('#EEEEEE','#EEEEEE','#EEEEEE','#EEEEEE','#EEEEEE','#EEEEEE'); 
	document.getElementById('item-box'+nGoodsID).style.backgroundColor = arrColor[itemNum];
	//document.getElementById('item-box-price'+nGoodsID).style.backgroundColor = '#FFFFFF';
}

function itemOff(nGoodsID) {
	document.getElementById('item-box'+nGoodsID).style.backgroundColor = '#FFFFFF';
	//document.getElementById('item-box-price'+nGoodsID).style.backgroundColor = '#E1E1E1';
}

function itemClick(link){
	location.href = link;
}