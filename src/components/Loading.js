import  React from 'react'
import '../style/loading.css'

export default class Loading extends React.Component {
    state={
        count: 0,
        max:3,
        current: 1,
        dots: ['.', '.', '.'],
        dotsItems: []
    };

    componentDidMount () {
        setInterval(this.intervalDotsAppearance(), 300)
    }

    intervalDotsAppearance () {
         if (this.state.count === this.state.max-1) {
             this.state.count = 0
             } else {
                 this.state.count++
             }

         this.setState({
             count: this.state.count
         });
   }

   renderDots () {
        let count =this.state.count;
        let dotsItems;
        if (!dotsItems){
            dotsItems = this.Dots();
            console.log(this.Dots());
        }
        


        return (
            <strong id='loading'>

            </strong>
        )
   }

   Dots(){
        return this.state.dots.map((dot, index) => (
            <span key={index}>
                {dot}
            </span>
        ))
   }

    render () {
        return (
            <div>
                <strong id='loading'>Загрузка {this.renderDots()}</strong>
                <div className="lds-css ng-scope">
                    <div style={{width:"100%", height:"100%"}} className="lds-cube">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>
        )
    }
};

