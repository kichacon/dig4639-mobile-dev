class Adder{
    constructor(props){
        this.props = props;

        render(){
            return a + b;
        }
    }
   
}

const a = new Adder('5');
const b = new Adder('10');


module.exports = Adder;