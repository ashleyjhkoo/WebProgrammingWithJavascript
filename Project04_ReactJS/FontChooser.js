class FontChooser extends React.Component {

    constructor(props) {
	super(props);
	this.state = {bold: false, Color: true, IsChecked: false, nonHidden: true, size: parseInt(this.props.size,10), IncreaseLimit: true, DecreaseLimit: true};
    }

    checkToggle() {
    	this.setState( {IsChecked: !this.state.IsChecked, bold: !this.state.bold} );
    }

    clickToggle() {
    	this.setState( {nonHidden: !this.state.nonHidden} );
    }

    increaseSize() {
    	this.setState( {size: this.state.size+1} );
    }

    decreaseSize() {
    	this.setState( {size: this.state.size-1} );
    }

    setSizeDefault() {
    	this.setState( {size: parseInt(this.props.size,10)} );
    }


    render() {
        var bold = this.state.bold ? 'bold' : 'normal' ;
        var nonHidden = this.state.nonHidden ? 'true' : 'false' ;
        var size = this.state.size;

        var IsChecked = this.state.IsChecked ? true : false ;

        if(this.state.bold === true){
        	this.state.IsChecked = true;
        }
        else{
        	this.state.IsChecked = false;
        }

        if(size === parseInt(this.props.min)){
        	this.state.Color = false;
        	this.state.IncreaseLimit = true;
            this.state.DecreaseLimit = false;
        }
        else if(size === parseInt(this.props.max)){
        	this.state.Color = false;
        	this.state.IncreaseLimit = false;
            this.state.DecreaseLimit = true;
        }
        else if( (size > parseInt(this.props.min)) && (size < parseInt(this.props.max)) ){
        	this.state.Color = true;
        	this.state.IncreaseLimit = true;
            this.state.DecreaseLimit = true;
        }
        else if(size < parseInt(this.props.min)){
            this.state.IncreaseLimit = false;
            this.state.DecreaseLimit = false;
            this.state.size = this.props.min;
        }
        else if(size > parseInt(this.props.max)) {
            this.state.IncreaseLimit = false;
            this.state.DecreaseLimit = false; 
            this.state.size = this.props.max;       	
        }

        if( (parseInt(this.state.min) <= 0) ){
        	this.state.min = 1;
        }
        if( parseInt(this.state.min) > parseInt(this.state.max) ){
        	this.state.max = parseInt(this.state.min);
        }  

        var Color = this.state.Color ? 'black' : 'red' ;
        var IncreaseLimit = this.state.IncreaseLimit ? true : false ;
        var DecreaseLimit = this.state.DecreaseLimit ? true : false ;

        var CheckBox = () => (

					<input type="checkbox" id="boldCheckbox" checked={IsChecked} onChange={this.checkToggle.bind(this)} />

					)
        var PlusButton = () => ( <button id="increaseButton" onClick={(IncreaseLimit && this.increaseSize.bind(this)) || null}>+</button>)
		var MinusButton = () => ( <button id="decreaseButton" onClick={(DecreaseLimit && this.decreaseSize.bind(this)) || null}>{' '}-{' '}</button>)

		var FontSize = () => ( 

                    <span id="fontSizeSpan" onDoubleClick={this.setSizeDefault.bind(this)} style={{color:Color}}>{' '}{this.state.size}</span>

            )

		return(
			   
		       <div>
		           {!this.state.nonHidden && <CheckBox checked={IsChecked}/>}{' '}
		           {!this.state.nonHidden && <MinusButton />}{' '}
		           {!this.state.nonHidden && <PlusButton />}
		           {!this.state.nonHidden && <FontSize />}  
		           <span id="textSpan" style= {{fontWeight:bold, fontSize:size}} onClick={this.clickToggle.bind(this)}>{' '}{this.props.text}{' '}</span>		           
		       </div>
		);
    }
}

