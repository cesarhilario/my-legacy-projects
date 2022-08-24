import { Dimensions } from 'react-native';

const params = {
    blockSize: 30,
    borderSize: 5,
    fontSize: 15,
    headerRatio: 0.15, //Proporção do painel superior na tela
    difficultLevel: 0.1,
    getCollumnsAmount() {
        const width = Dimensions.get('window').width;
        return Math.floor(width / this.blockSize );
    },
    getRowsAmount() {
        const totalHeight = Dimensions.get('window').height;
        const boardHight = totalHeight * (1 - this.headerRatio);

        return Math.floor(boardHight / this.blockSize );
    }
}

export default params;