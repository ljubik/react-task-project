import React, {Component, PureComponent} from 'react';

class Article extends PureComponent{
     constructor(props) {
         super(props) //батьківський конструктор
         this.state ={               //this.state this.props це спеціальні атрибути де все зберігаться
            isOpen: props.defaultOpen,
            count: 0
        }
         //this.handleCLick = handleCLick.bind(this)
    }
   // state = { 
  //     isOpen: true 
  //  }     //експерементальний запис
    // shouldComponentUpdate(nextProps, nextState){ 
    //     return this.state.isOpen !== nextState.isOpen        //це заміняється PureComponent для поверхносної зміни
    // }  
  
    componentWillMount(){
        console.log('---', 'mounting')
    }

    componentWillReceiveProps(nextProps){
        console.log('---', 'recive props')
        if (nextProps.defaultOpen !== this.props.defaultOpen) this.setState({
            isOpen: nextProps.defaultOpen
        })
    }

    componentWillUpdate(){
        console.log('---', 'will update')
    }
    render(){
        const handleClick = this.handleClick;       // додано щоб усунути помилку Line 21: 'handleCLick' is not defined no-undef
        const {article} = this.props // якщо функція тоді це аргументи а якщо клас тоді в this.props
        const body = this.state.isOpen && <section className="card-text">{article.text}</section> // якщо є поточний стан тоді покажемо секцію
        return(
            <div className="card mx-auto" style={{width:'50%'}}>
                <div className="card-header">
                <h2>{article.title} 
                Click {this.state.count}
                <button onClick={this.handleCLick} className="btn btn-primary btn-lg float-right" >
                {this.state.isOpen ? 'close' : 'open'}
                </button></h2></div> {/*додано this. handleCLick */}
                <div className="card-body">
                {body}
                <div className="row">
                <div className="col"></div>
                <h5 className="col"> Creation date: {(new Date(article.date)).toDateString()}</h5>
                </div>
                </div>
            </div>
        )
    }

    incrementCounter = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    handleCLick = () => {          //експеремнтальний запис зімість this.handleCLick = handleCLick.bind(this)
        console.log('===','clicked')
        this.setState({
            isOpen: !this.state.isOpen      //зміна стану відносно попереднього
        })
        // this.setState((prevState, props) => ({
        //     counter: prevState.counter + props.increment
        //   }));                           //правильний запис з документації
    }
}


//function Article(props){

export default Article